import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { CHAPTERS } from '@/lib/chapters';

export const metadata: Metadata = pageMetadata({
  path: '/chapters/standard',
  ogTitle: 'The Chapter Standard — Comet Foundry',
  description: 'The name means something. This is what it takes to carry it. Every Comet Foundry chapter operates under the same standard.',
  keywords: ['chapter standard', 'comet foundry', 'requirements', 'charter'],
});

const requirements = [
  {
    num: '01',
    title: 'RUN ALL FOUR LABS.',
    body: 'Build Lab. Think Lab. Network Lab. After Hours. Every chapter runs all four every semester. No substitutions. No modifications. No exceptions.',
    detail: 'The Four Labs are the foundation of the Comet Foundry experience. They are what a builder at any chapter can expect to find, regardless of which campus they are on.',
  },
  {
    num: '02',
    title: 'RUN THE SEMESTER ARC.',
    body: 'Kickoff Night. Experiments. Demo Day. Every semester, every chapter runs the full arc — from the first open house to the final presentation.',
    detail: 'The Semester Arc is what drives chapters toward outcomes rather than activity. Without it, a chapter is a community. With it, a chapter is a launchpad.',
  },
  {
    num: '03',
    title: 'EVALUATE BUILDERS ON MERIT ALONE.',
    body: 'Seriousness of intent. Clarity of direction. Prior initiative. Mission alignment. These are the only criteria for builder selection.',
    detail: 'GPA, major, year of study, prior experience, and network connections are not valid criteria. Any chapter found filtering builders on these grounds is in violation of the standard.',
  },
  {
    num: '04',
    title: 'MAINTAIN OPEN ACCESS.',
    body: 'Any enrolled student at the chapter\'s host university may apply to join. No pre-screening. No closed cohorts. No invitation-only intake.',
    detail: 'Open access is non-negotiable. It is the difference between a builder community and an exclusive club. Comet Foundry does not run clubs.',
  },
  {
    num: '05',
    title: 'REPORT OUTCOMES EVERY SEMESTER.',
    body: 'Builds shipped. Teams formed. Companies started. Internships placed. Jobs created. Co-founders matched.',
    detail: 'Every chapter submits an outcomes report to the Foundation at the end of each semester. The network grows on proof, not promises.',
  },
];

const benefits = [
  { title: 'THE NAME', desc: 'The Comet Foundry name, brand, and identity — one of the fastest growing founder movement brands on college campuses. The name opens doors that a standalone student org cannot.' },
  { title: 'THE NETWORK', desc: 'Direct connection to every other Comet Foundry chapter globally. Builders at your chapter can find co-founders, collaborators, and opportunities at every other campus in the network.' },
  { title: 'THE INFRASTRUCTURE', desc: 'The Chapter Standard, the Semester Arc playbook, the Builder intake system, the governance documents, and the operational framework built and maintained by the Foundation.' },
  { title: 'THE BACKING', desc: 'Access to Foundation-level partnerships, backer relationships, and resources that individual chapters could not access independently. The network\'s credibility compounds with every chapter that meets the standard.' },
];

const enforcementSteps = [
  { num: '01', title: 'NOTICE', desc: 'The chapter receives a formal written notice from the Foundation identifying the specific requirement not being met and a remediation timeline.' },
  { num: '02', title: 'REMEDIATION PERIOD', desc: 'The chapter has one semester to demonstrate compliance. The Foundation provides support and guidance during this period.' },
  { num: '03', title: 'REVIEW', desc: 'At the end of the remediation period, the Foundation reviews the chapter\'s compliance status. If requirements are met, the chapter continues in good standing.' },
  { num: '04', title: 'CHARTER REVOCATION', desc: 'If a chapter fails to meet the standard after the remediation period, the Foundation revokes the chapter\'s charter. The Comet Foundry name, brand, identity, and all associated intellectual property revert to the Foundation immediately and permanently.' },
];

