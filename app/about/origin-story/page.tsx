import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/about/origin-story',
  ogTitle: 'Origin Story — Comet Foundry',
  description: 'How Comet Foundry was founded at UT Dallas and how it\'s becoming a global movement.',
});

export default function OriginStoryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/about">About</Link> / Origin Story</div>
          <h1>How This Started</h1>
          <span className="hero-note hand">the beginning</span>
          <p className="lede">A conversation in a dorm room became a movement.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2>The Observation</h2>
            <p>In 2026, something was happening at UT Dallas that probably happens at every campus: brilliant ideas would spark in group chats and late-night conversations. Students would get excited. They'd plan it out. Then nothing.</p>

            <p>The group chat would move on. The moment would pass. The idea would become another "yeah, we should totally do that someday."</p>

            <p>It wasn't because the ideas were bad. It wasn't because the people lacked talent or ambition. <strong>The problem was simpler: they didn't have a place.</strong></p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Building the Space</h2>

            <p>We decided to create that place. Not a club with meetings and bureaucracy. Not another student org. A hacker house. A room. Some people. Permission to build.</p>

            <p>What happened next surprised us. The space filled instantly. Builders came. They brought ideas. They found collaborators. They started shipping things. No gatekeeping. No approval process. Just people who wanted to build, and a space that let them.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>From One Campus to Global</h2>

            <p>Within months, we got messages from other schools. "Can we start this at our campus?" "We need this where we are." We realized the need wasn't unique to UTD. <strong>Every campus had builders stuck in the same trap.</strong></p>

            <p>That's when the vision shifted from one hacker house to a movement. We started helping other locations launch their own spaces. We built infrastructure to connect builders globally. We created something that could scale beyond one room at one university.</p>

            <p>Today, Comet Foundry is still rooted at UT Dallas—that's our home, our origin. But it exists for every builder ready to take a chance on an idea, regardless of where they are.</p>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="navigation-links">
            <Link href="/about/mission" className="nav-link">← Mission</Link>
            <Link href="/about" className="nav-link">Back to About</Link>
            <Link href="/about/dual-structure" className="nav-link">Dual Structure →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
