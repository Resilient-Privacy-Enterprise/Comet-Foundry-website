'use client';

import { useEffect, useState } from 'react';

// Ported from script.js's door logic 1:1. main{visibility:hidden} still takes
// up full layout height, so the page is scrollable behind the fixed door
// overlay unless we lock it -- see the effect below.
export default function Door() {
  const [status, setStatus] = useState<'closed' | 'opening' | 'open'>('closed');
  // Whether we skipped straight to 'open' from sessionStorage (no transition)
  // vs. animated there via a real click -- controls the CSS transition.
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    // sessionStorage only exists client-side, so this can only run in an
    // effect (after hydration) -- reflecting it into state here is the
    // standard React pattern for syncing from an external/browser API.
    const alreadyOpen = sessionStorage.getItem('labDoorOpen') === '1';
    const main = document.getElementById('main');

    if (alreadyOpen) {
      setInstant(true);
      setStatus('open');
      main?.classList.add('ready');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }
  }, []);

  function handleOpen() {
    // Set this immediately, not after the animation: if the user navigates
    // away before it finishes, the flag must already be saved.
    sessionStorage.setItem('labDoorOpen', '1');
    setStatus('opening');
    setTimeout(() => {
      setStatus('open');
      const main = document.getElementById('main');
      main?.classList.add('ready');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 350);
  }

  return (
    <div
      id="door"
      role="dialog"
      aria-modal="true"
      aria-labelledby="door-title"
      className={status === 'open' ? 'open' : undefined}
      style={instant ? { transition: 'none' } : undefined}
    >
      <div className={`door-status mono${status !== 'closed' ? ' open' : ''}`} id="door-status">
        {status !== 'closed' ? (
          <><span className="dot" />LAB STATUS: OPEN ✓</>
        ) : (
          <><span className="dot" />LAB STATUS: CLOSED</>
        )}
      </div>
      <div id="door-title">COMET<br />FOUNDRY</div>
      <button id="open-btn" onClick={handleOpen}>
        {status === 'opening' ? 'OPENING...' : 'OPEN LAB →'}
      </button>
      <div id="door-meta" className="mono">EST. 2026 / UT DALLAS / LAB 01</div>
    </div>
  );
}
