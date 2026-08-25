'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { CHAPTERS } from '@/lib/chapters';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';
const OFFICER_APP_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUQVE2MU1DUE80TkpGTEpURDhUUFBXQUo0MS4u&route=shorturl';
const EXPRESS_INTEREST_URL = 'https://forms.cloud.microsoft/r/FPR6PcbQaN';
const POST_ROLE_URL = 'https://forms.cloud.microsoft/r/PkN2tH7jmt';
const KICKOFF_RSVP_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUOVlFMEpKR0dYMDhLUzAyMjQ2QklROFVaVC4u&route=shorturl';

const APPLY_LINKS: Array<{ label: string; sub: string; href: string; external: boolean }> = [
  { label: 'Apply as a Builder', sub: 'Join the next cohort at your chapter.', href: APPLY_URL, external: true },
  { label: 'Apply for a UTD Officer Seat', sub: 'Lead the chapter at UT Dallas.', href: OFFICER_APP_URL, external: true },
  { label: 'Bring CF to Your Campus', sub: 'Start a chapter at your university.', href: EXPRESS_INTEREST_URL, external: true },
  { label: 'RSVP: Kickoff Night', sub: 'UT Dallas.', href: KICKOFF_RSVP_URL, external: true },
  { label: 'Post a Startup Role', sub: 'Hiring builders from CF.', href: POST_ROLE_URL, external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Portal target is only available after hydration; gate createPortal on it.
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) {
      document.querySelectorAll('.mobile-menu details[open]').forEach((el) => el.removeAttribute('open'));
    }
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPanel = useCallback((panel: string) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setActivePanel(panel);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActivePanel(null), 80);
  }, []);

  return (
    <header className="nav">
      <div className="wrap">
        <div className="brand-section">
          <Link className="brand-mark" href="/">
            <Image src="/assets/comet-foundry-logo.png" alt="Comet Foundry" className="nav-logo" width={400} height={357} />
            <div className="brand-text">
              <div className="brand-name">COMET FOUNDRY</div>
              <div className="brand-stamp mono">EST. 2026 · GLOBAL</div>
            </div>
          </Link>
        </div>

        <nav className="nav-links">
          {/* Mission */}
          <div className="nav-item-dropdown" onMouseEnter={() => openPanel('mission')} onMouseLeave={scheduleClose}>
            <span className="nav-dropdown-label">Mission</span>
            {activePanel === 'mission' && (
              <div className="nav-mega-panel" onMouseEnter={() => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } }} onMouseLeave={scheduleClose}>
                <div className="mega-tagline">We exist to end the 9-5 as the only option.</div>
                <div className="mega-grid">
                  <div className="mega-left">
                    <Link href="/mission/why" className="mega-link">Why We Exist</Link>
                    <Link href="/mission/doctrine" className="mega-link">The Doctrine</Link>
                    <Link href="/backers" className="mega-link">The Backers</Link>
                    <Link href="/donate" className="mega-link">Fuel It</Link>
                  </div>
                  <div className="mega-right">
                    <Link href="/leadership" className="featured-card founder-card" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                      <div className="founder-card-top">
                        <span className="founder-card-eyebrow mono">FOUNDATION / 001</span>
                        <span className="founder-card-badge mono">FOUNDER</span>
                      </div>
                      <h4 className="founder-card-name">Vishva Patel</h4>
                      <p className="founder-card-role mono">Founder · Comet Foundry</p>
                      <p className="founder-card-quote">&ldquo;Someone had to try.&rdquo;</p>
                      <span className="founder-card-cta mono">Meet the founder →</span>
                    </Link>
                    <Link href="/leadership/founder" className="mega-plain-link">
                      The Founder&apos;s Letter →
                      <span className="sub-label">Field Note #001 · read the origin story.</span>
                    </Link>
                    <Link href="/for-universities" className="mega-plain-link">
                      For Universities ↗
                      <span className="sub-label">Bring CF to your institution.</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chapters */}
          <div className="nav-item-dropdown" onMouseEnter={() => openPanel('chapters')} onMouseLeave={scheduleClose}>
            <span className="nav-dropdown-label">Chapters</span>
            {activePanel === 'chapters' && (
              <div className="nav-mega-panel" onMouseEnter={() => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } }} onMouseLeave={scheduleClose}>
                <div className="mega-tagline">Find your campus. Join the movement.</div>
                <div className="mega-grid">
                  <div className="mega-left">
                    <div className="ch-list">
                      <Link href="/chapters/utd" className="ch-row">
                        <span className="ch-num mono">CH 01</span>
                        <span className="ch-row-name">UT Dallas</span>
                        <span className="ch-row-loc mono">Richardson, TX</span>
                        <span className="ch-badge active">● ACTIVE</span>
                        <span className="ch-row-arrow">→</span>
                      </Link>
                      <Link href="/chapters/ut-austin" className="ch-row">
                        <span className="ch-num mono">CH 02</span>
                        <span className="ch-row-name">UT Austin</span>
                        <span className="ch-row-loc mono">Austin, TX</span>
                        <span className="ch-badge incoming">◌ INCOMING</span>
                        <span className="ch-row-arrow">→</span>
                      </Link>
                      <Link href="/chapters/tamu" className="ch-row">
                        <span className="ch-num mono">CH 03</span>
                        <span className="ch-row-name">Texas A&M</span>
                        <span className="ch-row-loc mono">College Station, TX</span>
                        <span className="ch-badge incoming">◌ INCOMING</span>
                        <span className="ch-row-arrow">→</span>
                      </Link>
                      <Link href="/chapters/rice" className="ch-row">
                        <span className="ch-num mono">CH 04</span>
                        <span className="ch-row-name">Rice</span>
                        <span className="ch-row-loc mono">Houston, TX</span>
                        <span className="ch-badge incoming">◌ INCOMING</span>
                        <span className="ch-row-arrow">→</span>
                      </Link>
                      <Link href="/chapters/gatech" className="ch-row">
                        <span className="ch-num mono">CH 05</span>
                        <span className="ch-row-name">Georgia Tech</span>
                        <span className="ch-row-loc mono">Atlanta, GA</span>
                        <span className="ch-badge incoming">◌ INCOMING</span>
                        <span className="ch-row-arrow">→</span>
                      </Link>
                      <Link href="/chapters/berkeley" className="ch-row">
                        <span className="ch-num mono">CH 06</span>
                        <span className="ch-row-name">Berkeley</span>
                        <span className="ch-row-loc mono">Berkeley, CA</span>
                        <span className="ch-badge incoming">◌ INCOMING</span>
                        <span className="ch-row-arrow">→</span>
                      </Link>
                      <Link href="/chapters/mit" className="ch-row">
                        <span className="ch-num mono">CH 07</span>
                        <span className="ch-row-name">MIT</span>
                        <span className="ch-row-loc mono">Cambridge, MA</span>
                        <span className="ch-badge incoming">◌ INCOMING</span>
                        <span className="ch-row-arrow">→</span>
                      </Link>
                    </div>
                    <Link href="/chapters" className="mega-plain-link" style={{marginTop:'8px'}}>See The Full Map →</Link>
                  </div>
                  <div className="mega-right">
                    <Link href="/chapters/start" className="mega-link">
                      Bring It To Your Campus
                      <span className="sub-label">Start a chapter at your university.</span>
                    </Link>
                    <Link href="/chapters/standard" className="mega-link">
                      Chapter Standard
                      <span className="sub-label">What every chapter must run to carry the name.</span>
                    </Link>
                    <Link href="/membership-policy" className="mega-link">
                      Membership & Fees
                      <span className="sub-label">Tiers, admissions, and what your fee covers.</span>
                    </Link>
                    <Link href="/for-universities" className="mega-link">
                      For Universities
                      <span className="sub-label">Full partner guide for faculty and admin.</span>
                    </Link>
                    <div className="ch-strip mono">Each chapter runs the same Four Labs. One standard. Every campus.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* The Labs */}
          <div className="nav-item-dropdown" onMouseEnter={() => openPanel('labs')} onMouseLeave={scheduleClose}>
            <span className="nav-dropdown-label">The Labs</span>
            {activePanel === 'labs' && (
              <div className="nav-mega-panel" onMouseEnter={() => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } }} onMouseLeave={scheduleClose}>
                <div className="mega-tagline">Four labs. Every chapter. One standard.</div>
                <div className="mega-grid">
                  <div className="mega-left">
                    <div className="labs-grid">
                      <Link href="/programs/build-lab" className="lab-card">
                        <span className="lab-code mono">LAB / 01</span>
                        <h4>Build Lab</h4>
                        <p className="lab-desc">Make things.</p>
                      </Link>
                      <Link href="/programs/think-lab" className="lab-card">
                        <span className="lab-code mono">LAB / 02</span>
                        <h4>Think Lab</h4>
                        <p className="lab-desc">Have an opinion.</p>
                      </Link>
                      <Link href="/programs/network-lab" className="lab-card">
                        <span className="lab-code mono">LAB / 03</span>
                        <h4>Network Lab</h4>
                        <p className="lab-desc">Meet people.</p>
                      </Link>
                      <Link href="/programs/after-hours" className="lab-card">
                        <span className="lab-code mono">LAB / 04</span>
                        <h4>After Hours</h4>
                        <p className="lab-desc">Touch grass. 😂</p>
                      </Link>
                    </div>
                  </div>
                  <div className="mega-right">
                    <Link href="/programs/semester-arc" className="mega-link">
                      Semester Arc
                      <span className="sub-label">Kickoff → Experiments → Demo Day</span>
                    </Link>
                    <Link href="/stash" className="mega-link">
                      The Stash
                      <span className="sub-label">Free tools and guides for builders.</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Launchpad */}
          <div className="nav-item-dropdown" onMouseEnter={() => openPanel('launchpad')} onMouseLeave={scheduleClose}>
            <span className="nav-dropdown-label">Launchpad</span>
            {activePanel === 'launchpad' && (
              <div className="nav-mega-panel" onMouseEnter={() => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } }} onMouseLeave={scheduleClose}>
                <div className="mega-tagline">This is what gets built here.</div>
                <div className="mega-grid">
                  <div className="mega-left">
                    <Link href="/builds" className="mega-link">
                      Builds In Progress
                      <span className="sub-label">WIP wall. Filter by chapter, domain, stage.</span>
                    </Link>
                    <Link href="/builders" className="mega-link">
                      Builder Roster
                      <span className="sub-label">Every builder, every chapter.</span>
                    </Link>
                    <Link href="/outcomes" className="mega-link">
                      Outcomes
                      <span className="sub-label">Internships, jobs, co-founder matches at CF-born startups.</span>
                    </Link>
                    <Link href="/careers" className="mega-link">
                      Careers
                      <span className="sub-label">Jobs and internships at startups built here and beyond.</span>
                    </Link>
                  </div>
                  <div className="mega-right">
                    <div className="live-preview-card">
                      <div className="card-label mono">BUILDING NOW · UTD</div>
                      <p className="card-body">Nothing shipped yet. That&apos;s the point. :)</p>
                    </div>
                    <Link href="/demo-day" className="mega-link">
                      Demo Day
                      <span className="sub-label">The final experiment. Where it all ships.</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chronicle */}
          <div className="nav-item-dropdown" onMouseEnter={() => openPanel('chronicle')} onMouseLeave={scheduleClose}>
            <span className="nav-dropdown-label">Chronicle</span>
            {activePanel === 'chronicle' && (
              <div className="nav-mega-panel" onMouseEnter={() => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } }} onMouseLeave={scheduleClose}>
                <div className="mega-tagline">What&apos;s happening. What we&apos;re thinking. What&apos;s next.</div>
                <div className="mega-grid">
                  <div className="mega-left">
                    <Link href="/events" className="mega-link">
                      Events
                      <span className="sub-label">Global calendar. Filter by chapter.</span>
                    </Link>
                    <Link href="/field-notes" className="mega-link">
                      Field Notes
                      <span className="sub-label">Long reads, founder stories, short takes.</span>
                    </Link>
                    <Link href="/report-bug" className="mega-link">
                      Report a Bug
                      <span className="sub-label">Found something broken? Tell us.</span>
                    </Link>
                  </div>
                  <div className="mega-right">
                    <div className="next-event-card">
                      <div className="card-label mono">NEXT · SEP 01 · UTD</div>
                      <h4>Foundry Kickoff Night</h4>
                      <div className="card-sub">7:00 PM · Lab 01</div>
                      <Link href="/events" className="card-cta">RSVP →</Link>
                    </div>
                    <Link href="/press" className="mega-link">
                      Press & Brand
                      <span className="sub-label">Logos, media kit, one-pagers.</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="nav-actions">
          <a href="/donate" className="nav-btn secondary">Fuel It ↑</a>
          <div className="nav-apply-wrap" onMouseEnter={() => openPanel('apply')} onMouseLeave={scheduleClose}>
            <a className="nav-btn primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer" aria-haspopup="true" aria-expanded={activePanel === 'apply'}>APPLY ▾</a>
            {activePanel === 'apply' && (
              <div className="nav-apply-panel" onMouseEnter={() => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } }} onMouseLeave={scheduleClose}>
                <div className="nav-apply-header mono">CHOOSE YOUR PATH</div>
                {APPLY_LINKS.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="nav-apply-item">
                    <span className="nav-apply-label">{l.label}</span>
                    <span className="nav-apply-sub">{l.sub}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

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

      {mounted && createPortal(
        <>
          {open && <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />}
          <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
        <details className="mobile-group">
          <summary>Mission</summary>
          <Link href="/mission/why" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Why We Exist</Link>
          <Link href="/mission/doctrine" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ The Doctrine</Link>
          <Link href="/leadership" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Foundation Leadership</Link>
          <Link href="/leadership/founder" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ The Founder&apos;s Letter</Link>
          <Link href="/backers" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ The Backers</Link>
          <Link href="/donate" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Fuel It</Link>
          <Link href="/for-universities" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ For Universities</Link>
        </details>

        <details className="mobile-group">
          <summary>Chapters</summary>
          <Link href="/chapters" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ The Map</Link>
          <Link href="/chapters/standard" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Chapter Standard</Link>
          <Link href="/membership-policy" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Membership & Fees</Link>
          <Link href="/chapters/start" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Start a Chapter</Link>
          {CHAPTERS.map((ch) => (
            <Link key={ch.slug} href={`/chapters/${ch.slug}`} className="mobile-sub-link" onClick={() => setOpen(false)}>
              ↳ CH {ch.num} · {ch.name} {ch.status === 'active' ? '●' : '◌'}
            </Link>
          ))}
        </details>

        <details className="mobile-group">
          <summary>The Labs</summary>
          <Link href="/programs/build-lab" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Build Lab</Link>
          <Link href="/programs/think-lab" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Think Lab</Link>
          <Link href="/programs/network-lab" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Network Lab</Link>
          <Link href="/programs/after-hours" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ After Hours</Link>
          <Link href="/programs/semester-arc" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Semester Arc</Link>
        </details>

        <details className="mobile-group">
          <summary>Launchpad</summary>
          <Link href="/builds" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Builds In Progress</Link>
          <Link href="/builders" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Builder Roster</Link>
          <Link href="/outcomes" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Outcomes</Link>
          <Link href="/careers" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Careers</Link>
        </details>

        <details className="mobile-group">
          <summary>Chronicle</summary>
          <Link href="/events" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Events</Link>
          <Link href="/field-notes" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Field Notes</Link>
          <Link href="/press" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ Press & Brand</Link>
        </details>

        <details className="mobile-group">
          <summary>Apply</summary>
          {APPLY_LINKS.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="mobile-sub-link" onClick={() => setOpen(false)}>↳ {l.label}</a>
          ))}
        </details>

        <div className="mobile-actions">
          <a href="/donate" className="nav-btn secondary-mobile" onClick={() => setOpen(false)}>Fuel It ↑</a>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="nav-btn primary-mobile" onClick={() => setOpen(false)}>APPLY →</a>
        </div>
      </div>
        </>,
        document.body
      )}
    </header>
  );
}
