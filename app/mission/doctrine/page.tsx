import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = pageMetadata({
  path: '/mission/doctrine',
  ogTitle: 'The Doctrine — Comet Foundry',
  description: 'The Doctrine is the set of beliefs every Comet Foundry chapter inherits. Not rules — a point of view on what it means to build something real.',
  keywords: ['doctrine', 'beliefs', 'mission', 'comet foundry values', 'chapter standard'],
});

const beliefs = [
  {
    num: '01',
    title: 'EVERY BACKGROUND IS A FEATURE.\nNOT A QUALIFIER.',
    body: 'The best founding teams are not the most homogeneous. They are the most complementary. Engineering, design, business, art, policy — every discipline has produced world-changing companies. Comet Foundry does not filter by major, GPA, or prior experience. We filter by ambition and seriousness of intent.',
    hand: 'your major doesn\'t define your ceiling :)',
  },
  {
    num: '02',
    title: 'EXECUTION IS THE ONLY CREDENTIAL\nTHAT MATTERS HERE.',
    body: 'What you have built — or are actively trying to build — matters more than any title, grade, or internship on your resume. A rough thing that exists is worth more than a perfect thing that lives in a slide deck. We have a permanent bias toward shipping.',
    hand: 'slides don\'t count. sorry.',
  },
  {
    num: '03',
    title: 'COMMUNITY IS THE INFRASTRUCTURE.',
    body: 'The most valuable thing we provide is not a room or a resource library. It is proximity to other people who are building. Co-founders are found here. Collaborators are found here. The peer pressure to keep going is found here. We protect that community with standards, structure, and intention.',
    hand: 'your future co-founder might be sitting next to you',
  },
  {
    num: '04',
    title: 'THE CHAPTER IS A MEANS, NOT AN END.',
    body: 'Comet Foundry chapters exist to produce founders, builders, and companies — not to sustain themselves. A chapter that runs great events but produces nothing is a failure. A chapter that ships ugly prototypes, finds co-founders, and launches real things is a success. We measure outcomes, not activity.',
    hand: 'ugly prototypes > pretty presentations',
  },
  {
    num: '05',
    title: 'FAILURE IS DATA, NOT DISGRACE.',
    body: "Every experiment fails until it doesn't. We do not celebrate failure for its own sake — that is theater. We create the conditions where failure is survivable, informative, and fast. The faster you learn what doesn't work, the faster you find what does.",
    hand: 'fail fast, learn faster, try again tomorrow',
  },
  {
    num: '06',
    title: 'OPENNESS IS NON-NEGOTIABLE.',
    body: 'No gatekeeping by resume, network, or background. No closed rooms for the "right" people. Every student at every chapter campus has the right to apply and be evaluated on the same criteria: seriousness of intent, clarity of direction, and willingness to show up.',
    hand: 'if you show up, you belong here. period.',
  },
];

const weAreNot = [
  'A networking club.',
  'A resume line.',
  'A pitch competition pipeline.',
  'A safe space for vague ideas.',
  'A place to plan without building.',
  'A replacement for hard work.',
];

const weAre = [
  'A builder community.',
  'A launchpad for real companies.',
  'A place where things get shipped.',
  'A space that demands follow-through.',
  'A network that compounds over time.',
  'The infrastructure founders needed earlier.',
];

const standards = [
  { num: '01', title: 'Run all Four Labs every semester.', sub: 'Build Lab, Think Lab, Network Lab, After Hours. No exceptions. No substitutions.' },
  { num: '02', title: 'Run the Semester Arc.', sub: 'Kickoff, Experiments, Demo Day. Every semester. Every campus.' },
  { num: '03', title: 'Evaluate builders on merit alone.', sub: 'Seriousness of intent. Project clarity. Prior initiative. Mission alignment. Nothing else.' },
  { num: '04', title: 'Maintain open access.', sub: 'Any enrolled student may apply. No pre-screening by major, GPA, or background.' },
  { num: '05', title: 'Report outcomes.', sub: 'Builds shipped. Teams formed. Companies started. Jobs created. The network grows on proof.' },
];

export default function Page() {
  return (
    <>
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/mission/why">Mission</Link> / The Doctrine</div>
          <span className="mission-eyebrow mono">MISSION / 002</span>
          <h1 className="mission-h1">
            This is what we<br />
            believe. This is<br />
            <span className="orange">what we stand for.</span>
          </h1>
          <p className="doctrine-sub">The Doctrine is the set of beliefs every Comet Foundry chapter inherits when it carries the name. It is not a list of rules. It is a point of view on what it means to build something real.</p>
          <span className="hand doctrine-hand-hero">not a rulebook. a compass.</span>
        </div>
      </section>

      <div className="doctrine-breaker">
        <div className="wrap">
          <span className="hand doctrine-breaker-text">six things we will never compromise on...</span>
        </div>
      </div>

      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE BELIEFS</span>
          <div className="beliefs-list">
            {beliefs.map((b) => (
              <div key={b.num} className="belief-card">
                <div className="belief-header">
                  <span className="belief-num mono">BELIEF {b.num}</span>
                  <span className="hand belief-hand">{b.hand}</span>
                </div>
                <h3 className="belief-title">{b.title}</h3>
                <p className="belief-body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="doctrine-breaker doctrine-breaker-dark">
        <div className="wrap">
          <span className="hand doctrine-breaker-text">ok but what does that actually look like?</span>
        </div>
      </div>

      <section className="mission-block doctrine-contrast">
        <div className="wrap">
          <span className="block-eyebrow mono">WHAT THIS IS NOT</span>
          <span className="hand doctrine-contrast-hand">we get asked this a lot lol</span>
          <div className="contrast-grid">
            <div className="contrast-col contrast-not">
              <h3 className="contrast-label">WE ARE NOT:</h3>
              <ul>{weAreNot.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
            <div className="contrast-col contrast-yes">
              <h3 className="contrast-label">WE ARE:</h3>
              <ul>{weAre.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
          </div>
          <span className="hand doctrine-contrast-bottom">^ if this doesn&apos;t excite you, we&apos;re probably not your thing. and that&apos;s ok.</span>
        </div>
      </section>

      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">WHAT EVERY CHAPTER INHERITS</span>
          <p className="doctrine-intro">Every chapter that carries the Comet Foundry name commits to the following:</p>
          <span className="hand doctrine-hand-standards">non-negotiable. every campus. every semester.</span>
          <div className="standards-list">
            {standards.map((s) => (
              <div key={s.num} className="standard-row">
                <span className="standard-num mono">{s.num}</span>
                <div>
                  <h4 className="standard-title">{s.title}</h4>
                  <p className="standard-sub">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/chapters/standard" className="doctrine-link mono">Read The Full Chapter Standard →</Link>
        </div>
      </section>

      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="hand doctrine-cta-hand">ready to build something?</span>
          <div className="mission-cta-row">
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO YOUR CHAPTER →</a>
            <Link className="hero-cta-secondary" href="/leadership">Read Foundation Leadership →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
