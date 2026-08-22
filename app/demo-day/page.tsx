import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { CHAPTERS } from '@/lib/chapters';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = pageMetadata({
  path: '/demo-day',
  ogTitle: 'Demo Day — Comet Foundry',
  description: 'Demo Day is where the semester ends. Show what you built. Every Comet Foundry chapter runs Demo Day at the end of every semester.',
  keywords: ['demo day', 'comet foundry', 'semester', 'builders', 'utd'],
});

const whatCards = [
  { title: 'WHAT IT IS', body: 'The final event of every Comet Foundry semester. Every builder presents what they built. The community, advisors, and invited guests are in the room.' },
  { title: 'WHAT IT IS NOT', body: 'A pitch competition. A judged event. A place where only the best projects get celebrated. Every builder who ships gets the stage.' },
  { title: 'WHO IS IN THE ROOM', body: 'Fellow builders. Chapter advisors. Foundation leadership. Invited operators and investors. People who have built things and want to see what you built.' },
];

const steps = [
  { num: '01', title: 'DOORS OPEN', desc: 'The room fills. Builders set up. Guests arrive. The energy is different from every other night this semester. It should be.' },
  { num: '02', title: 'THE BUILDS', desc: 'Every builder gets time on the stage. Show the product. Explain the problem. Tell the story of the fifteen weeks it took to get here. No slides required.' },
  { num: '03', title: 'THE CONVERSATION', desc: 'After presentations, the room opens up. Guests move between builds. Real conversations happen. Some of them matter more than the presentations did.' },
  { num: '04', title: 'WHAT COMES NEXT', desc: 'Demo Day is not the end. It is the beginning of whatever comes next for every builder in the room. Some projects keep going. Some pivot. Some become companies. All of them are more real than they were fifteen weeks ago.' },
];

const phases = [
  { num: '01', title: 'KICKOFF', week: 'Week 1-2', desc: 'Meet the community. Form teams. Pitch ideas. Find collaborators. Everything starts here.', active: false },
  { num: '02', title: 'EXPERIMENTS', week: 'Week 3-14', desc: 'Build. Ship. Learn. Iterate. Critique nights. Peer feedback. Scale. This is where the work happens.', active: false },
  { num: '03', title: 'DEMO DAY', week: 'Week 15', desc: 'Show what you made. Tell your story. Celebrate. This is where it ends.', active: true },
];

const h2Style = { fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' };
const cardStyle = { border: '1px solid var(--line)', padding: '28px 24px' };

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/programs">The Labs</Link> / Demo Day</div>
          <span className="mission-eyebrow mono">THE LABS / DEMO DAY</span>
          <h1 className="mission-h1">Demo Day.<br />Show what you built.</h1>
          <span className="hero-note hand" style={{ color: 'var(--flask)', display: 'block', margin: '16px 0 20px' }}>no hiding. no excuses.</span>
          <p className="doctrine-sub">One semester. Fifteen weeks. Everything leads to this.</p>
          <div className="mission-stamp mono">CHAPTER 01 · UT DALLAS · DEC 2026 · THE FIRST ONE</div>
        </div>
      </section>

      {/* BLOCK 01 */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">DEMO DAY / 001</span>
          <h2 style={h2Style}>Not a pitch competition.<br />A proof of work.</h2>
          <div className="mission-split-grid">
            <div>
              <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.6, fontWeight: 500, margin: '0 0 20px' }}>Demo Day is not about having the best idea in the room.</p>
              <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 16px' }}>It is about showing up with something real — something that existed in your head fifteen weeks ago and exists in the world now.</p>
              <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>Polished or rough. Finished or in progress. The only requirement is that it is real.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {whatCards.map((c, i) => (
                <div key={i} style={cardStyle}>
                  <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>{c.title}</span>
                  <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '10px 0 0' }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 02 / FORMAT */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">DEMO DAY / 002</span>
          <h2 style={h2Style}>How it runs.</h2>
          <div className="ch-benefits-grid">
            {steps.map((s) => (
              <div key={s.num} style={cardStyle}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>STEP {s.num} · {s.title}</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 03 / SEMESTER ARC */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">DEMO DAY / 003</span>
          <h2 style={h2Style}>Everything leads here.</h2>
          <div className="mission-three-col">
            {phases.map((p) => (
              <div key={p.num} style={{ border: p.active ? '2px solid var(--flask)' : '1px solid var(--line)', padding: '28px 24px', background: p.active ? 'var(--paper-raised)' : 'transparent' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>PHASE {p.num} · {p.title}</span>
                <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', margin: '6px 0 12px' }}>{p.week}</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                {p.active && <span className="hand" style={{ display: 'block', marginTop: '14px', color: 'var(--flask)' }}>→ You are here.</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 04 / THIS SEMESTER */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">DEMO DAY / 004</span>
          <h2 style={h2Style}>Chapter 01 · Fall 2026.</h2>
          <div style={{ border: '1px solid var(--line)', padding: '40px' }}>
            <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>DEMO DAY · CHAPTER 01</span>
            <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-.01em', margin: '12px 0 8px' }}>The First One.</h3>
            <p className="mono" style={{ fontSize: '12px', color: 'var(--ink-soft)', margin: '0 0 4px' }}>Fall 2026 · UT Dallas</p>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--flask)', letterSpacing: '.08em', margin: '0 0 4px' }}>◌ DATE BEING FINALIZED</p>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', margin: '0 0 20px' }}>800 W Campbell Rd, Richardson, Texas</p>
            <p style={{ fontSize: '15px', color: 'var(--ink)', lineHeight: 1.6, fontStyle: 'italic', margin: '0 0 28px', maxWidth: '640px' }}>&ldquo;The first Comet Foundry Demo Day. The one that sets the standard for every Demo Day after it.&rdquo;</p>
            <div className="mission-cta-row">
              <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO BUILD TOWARD THIS →</a>
              <Link className="hero-cta-secondary" href="/events">VIEW EVENTS →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 05 / EVERY CHAPTER */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">DEMO DAY / 005</span>
          <h2 style={h2Style}>One standard.<br />Every campus.<br />Every semester.</h2>
          <div className="mission-prose" style={{ maxWidth: '720px' }}>
            <p>Demo Day is not a UTD event. It is a Comet Foundry standard. Every chapter that carries the name runs Demo Day at the end of every semester — at their campus, with their builders, with their community.</p>
            <p>The first one happens at UTD. Every one after that happens wherever the movement grows.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '32px' }}>
            {CHAPTERS.map((ch) => (
              <Link key={ch.slug} href={`/chapters/${ch.slug}`} className="gov-doc-row">
                <span className="gov-doc-name">CH {ch.num} · {ch.name}</span>
                <span className={`ch-map-badge mono ${ch.status}`} style={{ fontSize: '9px' }}>
                  {ch.status === 'active' ? '● ACTIVE · FALL 2026' : '◌ INCOMING'}
                </span>
              </Link>
            ))}
          </div>
          <Link className="hero-cta-secondary" href="/chapters" style={{ marginTop: '28px', display: 'inline-block' }}>SEE ALL CHAPTERS →</Link>
        </div>
      </section>

      {/* BLOCK 06 / CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">BUILD TOWARD IT</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>Fifteen weeks from now,<br />you could be on that stage.</h2>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO JOIN →</a>
            <Link className="hero-cta-secondary" href="/programs/semester-arc">READ THE SEMESTER ARC →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