const charterSteps = [
  { num: '01', title: 'EXPRESSION OF INTEREST', desc: 'A motivated student, faculty member, or administrator submits an inquiry to the Foundation. We respond within 5 business days.' },
  { num: '02', title: 'ALIGNMENT CONVERSATION', desc: 'We meet to understand your campus, your student body, and what a chapter would look like at your institution. We assess fit from both sides.' },
  { num: '03', title: 'CHARTER REVIEW', desc: 'We review the Chapter Standard together. You confirm what your institution can commit to. We confirm that the standard can be met.' },
  { num: '04', title: 'CHARTER GRANTED', desc: 'Student leadership is selected through the Foundation\'s officer selection process. The chapter is formally chartered. The first Kickoff Night is scheduled.' },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/chapters">Chapters</Link> / Chapter Standard</div>
          <span className="mission-eyebrow mono">CHAPTERS / THE STANDARD</span>
          <h1 className="mission-h1">The name means something.<br />This is what it takes<br />to carry it.</h1>
          <p className="doctrine-sub">Every Comet Foundry chapter operates under the same standard — regardless of campus, city, or country. This is not a suggestion. It is the condition under which the name is granted and the condition under which it is kept.</p>
          <div className="mission-stamp mono">BINDING ON ALL CHAPTERS · EST. 2026 · COMET FOUNDRY FOUNDATION</div>
        </div>
      </section>

      {/* WHY THE STANDARD EXISTS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE STANDARD / 001</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>One name. One expectation.<br />Every campus.</h2>
          <div className="mission-prose" style={{ maxWidth: '680px' }}>
            <p>Comet Foundry is not a franchise. It is not a licensing arrangement. It is a movement with a standard — and the standard is what makes the network worth belonging to.</p>
            <p>A student at MIT and a student at UT Dallas should be able to walk into any Comet Foundry chapter anywhere in the world and recognize the same structure, the same culture, and the same expectation: that people here build things, and that the community exists to support that.</p>
            <p>The Chapter Standard is how we protect that promise. At every campus. For every builder. Every semester.</p>
          </div>
        </div>
      </section>

      {/* FIVE REQUIREMENTS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE STANDARD / 002</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 8px' }}>What every chapter must do.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '32px', maxWidth: '600px' }}>These are not guidelines. Every chapter that carries the Comet Foundry name commits to all five — every semester, without exception.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {requirements.map((r) => (
              <div key={r.num} style={{ border: '1px solid var(--line)', borderLeft: '3px solid var(--flask)', padding: '28px 32px' }}>
                <span className="mono" style={{ fontSize: '11px', letterSpacing: '.1em', color: 'var(--flask)' }}>REQUIREMENT {r.num}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '8px 0', textTransform: 'uppercase', letterSpacing: '-.01em' }}>{r.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 8px' }}>{r.body}</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CHAPTERS RECEIVE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE STANDARD / 003</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 8px' }}>What the name gives you.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '32px', maxWidth: '600px' }}>Meeting the standard is not just an obligation. It is an entry point into everything the network provides.</p>
          <div className="ch-benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '.04em', margin: '0 0 12px', textTransform: 'uppercase' }}>{b.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NON-COMPLIANCE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE STANDARD / 004</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 8px' }}>What happens if a chapter<br />doesn&apos;t meet the standard.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '32px', maxWidth: '600px' }}>The standard exists because the name has value. Protecting that value means enforcing the standard — consistently, transparently, and without exception.</p>
          <div className="mission-split-grid">
            <div>
              <h3 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '.1em', marginBottom: '20px', color: 'var(--flask)' }}>THE PROCESS</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {enforcementSteps.map((s) => (
                  <div key={s.num} style={{ borderLeft: '2px solid var(--line)', paddingLeft: '20px' }}>
                    <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>STEP {s.num} · {s.title}</span>
                    <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '6px 0 0' }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '.1em', marginBottom: '20px', color: 'var(--flask)' }}>WHAT REVOCATION MEANS</h3>
              <div style={{ border: '1px solid var(--line)', padding: '28px', fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.8, fontStyle: 'italic' }}>
                <p style={{ margin: '0 0 16px' }}>A chapter that loses its charter loses the right to use the Comet Foundry name, brand, visual identity, and any materials developed under the Comet Foundry identity.</p>
                <p style={{ margin: '0 0 16px' }}>All progress made under the Comet Foundry name — the community built, the reputation earned, the outcomes achieved — belongs to the Foundation and the network, not to any individual chapter or its officers.</p>
                <p style={{ margin: '0 0 16px' }}>A former chapter may not rebrand and continue operating as a substantially similar organization under a different name using infrastructure, relationships, or community built under the Comet Foundry identity.</p>
                <p style={{ margin: 0 }}>The Foundation&apos;s decision on charter revocation is final.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW A CHAPTER GETS CHARTERED */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE STANDARD / 005</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>How to earn the name.</h2>
          <div className="ch-benefits-grid">
            {charterSteps.map((s) => (
              <div key={s.num} style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>STEP {s.num} · {s.title}</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER STATUS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE STANDARD / 006</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>Who meets the standard today.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {CHAPTERS.map((ch) => (
              <Link key={ch.slug} href={`/chapters/${ch.slug}`} className="gov-doc-row">
                <span className="gov-doc-name">CH {ch.num} · {ch.name}</span>
                <span className={`ch-map-badge mono ${ch.status}`} style={{ fontSize: '9px' }}>
                  {ch.status === 'active' ? '● ACTIVE · IN GOOD STANDING' : '◌ INCOMING · CHARTER PENDING'}
                </span>
              </Link>
            ))}
          </div>
          <Link className="hero-cta-secondary" href="/chapters" style={{ marginTop: '28px', display: 'inline-block' }}>SEE THE FULL MAP →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">READY TO CARRY THE NAME?</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>The standard is high<br />because the name is worth it.</h2>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <Link className="hero-cta-primary" href="/chapters/start">BRING IT TO YOUR CAMPUS →</Link>
            <Link className="hero-cta-secondary" href="/for-universities">FOR UNIVERSITIES →</Link>
          </div>
          <p className="mono" style={{ fontSize: '10px', color: 'var(--ink-soft)', letterSpacing: '.1em', marginTop: '24px' }}>CHARTER INQUIRIES · inquiry@cometfoundry.com</p>
        </div>
      </section>
    </>
  );
}
