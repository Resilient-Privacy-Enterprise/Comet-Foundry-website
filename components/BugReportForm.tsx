'use client';

import { useEffect, useRef, useState } from 'react';

export default function BugReportForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  // Client-side render time so SSR/client clock drift can't false-positive
  // the anti-bot timing check.
  const renderTimeRef = useRef<number>(0);
  useEffect(() => { renderTimeRef.current = Date.now(); }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypotRef.current?.value) return;

    setStatus('sending');

    try {
      const res = await fetch('/api/report-bug', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailRef.current?.value,
          message: messageRef.current?.value,
          url: typeof window !== 'undefined' ? window.location.href : '',
          company: honeypotRef.current?.value ?? '',
          _t: renderTimeRef.current,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus('sent');
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="stacked-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bug-email">Your email</label>
        <input ref={emailRef} type="email" id="bug-email" name="email" placeholder="you@example.com" required />
      </div>
      <div>
        <label htmlFor="bug-message">What&apos;s broken?</label>
        <textarea ref={messageRef} id="bug-message" name="message" placeholder="What happened, and what page were you on?" required />
      </div>
      <input ref={honeypotRef} type="text" name="company" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={status === 'sending' || status === 'sent'}>
        {status === 'sending' ? 'SENDING...' : status === 'sent' ? 'SENT ✓' : 'REPORT BUG →'}
      </button>
      {status === 'sent' && <p className="form-status">Thanks — got it. We&apos;ll take a look.</p>}
      {status === 'error' && <p className="form-status error">Something went wrong. Try again, or email security@cometfoundry.com directly.</p>}
    </form>
  );
}
