import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/about/org-structure',
  ogTitle: 'Org Structure — Comet Foundry',
  description: 'Our organizational hierarchy, roles, and how leadership is organized.',
});

export default function OrgStructurePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/about">About</Link> / Org Structure</div>
          <h1>Our Org Structure</h1>
          <span className="hero-note hand">who does what</span>
          <p className="lede">How we organize leadership while staying flat and distributed.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2>Built Flat by Design</h2>
            <p>We keep our organization intentionally flat. No layers of middle management. No approval chains. Clear roles, but everyone is a builder first.</p>

            <p><strong>The idea is simple:</strong> Leadership should be about execution, not permission-giving.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Who Does What</h2>

            <p><strong>Executive Board</strong> — 5 people who own the big picture. President, Vice President, Secretary, Treasurer, and one open seat. They set strategy, manage budget, and make high-level calls. But they're not gatekeepers.</p>

            <p><strong>Officers</strong> — People who own specific domains. Events, partnerships, design, community, technology. Each officer has autonomy. They make day-to-day decisions without asking for approval. They report on progress, not ask for permission.</p>

            <p><strong>Advisors</strong> — Experienced builders and faculty who provide guidance. They counsel, but officers and the board make the final call. Think mentors, not decision-makers.</p>

            <p><strong>Community</strong> — Everyone else. Active builders, peer mentors, people working on projects. Leadership roles aren't required. You lead by executing. You influence by building.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>How Decisions Happen</h2>

            <p>Day-to-day decisions? Officers decide. Strategic questions? Board + officer input. Values-based decisions? The community weighs in. Major changes? We aim for consensus or community vote.</p>

            <p>The goal isn't perfect agreement. It's fast decisions and accountability. <strong>You know who owns what, and they know they need to answer to the community.</strong></p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Why It Matters</h2>

            <p><strong>Power isn't hoarded.</strong> It's distributed. New leaders can emerge from anywhere. Someone with no fancy title can lead a project. Someone in the community can influence direction by doing work that matters.</p>

            <p><strong>The structure is flexible.</strong> As we grow, roles change. New needs create new positions. Roles that don't work get retired. We're not precious about org charts.</p>

            <p><strong>Everyone is accountable.</strong> Not just to each other, but to the community. If leadership isn't living our values, the community can call it out. That's not theory—it's how we operate.</p>

            <p>Want to see who's actually in each role right now? Check the <Link href="/team" style={{ color: 'var(--flask)' }}>Team page</Link>.</p>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="navigation-links">
            <Link href="/about/how-we-work" className="nav-link">← How We Work</Link>
            <Link href="/about" className="nav-link">Back to About</Link>
            <Link href="/about/governance-principles" className="nav-link">Governance Principles →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
