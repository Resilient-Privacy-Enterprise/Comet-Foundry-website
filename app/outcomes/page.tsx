import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = pageMetadata({
  path: '/outcomes',
  ogTitle: 'Outcomes — Comet Foundry',
  description: 'The proof that Comet Foundry works. Documented every semester. Numbers, companies, and people.',
  keywords: ['outcomes', 'metrics', 'comet foundry', 'launchpad'],
});

const stats = [
  { num: '257', label: 'TOTAL APPLICANTS', sub: 'Chapter 01 · Fall 2026', note: 'before the first semester began' },
  { num: '—', label: 'ACTIVE BUILDERS', sub: 'Cohort forming now', note: 'first cohort incoming' },
  { num: '—', label: 'BUILDS SHIPPED', sub: 'Check back after Demo Day', note: 'Fall 2026' },
  { num: '—', label: 'STARTUPS LAUNCHED', sub: 'Born inside CF chapters', note: 'the first ones are building' },
  { num: '—', label: 'JOBS CREATED', sub: 'At CF-born startups', note: 'coming after Demo Day' },
  { num: '—', label: 'INTERNSHIPS PLACED', sub: 'Through CF network', note: 'coming after Demo Day' },
  { num: '—', label: 'CO-FOUNDER MATCHES', sub: 'Made inside CF chapters', note: 'the first ones are forming' },
  { num: '7', label: 'CHAPTERS', sub: '1 active · 6 incoming', note: 'and growing' },
];

const metrics = [
  { title: 'BUILDS SHIPPED', body: 'Things that exist in the world after a semester ends. Products, prototypes, v1s, launched projects. Not slide decks. Not ideas. Things that run.' },
  { title: 'STARTUPS LAUNCHED', body: 'Companies formally started by Comet Foundry builders — incorporated, operating, and building something real beyond the semester arc.' },
  { title: 'JOBS CREATED', body: 'Full time roles, internships, and contract positions created by CF-born startups for the next generation of builders.' },
  { title: 'CO-FOUNDER MATCHES', body: 'Founding teams that met inside a Comet Foundry chapter and went on to build something together. The most valuable outcome we can produce.' },
  { title: 'CAPITAL RAISED', body: 'Funding raised by CF-born startups — pre-seed, seed, and beyond. The financial proof that what gets built here is worth backing.' },
  { title: 'INTERNSHIPS PLACED', body: 'CF builders placed into internships at partner companies, CF-born startups, and ecosystem companies through the Comet Foundry network.' },
];

const flywheel = [
  { title: 'BUILDERS BUILD THINGS', body: 'Every semester, Comet Foundry builders ship real products — not class projects, not case studies. Real things that solve real problems.' },
  { title: 'BUILDS BECOME STARTUPS', body: 'Some of those builds become companies. Those companies hire from the same community that built them. The network compounds.' },
  { title: 'STARTUPS FUEL THE NEXT COHORT', body: 'CF-born startups post roles on /careers. They mentor the next cohort. They come back to Demo Day as guests. The flywheel completes.' },
];

