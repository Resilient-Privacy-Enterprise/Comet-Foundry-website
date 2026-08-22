import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CHAPTERS, getChapterBySlug } from '@/lib/chapters';
import { LABS } from '@/lib/labs';
import { pageMetadata } from '@/lib/metadata';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';
const EXPRESS_INTEREST_URL = 'https://forms.cloud.microsoft/r/FPR6PcbQaN';

export function generateStaticParams() {
  return CHAPTERS.filter((c) => c.slug !== 'utd').map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const ch = getChapterBySlug(slug);
  if (!ch) return {};
  return pageMetadata({
    path: `/chapters/${slug}`,
    ogTitle: `${ch.name} Chapter — Comet Foundry`,
    description: ch.sub,
    keywords: [ch.name, ch.university, 'comet foundry', 'chapter', ch.city],
  });
}

const incomingRoles = ['President', 'Vice President', 'Secretary', 'Treasurer', 'Marketing Lead'];

const phases = [
  { num: '01', title: 'KICKOFF', desc: 'The first open house. Meet the community. Form teams. Pitch ideas. Everything starts here.' },
  { num: '02', title: 'EXPERIMENTS', desc: 'Build. Ship. Learn. Iterate. Critique nights. Peer feedback. Scale. This is where the work happens.' },
  { num: '03', title: 'DEMO DAY', desc: 'Show what you made. Tell your story. Celebrate. The room where it all ships.' },
];

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const ch = getChapterBySlug(slug);
  if (!ch || ch.slug === 'utd') notFound();

  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/chapters">Chapters</Link> / {ch.name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className="mission-eyebrow mono" style={{ marginBottom: 0 }}>COMET FOUNDRY / CHAPTER {ch.num} / {ch.name.toUpperCase()}</span>
            <span className="ch-map-badge mono incoming" style={{ fontSize: '9px' }}>◌ INCOMING</span>
          </div>
          <h1 className="mission-h1">{ch.name}.<br />Chapter {ch.num}.</h1>
          <p className="doctrine-sub">&ldquo;{ch.tagline}&rdquo;</p>
          <div className="mission-stamp mono">CHAPTER {ch.num} · {ch.city} {ch.state} · ◌ CHARTER PENDING</div>
          <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', marginTop: '12px' }}>0 BUILDERS SO FAR · 0 BUILDS SHIPPED · 4 LABS PLANNED</p>
          <div className="mission-cta-row" style={{ marginTop: '32px' }}>
            <a className="hero-cta-primary" href={EXPRESS_INTEREST_URL} target="_blank" rel="noopener noreferrer">NOTIFY ME WHEN WE OPEN →</a>
            <Link className="hero-cta-secondary" href="/chapters/start">HELP START THIS CHAPTER →</Link>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER {ch.num} / THE VISION</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 16px' }}>What this chapter will be.</h2>
          <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.6, maxWidth: '700px', fontWeight: 500, margin: '0 0 32px' }}>&ldquo;{ch.vision}&rdquo;</p>
          <div className="mission-three-col">
            <div style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>01 · THE SPACE</span>
              <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>A dedicated builder lab on the {ch.name} campus. Open late. Built for people who ship things. Currently being secured.</p>
            </div>
            <div style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>02 · THE COMMUNITY</span>
              <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>A curated cohort of {ch.name} builders — every major, every background, one standard. The people you will build your first company with are already on your campus.</p>
            </div>
            <div style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.12em', color: 'var(--flask)' }}>03 · THE NETWORK</span>
              <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '12px 0 0' }}>Chapter {ch.num} connects {ch.name} to every other Comet Foundry campus globally. Your co-founder might be at UTD. Your first hire might be at MIT. The network is the asset.</p>
            </div>
          </div>
          <div className="mission-timeline" style={{ marginTop: '40px' }}>
            <div className="tl-row"><span className="tl-year mono">EXPRESSIONS OF INTEREST</span><span className="tl-arrow">→</span><span className="tl-desc">OPEN NOW</span></div>
            <div className="tl-row"><span className="tl-year mono">FOUNDING TEAM FORMING</span><span className="tl-arrow">→</span><span className="tl-desc">IN PROGRESS</span></div>
            <div className="tl-row"><span className="tl-year mono">SPACE BEING SECURED</span><span className="tl-arrow">→</span><span className="tl-desc">IN PROGRESS</span></div>
            <div className="tl-row"><span className="tl-year mono">UNIVERSITY RECOGNITION</span><span className="tl-arrow">→</span><span className="tl-desc">IN PROGRESS</span></div>
            <div className="tl-row"><span className="tl-year mono">FIRST KICKOFF NIGHT</span><span className="tl-arrow">→</span><span className="tl-desc">COMING SOON</span></div>
            <div className="tl-row"><span className="tl-year mono">DEMO DAY</span><span className="tl-arrow">→</span><span className="tl-desc">THE GOAL</span></div>
          </div>
        </div>
      </section>

      {/* FOUR LABS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER {ch.num} / THE LABS</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 8px' }}>Four Labs.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '48px' }}>Every chapter runs all four. No exceptions. No substitutions. This is what&apos;s coming to {ch.name}.</p>
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
          <span className="block-eyebrow mono">CHAPTER {ch.num} / THE ARC</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>One Semester. Three Phases.</h2>
          <div className="mission-three-col">
            {phases.map((p) => (
              <div key={p.num} className="model-col" style={{ border: '1px solid var(--line)', padding: '28px 24px' }}>
                <span className="model-label mono" style={{ color: 'var(--flask)' }}>PHASE {p.num} / {p.title}</span>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: '12px 0 16px' }}>{p.desc}</p>
                <span className="mono" style={{ display: 'inline-block', fontSize: '9px', letterSpacing: '.1em', padding: '3px 10px', color: 'var(--ink-soft)', border: '1px solid var(--line)' }}>COMING SOON</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER {ch.num} / LEADERSHIP</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 8px' }}>The team is forming.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '24px', maxWidth: '600px' }}>Chapter {ch.num} leadership is currently forming. These are the roles that will run this chapter once we open. If you are a {ch.name} student who wants to be a founding officer — this is how that happens.</p>
          <div className="profile-grid exec">
            {incomingRoles.map((role, i) => (
              <div key={i} className="profile-card">
                <div className="profile-photo open">
                  <span className="profile-tag">OPEN</span>
                  <span className="abbr">{role.split(' ').map(w => w[0]).join('')}</span>
                </div>
                <div className="profile-body">
                  <h3>{role}</h3>
                  <p className="profile-invite">This seat is open — apply and make it yours.</p>
                  <div className="profile-links">
                    <a href={EXPRESS_INTEREST_URL} target="_blank" rel="noopener noreferrer" className="profile-apply">Express interest →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a className="hero-cta-primary" href={EXPRESS_INTEREST_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: '28px', display: 'inline-block' }}>EXPRESS INTEREST IN LEADING →</a>
        </div>
      </section>

      {/* BUILDS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">CHAPTER {ch.num} / BUILT HERE</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 24px' }}>Nothing built here yet.</h2>
          <div style={{ border: '1px dashed var(--line)', padding: '48px', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', margin: '0 0 8px', fontStyle: 'italic' }}>That is not a problem. It is an opportunity.</p>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', margin: 0 }}>The first build from Chapter {ch.num} will be listed right here. It could be yours.</p>
          </div>
          <a className="hero-cta-secondary" href={EXPRESS_INTEREST_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: '24px', display: 'inline-block' }}>START BUILDING →</a>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">CHAPTER {ch.num} / GET IN EARLY</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>Chapter {ch.num} is not open yet.<br />The people who will make it happen<br />are already on your campus.<br />Are you one of them?</h2>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <a className="hero-cta-primary" href={EXPRESS_INTEREST_URL} target="_blank" rel="noopener noreferrer">NOTIFY ME WHEN WE OPEN →</a>
            <Link className="hero-cta-secondary" href="/chapters/start">HELP START THIS CHAPTER →</Link>
            <Link className="hero-cta-secondary" href="/chapters">VIEW ALL CHAPTERS →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
