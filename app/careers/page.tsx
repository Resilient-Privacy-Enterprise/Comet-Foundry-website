import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { ECOSYSTEM_LISTINGS, POST_ROLE_URL } from '@/lib/careers';

export const metadata: Metadata = pageMetadata({
  path: '/careers',
  ogTitle: 'Careers — Comet Foundry',
  description: 'Jobs and internships at startups built inside Comet Foundry chapters and across the broader ecosystem. Curated by the Foundation.',
  keywords: ['careers', 'jobs', 'internships', 'comet foundry', 'startups'],
});

const backerLogos = Array.from(new Set(ECOSYSTEM_LISTINGS.map(l => l.backer.split(' ')[0])));

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / Careers</div>
          <span className="mission-eyebrow mono">LAUNCHPAD / CAREERS</span>
          <h1 className="mission-h1">Where builders<br />go to work.</h1>
          <p className="doctrine-sub">Two doors. One leads to the companies born inside our chapters. The other leads to the best startups in the country. Both are hiring builders like you.</p>
          <span className="hero-note hand" style={{ color: 'var(--flask)', display: 'block', marginTop: '16px' }}>builder to builder.</span>
        </div>
      </section>

      {/* SPLIT HERO — TWO DOORS */}
      <section className="mission-block" style={{ paddingTop: '24px' }}>
        <div className="wrap">
          <div className="careers-split">

            {/* FROM OUR FOUNDERS */}
            <Link href="/careers/built-at-cf" className="careers-door careers-door-primary">
              <div className="careers-door-top">
                <span className="mono careers-door-eyebrow">DOOR 01 · FROM OUR FOUNDERS</span>
                <span className="mono careers-door-badge">◌ OPENS FALL 2026</span>
              </div>
              <h2 className="careers-door-h">Startups born<br />inside CF.</h2>
              <p className="careers-door-body">The companies started inside our chapters — hiring co-founders, engineers, and interns. Small teams. Direct founder access. Real ownership. These are the people who sat in the same lab you are sitting in.</p>
              <div className="careers-door-meta mono">
                <span>◌ First roles post after Demo Day</span>
                <span>· Chapter 01 · UTD · Fall 2026</span>
              </div>
              <span className="careers-door-arrow mono">SEE WHO IS HIRING FROM CF →</span>
            </Link>

            {/* THE ECOSYSTEM */}
            <Link href="/careers/ecosystem" className="careers-door careers-door-secondary">
              <div className="careers-door-top">
                <span className="mono careers-door-eyebrow">DOOR 02 · THE ECOSYSTEM</span>
                <span className="mono careers-door-badge live">● {ECOSYSTEM_LISTINGS.length} LIVE ROLES</span>
              </div>
              <h2 className="careers-door-h">The rest of the<br />builder network.</h2>
              <p className="careers-door-body">Emerging startups across the US — backed by YC, a16z, Nvidia Inception, and more. Curated manually by the Foundation. No spam. Every role earns its spot.</p>
              <div className="careers-door-logos mono">
                {backerLogos.map((b) => (
                  <span key={b} className="careers-logo-chip">{b}</span>
                ))}
              </div>
              <span className="careers-door-arrow mono">BROWSE ECOSYSTEM ROLES →</span>
            </Link>

          </div>
        </div>
      </section>

      {/* WHY TWO DOORS */}
      <section className="mission-block">
        <div className="wrap">
          <div className="mission-split-grid">
            <div>
              <span className="block-eyebrow mono">WHY TWO DOORS</span>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '16px 0 20px' }}>The rooms are not the same.</h2>
              <p style={{ fontSize: '16px', color: 'var(--ink)', lineHeight: 1.7, margin: '0 0 16px', fontWeight: 500 }}>Working at a company born inside a Comet Foundry chapter is different from working at a company you have never met.</p>
              <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>Both matter. Both are worth your time. But conflating them into one job board would waste the thing that makes CF-built roles rare. So we split them. Pick the door that fits where you are right now.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ borderLeft: '3px solid var(--flask)', padding: '14px 20px', background: 'var(--paper-raised)' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>DOOR 01</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: '6px 0 0' }}>Rare. Personal. First-hire energy. Requires patience — the first roles post after Demo Day.</p>
              </div>
              <div style={{ borderLeft: '3px solid var(--ink)', padding: '14px 20px', background: 'var(--paper-raised)' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--ink)' }}>DOOR 02</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: '6px 0 0' }}>Available now. Curated. The best of what the rest of the builder ecosystem is offering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMIT */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">WANT TO BE LISTED?</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>Building something worth working on?<br />Post the role.</h2>
          <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '640px', margin: '20px auto 28px' }}>Inside or outside of Comet Foundry — if you are hiring builders, we want the role listed. Every submission is reviewed manually.</p>
          <a className="hero-cta-primary" href={POST_ROLE_URL} target="_blank" rel="noopener noreferrer">SUBMIT YOUR STARTUP LISTING →</a>
          <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', margin: '20px 0 0', letterSpacing: '.06em' }}>Real companies. Real roles. Real builders. No exceptions.</p>
        </div>
      </section>
    </>
  );
}
