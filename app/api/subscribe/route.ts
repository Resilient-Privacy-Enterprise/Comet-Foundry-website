import { NextRequest, NextResponse } from 'next/server';
import { validators, ALLOWED_ORIGINS } from '@/lib/validate';
import { logSecurityEvent } from '@/lib/securityLog';

// In-memory rate limiter. Best-effort across a single warm serverless instance.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const MIN_SUBMIT_MS = 2000;
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

const MAX_BODY_BYTES = 16_000;

// Same generic 200 response for both new signups and problematic ones we don't
// want to disclose — prevents email/user enumeration via response differences.
const OK_RESPONSE = { ok: true, message: 'Got it. We will be in touch.' };

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

  // CORS: reject cross-origin browser requests we don't recognise.
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    logSecurityEvent('CORS_VIOLATION', { origin, ip });
    return NextResponse.json({ ok: false }, { status: 403, headers: corsHeaders(origin) });
  }

  const headers = corsHeaders(origin);

  if (isRateLimited(ip)) {
    logSecurityEvent('RATE_LIMIT', { ip });
    return NextResponse.json(
      { ok: false, error: 'Too many requests, try again in a minute' },
      { status: 429, headers: { ...headers, 'Retry-After': '60' } }
    );
  }

  const contentLength = Number(req.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    logSecurityEvent('BODY_TOO_LARGE', { ip, contentLength });
    return NextResponse.json({ ok: false, error: 'Request too large' }, { status: 413, headers });
  }

  const body = await req.json().catch(() => ({}));
  const { email, name, company, subject, message, _t } = body as {
    email?: unknown;
    name?: unknown;
    company?: unknown;
    subject?: unknown;
    message?: unknown;
    _t?: unknown;
  };

  // Honeypot — real visitors never fill this hidden field.
  if (typeof company === 'string' && company.length > 0) {
    logSecurityEvent('BOT_DETECTED', { ip, field: 'honeypot' });
    return NextResponse.json(OK_RESPONSE, { headers });
  }

  // Timing check — anything under 2s is almost certainly a bot.
  // Reject non-numeric, negative-elapsed (future _t), or excessively-future _t
  // so an attacker can't bypass the gate by pretending to have rendered later.
  if (typeof _t === 'number' && Number.isFinite(_t)) {
    const now = Date.now();
    const elapsed = now - _t;
    if (elapsed <= 0 || _t > now + 5000) {
      logSecurityEvent('FAST_SUBMIT', { ip, elapsed, reason: 'future_t' });
      return NextResponse.json({ ok: false, error: 'Invalid submission' }, { status: 400, headers });
    }
    if (elapsed < MIN_SUBMIT_MS) {
      logSecurityEvent('FAST_SUBMIT', { ip, elapsed });
      return NextResponse.json(OK_RESPONSE, { headers });
    }
  }

  // Validate + sanitize inputs.
  const emailCheck = validators.email(email);
  if (!emailCheck.valid) {
    logSecurityEvent('INVALID_INPUT', { ip, field: 'email' });
    return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400, headers });
  }
  const safeEmail = emailCheck.value;

  let safeName = '';
  if (name !== undefined && name !== null && name !== '') {
    const nameCheck = validators.name(name);
    if (!nameCheck.valid) {
      logSecurityEvent('INVALID_INPUT', { ip, field: 'name' });
      // Fail closed but with generic response so we don't leak enumeration.
      return NextResponse.json(OK_RESPONSE, { headers });
    }
    // Flag the attempt if raw input contained script markers.
    if (typeof name === 'string' && /<|>|javascript:|on\w+=/i.test(name)) {
      logSecurityEvent('XSS_ATTEMPT', { ip, field: 'name' });
    }
    safeName = nameCheck.value;
  }

  let safeSubject = 'New "Join The Foundry" signup';
  if (subject !== undefined && subject !== '') {
    const subjectCheck = validators.subject(subject);
    if (subjectCheck.valid && subjectCheck.value) safeSubject = subjectCheck.value;
  }

  let safeMessage = '';
  if (message !== undefined && message !== '') {
    const messageCheck = validators.message(message, 4000);
    if (messageCheck.valid) safeMessage = messageCheck.value;
  }

  const emailText = safeMessage
    ? `New message from the ${safeSubject} form on cometfoundry.com:\n\nName: ${safeName || '(not provided)'}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`
    : `New signup from the Join The Foundry form on cometfoundry.com:\n\nName: ${safeName || '(not provided)'}\nEmail: ${safeEmail}`;

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error('RESEND_API_KEY missing — subscribe endpoint cannot forward mail.');
    // Fail closed but with generic response so we don't leak configuration state.
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
        to: ['subscribe@cometfoundry.com'],
        // reply_to intentionally omitted — surfacing the submitter's address
        // as Reply-To lets a spoofed signup weaponize the admin's Reply button.
        // The email address is included in the body instead for auditability.
        subject: safeSubject,
        text: emailText,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('Resend API error:', resendRes.status, errBody);
      // Surface upstream failure so the UI can show "try again" — silently
      // returning 200 hides both bugs and abuse.
      return NextResponse.json({ ok: false, error: 'Upstream unavailable' }, { status: 502, headers });
    }

    return NextResponse.json(OK_RESPONSE, { headers });
  } catch (err) {
    console.error('Subscribe handler error:', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500, headers });
  }
}
