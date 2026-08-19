import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/about/how-we-work',
  ogTitle: 'How We Work — Comet Foundry',
  description: 'Our principles, culture, and operating philosophy.',
});

export default function HowWeWorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/about">About</Link> / How We Work</div>
          <h1>How We Work</h1>
          <span className="hero-note hand">our operating style</span>
          <p className="lede">No gatekeepers. No permission required. Just builders and space to build.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2>The Core Idea</h2>
            <p>Most organizations create barriers to participation. You need approval. You need to apply. You need to convince someone you're worthy. <strong>We do the opposite.</strong></p>

            <p>If you have an idea and the will to pursue it, you can start building today. No pitch deck required. No permission slip from leadership. No committee to convince. Just you, space, and other builders.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>How This Works in Practice</h2>

            <p><strong>You have an idea?</strong> Announce it. Find collaborators. Start building. That's all there is to it. No approvals. No "let me check with leadership." The community is your permission slip.</p>

            <p><strong>You're stuck?</strong> Open labs, mentors, and builders around you. Not because they have to, but because the culture values helping each other ship. You get feedback, resources, and support. Real support—not "here's an application."</p>

            <p><strong>Your project fails?</strong> That's exactly why we're here. Failure is part of building. You learn, iterate, start again. No shame. No judgment. Just "what's next?"</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>What We Value</h2>

            <p><strong>Shipping over planning.</strong> A rough product that exists beats a perfect plan that doesn't. You learn more from a week of building than a month of planning.</p>

            <p><strong>Execution over credentials.</strong> We don't care what you've done before. We care what you're building now. Your idea speaks louder than your résumé.</p>

            <p><strong>Community over competition.</strong> You'll find co-founders here. Collaborators. People who want to help you succeed. That rising tide lifts all boats philosophy is real.</p>

            <p><strong>Diverse perspectives.</strong> The best ideas come from people who think differently. We actively seek builders from different backgrounds, majors, and experiences. Homogeneity kills innovation.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>What We're Not</h2>

            <p>We're not an accelerator picking winners. We're not a business school teaching theory. We're not a VC fund funding startups. We're not a traditional student org with endless meetings and bureaucracy.</p>

            <p><strong>We're a space.</strong> Physical and digital. Where builders build. Where ideas become real. Where you figure it out together.</p>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="navigation-links">
            <Link href="/about/dual-structure" className="nav-link">← Dual Structure</Link>
            <Link href="/about" className="nav-link">Back to About</Link>
            <Link href="/about/org-structure" className="nav-link">Org Structure →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
