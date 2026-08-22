import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { STASH_CATEGORIES } from '@/lib/stash';

const SUGGEST_URL = 'https://forms.cloud.microsoft/r/uuxGbS5NJ3';

export const metadata: Metadata = pageMetadata({
  path: '/stash',
  ogTitle: 'The Stash — Comet Foundry',
  description: 'Free resources, legal templates, founder guides, hackathons, tools, and more — curated for student builders at every Comet Foundry chapter.',
  keywords: ['the stash', 'comet foundry', 'resources', 'templates', 'founder tools'],
});

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / The Stash</div>
          <span className="mission-eyebrow mono">THE LABS / THE STASH</span>
          <h1 className="mission-h1">Everything a builder needs<br />in one place.</h1>
          <p className="doctrine-sub">Free resources, legal templates, founder guides, hackathons, tools, and more — curated for student builders at every Comet Foundry chapter.</p>
          <span className="hero-note hand" style={{ color: 'var(--flask)', display: 'block', marginTop: '16px' }}>no paywalls. no gatekeeping.</span>
        </div>
      </section>

      {/* CATEGORY HUB */}
      <section className="mission-block">
        <div className="wrap">
          <div className="stash-layout">
            {/* SIDEBAR */}
            <aside className="stash-sidebar">
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', display: 'block', marginBottom: '16px' }}>BROWSE BY CATEGORY</span>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {STASH_CATEGORIES.map((c) => (
                  <Link key={c.slug} href={`/stash/${c.slug}`} style={{
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: 'var(--ink-soft)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    borderLeft: '2px solid transparent',
                  }}>{c.label}</Link>
                ))}
              </nav>
              <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
                <p className="mono" style={{ fontSize: '10px', color: 'var(--ink-soft)', letterSpacing: '.08em', margin: '0 0 8px' }}>Updated by the Foundation.</p>
                <a href={SUGGEST_URL} target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '11px', color: 'var(--flask)', textDecoration: 'none', letterSpacing: '.06em' }}>Suggest a resource →</a>
              </div>
            </aside>

            {/* CATEGORY CARDS */}
            <div className="stash-content">
              <div className="stash-hub-grid">
                {STASH_CATEGORIES.map((c) => (
                  <Link key={c.slug} href={`/stash/${c.slug}`} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '28px 24px',
                    border: '1px solid var(--line)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color .2s',
                    background: 'var(--paper-raised)',
                  }}>
                    <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', marginBottom: '12px' }}>{c.eyebrow}</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 12px', textTransform: 'uppercase' }}>{c.title}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 20px', flex: 1 }}>{c.hubDescription}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                      <span className="mono" style={{ fontSize: '9px', letterSpacing: '.14em', color: c.status === 'ready' ? 'var(--flask)' : 'var(--ink-soft)' }}>
                        {c.status === 'ready' ? '● AVAILABLE' : '◌ COMING SOON'}
                      </span>
                      <span className="mono" style={{ fontSize: '11px', color: 'var(--flask)', letterSpacing: '.08em' }}>OPEN →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">MISSING SOMETHING?</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '16px 0 16px' }}>Suggest a resource.</h2>
          <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 28px' }}>The Stash is built by builders for builders. If you know a resource that belongs here — a tool, a guide, a repo, a template — tell us. We will review it and add it if it passes the bar.</p>
          <a className="hero-cta-primary" href={SUGGEST_URL} target="_blank" rel="noopener noreferrer">SUGGEST A RESOURCE →</a>
        </div>
      </section>
    </>
  );
}
