import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/about/mission',
  ogTitle: 'Mission — Comet Foundry',
  description: 'Our mission: to empower students to build, launch, and scale ideas that matter.',
});

export default function MissionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/about">About</Link> / Mission</div>
          <h1>Our Mission</h1>
          <span className="hero-note hand">why we exist</span>
          <p className="lede">Empower builders to launch ideas, find collaborators, and ship products that matter.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1em', lineHeight: '1.8', marginBottom: '2rem' }}>
              Most universities teach you how to get a job. <strong>We teach you how to create one.</strong>
            </p>

            <p>The problem isn't talent. Walk into any campus and you'll find brilliant builders—designers, engineers, marketers, thinkers. The problem is that most of them are building alone. They have ideas but no co-founders. They want to ship but don't know where to start. They're ready to build but don't have permission.</p>

            <p>Comet Foundry exists to change that.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>What This Means</h2>

            <p><strong>We remove barriers.</strong> No permission. No gatekeeping. No "you need a perfect pitch." Show up with an idea and the will to execute, and you belong here.</p>

            <p><strong>We provide space.</strong> Physical labs where builders gather. Digital networks where they collaborate. Resources when they're stuck. Mentorship when they're lost.</p>

            <p><strong>We connect builders.</strong> The co-founder you need is here. The advisor who can guide you is here. The people weird enough to build something crazy with you are here.</p>

            <p><strong>We measure impact differently.</strong> Not by exits or valuations. By ideas that became real. By students who discovered they could execute. By a generation that doesn't wait for permission to build.</p>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="navigation-links">
            <Link href="/about/origin-story" className="nav-link">← Origin Story</Link>
            <Link href="/about" className="nav-link">Back to About</Link>
            <Link href="/about/dual-structure" className="nav-link">Dual Structure →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
