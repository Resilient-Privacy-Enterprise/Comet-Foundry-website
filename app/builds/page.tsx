import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';
const SUBMIT_EMAIL = 'inquiry@cometfoundry.com';

export const metadata: Metadata = pageMetadata({
  path: '/builds',
  ogTitle: 'Builds In Progress — Comet Foundry',
  description: 'Every project in progress across every Comet Foundry chapter. WIP wall. Real things being built by real builders.',
  keywords: ['builds', 'wip', 'comet foundry', 'projects', 'launchpad'],
});

const filterRows = [
  { label: 'BY CHAPTER', items: ['ALL CHAPTERS', 'UTD', 'UT AUSTIN', 'TEXAS A&M', 'RICE', 'GEORGIA TECH', 'BERKELEY', 'MIT'] },
  { label: 'BY DOMAIN', items: ['ALL', 'AI/ML', 'HARDWARE', 'FINTECH', 'HEALTHTECH', 'EDTECH', 'CONSUMER', 'B2B', 'CLIMATE', 'OTHER'] },
  { label: 'BY STAGE', items: ['ALL', 'IDEA', 'PROTOTYPE', 'BUILDING', 'SHIPPING', 'LAUNCHED'] },
];

const h2Style = { fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 16px' };

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / Launchpad / Builds</div>
          <span className="mission-eyebrow mono">LAUNCHPAD / BUILDS</span>
          <h1 className="mission-h1">What&apos;s being built<br />inside the foundry.</h1>
          <p className="doctrine-sub">Every project in progress across every Comet Foundry chapter. WIP wall. No polish required. No pitch decks. Just real things being built by real builders.</p>
          <span className="hero-note hand" style={{ color: 'var(--flask)', display: 'block', marginTop: '16px' }}>rough edges welcome.</span>
        </div>
      </section>

      {/* FILTER STRIPS */}
      <section className="mission-block" style={{ paddingTop: '0' }}>
        <div className="wrap">
          <div className="control-panel">
            <div className="control-filters">
              {filterRows.map((row) => (
                <div key={row.label} className="filter-row">
                  <span className="filter-row-label mono">{row.label}</span>
                  <div className="filter-row-items mono">
                    {row.items.map((f, i) => (
                      <span key={f} className="filter-chip" data-active={i === 0}>{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMPTY STATE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 · FALL 2026</span>
          <div style={{ border: '1px dashed var(--line)', padding: '48px', background: 'var(--paper-raised)', marginTop: '16px' }}>
            <h2 style={h2Style}>Nothing shipped yet.<br />That&apos;s the point.</h2>
            <div style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '640px' }}>
              <p style={{ margin: '0 0 16px' }}>The first builds from Chapter 01 will appear here as the semester runs. We do not post ideas. We post things that exist — prototypes, v1s, rough builds, works in progress.</p>
              <p style={{ margin: 0 }}>Come back after Kickoff Night. September 2026.</p>
            </div>
            <div className="mission-cta-row" style={{ marginTop: '28px' }}>
              <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO START BUILDING →</a>
              <Link className="hero-cta-secondary" href="/demo-day">VIEW DEMO DAY →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMIT */}
      <section className="mission-block">
        <div className="wrap">
          <div style={{ border: '1px solid var(--line)', padding: '36px' }}>
            <span className="block-eyebrow mono">BUILDING SOMETHING?</span>
            <h2 style={{ ...h2Style, margin: '12px 0 12px' }}>Get your build on the wall.</h2>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 20px', maxWidth: '660px' }}>If you are a Comet Foundry builder with something in progress — however rough, however early — submit it. This wall exists to show the world what gets built here. It does not require polish. It requires existence.</p>
            <a className="hero-cta-primary" href={`mailto:${SUBMIT_EMAIL}`}>SUBMIT YOUR BUILD →</a>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', margin: '16px 0 0', letterSpacing: '.06em' }}>Open to active Comet Foundry builders only. Verified by chapter officers before listing.</p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">START BUILDING</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>The next build on this wall<br />could be yours.</h2>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO JOIN →</a>
            <Link className="hero-cta-secondary" href="/builders">SEE THE BUILDERS →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
