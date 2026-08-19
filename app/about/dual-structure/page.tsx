import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/about/dual-structure',
  ogTitle: 'Dual Structure — Comet Foundry',
  description: 'How Comet Foundry operates through both a Student Org and a global Founder Network.',
});

export default function DualStructurePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/about">About</Link> / Dual Structure</div>
          <h1>Dual Structure</h1>
          <span className="hero-note hand">local + global</span>
          <p className="lede">How we operate at UTD and around the world simultaneously.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2>Why Two?</h2>
            <p>We learned quickly that one structure couldn't do two things well. We need intense, hands-on community at UT Dallas—physical space, real people, face-to-face mentorship. But we also need to connect builders globally, regardless of their campus or location.</p>

            <p><strong>One structure would force us to choose.</strong> We chose to build two instead.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>The Student Org</h2>

            <p><strong>Comet Foundry @ UT Dallas</strong> is rooted in reality. It's a registered student organization with a physical lab, real events, and a leadership team of UTD students. This is where the movement started. This is where ideas become real in a room, where builders find co-founders face-to-face, where someone can walk in and start building today.</p>

            <p>It's intimate. It's hands-on. It's home.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>The Founder Network</h2>

            <p><strong>Comet Foundry Global</strong> is the bigger picture. It's a distributed network of builders worldwide—some at other universities, some graduated, some never went to college. They're connected digitally, mentored by experienced builders, and part of a movement that says "you don't need permission to build."</p>

            <p>It's accessible. It's scalable. It's for everyone.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>How They Connect</h2>

            <p>Think of it as concentric circles. The UTD student org is the center—intense, local, daily. The global network is the outer ring—distributed, always growing, always connected. <strong>But they're not separate. They're part of one movement.</strong></p>

            <p>A builder from the global network can visit the UTD lab. A UTD member can connect with collaborators worldwide. Knowledge flows both directions. Culture flows both directions. We're all building the same thing, just at different scales.</p>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="navigation-links">
            <Link href="/about/origin-story" className="nav-link">← Origin Story</Link>
            <Link href="/about" className="nav-link">Back to About</Link>
            <Link href="/about/how-we-work" className="nav-link">How We Work →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
