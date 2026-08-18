'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Show banner on every visit for all users
    // Users can dismiss it per page visit, but it returns on next visit/page load
    const dismissedThisSession = sessionStorage.getItem('cookieConsentDismissed') === '1';

    if (!dismissedThisSession) {
      // Show banner with a small delay to ensure smooth rendering
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    // Dismiss banner for this session only - it will reappear on next visit or page reload
    sessionStorage.setItem('cookieConsentDismissed', '1');
    setShowBanner(false);
  }

  // Don't render until client-side hydration is complete
  if (!isClient || !showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <p style={{ margin: '0 0 0.75rem 0', fontSize: '14px', color: 'var(--ink)' }}>
              We use cookies to enhance your experience. By continuing to browse, you accept our use of cookies.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '13px' }}>
              <Link href="/privacy-policy" style={{ color: 'var(--flask)', textDecoration: 'none', borderBottom: '1px solid var(--flask)' }}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" style={{ color: 'var(--flask)', textDecoration: 'none', borderBottom: '1px solid var(--flask)' }}>
                Terms of Use
              </Link>
            </div>
          </div>
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
              flexShrink: 0,
            }}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
