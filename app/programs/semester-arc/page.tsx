import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/programs/semester-arc',
  ogTitle: 'Semester Arc — Comet Foundry',
  description: 'How a semester works at Comet Foundry. From Kickoff to Demo Day.',
});

export default function SemesterArcPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/programs">The Labs</Link> / Semester Arc</div>
          <h1>Semester Arc</h1>
          <span className="hero-note hand">how it flows</span>
          <p className="lede">One semester. Three phases. Ship something real.</p>
          <span className="mono" style={{ display: 'block', marginTop: '24px', fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>EVERY CHAPTER · EVERY SEMESTER</span>
          <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: '640px' }}>The Semester Arc is not optional. Every Comet Foundry chapter runs Kickoff, Experiments, and Demo Day — in that order, every semester, at every campus.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>The Timeline</h2>

            {/* Timeline */}
            <div style={{ marginBottom: '4rem' }}>
              {/* Timeline Track */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', position: 'relative' }}>
                {/* Kickoff */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--flask)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      color: 'white',
                      fontSize: '32px',
                      fontWeight: 'bold',
                    }}
                  >
                    1
                  </div>
                  <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Kickoff</h3>
                  <p style={{ fontSize: '0.95em', color: 'var(--ink-soft)', marginBottom: '1rem' }}>Week 1-2</p>
                  <p style={{ fontSize: '0.9em', lineHeight: 1.6 }}>
                    Open house. Meet the community. Form teams. Pitch ideas. Find collaborators. Everything starts here.
                  </p>
                </div>

                {/* Connector */}
                <div
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'var(--ink-soft)',
                    margin: '40px 0 0 0',
                    flexShrink: 0,
                  }}
                />

                {/* Ongoing */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--flask)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      color: 'white',
                      fontSize: '32px',
                      fontWeight: 'bold',
                    }}
                  >
                    2
                  </div>
                  <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Experiments</h3>
                  <p style={{ fontSize: '0.95em', color: 'var(--ink-soft)', marginBottom: '1rem' }}>Week 3-14</p>
                  <p style={{ fontSize: '0.9em', lineHeight: 1.6 }}>
                    Build. Ship. Learn. Critique nights. Peer feedback. Iterate. Scale. This is where the work happens.
                  </p>
                </div>

                {/* Connector */}
                <div
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'var(--ink-soft)',
                    margin: '40px 0 0 0',
                    flexShrink: 0,
                  }}
                />

                {/* Demo Day */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--flask)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      color: 'white',
                      fontSize: '32px',
                      fontWeight: 'bold',
                    }}
                  >
                    3
                  </div>
                  <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Demo Day</h3>
                  <p style={{ fontSize: '0.95em', color: 'var(--ink-soft)', marginBottom: '1rem' }}>Week 15</p>
                  <p style={{ fontSize: '0.9em', lineHeight: 1.6 }}>
                    Show what you made. Tell your story. Celebrate. Investors. Advisors. Peers. Everyone sees what you shipped.
                  </p>
                </div>
              </div>
            </div>

            <h2 style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>What to Expect</h2>

            <p><strong>Week 1-2: Kickoff</strong><br />Everyone starts somewhere. We run an open house where you meet builders, learn what's possible, and form teams around ideas that excite you. No prerequisites. No experience needed. Just show up.</p>

            <p><strong>Week 3-14: Ongoing Experiments</strong><br />This is the meat of it. You build. We provide space, mentorship, resources. You'll hit blockers. You'll iterate. You'll ship. You'll get feedback. That cycle repeats. By week 14, you have something real.</p>

            <p><strong>Week 15: Demo Day</strong><br />You show the work. In front of the community, advisors, investors, and peers. This isn't a pitch competition. It's a celebration of what people built. Some projects are polished. Some are rough. All are real.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>You Don't Need to Know</h2>

            <p>You don't need experience. You don't need a perfect idea at Kickoff. You don't need to know how to code, design, or fundraise. You just need to show up and be willing to learn by building.</p>

            <p>The semester arc is designed for learning through execution, not lecture.</p>
          </div>
        </div>
      </section>

      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">NEXT STEP</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '16px 0 16px' }}>The Final Experiment</h2>
          <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 28px' }}>Demo Day is where the semester arc ends. Show what you built. Tell your story. Ship it.</p>
          <Link className="hero-cta-primary" href="/demo-day">SEE DEMO DAY →</Link>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <Link href="/programs" className="mono" style={{ fontSize: '13px', letterSpacing: '.08em', color: 'var(--ink-soft)', textDecoration: 'none' }}>← Back to The Labs</Link>
        </div>
      </section>
    </>
  );
}
