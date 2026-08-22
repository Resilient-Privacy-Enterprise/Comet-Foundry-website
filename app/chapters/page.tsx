import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { CHAPTERS } from '@/lib/chapters';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = pageMetadata({
  path: '/chapters',
  ogTitle: 'Chapters — Comet Foundry',
  description: 'Every Comet Foundry chapter. Every campus. One standard. Find your chapter or bring one to your university.',
  keywords: ['chapters', 'comet foundry', 'universities', 'campus', 'map'],
});

const activeCount = CHAPTERS.filter((c) => c.status === 'active').length;
const incomingCount = CHAPTERS.filter((c) => c.status === 'incoming').length;

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / Chapters</div>
          <span className="mission-eyebrow mono">CHAPTERS / THE MAP</span>
          <h1 className="mission-h1">Every chapter.<br />Every campus.<br />One standard.</h1>
          <p className="doctrine-sub">Comet Foundry chapters exist at universities across the country — each one running the same Four Labs, the same Semester Arc, the same standard. This is where they all live.</p>
          <div className="mission-stamp mono">{activeCount} ACTIVE · {incomingCount} INCOMING · ∞ TO GO</div>
        </div>
      </section>

      {/* BLINKING DOT MAP — same as homepage */}
      <section className="campus">
        <div className="campus-inner">
          <div className="campus-stage">
            <div className="campus-map" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="campus-map-svg" src="/assets/campus-map.svg" alt="Map of the continental United States with Comet Foundry chapter locations" width={950} height={580} loading="lazy" />
            </div>
            <h2 className="campus-title">THE<br />HACKER<br />CAMPUS</h2>
            <div className="campus-cta">
              <span className="campus-cta-note hand">not on your campus yet?</span>
              <Link className="campus-cta-btn" href="/chapters/start">Bring it to your campus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER GRID */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">ALL CHAPTERS</span>
          <div className="ch-map-grid" style={{ marginTop: '24px' }}>
            {CHAPTERS.map((ch) => (
              <Link key={ch.slug} href={`/chapters/${ch.slug}`} className="ch-map-card">
                <div className="ch-map-card-top">
                  <span className={`ch-map-badge mono ${ch.status}`}>
                    {ch.status === 'active' ? '● ACTIVE' : '◌ INCOMING'}
                  </span>
                  <span className="ch-map-label mono">CH {ch.num}</span>
                </div>
                <h3 className="ch-map-name">{ch.name}</h3>
                <p className="ch-map-loc mono">{ch.city}, {ch.state}</p>
                <p className="ch-map-tag">&ldquo;{ch.tagline}&rdquo;</p>
                <span className="ch-map-arrow">→</span>
              </Link>
            ))}
            <Link href="/chapters/start" className="ch-map-card ch-map-card-yours">
              <span className="ch-map-label mono">YOUR CAMPUS</span>
              <h3 className="ch-map-name">Not listed here?</h3>
              <p className="ch-map-tag">Bring Comet Foundry to your university.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER STANDARD STRIP */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">ONE STANDARD. EVERY CAMPUS.</span>
          <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '600px', margin: '16px auto 0' }}>Every chapter on this map runs the same Four Labs, the same Semester Arc, and the same builder intake process. The campus changes. The standard doesn&apos;t.</p>
          <Link className="hero-cta-primary" href="/chapters/standard" style={{ marginTop: '28px', display: 'inline-block' }}>READ THE CHAPTER STANDARD →</Link>
        </div>
      </section>

      {/* CTA — TWO COLUMN */}
      <section className="mission-block">
        <div className="wrap">
          <div className="mission-split-grid">
            <div style={{ border: '1px solid var(--line)', padding: '32px' }}>
              <span className="block-eyebrow mono">FOR STUDENTS</span>
              <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '12px 0 8px', textTransform: 'uppercase', letterSpacing: '-.01em' }}>Find your chapter.</h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 20px' }}>Apply to the chapter at your university.</p>
              <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY →</a>
            </div>
            <div style={{ border: '1px solid var(--line)', padding: '32px' }}>
              <span className="block-eyebrow mono">FOR UNIVERSITIES</span>
              <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '12px 0 8px', textTransform: 'uppercase', letterSpacing: '-.01em' }}>Start a chapter.</h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 20px' }}>Bring Comet Foundry to your campus.</p>
              <Link className="hero-cta-primary" href="/chapters/start">BRING IT TO YOUR CAMPUS →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
