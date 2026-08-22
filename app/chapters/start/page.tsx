import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { CHAPTERS } from '@/lib/chapters';

const EXPRESS_INTEREST_URL = 'https://forms.cloud.microsoft/r/FPR6PcbQaN';

export const metadata: Metadata = pageMetadata({
  path: '/chapters/start',
  ogTitle: 'Start a Chapter — Comet Foundry',
  description: 'Bring Comet Foundry to your campus. Start a chapter at your university.',
  keywords: ['start a chapter', 'comet foundry', 'university', 'campus', 'founding'],
});

const nextChapterNum = String(CHAPTERS.length + 1).padStart(2, '0');

const whoCards = [
  { title: 'THE MOTIVATED STUDENT', body: 'You are enrolled at a university not yet on our map. You have looked at your campus and seen the builders who are trying to start something without the infrastructure to do it. You want to be the person who changes that. Start here.' },
  { title: 'THE FACULTY MEMBER', body: 'You work at a university and you have watched talented students leave without ever building the thing they were capable of. You want to give them the space to do it. We want to work with you.' },
  { title: 'THE ADMINISTRATOR', body: 'Your institution is committed to entrepreneurship and innovation. You are looking for a partner that brings structure, community, and a global network to your campus. That is what Comet Foundry does.' },
];

const processSteps = [
  { num: '01', title: 'SUBMIT YOUR INTEREST', desc: 'Fill out the expression of interest form. Tell us about your campus, your founding team, and why Comet Foundry belongs there. We respond within 5 business days.' },
  { num: '02', title: 'ALIGNMENT CALL', desc: 'We get on a call to understand your campus, your students, and your vision for the chapter. We assess fit from both sides — this is a two-way conversation.' },
  { num: '03', title: 'CHARTER REVIEW', desc: 'We walk through the Chapter Standard together. You confirm what your institution can commit to. We confirm that all five requirements can be met.' },
  { num: '04', title: 'CHAPTER LAUNCHED', desc: 'Your founding officer team is finalized. The chapter is formally chartered by the Foundation. Your first Kickoff Night is scheduled. You are on the map.' },
];

const prereqs = [
  'Enrollment at your university (for student applicants)',
  'A founding team of at least 3 motivated students',
  'A path to university recognition as a registered student organization',
  'Access to a physical space on campus',
  'Commitment to running all Five Requirements every semester',
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/chapters">Chapters</Link> / Bring It To Your Campus</div>
          <span className="mission-eyebrow mono">CHAPTERS / START A CHAPTER</span>
          <h1 className="mission-h1">Your campus.<br />Chapter {nextChapterNum}.<br />Let&apos;s build it.</h1>
          <p className="doctrine-sub">Comet Foundry chapters are started by motivated students — people who looked at their campus and decided their fellow builders deserved better infrastructure. If that&apos;s you, this is where it starts.</p>
        </div>
      </section>

      {/* WHO STARTS A CHAPTER */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">START A CHAPTER / 001</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>Who this is for.</h2>
          <div className="mission-three-col">
            {whoCards.map((c, i) => (
              <div key={i} style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '.04em', margin: '0 0 12px', textTransform: 'uppercase' }}>{c.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU ARE COMMITTING TO */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">START A CHAPTER / 002</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 16px' }}>What starting a chapter means.</h2>
          <div className="mission-prose" style={{ maxWidth: '680px' }}>
            <p>Starting a Comet Foundry chapter is not filling out a form. It is committing to building something real at your institution — and running it to the standard that makes the name worth carrying.</p>
            <p>Before you apply, read the Chapter Standard. It tells you exactly what every chapter must do and what happens if it doesn&apos;t.</p>
          </div>
          <Link className="hero-cta-secondary" href="/chapters/standard" style={{ marginTop: '20px', display: 'inline-block' }}>READ THE CHAPTER STANDARD →</Link>
          <div style={{ marginTop: '32px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '.08em', marginBottom: '16px', color: 'var(--flask)' }}>WHAT YOU WILL NEED</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {prereqs.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--flask)', flexShrink: 0 }}>✓</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">START A CHAPTER / 003</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>How it works.</h2>
          <div className="ch-benefits-grid">
            {processSteps.map((s) => (
              <div key={s.num} style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>STEP {s.num} · {s.title}</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPRESSION OF INTEREST */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">START A CHAPTER / 004</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>Start the conversation.</h2>
          <div style={{ border: '1px solid var(--flask)', padding: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>Tell us about your campus, your founding team, and why Comet Foundry belongs at your university.</p>
            <a className="hero-cta-primary" href={EXPRESS_INTEREST_URL} target="_blank" rel="noopener noreferrer">SUBMIT EXPRESSION OF INTEREST →</a>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', marginTop: '20px' }}>Prefer email? Reach out directly: <a href="mailto:inquiry@cometfoundry.com" style={{ color: 'var(--flask)', textDecoration: 'none' }}>inquiry@cometfoundry.com</a></p>
          </div>
        </div>
      </section>

      {/* CURRENT PIPELINE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">WHERE WE ARE</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>The map is growing.</h2>
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
    </>
  );
}
