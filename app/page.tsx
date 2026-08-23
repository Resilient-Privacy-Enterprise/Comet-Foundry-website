import type { Metadata } from 'next';
import Link from 'next/link';
import DemoDayTitle from '@/components/DemoDayTitle';
import JoinForm from '@/components/JoinForm';
import AnimatedCounters from '@/components/AnimatedCounters';
import { pageMetadata } from '@/lib/metadata';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = {
  ...pageMetadata({
    path: '/',
    ogTitle: 'Comet Foundry — The Hackerhouse at UT Dallas',
    description: 'A hackerhouse at UT Dallas for building things nobody assigned you. No perfect ideas. Just interesting ones. Join our innovation community.',
    keywords: [
      'hackerhouse at UT Dallas',
      'student startup community',
      'innovation lab UTD',
      'student entrepreneurs',
      'demo day',
      'hacker community',
      'startup accelerator',
      'product building',
      'innovation network',
    ],
  }),
};

const thesisCards = [
  { title: 'FROM STUDENT TO FOUNDER', body: 'The 9-5 is not the only path. Comet Foundry exists to make the venture path as accessible as the employment path.' },
  { title: 'BUILD BEFORE YOU GRADUATE', body: 'Ship real products. Form real teams. Find your co-founder. All before you walk across a stage to collect a degree.' },
  { title: 'STARTUPS HIRE FROM HERE', body: 'The companies born inside Comet Foundry chapters hire from the same community. The network compounds.' },
];

const standardPills = ['RUN ALL FOUR LABS', 'RUN THE SEMESTER ARC', 'MERIT-BASED INTAKE', 'OPEN ACCESS', 'REPORT OUTCOMES'];

const flywheelCards = [
  { num: '01', title: 'BUILDERS BUILD THINGS', body: 'Every semester, Comet Foundry builders ship real products. Not class projects. Not case studies. Things that run in the world.' },
  { num: '02', title: 'BUILDS BECOME STARTUPS', body: 'Some of those builds become companies. Incorporated, operating, building something real beyond the semester arc.' },
  { num: '03', title: 'STARTUPS HIRE BUILDERS', body: 'CF-born startups hire from the same community that built them. The next cohort gets internships, co-founder matches, and first jobs. The flywheel completes.' },
];

const rosterPlaceholders = ['Builder 01', 'Builder 02', 'Builder 03', 'Builder 04'];

