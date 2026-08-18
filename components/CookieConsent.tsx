'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent') === '1';
    const labDoorOpen = sessionStorage.getItem('labDoorOpen') === '1';

    if (!hasConsented && labDoorOpen) {
      setShowBanner(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem('cookieConsent', '1');
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--paper)',
        borderTop: '1px solid var(--ink-soft)',
        padding: '1.5rem',
        zIndex: 999,
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink)', flex: 1, minWidth: '250px' }}>
            We use cookies to enhance your experience. By continuing to browse, you accept our use of cookies.
          </p>
          <button
            onClick={handleAccept}
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: 'var(--ink)',
              color: 'var(--paper)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
