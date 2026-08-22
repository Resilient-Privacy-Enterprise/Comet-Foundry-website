import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

const EXPRESS_INTEREST_URL =
  'https://forms.cloud.microsoft/r/FPR6PcbQaN';

export const metadata: Metadata = pageMetadata({
  path: '/leadership',
  ogTitle: 'Foundation Leadership — Comet Foundry',
  description: 'One person started this. That\'s the point. Meet the foundation behind Comet Foundry — the founder, the structure, and the roles being built.',
  keywords: ['leadership', 'founder', 'vishva patel', 'comet foundry team', 'nonprofit foundation'],
});

const credentials = [
  '2x FOUNDER',
  '10+ YEARS CYBERSECURITY',
  'FORMER GSA PRESIDENT · UTD',
  'SPRING 2025 ALUMNUS',
  'EST. COMET FOUNDRY · 2026',
];

const openRoles = [
  {
    title: 'FOUNDATION ADVISOR',
    desc: 'Experienced operators, investors, or institution builders who want to shape the long-term direction of the movement.',
  },
  {
    title: 'FOUNDATION ADVISOR',
    desc: 'We are looking for advisors with deep experience in nonprofit governance, higher education, or global organization building.',
  },
  {
    title: 'FOUNDATION ADVISOR',
    desc: 'Domain expertise in student entrepreneurship, community building, or chapter-based organizations is especially valued.',
  },
];

const govDocs = [
  { name: 'Builder Acceptance Rulebook', href: '/builder-acceptance-rulebook' },
  { name: 'Non-Discrimination Statement', href: '/non-discrimination-statement' },
  { name: 'Code of Conduct', href: '/code-of-conduct' },
  { name: 'IP & Trademark Policy', href: '/ip-trademark-policy' },
  { name: 'Accessibility Statement', href: '/accessibility-statement' },
];

