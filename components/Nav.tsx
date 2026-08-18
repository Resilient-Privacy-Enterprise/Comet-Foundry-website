'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

const LINKS = [
  { href: '/about', label: 'About', nav: 'about' },
  { href: '/programs', label: 'Programs', nav: 'programs' },
  { href: '/projects', label: 'Projects', nav: 'projects' },
  { href: '/resources', label: 'Resources', nav: 'resources' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(nav: string) {
    return pathname === `/${nav}` || (nav === 'home' && pathname === '/');
  }

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="brand-mark" href="/">
          <Image src="/assets/comet-foundry-logo.png" alt="Comet Foundry" className="nav-logo" width={400} height={357} />
          COMET FOUNDRY
        </Link>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.nav} href={l.href} className={isActive(l.nav) ? 'active' : undefined}>
              {l.label}
            </Link>
          ))}
          <div className="nav-item-dropdown">
            <span className={`nav-dropdown-label${isActive('team') || isActive('founder') ? ' active' : ''}`}>Team</span>
            <div className="nav-dropdown-menu">
              <Link href="/founder" className={isActive('founder') ? 'active' : undefined}>Founder</Link>
              <Link href="/team" className={isActive('team') ? 'active' : undefined}>UTD Crew</Link>
            </div>
          </div>
          <Link href="/partners" className={isActive('partners') ? 'active' : undefined}>Partners</Link>
          <Link href="/events" className={isActive('events') ? 'active' : undefined}>Events</Link>
          <Link href="/blog" className={isActive('blog') ? 'active' : undefined}>Blog</Link>
          <Link href="/donate" className={isActive('donate') ? 'active' : undefined}>Donate</Link>
        </nav>
        <a className="nav-cta" href={APPLY_URL} target="_blank" rel="noopener">APPLY →</a>
        <button
          id="nav-toggle"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />}
      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <Link key={l.nav} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <span className="mobile-menu-label">Team</span>
        <Link href="/founder" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Founder</Link>
        <Link href="/team" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ UTD Crew</Link>
        <Link href="/partners" onClick={() => setOpen(false)}>Partners</Link>
        <Link href="/events" onClick={() => setOpen(false)}>Events</Link>
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
        <Link href="/donate" onClick={() => setOpen(false)}>Donate</Link>
        <a href={APPLY_URL} target="_blank" rel="noopener" className="cta-row" onClick={() => setOpen(false)}>Apply →</a>
      </div>
    </header>
  );
}
