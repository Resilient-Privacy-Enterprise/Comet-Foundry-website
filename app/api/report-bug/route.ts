import { NextRequest, NextResponse } from 'next/server';
import { validators, ALLOWED_ORIGINS } from '@/lib/validate';
import { logSecurityEvent } from '@/lib/securityLog';

// Dedicated bug-report channel — routes to security@ with a distinct subject line
// so it never gets mixed with newsletter signups. Same rate-limit + validation
// posture as /api/subscribe.

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const MIN_SUBMIT_MS = 2000;
const MAX_BODY_BYTES = 32_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  if (hits.size > 5000) {
    const oldestKey = hits.keys().next().value;
    if (oldestKey) hits.delete(oldestKey);
  }
  return timestamps.length > MAX_PER_WINDOW;
}

const OK_RESPONSE = { ok: true, message: 'Thanks — we will take a look.' };

function corsHeaders(origin: string | null) {
  const allow = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(req.headers.get('origin')) });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    logSecurityEvent('CORS_VIOLATION', { origin, ip, route: 'report-bug' });
    return NextResponse.json({ ok: false }, { status: 403, headers: corsHeaders(origin) });
  }

  const headers = corsHeaders(origin);

  if (isRateLimited(ip)) {
    logSecurityEvent('RATE_LIMIT', { ip, route: 'report-bug' });
    return NextResponse.json(
      { ok: false, error: 'Too many requests, try again in a minute' },
      { status: 429, headers: { ...headers, 'Retry-After': '60' } }
    );
  }

  const contentLength = Number(req.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    logSecurityEvent('BODY_TOO_LARGE', { ip, contentLength, route: 'report-bug' });
    return NextResponse.json({ ok: false, error: 'Request too large' }, { status: 413, headers });
  }

  const body = await req.json().catch(() => ({}));
  const { email, company, message, url, _t } = body as {
    email?: unknown;
    company?: unknown;
    message?: unknown;
    url?: unknown;
    _t?: unknown;
  };

  if (typeof company === 'string' && company.length > 0) {
    logSecurityEvent('BOT_DETECTED', { ip, field: 'honeypot', route: 'report-bug' });
    return NextResponse.json(OK_RESPONSE, { headers });
  }

  if (typeof _t === 'number' && Number.isFinite(_t)) {
    const now = Date.now();
    const elapsed = now - _t;
    if (elapsed <= 0 || _t > now + 5000) {
      logSecurityEvent('FAST_SUBMIT', { ip, elapsed, reason: 'future_t', route: 'report-bug' });
      return NextResponse.json({ ok: false, error: 'Invalid submission' }, { status: 400, headers });
    }
    if (elapsed < MIN_SUBMIT_MS) {
      logSecurityEvent('FAST_SUBMIT', { ip, elapsed, route: 'report-bug' });
      return NextResponse.json(OK_RESPONSE, { headers });
    }
  }

  const emailCheck = validators.email(email);
  if (!emailCheck.valid) {
    logSecurityEvent('INVALID_INPUT', { ip, field: 'email', route: 'report-bug' });
    return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400, headers });
  }
  const safeEmail = emailCheck.value;

  const messageCheck = validators.message(message, 8000);
  if (!messageCheck.valid) {
    logSecurityEvent('INVALID_INPUT', { ip, field: 'message', route: 'report-bug' });
    return NextResponse.json({ ok: false, error: 'Message is required' }, { status: 400, headers });
  }
  const safeMessage = messageCheck.value;

  let safeUrl = '';
  if (typeof url === 'string' && url) {
    const urlCheck = validators.message(url, 500);
    if (urlCheck.valid) safeUrl = urlCheck.value;
  }

  const emailText = `New bug report from cometfoundry.com\n\nFrom: ${safeEmail}\nPage: ${safeUrl || '(not provided)'}\n\nReport:\n${safeMessage}`;

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error('RESEND_API_KEY missing — report-bug endpoint cannot forward mail.');
    return NextResponse.json(OK_RESPONSE, { headers });
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Comet Foundry <subscribe@cometfoundry.com>',
        to: ['security@cometfoundry.com'],
        subject: `[BUG] ${safeUrl || 'cometfoundry.com'}`,
        text: emailText,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('Resend API error (report-bug):', resendRes.status, errBody);
      // Surface upstream failure so the UI can show "try again" instead of
      // pretending we captured the bug report.
      return NextResponse.json({ ok: false, error: 'Upstream unavailable' }, { status: 502, headers });
    }

    return NextResponse.json(OK_RESPONSE, { headers });
  } catch (err) {
    console.error('report-bug handler error:', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500, headers });
  }
}