const cardStyle = { border: '1px solid var(--line)', padding: '28px 24px' };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow"><span className="dot" />LAB STATUS: OPEN</div>
          <h1 className="mega"><span>NOT A CLUB</span><span className="orange">A FOUNDRY</span></h1>
          <div className="hero-note hand">a hacker house for builders :)</div>
          <p className="hero-sub">Building the largest founder movement on college campuses.</p>
          <div className="hero-cta-row">
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY →</a>
            <Link className="hero-cta-secondary" href="/chapters/start">Bring it to your campus →</Link>
          </div>
          <div className="hero-tags">
            <span className="tag">NO PERFECT IDEAS. JUST INTERESTING ONES.</span>
            <span className="tag">BORN AT UTD</span>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="strip-track mono">
          {Array.from({ length: 8 }).flatMap((_, i) => [
            <span key={`${i}-idea`}>IDEA → 01</span>,
            <span key={`${i}-test`}>TEST → 02</span>,
            <span key={`${i}-build`}>BUILD → 03</span>,
            <span key={`${i}-ship`}>SHIP → 04</span>,
            <span key={`${i}-repeat`}>REPEAT → ∞</span>,
          ])}
        </div>
      </div>

      {/* ANIMATED COUNTERS */}
      <AnimatedCounters />

      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 000 / WHAT WE ARE</span>
            <h2>The <span className="hand" style={{ fontSize: '1.15em', color: 'var(--flask)' }}>CF</span>, in one paragraph</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>Comet Foundry is a global founder movement — born at UTD, built for every campus. A space for building things nobody assigned you, with people who actually ship them.</p>
              <p>No club meetings that go nowhere, no &quot;great idea, let&apos;s revisit next semester.&quot; Just a room, some people who ship, and a running list of experiments in progress.</p>
              <a className="lab-link mono" href="/about" style={{ borderBottom: '1px solid var(--flask)', color: 'var(--flask)', textDecoration: 'none', fontSize: '13px' }}>Read the full story →</a>
            </div>
            <div className="doc-card">
              <span className="hand">currently cooking</span>
              <h3>Active Experiments</h3>
              <ul className="mono">
                <li><span>Foundry Kickoff Night</span><span className="v">SEP 01</span></li>
                <li><span>Peer matching for team formation</span><span className="v">TBD</span></li>
                <li><span>Open critique nights</span><span className="v">TBD</span></li>
                <li><span>Alumni founder network</span><span className="v">TBD</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXP 002 / THE THESIS */}
      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 002 / WHY THIS EXISTS</span>
            <h2>Every university teaches you to get a job.<br />Almost none teach you to make one.</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>The skills that separate founders from employees — building products, forming teams, shipping under pressure, navigating failure — do not appear in any syllabus.</p>
              <p>They are learned by doing. And most students never get the chance to do them.</p>
              <p style={{ fontWeight: 600, color: 'var(--ink)' }}>Comet Foundry is the chance.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {thesisCards.map((c) => (
                <div key={c.title} style={cardStyle}>
                  <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>{c.title}</span>
                  <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '10px 0 0' }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 001 / HOW WE HELP</span>
            <h2>Four Labs</h2>
            <p>Not departments. Just the four things worth doing here, sorted by what you&apos;re actually in the mood for.</p>
          </div>
          <div className="labs-grid">
            <div className="lab-card">
              <span className="lab-annot hand">seriously, anything</span>
              <div>
                <span className="code mono">LAB / 01</span>
                <h3>Build Lab</h3>
                <p className="cmd mono">Make things.</p>
              </div>
              <div className="lab-actions">
                <a className="lab-link" href="/programs">See what&apos;s on →</a>
                <span className="stamp">MAKE →</span>
              </div>
            </div>
            <div className="lab-card">
              <div>
                <span className="code mono">LAB / 02</span>
                <h3>Think Lab</h3>
                <p className="cmd mono">Have an opinion.</p>
              </div>
              <div className="lab-actions">
                <a className="lab-link" href="/programs">See what&apos;s on →</a>
                <span className="stamp">preferably controversial</span>
              </div>
            </div>
            <div className="lab-card">
              <div>
                <span className="code mono">LAB / 03</span>
                <h3>Network Lab</h3>
                <p className="cmd mono">Meet people.</p>
              </div>
              <div className="lab-actions">
                <a className="lab-link" href="/programs">See what&apos;s on →</a>
                <span className="stamp">the useful kind</span>
              </div>
            </div>
            <div className="lab-card">
              <div>
                <span className="code mono">LAB / 04</span>
                <h3>After Hours</h3>
                <p className="cmd mono">Touch grass. 😂</p>
              </div>
              <div className="lab-actions">
                <a className="lab-link" href="/programs">See what&apos;s on →</a>
                <span className="stamp">occasionally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXP 003 / THE STANDARD */}
      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 003 / THE STANDARD</span>
            <h2>One name.<br />One standard.<br />Every campus.</h2>
            <p>Every chapter that carries the Comet Foundry name runs the same Four Labs, the same Semester Arc, and the same builder intake process. The campus changes. The standard doesn&apos;t.</p>
          </div>
          <div className="standard-pills">
            {standardPills.map((p) => (
              <span key={p} className="standard-pill mono">{p}</span>
            ))}
          </div>
          <div style={{ marginTop: '28px' }}>
            <Link className="lab-link mono" href="/chapters/standard" style={{ borderBottom: '1px solid var(--flask)', color: 'var(--flask)', textDecoration: 'none', fontSize: '13px' }}>Read The Chapter Standard →</Link>
          </div>
        </div>
      </section>

      <section className="demoday" id="demo-day">
        <div className="demoday-pin wrap">
          <p className="demoday-meta">COMET FOUNDRY / FALL 2026 / FINAL EXPERIMENT</p>

          <DemoDayTitle />

          <p className="demoday-subhead">Show Us What You Made.</p>

          <div className="demoday-meta-row">
            <span className="demoday-pill">DECEMBER 2026</span>
            <span className="demoday-pill status">STATUS: IN PROGRESS</span>
          </div>

          <p className="demoday-sub">All semester, Comet Foundry is building, questioning, connecting, and experimenting. Demo Day is where it all comes together.</p>
          <p className="demoday-sub2">You don&apos;t need a startup. You don&apos;t need a perfect product. You just need something you made.</p>

          <div className="demoday-cta">
            <div className="demoday-cta-buttons">
              <a className="demoday-btn-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">BUILD TOWARD DEMO DAY →</a>
            </div>
            <span className="demoday-hand hand">someone had to try. :)</span>
          </div>
        </div>
      </section>

      {/* EXP 004 / THE FLYWHEEL */}
      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 004 / THE FLYWHEEL</span>
            <h2>This is how the movement compounds.</h2>
          </div>
          <div className="labs-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {flywheelCards.map((c) => (
              <div key={c.num} className="lab-card">
                <div>
                  <span className="code mono">{c.num}</span>
                  <h3>{c.title}</h3>
                  <p className="cmd mono" style={{ fontSize: '13px', lineHeight: 1.6, textTransform: 'none', letterSpacing: '0' }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '28px' }}>
            <Link className="lab-link mono" href="/outcomes" style={{ borderBottom: '1px solid var(--flask)', color: 'var(--flask)', textDecoration: 'none', fontSize: '13px' }}>See Outcomes →</Link>
          </div>
        </div>
      </section>

      {/* EXP 005 / BUILT HERE */}
      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 005 / BUILT HERE</span>
            <h2>Builds In Progress.</h2>
            <p>What&apos;s being built inside the foundry right now.</p>
          </div>
          <div style={{ border: '1px dashed var(--line)', padding: '40px', background: 'var(--paper-raised)', textAlign: 'center' }}>
            <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>CHAPTER 01 · FALL 2026</span>
            <p style={{ fontSize: '18px', color: 'var(--ink)', fontWeight: 600, margin: '16px 0 6px' }}>Nothing shipped yet.</p>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', margin: '0 0 4px' }}>That&apos;s the point.</p>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', margin: '0 0 24px', fontStyle: 'italic' }}>Check back as the semester runs. :)</p>
            <Link className="hero-cta-primary" href="/builds">SEE THE WALL →</Link>
          </div>
        </div>
      </section>

      {/* EXP 006 / THE BUILDERS */}
      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 006 / THE BUILDERS</span>
            <h2>The roster is forming.</h2>
            <p>257 people applied to Chapter 01 before it opened. The first cohort is being selected now.</p>
          </div>
          <div className="builder-grid">
            {rosterPlaceholders.map((name) => (
              <div key={name} className="builder-card-placeholder">
                <div className="builder-avatar">CF</div>
                <h3 className="builder-name">{name}</h3>
                <span className="builder-tag">CH 01 · UTD</span>
                <p className="builder-sub">Cohort forming now.</p>
              </div>
            ))}
          </div>
          <p className="mono" style={{ textAlign: 'center', fontSize: '12px', color: 'var(--ink-soft)', letterSpacing: '.08em', margin: '24px 0 20px' }}>+ 253 MORE APPLIED</p>
          <div style={{ textAlign: 'center' }}>
            <Link className="hero-cta-secondary" href="/builders">SEE THE FULL ROSTER →</Link>
          </div>
        </div>
      </section>

      {/* EXP 007 / GET IN — THREE DOORS */}
      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 007 / GET IN</span>
            <h2>Three ways in.</h2>
          </div>
          <div className="three-doors-grid">
            <div className="three-door three-door-primary">
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>FOR STUDENTS</span>
              <h3>Apply to your chapter.</h3>
              <p>Find your campus chapter and apply. The next cohort is forming now.</p>
              <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY →</a>
            </div>
            <div className="three-door">
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--ink)' }}>FOR UNIVERSITIES</span>
              <h3>Bring it to your campus.</h3>
              <p>Faculty, admin, or motivated student? Start a Comet Foundry chapter at your institution.</p>
              <Link className="hero-cta-secondary" href="/chapters/start">BRING IT TO YOUR CAMPUS →</Link>
            </div>
            <div className="three-door">
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--ink)' }}>FOR BACKERS</span>
              <h3>Fuel the movement.</h3>
              <p>Partner, donate, or support the infrastructure that gives student founders a real shot.</p>
              <Link className="hero-cta-secondary" href="/donate">FUEL IT →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="campus">
        <div className="campus-inner">
          <div className="campus-stage">
            <div className="campus-map" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="campus-map-svg" src="/assets/campus-map.svg" alt="Map of the continental United States with Comet Foundry's node in Texas" width={950} height={580} loading="lazy" />
            </div>
            <h2 className="campus-title">THE<br />HACKER<br />CAMPUS</h2>
            <div className="campus-cta">
              <span className="campus-cta-note hand">not on your campus yet?</span>
              <Link className="campus-cta-btn" href="/chapters/start">Bring it to your campus →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">EXP 002 / GET IN</span>
            <h2>Join The Foundry</h2>
            <p>One email. We&apos;ll tell you when the door&apos;s open.</p>
          </div>
          <JoinForm />
          <div className="join-note">NO SPAM. NO PERFECT IDEAS. JUST INTERESTING ONES. &nbsp;·&nbsp; <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-soft)' }}>Full application →</a></div>
        </div>
      </section>
    </>
  );
}
