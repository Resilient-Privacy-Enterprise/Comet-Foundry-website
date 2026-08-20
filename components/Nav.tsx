'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

const LINKS = [
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
          <Link href="/about" className={pathname === '/about' ? 'active' : undefined}>About</Link>
          <div className="nav-item-dropdown">
            <span className={`nav-dropdown-label${pathname.includes('/programs') ? ' active' : ''}`}>Programs</span>
            <div className="nav-dropdown-menu">
              <Link href="/programs" className={pathname === '/programs' ? 'active' : undefined}>Overview</Link>
              <Link href="/programs/build-lab" className={pathname.includes('/programs/build-lab') ? 'active' : undefined}>Build Lab</Link>
              <Link href="/programs/think-lab" className={pathname.includes('/programs/think-lab') ? 'active' : undefined}>Think Lab</Link>
              <Link href="/programs/network-lab" className={pathname.includes('/programs/network-lab') ? 'active' : undefined}>Network Lab</Link>
              <Link href="/programs/after-hours" className={pathname.includes('/programs/after-hours') ? 'active' : undefined}>After Hours</Link>
              <Link href="/programs/semester-arc" className={pathname.includes('/programs/semester-arc') ? 'active' : undefined}>Semester Arc</Link>
            </div>
          </div>
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
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <span className="mobile-menu-label">Programs</span>
        <Link href="/programs" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Overview</Link>
        <Link href="/programs/build-lab" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Build Lab</Link>
        <Link href="/programs/think-lab" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Think Lab</Link>
        <Link href="/programs/network-lab" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Network Lab</Link>
        <Link href="/programs/after-hours" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ After Hours</Link>
        <Link href="/programs/semester-arc" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Semester Arc</Link>
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
