import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/leadership/founder',
  ogTitle: 'The Founder\'s Letter — Comet Foundry',
  description: 'Field Note #001 — Why Vishva Patel started Comet Foundry and what it means to build the largest founder movement on college campuses.',
  keywords: ['founder letter', 'vishva patel', 'comet foundry origin', 'field note'],
});

export default function Page() {
  return (
    <>
      <section className="letter-hero">
        <div className="wrap">
          <div className="letter-hero-inner">
            <div className="letter-hero-left">
              <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/leadership">Leadership</Link> / Founder&apos;s Letter</div>
              <span className="mission-eyebrow mono">FIELD NOTE #001</span>
              <h1 className="letter-hero-title">The Founder&apos;s Letter</h1>
              <span className="hand" style={{ fontSize: '24px', color: 'var(--flask)' }}>someone had to try. :)</span>
            </div>
            <div className="letter-hero-right">
              <div className="letter-hero-photo">
                <Image src="/assets/vishva-patel.png" alt="Vishva Patel" width={760} height={760} className="letter-avatar-img" />
              </div>
              <h3 className="letter-hero-name">Vishva Patel</h3>
              <p className="mono letter-hero-role">Founder · Comet Foundry</p>
              <p className="mono letter-hero-role">UT Dallas · Spring 2025</p>
              <div className="letter-hero-socials">
                <a href="mailto:vishva.patel@cometfoundry.com" className="letter-social-link" title="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
                  <span>vishva.patel@cometfoundry.com</span>
                </a>
                <a href="https://www.linkedin.com/in/vishvapatel/" target="_blank" rel="noopener noreferrer" className="letter-social-link" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-block" style={{ paddingTop: '48px' }}>
        <div className="wrap">
          <div className="letter-body">
            <h2 className="letter-heading">Why I Started This</h2>
            <div className="mission-prose">
              <p>When I founded Comet Foundry at UTD, I wasn&apos;t trying to create another student organization. I wanted to build a place where ideas don&apos;t die in group chats — a place that works for any ambitious student, anywhere.</p>
              <p>There are brilliant builders scattered across campuses worldwide. The challenge isn&apos;t talent — it&apos;s that most of them are building alone. They need a place. A community. Permission.</p>
              <p>My vision is bigger than one campus: create a global network where any student can walk in with an idea and find people who want to build it. Where builders find co-founders, ideas become products, and students graduate not just with a degree, but with something they shipped.</p>
              <p>Comet Foundry started at UTD because that&apos;s where the idea lived. But it exists for every student willing to take a chance on an idea, learn by building, and create the future instead of waiting for it.</p>
            </div>

            <blockquote className="letter-pullquote">
              <span className="hand">&ldquo;I believe the best student experiences don&apos;t start with a perfectly planned idea. They start with someone saying: &apos;What if we tried?&apos;&rdquo;</span>
            </blockquote>

            <h2 className="letter-heading">A Note To Students</h2>
            <div className="mission-prose">
              <p>You don&apos;t need to be the smartest person in the room. You don&apos;t need a startup. You don&apos;t need a five-person team. You don&apos;t need a perfectly polished idea.</p>
              <p>You just need to show up.</p>
              <p>Show up curious. Find something worth building. Find someone worth building with. Ask a question you don&apos;t know the answer to. Try something that might fail.</p>
              <p>And if it doesn&apos;t work — good. That&apos;s what the lab is for.</p>
              <p>Comet Foundry isn&apos;t supposed to be a place where you already have everything figured out. It&apos;s supposed to be a place where you figure it out together.</p>
              <p>So bring the weird idea. Bring the half-built project. Bring the question you&apos;ve been sitting on. We&apos;ll see what happens.</p>
            </div>

            <div className="letter-sign-off">
              <span className="hand letter-see-you">See You In The Lab.</span>
              <span className="letter-dash">— VISHVA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="hand doctrine-cta-hand">ready to build something?</span>
          <div className="mission-cta-row">
            <Link className="hero-cta-primary" href="/leadership">Foundation Leadership →</Link>
            <Link className="hero-cta-secondary" href="/mission/why">Why We Exist →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
