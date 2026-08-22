import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { CHAPTERS } from '@/lib/chapters';

const CONTACT_EMAIL = 'inquiry@cometfoundry.com';

export const metadata: Metadata = pageMetadata({
  path: '/for-universities',
  ogTitle: 'For Universities — Comet Foundry',
  description: 'Partner with Comet Foundry to establish a chapter on your campus. Give your student founders the infrastructure they need.',
  keywords: ['for universities', 'comet foundry', 'partnership', 'chapter', 'student entrepreneurship'],
});

const whatIsCards = [
  { num: '01', title: 'A PHYSICAL SPACE', body: 'A dedicated builder space on your campus, open to enrolled students. Operated by a student leadership team under the Comet Foundry Chapter Standard.' },
  { num: '02', title: 'A STRUCTURED PROGRAM', body: 'Four Labs. A Semester Arc from Kickoff to Demo Day. A repeatable system that drives toward builder outcomes every semester — not just community events.' },
  { num: '03', title: 'A GLOBAL NETWORK', body: 'Your chapter is Chapter N of a growing global network. Your students connect with builders at every other Comet Foundry campus. That network is the long-term asset.' },
];

const required = [
  'Official recognition as a registered student organization',
  'A physical space for the chapter to operate',
  'Access to your student body for recruitment and programming',
];
const optional = [
  'Integration with existing entrepreneurship programming',
  'Faculty advisor connection',
  'Access to university resources for chapter events',
];
const never = [
  'Control over chapter programming',
  'Equity or ownership in student-built projects',
  'Academic credit integration (we operate independently)',
];

const processSteps = [
  { num: '01', title: 'EXPRESSION OF INTEREST', desc: 'A faculty member, administrator, or motivated student submits an inquiry. We respond within 5 business days.' },
  { num: '02', title: 'ALIGNMENT CONVERSATION', desc: 'We meet to understand your campus, your students, and what a chapter would look like at your institution.' },
  { num: '03', title: 'CHARTER REVIEW', desc: 'We review the Chapter Standard together. You confirm what your institution can support. We confirm fit from our side.' },
  { num: '04', title: 'CHAPTER LAUNCH', desc: 'Student leadership is selected. The chapter is formally chartered. The first Kickoff Night is scheduled.' },
];

const stats = [
  { num: '257', label: 'APPLICANTS AT CHAPTER 01', sub: 'Before the first semester even began.' },
  { num: '10', label: 'OFFICERS', sub: 'Students who stepped up to lead Chapter 01 before it opened.' },
  { num: '01', label: 'ACTIVE CHAPTER', sub: 'Proving the model works at UTD before expanding everywhere else.' },
];

const h2Style = { fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' };
const cardStyle = { border: '1px solid var(--line)', padding: '28px 24px' };

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / For Universities</div>
          <span className="mission-eyebrow mono">CHAPTERS / FOR UNIVERSITIES</span>
          <h1 className="mission-h1">Your students are already trying to build companies.<br />Give them the infrastructure to do it properly.</h1>
          <p className="doctrine-sub">Comet Foundry partners with universities to establish campus chapters — physical builder spaces that give student founders the community, structure, and resources they need to move from idea to execution.</p>
        </div>
      </section>

      {/* BLOCK 01 / THE CASE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">FOR UNIVERSITIES / 001</span>
          <h2 style={h2Style}>The opportunity sitting on your campus.</h2>
          <div className="mission-prose" style={{ maxWidth: '720px' }}>
            <p>The most ambitious students on your campus are already attempting to start companies. They are doing it in dorm rooms, coffee shops, and Discord servers — without structure, without community, and without the resources that would give their ideas a real chance.</p>
            <p>A Comet Foundry chapter gives them the infrastructure that entrepreneurship education alone cannot: a physical space where builders find each other, a semester-long arc that drives toward real outcomes, and a global network that connects your campus to every other chapter in the movement.</p>
            <p>The question is not whether your students want this. They do. The question is whether your institution will be the one to give it to them.</p>
          </div>
        </div>
      </section>

      {/* BLOCK 02 / WHAT A CHAPTER IS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">FOR UNIVERSITIES / 002</span>
          <h2 style={h2Style}>What you are sanctioning.</h2>
          <div className="mission-three-col">
            {whatIsCards.map((c) => (
              <div key={c.num} style={cardStyle}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>{c.num} · {c.title}</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 03 / CHECKLIST */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">FOR UNIVERSITIES / 003</span>
          <h2 style={h2Style}>What the university provides.</h2>
          <div className="mission-three-col">
            <div style={cardStyle}>
              <h3 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '.08em', color: 'var(--flask)', margin: '0 0 16px' }}>REQUIRED</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {required.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--flask)', flexShrink: 0 }}>✓</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '.08em', color: 'var(--ink-soft)', margin: '0 0 16px' }}>OPTIONAL BUT VALUED</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {optional.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--ink-soft)', flexShrink: 0 }}>◎</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '.08em', color: 'var(--ink-soft)', margin: '0 0 16px' }}>WHAT WE NEVER ASK FOR</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {never.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--ink-soft)', flexShrink: 0 }}>✗</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 04 / PROCESS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">FOR UNIVERSITIES / 004</span>
          <h2 style={h2Style}>How it works.</h2>
          <div className="ch-benefits-grid">
            {processSteps.map((s) => (
              <div key={s.num} style={cardStyle}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>STEP {s.num} · {s.title}</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 05 / NETWORK */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">FOR UNIVERSITIES / 005</span>
          <h2 style={h2Style}>Where we are today.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {CHAPTERS.map((ch) => (
              <Link key={ch.slug} href={`/chapters/${ch.slug}`} className="gov-doc-row">
                <span className="gov-doc-name">CH {ch.num} · {ch.name}</span>
                <span className={`ch-map-badge mono ${ch.status}`} style={{ fontSize: '9px' }}>
                  {ch.status === 'active' ? '● ACTIVE' : '◌ INCOMING'}
                </span>
              </Link>
            ))}
          </div>
          <Link className="hero-cta-secondary" href="/chapters" style={{ marginTop: '28px', display: 'inline-block' }}>SEE THE FULL MAP →</Link>
        </div>
      </section>

      {/* BLOCK 06 / PROOF */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">FOR UNIVERSITIES / 006</span>
          <h2 style={h2Style}>Why it works.</h2>
          <div className="ch-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="ch-stat-card">
                <span className="ch-stat-num">{s.num}</span>
                <span className="ch-stat-label">{s.label}</span>
                <span className="ch-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 07 / CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">START THE CONVERSATION</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>The founders your institution will be proudest of<br />are sitting in your classrooms right now.<br />Let&apos;s give them somewhere to build.</h2>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <a className="hero-cta-primary" href={`mailto:${CONTACT_EMAIL}`}>START THE CONVERSATION →</a>
            <Link className="hero-cta-secondary" href="/chapters/standard">READ THE CHAPTER STANDARD →</Link>
          </div>
          <div className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', marginTop: '32px', letterSpacing: '.08em' }}>
            UNIVERSITY PARTNERSHIPS<br />
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--flask)', textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </section>
    </>
  );
}
