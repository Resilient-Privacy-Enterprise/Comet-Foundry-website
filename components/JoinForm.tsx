'use client';

import { useRef, useState } from 'react';

export default function JoinForm() {
  const [buttonText, setButtonText] = useState('SUBSCRIBE →');
  const [disabled, setDisabled] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  // Timestamp captured at first render so the server can reject bot-fast submissions.
  // eslint-disable-next-line react-hooks/purity
  const renderTimeRef = useRef<number>(Date.now());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypotRef.current?.value) return;

    setDisabled(true);
    setButtonText('JOINING...');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          company: honeypotRef.current?.value ?? '',
          _t: renderTimeRef.current,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setButtonText('ADDED ✓');
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
      } else {
        setButtonText('TRY AGAIN →');
        setDisabled(false);
      }
    } catch {
      setButtonText('TRY AGAIN →');
      setDisabled(false);
    }
  }

  return (
    <form className="join-form" id="join-form" onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" name="name" placeholder="Your full name" required aria-label="Full name" />
      <input ref={emailRef} type="email" name="email" placeholder="you@email.com" required aria-label="Email address" />
      <input ref={honeypotRef} type="text" name="company" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={disabled}>{buttonText}</button>
    </form>
  );
}
