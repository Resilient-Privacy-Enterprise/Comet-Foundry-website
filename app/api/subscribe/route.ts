import { NextRequest, NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort, single-instance rate limit. Serverless functions can scale to
// multiple warm instances, so this does not guarantee a hard global cap --
// but it does stop the common case (a script hammering the endpoint in a
// tight loop, which lands on the same warm instance) without needing an
// external store like Redis/Vercel KV. Revisit if abuse persists.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);

  // Bound memory: drop the oldest-tracked IP once the map gets large.
  if (hits.size > 5000) {
    const oldestKey = hits.keys().next().value;
    if (oldestKey) hits.delete(oldestKey);
  }

  return timestamps.length > MAX_PER_WINDOW;
}

// Generous cap for an email + a few thousand characters of message text --
// rejects grossly oversized bodies before we buffer/parse them.
const MAX_BODY_BYTES = 16_000;

export async function POST(req: NextRequest) {
  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests, try again in a minute' },
      { status: 429, headers: { 'Retry-After': '60' } }
    );
  }

  const contentLength = Number(req.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'Request too large' }, { status: 413 });
  }

  const body = await req.json().catch(() => ({}));
  const { email, company, subject, message } = body as {
    email?: string;
    company?: string;
    subject?: string;
    message?: string;
  };

  // Honeypot: a real visitor never fills this hidden field, bots often do.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400 });
  }

  // Free-text field, so bound its length -- this is an email body, not a database column.
  const safeMessage = typeof message === 'string' ? message.slice(0, 4000) : undefined;
  const emailSubject = typeof subject === 'string' && subject.trim() ? subject.trim().slice(0, 200) : 'New "Join The Foundry" signup';
  const emailText = safeMessage
    ? `New message from the ${emailSubject} form on cometfoundry.com:\n\nEmail: ${email}\n\nMessage:\n${safeMessage}`
    : `New signup from the Join The Foundry form on cometfoundry.com:\n\nEmail: ${email}`;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Comet Foundry <subscribe@cometfoundry.com>',
        to: ['subscribe@cometfoundry.com'],
        reply_to: email,
        subject: emailSubject,
        text: emailText,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('Resend API error:', resendRes.status, errBody);
      return NextResponse.json({ ok: false, error: 'Failed to send' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Subscribe handler error:', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
