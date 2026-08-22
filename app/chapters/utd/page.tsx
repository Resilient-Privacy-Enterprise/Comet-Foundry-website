import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { LABS } from '@/lib/labs';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = pageMetadata({
  path: '/chapters/utd',
  ogTitle: 'UT Dallas Chapter — Comet Foundry',
  description: 'Chapter 01. Where Comet Foundry started. Where the model was proven. Apply to the UTD chapter.',
  keywords: ['ut dallas', 'utd', 'chapter 01', 'comet foundry', 'richardson'],
});

const spaceSpecs = [
  { title: 'OPEN WORKSPACE', desc: 'Desk space for builders to work alongside each other. Show up, plug in, build something.' },
  { title: 'BUILD BENCH', desc: 'Hardware, tools, and materials for prototyping. If you need to make something physical, this is where it happens.' },
  { title: 'EVENT SPACE', desc: 'Where Kickoff Nights, critique sessions, and Demo Day happen. The room where the community becomes real.' },
];

const phases = [
  { num: '01', title: 'KICKOFF', weeks: 'Week 1–2', desc: 'Open house. Meet the community. Form teams. Pitch ideas. Find collaborators. Everything starts here.', status: 'SEP 01 — CONFIRMED', active: true },
  { num: '02', title: 'EXPERIMENTS', weeks: 'Week 3–14', desc: 'Build. Ship. Learn. Critique nights. Peer feedback. Iterate. Scale. This is where the work happens.', status: 'IN PROGRESS', active: false },
  { num: '03', title: 'DEMO DAY', weeks: 'Week 15', desc: 'Show what you made. Tell your story. Celebrate. Investors. Advisors. Everyone sees what you shipped.', status: 'DEC 2026', active: false },
];

const stats = [
  { num: '257', label: 'APPLICANTS', sub: 'and growing' },
  { num: '12', label: 'OFFICERS', sub: 'of 18 seats filled' },
  { num: '01', label: 'EVENT CONFIRMED', sub: 'Kickoff Night · Sep 01' },
  { num: '04', label: 'LABS RUNNING', sub: 'every chapter runs all four' },
];

