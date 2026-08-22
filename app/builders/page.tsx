import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = pageMetadata({
  path: '/builders',
  ogTitle: 'The Builder Roster — Comet Foundry',
  description: 'Every builder building inside Comet Foundry chapters — across every campus, every domain, every stage.',
  keywords: ['builders', 'roster', 'comet foundry', 'launchpad'],
});

const stats = [
  { num: '257', label: 'APPLICANTS', sub: 'Chapter 01 · Fall 2026' },
  { num: '—', label: 'ACTIVE BUILDERS', sub: 'Cohort forming now' },
  { num: '7', label: 'CHAPTERS', sub: '1 active · 6 incoming' },
  { num: '—', label: 'BUILDS IN PROGRESS', sub: 'First ones coming soon' },
];

const placeholders = Array.from({ length: 8 }, (_, i) => `Builder 0${i + 1}`);
const h2Style = { fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 16px' };

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / Launchpad / Builders</div>
          <span className="mission-eyebrow mono">LAUNCHPAD / BUILDERS</span>
          <h1 className="mission-h1">Every builder.<br />Every chapter.</h1>
          <p className="doctrine-sub">The people building inside Comet Foundry chapters — across every campus, every domain, every stage. This is who we are.</p>
          <span className="hero-note hand" style={{ color: 'var(--flask)', display: 'block', marginTop: '16px' }}>the roster grows every semester.</span>
        </div>
      </section>

      {/* STATS — raw typography, no container */}
      <section className="mission-block" style={{ paddingTop: '0' }}>
        <div className="wrap">
          <div className="raw-stats">
            {stats.map((s) => (
              <div key={s.label} className="raw-stat">
                <span className="raw-stat-num">{s.num}</span>
                <span className="raw-stat-label mono">{s.label}</span>
                <span className="raw-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* COHORT EMPTY STATE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 · FALL 2026</span>
          <h2 style={{ ...h2Style, margin: '12px 0 20px' }}>The first cohort is being selected now.</h2>
          <div className="mission-prose" style={{ maxWidth: '720px' }}>
            <p>257 people applied to join Chapter 01. The first cohort of Comet Foundry builders is being selected now.</p>
            <p>When the cohort is confirmed, every builder who opts in will appear on this page — with their name, their domain, and what they are building.</p>
            <p>This is where the movement becomes a roster.</p>
          </div>

          {/* PLACEHOLDER GRID */}
          <div className="builder-grid" style={{ marginTop: '40px' }}>
            {placeholders.map((name) => (
              <div key={name} className="builder-card-placeholder">
                <div className="builder-avatar">CF</div>
                <h3 className="builder-name">{name}</h3>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '6px' }}>
                  <span className="builder-tag">CHAPTER 01 · UTD</span>
                </div>
                <p className="builder-sub">Cohort forming now.</p>
              </div>
            ))}
          </div>
          <p className="mono" style={{ textAlign: 'center', fontSize: '12px', color: 'var(--ink-soft)', letterSpacing: '.08em', marginTop: '24px' }}>+ 249 MORE APPLIED · COHORT BEING SELECTED</p>
        </div>
      </section>

      {/* BUILDER SPOTLIGHT */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">BUILDER SPOTLIGHT</span>
          <h2 style={h2Style}>Stories from the foundry.</h2>
          <div style={{ border: '1px dashed var(--line)', padding: '40px', background: 'var(--paper-raised)', marginTop: '16px' }}>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>The first builder spotlight will be published after the first Kickoff Night. Check back September 2026.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">YOUR NAME BELONGS HERE</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>Apply to join<br />your chapter.</h2>
          <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '640px', margin: '20px auto 28px' }}>The roster grows every semester. Every builder who joins a Comet Foundry chapter and opts in gets listed here — with their name, their work, and their chapter. This is how the movement becomes visible.</p>
          <div className="mission-cta-row" style={{ justifyContent: 'center' }}>
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO JOIN →</a>
            <Link className="hero-cta-secondary" href="/chapters">SEE ALL CHAPTERS →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
