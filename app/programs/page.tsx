import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/programs',
  ogTitle: 'Programs — Comet Foundry',
  description: "Four labs, not departments: Build, Think, Network, and After Hours. Drop into whichever matches what you're in the mood for this week.",
});

const LABS = [
  { num: '01', name: 'Build Lab', cmd: 'Make things.', detail: 'Weekend build sprints, prototyping sessions, and open workshop hours with the hardware bench and dev tools. Show up with an idea, leave with a v1.', stamp: 'MAKE →', annot: 'seriously, anything' },
  { num: '02', name: 'Think Lab', cmd: 'Have an opinion.', detail: 'Mentorship, research discussions, and 1:1 feedback sessions. Bring a half-formed argument and leave with a sharper one — preferably a controversial one.', stamp: 'preferably controversial' },
  { num: '03', name: 'Network Lab', cmd: 'Meet people.', detail: 'Demo nights, founder dinners, and industry partnerships. The useful kind of networking — the kind where you actually stay in touch.', stamp: 'the useful kind' },
  { num: '04', name: 'After Hours', cmd: 'Touch grass. 😂', detail: 'Informal hangouts, game nights, and the community that makes the other three labs worth showing up for. Occasionally, we go outside.', stamp: 'occasionally' },
];

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
                  <h3>{lab.name}</h3>
                  <p className="cmd mono">{lab.cmd}</p>
                  <p className="detail">{lab.detail}</p>
                </div>
                <div className="lab-actions">
                  <Link className="lab-link" href="/events">See {lab.name} events →</Link>
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
