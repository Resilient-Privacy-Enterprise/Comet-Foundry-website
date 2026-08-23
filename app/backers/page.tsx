import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

const CONTACT = 'inquiry@cometfoundry.com';

export const metadata: Metadata = pageMetadata({
  path: '/backers',
  ogTitle: 'The Backers — Comet Foundry',
  description: 'The organizations backing Comet Foundry — providing infrastructure, capital, and credibility for the founder movement on college campuses.',
  keywords: ['backers', 'partners', 'sponsors', 'comet foundry'],
});

const h2Style = { fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 20px' };

type Backer = {
  name: string;
  logo: string;
  url?: string;
  // Fraction of the raw image to hide on each edge (source PNGs sometimes
  // ship with a baked checker/transparency padding we can't repaint).
  cropInset?: string;
  // Bigger scale = logo appears larger inside the tile (after crop).
  logoScale?: number;
  // Skip Next.js image optimization (serves the raw PNG so RGBA alpha is
  // preserved on files the optimizer would otherwise flatten).
  raw?: boolean;
};

const seed: Backer[] = [
  { name: 'Resilient Privacy Inc.', logo: '/assets/backers/resilient-privacy.jpg', url: 'https://resilientprivacy.com' },
];

const incoming: Backer[] = [
  { name: 'NVIDIA Inception', logo: '/assets/backers/nvidia-inception.png', raw: true },
  { name: 'Harvard Business Foundry', logo: '/assets/backers/harvard-business-foundry.png' },
];

function LogoTile({ b }: { b: Backer }) {
  const content = (
    <div style={{
      width: '100%',
      aspectRatio: '3 / 2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '28px 24px',
      background: 'var(--paper-raised)',
      border: '1px solid var(--line)',
      transition: 'border-color .2s, transform .2s',
      overflow: 'hidden',
    }}>
      <Image
        src={b.logo}
        alt={b.name}
        width={320}
        height={140}
        unoptimized={b.raw}
        style={{
          objectFit: 'contain',
          maxWidth: `${(b.logoScale ?? 0.8) * 100}%`,
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          clipPath: b.cropInset ? `inset(${b.cropInset})` : undefined,
          transform: b.cropInset ? `scale(${1 / (1 - 2 * parseFloat(b.cropInset) / 100)})` : undefined,
          transformOrigin: 'center',
        }}
      />
    </div>
  );
  return b.url ? (
    <a href={b.url} target="_blank" rel="noopener noreferrer" aria-label={b.name} style={{ textDecoration: 'none' }}>{content}</a>
  ) : content;
}

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / The Backers</div>
          <span className="mission-eyebrow mono">MISSION / THE BACKERS</span>
          <h1 className="mission-h1">Who bets on us.</h1>
          <p className="doctrine-sub">The organizations backing Comet Foundry — providing the infrastructure and credibility so student builders get a real shot before graduation.</p>
        </div>
      </section>

      {/* SEED */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">BACKERS / SEED</span>
          <h2 style={h2Style}>Here from day one.</h2>
          <a href="https://resilientprivacy.com" target="_blank" rel="noopener noreferrer" className="seed-backer-row">
            <div className="seed-backer-logo">
              <Image src="/assets/backers/resilient-privacy.jpg" alt="Resilient Privacy Inc." width={88} height={88} style={{ objectFit: 'contain', width: '88px', height: '88px' }} />
            </div>
            <div className="seed-backer-body">
              <span className="seed-backer-name">Resilient Privacy Inc.</span>
              <span className="seed-backer-tag">Enterprise AI & Cybersecurity Company</span>
            </div>
            <span className="seed-backer-cta mono">VISIT →</span>
          </a>
        </div>
      </section>

      {/* INCOMING */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">BACKERS / INCOMING</span>
          <h2 style={h2Style}>Announcing soon.</h2>
          <div className="backers-grid">
            {incoming.map((b) => <LogoTile key={b.name} b={b} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">BACK THE MOVEMENT</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>Want to back the next chapter?</h2>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <a className="hero-cta-primary" href={`mailto:${CONTACT}?subject=Backing%20Comet%20Foundry`}>BECOME A BACKER →</a>
            <Link className="hero-cta-secondary" href="/donate">FUEL IT →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