const govDocs = [
  { name: 'Constitution & Bylaws', href: 'https://utdallas.box.com/v/Cometfoundrylaws' },
  { name: 'Builder Acceptance Rulebook', href: '/builder-acceptance-rulebook' },
  { name: 'Code of Conduct', href: '/code-of-conduct' },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/chapters">Chapters</Link> / UT Dallas</div>
          <span className="mission-eyebrow mono">COMET FOUNDRY / CHAPTER 01 / UT DALLAS</span>
          <h1 className="mission-h1">UT Dallas.<br />Chapter 01.</h1>
          <p className="doctrine-sub">&ldquo;Where it all started. Where the model was proven.&rdquo;</p>
          <div className="mission-stamp mono">CHAPTER 01 · RICHARDSON TX · EST. 2026 · ● LAB ACTIVE</div>
          <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', marginTop: '12px' }}>257 APPLICANTS · 12 OFFICERS · 1 EVENT CONFIRMED · 4 LABS RUNNING</p>
          <div className="mission-cta-row" style={{ marginTop: '32px' }}>
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO UTD CHAPTER →</a>
            <Link className="hero-cta-secondary" href="/chapters/utd/leadership">VIEW FULL TEAM →</Link>
            <Link className="hero-cta-secondary" href="/events">VIEW EVENTS →</Link>
          </div>
        </div>
      </section>

      {/* THE SPACE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 / THE SPACE</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>Where builders work.</h2>
          <div className="mission-split-grid">
            <div className="mission-prose">
              <p>The UTD builder space is the physical home of Chapter 01. A dedicated lab where builders show up, find each other, and make things — things nobody assigned them, things that might actually matter.</p>
              <p>This is not a classroom. There are no grades, no permission slips, no rubrics for what gets built. Just a room, the right people, and the infrastructure to go from idea to something real.</p>
              <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', marginTop: '24px', lineHeight: 1.8 }}>Location: 800 W Campbell Rd, Richardson, Texas.<br />Room: being finalized.<br />Hours: open late.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {spaceSpecs.map((s, i) => (
                <div key={i} style={{ padding: '20px 24px', border: '1px solid var(--line)', borderLeft: '3px solid var(--flask)' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '.06em', margin: '0 0 8px' }}>{s.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUR LABS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 / THE LABS</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 8px' }}>Four Labs.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '48px' }}>Every chapter runs all four. No exceptions. No substitutions.</p>
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

      {/* SEMESTER ARC */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 / THE ARC</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>One Semester. Three Phases.<br />Ship something real.</h2>
          <div className="mission-three-col">
            {phases.map((p) => (
              <div key={p.num} className="model-col" style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
                <span className="model-label mono" style={{ color: 'var(--flask)' }}>PHASE {p.num} / {p.title}</span>
                <p className="mono" style={{ fontSize: '10px', color: 'var(--ink-soft)', margin: '4px 0 12px', letterSpacing: '.1em' }}>{p.weeks}</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 16px' }}>{p.desc}</p>
                <span className="mono" style={{
                  display: 'inline-block', fontSize: '9px', letterSpacing: '.1em', padding: '3px 10px',
                  ...(p.active
                    ? { background: 'rgba(31,111,92,.1)', border: '1px solid rgba(31,111,92,.3)', color: 'var(--flask)' }
                    : { color: 'var(--ink-soft)', border: '1px solid var(--line)' }
                  )
                }}>{p.status}</span>
              </div>
            ))}
          </div>
          <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: '32px', display: 'inline-block' }}>BUILD TOWARD DEMO DAY →</a>
        </div>
      </section>

      {/* STATS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 / BY THE NUMBERS</span>
          <div className="ch-stats-grid" style={{ marginTop: '24px' }}>
            {stats.map((s, i) => (
              <div key={i} className="ch-stat-card">
                <span className="ch-stat-num">{s.num}</span>
                <span className="ch-stat-label mono">{s.label}</span>
                <span className="ch-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* EVENTS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 / EVENTS</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>What&apos;s Happening.</h2>
          <div style={{ border: '1px solid var(--flask)', padding: '32px' }}>
            <span className="block-eyebrow mono" style={{ marginBottom: '12px', display: 'block' }}>NEXT · SEP 01 · UTD</span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 10px' }}>Foundry Kickoff Night</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>First open house of the semester. Tour the space, pitch a half-formed idea, find someone to build it with.</p>
            <div className="mono" style={{ display: 'flex', gap: '24px', fontSize: '11px', color: 'var(--ink-soft)', marginTop: '12px' }}>
              <span>UT Dallas — Lab 01</span>
              <span>7:00 PM</span>
            </div>
            <a className="hero-cta-primary" href="/events/kickoff-night" style={{ marginTop: '20px', display: 'inline-block' }}>RSVP →</a>
          </div>
          <Link className="hero-cta-secondary" href="/events" style={{ marginTop: '24px', display: 'inline-block' }}>VIEW ALL UTD EVENTS →</Link>
        </div>
      </section>

      {/* BUILDS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 / BUILT HERE</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>Builds In Progress.</h2>
          <div style={{ border: '1px dashed var(--line)', padding: '48px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: 'var(--ink-soft)', margin: '0 0 8px' }}>Nothing shipped yet.</p>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', margin: 0 }}>That&apos;s the point. Check back as the semester runs. :)</p>
          </div>
          <a className="hero-cta-secondary" href={APPLY_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: '24px', display: 'inline-block' }}>START BUILDING →</a>
        </div>
      </section>

      {/* ALUMNI */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 / ALUMNI</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>What Gets Built Here<br />Doesn&apos;t Stay Here.</h2>
          <div style={{ border: '1px solid var(--line)', padding: '48px' }}>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 12px' }}>&ldquo;The first cohort of UTD builders has not graduated yet.</p>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 12px' }}>When they do — and when the companies they started here are real, the products they shipped are live, and the teams they built are hiring — this is where that story lives.</p>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>This page will fill itself.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER 01 / GOVERNANCE</span>
          <div className="gov-doc-list" style={{ marginTop: '16px' }}>
            {govDocs.map((doc, i) => (
              <a key={i} href={doc.href} target={doc.href.startsWith('http') ? '_blank' : undefined} rel={doc.href.startsWith('http') ? 'noopener' : undefined} className="gov-doc-row">
                <span className="gov-doc-name">{doc.name}</span>
                <span className="gov-doc-action mono">View →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">CHAPTER 01 / GET IN</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>Chapter 01 is live.<br />The only thing missing is you.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginTop: '8px' }}>&ldquo;257 people applied. The door is still open.&rdquo;</p>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO UTD CHAPTER →</a>
            <Link className="hero-cta-secondary" href="/chapters">VIEW THE FULL MAP →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
