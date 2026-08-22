import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/projects',
  ogTitle: 'Projects — Comet Foundry',
  description: "Member-built projects from Comet Foundry, UT Dallas's hacker house. This wall is just getting started — check back as things ship.",
});

function ComingSoonCard() {
  return (
    <div className="coming-soon-card">
      <span className="tag mono">COMING SOON</span>
      <h3>Member Project</h3>
      <p>This spot&apos;s open. Member-built projects will show up here as they ship.</p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Projects</div>
          <h1>Built Here</h1>
          <span className="hero-note hand">no results yet, some of the time</span>
          <p className="lede">This wall is just getting started — nothing shipped yet, but this is where it&apos;ll live once it does.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="card-grid">
            <ComingSoonCard />
            <ComingSoonCard />
            <ComingSoonCard />
          </div>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">YOUR TURN</span>
            <h2>Add Yours To The Wall</h2>
          </div>
          <a
            className="rsvp-btn"
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            START BUILDING →
          </a>
        </div>
      </section>
    </>
  );
}
