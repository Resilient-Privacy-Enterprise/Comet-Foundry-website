import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { LABS } from '@/lib/labs';

export const metadata: Metadata = pageMetadata({
  path: '/programs',
  ogTitle: 'Programs — Comet Foundry',
  description: "Four labs, not departments: Build, Think, Network, and After Hours. Drop into whichever matches what you're in the mood for this week.",
});

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Programs</div>
          <h1>Four Labs</h1>
          <span className="hero-note hand">pick your mood</span>
          <p className="lede">Not departments — just the four things worth doing here. Drop into whichever matches what you&apos;re in the mood for this week.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="labs-grid">
            {LABS.map((lab) => (
              <div className="lab-card" style={{ minHeight: 340 }} key={lab.num}>
                {lab.annot && <span className="lab-annot hand">{lab.annot}</span>}
                <div>
                  <span className="code mono">LAB / {lab.num}</span>
                  <h3><Link href={`/programs/${lab.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{lab.name}</Link></h3>
                  <p className="cmd mono">{lab.cmd}</p>
                  <p className="detail">{lab.detail}</p>
                </div>
                <div className="lab-actions">
                  <Link className="lab-link" href={`/programs/${lab.slug}`}>More on {lab.name} →</Link>
                  <span className="stamp">{lab.stamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">NEXT STEP</span>
            <h2>Find Your Lab</h2>
            <p>Check what&apos;s actually on the calendar this month.</p>
          </div>
          <Link className="rsvp-btn" href="/events" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>VIEW EVENTS →</Link>
        </div>
      </section>
    </>
  );
}
