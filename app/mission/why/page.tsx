import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = pageMetadata({
  path: '/mission/why',
  ogTitle: 'Why We Exist — Comet Foundry',
  description: 'The gap between a degree and a company is enormous. We exist to close it. Comet Foundry is building the largest founder movement on college campuses.',
  keywords: ['mission', 'why we exist', 'founder movement', 'student entrepreneurship', 'comet foundry'],
});

export default function Page() {
  return (
    <>
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/mission/why">Mission</Link> / Why We Exist</div>
          <span className="mission-eyebrow mono">MISSION / 001</span>
          <h1 className="mission-h1">
            The gap between<br />
            a degree and a<br />
            company is enormous.<br />
            <span className="orange">We exist to close it.</span>
          </h1>
          <div className="mission-stamp mono">EST. 2026 / GLOBAL / FOUNDED AT UTD</div>
        </div>
      </section>

      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">WHERE THIS STARTED</span>
          <div className="mission-prose">
            <p>Every university in the world teaches students how to earn a living.</p>
            <p>Almost none teach them how to build one.</p>
            <p>The skills that separate founders from employees — building products, forming teams, raising capital, navigating failure, shipping under pressure — do not appear in any syllabus. They are learned by doing. And most students never get the chance to do them.</p>
            <p>That is the gap Comet Foundry was built to close.</p>
          </div>
        </div>
      </section>

      <section className="mission-block mission-split">
        <div className="wrap">
          <span className="block-eyebrow mono">THE REALITY</span>
          <div className="mission-split-grid">
            <div className="mission-quote">
              <p>&ldquo;Most great ideas don&rsquo;t fail because of technology. They fail because the people behind them don&rsquo;t know where to start.&rdquo;</p>
            </div>
            <div className="mission-prose">
              <p>At UT Dallas, we watched brilliant students sit on ideas that never became anything. Not because they lacked intelligence or ambition. But because there was no space designed for the kind of learning that only happens when you are actually building something.</p>
              <p>No room to fail safely. No community of people who shipped things. No infrastructure for turning a half-formed idea into a real organization.</p>
              <p>We built that room.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-block mission-vision">
        <div className="wrap">
          <span className="block-eyebrow mono">THE MANDATE</span>
          <h2 className="mission-display">&ldquo;Building the largest<br />founder movement on<br />college campuses.&rdquo;</h2>
          <div className="mission-prose" style={{ maxWidth: '640px' }}>
            <p>Not the largest event series. Not the most well-funded student org. The largest sustained movement — one that outlasts any single semester, any single campus, any single cohort of students.</p>
            <p>A movement that changes what it means to be a student founder. Everywhere.</p>
          </div>
        </div>
      </section>

      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE MODEL</span>
          <div className="mission-three-col">
            <div className="model-col">
              <span className="model-label mono">THE CHAPTER</span>
              <p>Every Comet Foundry chapter is a physical builder space on a university campus, running the same Four Labs, the same Semester Arc, the same standard. Different campus. Same DNA.</p>
            </div>
            <div className="model-col">
              <span className="model-label mono">THE BUILDER</span>
              <p>Every student who walks through the door is a builder — regardless of major, GPA, or experience. We measure ambition and execution. Nothing else.</p>
            </div>
            <div className="model-col">
              <span className="model-label mono">THE FLYWHEEL</span>
              <p>Builders build things. Things become startups. Startups hire the next generation of builders. That flywheel is what makes this a movement, not a program.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-block mission-timeline-section">
        <div className="wrap">
          <span className="block-eyebrow mono">THE ARC</span>
          <div className="mission-timeline">
            <div className="tl-row"><span className="tl-year mono">2026 · CHAPTER 01</span><span className="tl-arrow">→</span><span className="tl-desc">UTD. Where it started.</span></div>
            <div className="tl-row"><span className="tl-year mono">2026 · EXPANSION</span><span className="tl-arrow">→</span><span className="tl-desc">6 campuses in pipeline.</span></div>
            <div className="tl-row"><span className="tl-year mono">2027 · SCALE</span><span className="tl-arrow">→</span><span className="tl-desc">First builder outcomes documented.</span></div>
            <div className="tl-row"><span className="tl-year mono">2028 · MOVEMENT</span><span className="tl-arrow">→</span><span className="tl-desc">The network speaks for itself.</span></div>
            <div className="tl-row"><span className="tl-year mono">∞ · THE STANDARD</span><span className="tl-arrow">→</span><span className="tl-desc">Every campus. One foundry.</span></div>
          </div>
        </div>
      </section>

      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="mission-cta-row">
            <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO YOUR CHAPTER →</a>
            <Link className="hero-cta-secondary" href="/mission/doctrine">Read The Doctrine →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