const h2Style = { fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 16px' };
const cardStyle = { border: '1px solid var(--line)', padding: '28px 24px' };

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / Launchpad / Outcomes</div>
          <span className="mission-eyebrow mono">LAUNCHPAD / OUTCOMES</span>
          <h1 className="mission-h1">This is what happens<br />when builders get<br />the right infrastructure.</h1>
          <p className="doctrine-sub">The proof that Comet Foundry works. Not promises. Not pitch decks. Numbers, companies, and people — documented every semester, at every chapter.</p>
          <span className="hero-note hand" style={{ color: 'var(--flask)', display: 'block', marginTop: '16px' }}>receipts, not claims.</span>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">OUTCOMES / THE NUMBERS</span>
          <h2 style={h2Style}>By the numbers.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', margin: '0 0 32px' }}>Updated every semester. Cumulative across all chapters.</p>
          <div className="outcomes-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="ch-stat-card">
                <span className="ch-stat-num" style={{ color: s.num === '—' ? 'var(--ink-soft)' : 'var(--ink)' }}>{s.num}</span>
                <span className="ch-stat-label">{s.label}</span>
                <span className="ch-stat-sub">{s.sub}</span>
                <span style={{ fontSize: '11px', fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: '6px', display: 'block', opacity: .7 }}>{s.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONEST EMPTY STATE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">OUTCOMES / 001</span>
          <div style={{ border: '1px dashed var(--line)', padding: '48px', background: 'var(--paper-raised)', marginTop: '16px' }}>
            <h2 style={h2Style}>The receipts are being written.</h2>
            <div className="mission-prose" style={{ maxWidth: '720px' }}>
              <p>Comet Foundry Chapter 01 launched in 2026. The first semester is underway. The first cohort is forming.</p>
              <p>Outcomes are not invented. They are documented. Every semester, at every chapter, we record what actually happened — what got built, who got hired, which teams stayed together, which companies raised money.</p>
              <p>The first Demo Day is Fall 2026. The first outcomes will be documented here the week after.</p>
              <p>Come back then. Or be part of what gets documented.</p>
            </div>
            <div className="mission-cta-row" style={{ marginTop: '28px' }}>
              <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO JOIN →</a>
              <Link className="hero-cta-secondary" href="/demo-day">VIEW DEMO DAY →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE MEASURE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">OUTCOMES / 002</span>
          <h2 style={h2Style}>What we measure.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: '720px' }}>Outcomes are only worth tracking if you track the right things. These are the metrics that matter at Comet Foundry — not attendance, not events run, not members joined.</p>
          <div className="outcomes-metrics-grid">
            {metrics.map((m) => (
              <div key={m.title} style={cardStyle}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>{m.title}</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEMESTER REPORTS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">OUTCOMES / 003</span>
          <h2 style={h2Style}>Semester by semester.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: '640px' }}>Every semester, every chapter publishes an outcomes report. This is the archive.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px', border: '1px solid var(--line)' }}>
              <thead>
                <tr style={{ background: 'var(--paper-raised)' }}>
                  <th className="mono" style={{ textAlign: 'left', padding: '14px 20px', fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', borderBottom: '1px solid var(--line)' }}>SEMESTER</th>
                  <th className="mono" style={{ textAlign: 'left', padding: '14px 20px', fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', borderBottom: '1px solid var(--line)' }}>CHAPTER</th>
                  <th className="mono" style={{ textAlign: 'left', padding: '14px 20px', fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', borderBottom: '1px solid var(--line)' }}>REPORT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '18px 20px', fontSize: '14px', color: 'var(--ink)', fontWeight: 500 }}>Fall 2026</td>
                  <td style={{ padding: '18px 20px', fontSize: '14px', color: 'var(--ink)' }}>UTD · Chapter 01</td>
                  <td style={{ padding: '18px 20px' }}>
                    <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--ink-soft)', padding: '4px 10px', border: '1px solid var(--line)' }}>◌ PENDING · AFTER DEMO DAY</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', letterSpacing: '.06em', margin: '16px 0 0', fontStyle: 'italic' }}>Reports published within two weeks of each Demo Day.</p>
        </div>
      </section>

      {/* BUILDER STORIES */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">OUTCOMES / 004</span>
          <h2 style={h2Style}>From the builders themselves.</h2>
          <div style={{ border: '1px dashed var(--line)', padding: '40px', background: 'var(--paper-raised)', marginTop: '16px' }}>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 12px', fontStyle: 'italic' }}>The first builder story will be published after Demo Day. Fall 2026.</p>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>This section will hold first-person accounts from CF builders — what they built, what they learned, where it went. Not marketing copy. Their words.</p>
          </div>
        </div>
      </section>

      {/* FLYWHEEL */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">OUTCOMES / 005</span>
          <h2 style={h2Style}>The flywheel.</h2>
          <div className="mission-three-col">
            {flywheel.map((f, i) => (
              <div key={i} style={cardStyle}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>0{i + 1}</span>
                <h3 style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '.02em', textTransform: 'uppercase', margin: '10px 0 12px' }}>{f.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">BE PART OF WHAT GETS DOCUMENTED</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>The outcomes being written right now<br />need builders.</h2>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO JOIN →</a>
            <Link className="hero-cta-secondary" href="/builds">VIEW BUILDS IN PROGRESS →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
