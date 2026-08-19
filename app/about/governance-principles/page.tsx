import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/about/governance-principles',
  ogTitle: 'Governance Principles — Comet Foundry',
  description: 'How we make decisions, lead together, and stay accountable to our community.',
});

export default function GovernancePrinciplesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/about">About</Link> / Governance Principles</div>
          <h1>Governance Principles</h1>
          <span className="hero-note hand">how we lead</span>
          <p className="lede">The principles that guide how we make decisions and lead together.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2>Six Guiding Principles</h2>
            <p>These aren't rules. They're principles—guides for how we make decisions and lead together. When we're stuck, we come back to these.</p>

            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>1. Radical Transparency</h3>
            <p>If it affects the community, they see it. Budget decisions. Strategic calls. Major changes. Meeting notes. We operate in the open because secrets breed distrust, and distrust kills community.</p>

            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>2. Meritocracy Over Hierarchy</h3>
            <p>The best idea wins. A first-year student can beat a senior officer's proposal if their thinking is sharper. Your influence comes from what you build, not what title you have.</p>

            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>3. Distributed Leadership</h3>
            <p>We trust the people doing the work. Officers own their domains. Project leads own their projects. You don't need approval to act. You need accountability for results.</p>

            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>4. Community First</h3>
            <p>Every decision gets filtered through one question: Does this serve the community? Not the institution. Not leadership convenience. The community. If it doesn't, we don't do it.</p>

            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>5. Continuous Evolution</h3>
            <p>Nothing is sacred except the mission. Structures change. Roles evolve. Bad ideas get replaced by better ones. We're not precious about "how we've always done it."</p>

            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>6. Accountability</h3>
            <p>Everyone answers to the community. Leadership shares progress and failures openly. If we stray from our values, you can call us out. Accountability isn't punishment—it's how we earn trust.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>When We Disagree</h2>

            <p>These principles sometimes pull in different directions. Fast decisions might conflict with transparency. Distributed leadership might tension with community consensus. <strong>When that happens, we listen first, find common ground, then decide with the mission in mind.</strong></p>

            <p>And if we make the wrong call? We adjust. We explain why. We move forward.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Why This Matters</h2>

            <p>Leading this way is harder than just telling people what to do. It requires more communication. More trust. More vulnerability. But it creates something that command-and-control never can: <strong>a community where people actually care about each other and the work they're building together.</strong></p>

            <p>That's not accidental. That's the point.</p>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="navigation-links">
            <Link href="/about/org-structure" className="nav-link">← Org Structure</Link>
            <Link href="/about" className="nav-link">Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
