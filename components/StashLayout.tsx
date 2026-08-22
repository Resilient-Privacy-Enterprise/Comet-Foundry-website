import Link from 'next/link';
import { STASH_CATEGORIES } from '@/lib/stash';

const SUGGEST_URL = 'https://forms.cloud.microsoft/r/uuxGbS5NJ3';

export type Resource = {
  tag: string;
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

export type Section = {
  heading?: string;
  entries: Resource[];
};

export default function StashLayout({
  currentSlug,
  eyebrow,
  h1,
  sub,
  disclaimer,
  filterStrip,
  sections,
  emptyState,
}: {
  currentSlug: string;
  eyebrow: string;
  h1: string;
  sub: string;
  disclaimer?: string;
  filterStrip?: string[];
  sections?: Section[];
  emptyState?: boolean;
}) {
  const current = STASH_CATEGORIES.find((c) => c.slug === currentSlug);

  return (
    <section className="mission-block" style={{ paddingTop: '48px' }}>
      <div className="wrap">
        <div className="stash-layout">
          {/* SIDEBAR */}
          <aside className="stash-sidebar">
            <Link href="/stash" className="mono" style={{ fontSize: '11px', letterSpacing: '.08em', color: 'var(--ink-soft)', textDecoration: 'none', display: 'block', marginBottom: '28px' }}>← Back to The Stash</Link>
            <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', display: 'block', marginBottom: '16px' }}>CATEGORIES</span>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {STASH_CATEGORIES.map((c) => {
                const active = c.slug === currentSlug;
                return (
                  <Link key={c.slug} href={`/stash/${c.slug}`} style={{
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: active ? 'var(--ink)' : 'var(--ink-soft)',
                    fontWeight: active ? 700 : 500,
                    textDecoration: 'none',
                    borderLeft: active ? '2px solid var(--flask)' : '2px solid transparent',
                    background: active ? 'var(--paper-raised)' : 'transparent',
                  }}>{c.label}</Link>
                );
              })}
            </nav>
            <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
              <p className="mono" style={{ fontSize: '10px', color: 'var(--ink-soft)', letterSpacing: '.08em', margin: '0 0 8px' }}>Last updated: Aug 2026</p>
              <a href={SUGGEST_URL} target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '11px', color: 'var(--flask)', textDecoration: 'none', letterSpacing: '.06em' }}>Suggest a resource →</a>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="stash-content">
            <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/stash">The Stash</Link> / {current?.label}</div>
            <span className="mission-eyebrow mono">THE STASH / {eyebrow}</span>
            <h1 className="mission-h1" style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}>{h1}</h1>
            <p className="doctrine-sub">{sub}</p>
            {disclaimer && (
              <p style={{ fontSize: '12px', color: 'var(--ink-soft)', fontStyle: 'italic', lineHeight: 1.6, margin: '16px 0 0', padding: '12px 16px', borderLeft: '2px solid var(--line)', background: 'var(--paper-raised)' }}>{disclaimer}</p>
            )}

            {filterStrip && (
              <div className="mono" style={{ display: 'flex', gap: '20px', marginTop: '32px', paddingBottom: '16px', borderBottom: '1px solid var(--line)', fontSize: '11px', letterSpacing: '.1em', color: 'var(--ink-soft)' }}>
                {filterStrip.map((f, i) => (
                  <span key={i} style={{ color: i === 0 ? 'var(--ink)' : 'var(--ink-soft)', fontWeight: i === 0 ? 700 : 500 }}>{f}</span>
                ))}
              </div>
            )}

            {emptyState && (
              <div style={{ marginTop: '40px', border: '1px dashed var(--line)', padding: '40px', background: 'var(--paper-raised)' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>COMING SOON</span>
                <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 20px', fontStyle: 'italic' }}>&ldquo;This section is being curated. We are reviewing resources before adding them — no filler, no paywalled links, nothing that wastes your time.&rdquo;</p>
                <a href={SUGGEST_URL} target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '12px', color: 'var(--flask)', textDecoration: 'none', letterSpacing: '.08em' }}>Suggest a resource →</a>
              </div>
            )}

            {sections?.map((sec, si) => (
              <div key={si} style={{ marginTop: '40px' }}>
                {sec.heading && (
                  <h3 className="mono" style={{ fontSize: '11px', letterSpacing: '.14em', color: 'var(--flask)', textTransform: 'uppercase', margin: '0 0 20px', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>{sec.heading}</h3>
                )}
                <div>
                  {sec.entries.map((r, ri) => (
                    <div key={ri} style={{ padding: '24px 0', borderBottom: '1px solid var(--line)' }}>
                      <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)', display: 'block', marginBottom: '8px' }}>{r.tag}</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-.01em' }}>{r.title}</h4>
                      <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 12px' }}>{r.description}</p>
                      {r.link && (
                        <a href={r.link} target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '12px', color: 'var(--flask)', textDecoration: 'none', letterSpacing: '.08em', fontWeight: 700 }}>{r.linkLabel || 'ACCESS RESOURCE →'}</a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* BOTTOM CTA */}
            <div style={{ marginTop: '60px', padding: '32px', border: '1px solid var(--line)' }}>
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>MISSING SOMETHING?</span>
              <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 16px' }}>Know a resource that belongs here? Tell us. We will review it and add it if it passes the bar.</p>
              <a href={SUGGEST_URL} target="_blank" rel="noopener noreferrer" className="hero-cta-secondary">SUGGEST A RESOURCE →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
