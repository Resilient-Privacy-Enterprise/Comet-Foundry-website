import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { ECOSYSTEM_LISTINGS, POST_ROLE_URL } from '@/lib/careers';
import CareerCard from '@/components/CareerCard';

export const metadata: Metadata = pageMetadata({
  path: '/careers/ecosystem',
  ogTitle: 'The Ecosystem — Careers',
  description: 'Jobs and internships at emerging startups backed by YC, a16z, Nvidia Inception and more.',
});

export default function Page() {
  return (
    <>
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/careers">Careers</Link> / The Ecosystem</div>
          <span className="mission-eyebrow mono">CAREERS / THE ECOSYSTEM</span>
          <h1 className="mission-h1">The best startups in the country<br />are hiring.</h1>
          <p className="doctrine-sub">Emerging startups backed by the best investors in the world — YC, a16z, Nvidia Inception, and more. Curated by the Comet Foundry Foundation. Updated regularly.</p>
          <div className="mono" style={{ marginTop: '24px', display: 'flex', gap: '16px', fontSize: '11px', color: 'var(--ink-soft)', letterSpacing: '.08em', flexWrap: 'wrap' }}>
            <span>● {ECOSYSTEM_LISTINGS.length} LIVE ROLES</span>
            <span>· UPDATED REGULARLY</span>
            <span>· CURATED MANUALLY</span>
          </div>
        </div>
      </section>

      <section className="mission-block">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <div>
            {ECOSYSTEM_LISTINGS.map((l, i) => (
              <CareerCard key={i} listing={l} />
            ))}
          </div>

          <div style={{ marginTop: '60px', padding: '36px', border: '1px solid var(--line)', background: 'var(--paper-raised)' }}>
            <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>WANT TO BE LISTED?</span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-.01em', textTransform: 'uppercase', margin: '12px 0 12px' }}>Post a role.</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 20px', maxWidth: '560px' }}>Submit your startup. We review every submission manually and add roles that meet the bar — real companies, real roles, real builders.</p>
            <a className="hero-cta-primary" href={POST_ROLE_URL} target="_blank" rel="noopener noreferrer">SUBMIT YOUR STARTUP →</a>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/careers" className="mono" style={{ fontSize: '12px', letterSpacing: '.08em', color: 'var(--ink-soft)', textDecoration: 'none' }}>← Back to Careers</Link>
          </div>
        </div>
      </section>
    </>
  );
}
