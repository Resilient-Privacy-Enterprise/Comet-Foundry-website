import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

type OtherLab = { num: string; name: string; slug: string; cmd: string; accent: string };

export default function LabPageLayout({
  num,
  name,
  cmd,
  handNote,
  accent,
  intro,
  body,
  whatsHere,
  otherLabs,
}: {
  num: string;
  name: string;
  cmd: string;
  handNote: string;
  accent: string;
  intro: string;
  body: string[];
  whatsHere: string[];
  otherLabs: OtherLab[];
}) {
  return (
    <>
      <section className="page-hero lab-hero">
        <span className="lab-hero-numeral" style={{ '--lab-accent': accent } as React.CSSProperties} aria-hidden="true">
          {num}
        </span>
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/programs">The Labs</Link> / {name}
          </div>
          <span className="code mono" style={{ display: 'block', marginBottom: 10, color: accent }}>LAB / {num}</span>
          <h1>{name}</h1>
          <span className="hero-note hand" style={{ color: accent }}>{handNote}</span>
          <p className="lede">{intro}</p>
          <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', letterSpacing: '.08em', marginTop: '12px' }}>Every Comet Foundry chapter runs this lab. Every semester.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <ScrollReveal className="about-grid">
            <div className="about-text">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="doc-card">
              <span className="hand" style={{ color: accent }}>what&apos;s here</span>
              <h3>{cmd}</h3>
              <ul className="mono reveal-list">
                {whatsHere.map((item) => (
                  <li key={item}><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">NEXT STEP</span>
            <h2>Find A {name} Session</h2>
            <p>Check what&apos;s actually on the calendar this month.</p>
          </div>
          <Link className="rsvp-btn" href="/events" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>VIEW EVENTS →</Link>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">THE OTHER THREE</span>
            <h2>Explore The Rest</h2>
          </div>
          <ScrollReveal className="values-grid triple">
            {otherLabs.map((lab) => (
              <Link
                className="value-card lab-cross-card"
                href={`/programs/${lab.slug}`}
                key={lab.slug}
                style={{ '--card-accent': lab.accent, textDecoration: 'none', color: 'inherit' } as React.CSSProperties}
              >
                <span className="code mono" style={{ color: lab.accent }}>{lab.num}</span>
                <div>
                  <h3>{lab.name}</h3>
                  <p>{lab.cmd}</p>
                </div>
                <span className="cross-arrow mono" style={{ marginTop: 14, fontSize: 12, color: lab.accent }}>Visit lab →</span>
              </Link>
            ))}
          </ScrollReveal>
          <div style={{ marginTop: '40px' }}>
            <Link href="/programs" className="mono" style={{ fontSize: '13px', letterSpacing: '.08em', color: 'var(--ink-soft)', textDecoration: 'none' }}>← Back to The Labs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
