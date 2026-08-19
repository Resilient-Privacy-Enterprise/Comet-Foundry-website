import type { Metadata } from 'next';
import DemoDayTitle from '@/components/DemoDayTitle';
import JoinForm from '@/components/JoinForm';
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

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow"><span className="dot" />LAB STATUS: OPEN</div>
          <h1 className="mega"><span>NOT A CLUB</span><span className="orange">A FOUNDRY</span></h1>
          <div className="hero-note hand">a hacker house for builders :)</div>
          <p className="hero-sub">A hacker house for people who&apos;d rather build the weird thing than plan the safe one. Yes, this is technically a student org. We&apos;re figuring it out too.</p>
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

      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">EXP 000 / WHAT WE ARE</span>
            <h2>The <span className="hand" style={{ fontSize: '1.15em', color: 'var(--flask)' }}>CF</span>, in one paragraph</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>Comet Foundry is a space at UTD for building things nobody assigned you.</p>
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
              <a className="demoday-btn-primary" href={APPLY_URL} target="_blank" rel="noopener">BUILD TOWARD DEMO DAY →</a>
            </div>
            <span className="demoday-hand hand">someone had to try. :)</span>
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
              <span className="campus-cta-note hand">not in your school yet?</span>
              <a className="campus-cta-btn" href="https://forms.cloud.microsoft/r/FPR6PcbQaN" target="_blank" rel="noopener">start a node →</a>
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
          <div className="join-note">NO SPAM. NO PERFECT IDEAS. JUST INTERESTING ONES. &nbsp;·&nbsp; <a href={APPLY_URL} target="_blank" rel="noopener" style={{ color: 'var(--ink-soft)' }}>Full application →</a></div>
        </div>
      </section>
    </>
  );
}