export default function Page() {
  return (
    <>
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/mission/why">Mission</Link> / Foundation Leadership</div>
          <span className="mission-eyebrow mono">MISSION / 003</span>
          <h1 className="mission-h1">
            One person started this.<br />
            <span className="orange">That&apos;s the point.</span>
          </h1>
          <p className="doctrine-sub">Comet Foundry was not built by a committee. It was built by a single founder who believed that student entrepreneurship deserved better infrastructure — and decided to build it himself. This is the foundation. Right now, it is one person deep. That is about to change.</p>
          <span className="hand doctrine-hand-hero">every empire starts with one person who refused to wait.</span>
        </div>
      </section>

      {/* THE FOUNDER */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">FOUNDATION / FOUNDER</span>
          <div className="founder-section founder-section--flipped">
            <div className="founder-details">
              <div className="founder-creds">
                {credentials.map((c, i) => (
                  <span key={i} className="founder-cred mono">{c}</span>
                ))}
              </div>
              <blockquote className="founder-quote hand">
                &ldquo;Somewhere in this hacker house, the next billionaire is debugging their first prototype.<br />
                <span className="founder-quote-hook">I built the house.&rdquo;</span>
              </blockquote>
              <div className="mission-prose">
                <p>Vishva dropped everything to solve one problem: universities produce graduates, not founders. The entire system optimizes for employment. Nobody was building the infrastructure for students who want to create companies — so he built it himself.</p>
                <p>Comet Foundry is his bet that the next wave of billion-dollar companies won&apos;t come from Silicon Valley garages — they&apos;ll come from campus labs where 20-year-olds ship real products, find co-founders, and learn by doing what no classroom can teach. He&apos;s scaling that model to every university willing to run it.</p>
              </div>
              <div className="founder-icon-links">
                <Link href="/leadership/founder" className="founder-icon-link" title="Founder&apos;s Letter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  <span className="mono">Read the Founder&apos;s Letter →</span>
                </Link>
                <a href="https://www.linkedin.com/in/vishvapatel/" target="_blank" rel="noopener noreferrer" className="founder-icon-link" title="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
                  <span className="mono">LinkedIn</span>
                </a>
                <a href="mailto:vishva.patel@cometfoundry.com" className="founder-icon-link" title="Email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
                  <span className="mono">Email</span>
                </a>
              </div>
            </div>
            <div className="founder-photo-col">
              <div className="founder-photo-frame">
                <Image src="/assets/team/vishva-founder.png" alt="Vishva Patel" width={760} height={760} className="founder-photo-img" />
              </div>
              <div className="founder-name-block">
                <h2 className="founder-name">VISHVA PATEL</h2>
                <p className="founder-title mono">Founder · Comet Foundry</p>
                <p className="founder-title mono">UT Dallas Alumnus · Spring 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLO FOUNDER NOTE */}
      <section className="mission-block solo-note-section">
        <div className="wrap">
          <span className="block-eyebrow mono">A NOTE ON STRUCTURE</span>
          <div className="solo-note">
            <p>Most institutions are built by committees. Most movements are started by individuals.</p>
            <p>Comet Foundry is at the beginning of that arc. The foundation today is a single founder, a global vision, and a network of campus chapters that are already in motion.</p>
            <p>The leadership structure will grow as the movement grows. Every person who joins this team will be listed here. Right now, there is one name. That is not a weakness. That is an origin story.</p>
          </div>
          <span className="hand solo-note-hand">chapter one. literally.</span>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">FOUNDATION / OPEN POSITIONS</span>
          <p className="doctrine-intro">As Comet Foundry scales, the foundation team will grow. These are the roles we are actively thinking about. If you are a professional who believes in this mission, we want to hear from you.</p>
          <span className="hand" style={{ display: 'block', fontSize: '22px', color: 'var(--flask)', marginBottom: '28px' }}>your name could be here next :)</span>
          <div className="open-roles-grid">
            {openRoles.map((role, i) => (
              <div key={i} className="open-role-card">
                <span className="open-role-badge mono">OPEN · {role.title}</span>
                <p className="open-role-desc">{role.desc}</p>
                <a href={EXPRESS_INTEREST_URL} target="_blank" rel="noopener noreferrer" className="open-role-cta mono">Express Interest →</a>
              </div>
            ))}
          </div>
          <p className="open-roles-note mono">Campus chapter officers and advisors are listed on their respective chapter pages, not here. This page reflects the global foundation only.</p>
        </div>
      </section>

      {/* LEGAL STRUCTURE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">HOW WE ARE STRUCTURED</span>
          <div className="legal-grid">
            <div className="legal-col">
              <h3 className="legal-label">NONPROFIT FOUNDATION</h3>
              <p>Comet Foundry operates as an independent nonprofit organization — 501(c)(3) status pending IRS determination. The foundation owns the brand, the Chapter Standard, and the long-term infrastructure of the movement. It is not tied to any single campus or chapter.</p>
            </div>
            <div className="legal-col">
              <h3 className="legal-label">CAMPUS CHAPTERS</h3>
              <p>Each campus chapter is a registered student organization at its university, operating under the Comet Foundry Chapter Standard. Chapter 01 at UT Dallas is the founding chapter. Additional chapters are formally chartered by the foundation as the network grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE DOCS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">GOVERNANCE & TRANSPARENCY</span>
          <span className="hand" style={{ display: 'block', fontSize: '20px', color: 'var(--flask)', marginBottom: '24px' }}>we build in public. always.</span>
          <div className="gov-doc-list">
            {govDocs.map((doc, i) => (
              <a key={i} href={doc.href} target={doc.href.startsWith('http') ? '_blank' : undefined} rel={doc.href.startsWith('http') ? 'noopener' : undefined} className="gov-doc-row">
                <span className="gov-doc-name">{doc.name}</span>
                <span className="gov-doc-action mono">View →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">BUILD WITH US</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>&ldquo;The foundation is being built in public. If you want to be part of what this becomes — now is the earliest you can.&rdquo;</h2>
          <span className="hand doctrine-cta-hand">seriously. earliest possible entry point.</span>
          <div className="mission-cta-row">
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO A CHAPTER →</a>
            <a className="hero-cta-secondary" href={EXPRESS_INTEREST_URL} target="_blank" rel="noopener noreferrer">Express Interest in Advising →</a>
          </div>
          <p className="mono" style={{ fontSize: '12px', color: 'var(--ink-soft)', marginTop: '24px' }}>inquiry@cometfoundry.com</p>
        </div>
      </section>
    </>
  );
}
