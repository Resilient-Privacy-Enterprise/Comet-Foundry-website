import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/founder',
  ogTitle: 'Founder — Comet Foundry',
  description: 'Vishva Patel, founder of Comet Foundry — a 2x founder and cybersecurity professional building a global hacker house for builders everywhere.',
});

export default function FounderPage() {
  return (
    <>
      <section className="founder-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/team">Team</Link> / Founder</div>
          <span className="eyebrow-label">FIELD NOTE #001</span>
          <h1>The Founder</h1>

          <div className="founder-intro">
            <div className="founder-portrait">
              <Image src="/assets/vishva-patel.png" alt="Vishva Patel" width={760} height={760} />
            </div>
            <div className="founder-meta">
              <h2>Vishva Patel</h2>
              <div className="role">FOUNDER / COMET FOUNDRY</div>
              <p className="intro">
                <strong>Somewhere in this hacker house, the next billionaire is debugging their first prototype. I built the house.</strong>
                <br />
                Founder &amp; Investor, Comet Foundry || 2x Founder || 10+ Years Cybersecurity || Built at UTD, Built for Builders Everywhere
              </p>
              <span className="brand-line hand">Someone had to try. :)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="wrap">
          <span className="tag-label">FOUNDER&apos;S LETTER</span>
          <h2 className="big">Why I Started This</h2>
          <div className="letter-card">
            <div className="founder-letter">
              <p>When I founded Comet Foundry at UTD, I wasn&apos;t trying to create another student organization. I wanted to build a place where ideas don&apos;t die in group chats — a place that works for any ambitious student, anywhere.</p>
              <p>There are brilliant builders scattered across campuses worldwide. The challenge isn&apos;t talent — it&apos;s that most of them are building alone. They need a place. A community. Permission.</p>
              <p>My vision is bigger than one campus: create a global network where any student can walk in with an idea and find people who want to build it. Where builders find co-founders, ideas become products, and students graduate not just with a degree, but with something they shipped.</p>
              <p>Comet Foundry started at UTD because that&apos;s where the idea lived. But it exists for every student willing to take a chance on an idea, learn by building, and create the future instead of waiting for it.</p>
            </div>
            <div className="letter-signature">
              <span className="letter-signoff hand">— Vishva</span>
              <div className="letter-author">
                <Image src="/assets/vishva-patel.png" alt="Vishva Patel" className="letter-avatar" width={760} height={760} />
                <div>
                  <div className="letter-author-name">Vishva Patel</div>
                  <div className="letter-author-role">Founder, Comet Foundry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section founder-quote">
        <div className="wrap">
          <span className="tag-label" style={{ textAlign: 'left' }}>MY BET</span>
          <blockquote>&quot;I believe the best student experiences don&apos;t start with a perfectly planned idea. They start with someone saying: &apos;What if we tried?&apos;&quot;</blockquote>
          <p className="vision-text">Comet Foundry is becoming a global network where builders don&apos;t have to wait for permission to start something. Where a student in any city can find people building alongside them. Where the next big idea could come from anywhere, and the builder knows they have a place to land it.</p>
          <p className="vision-text">
            The goal isn&apos;t to create branches of the same thing everywhere. The goal is to build a culture of builders — people who ship, question, experiment, collaborate, and keep showing up. Wherever they are.{' '}
            <span className="mono" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>STATUS: SPREADING</span>
          </p>
        </div>
      </section>

      <section className="founder-section founder-note-to-students">
        <div className="wrap">
          <span className="tag-label">A NOTE TO STUDENTS</span>
          <h2 className="big">A Note To Students</h2>
          <div className="founder-letter">
            <p>You don&apos;t need to be the smartest person in the room. You don&apos;t need a startup. You don&apos;t need a five-person team. You don&apos;t need a perfectly polished idea.</p>
            <p>You just need to show up.</p>
            <p>Show up curious. Find something worth building. Find someone worth building with. Ask a question you don&apos;t know the answer to. Try something that might fail.</p>
            <p>And if it doesn&apos;t work — good. That&apos;s what the lab is for.</p>
            <p>Comet Foundry isn&apos;t supposed to be a place where you already have everything figured out. It&apos;s supposed to be a place where you figure it out together.</p>
            <p>So bring the weird idea. Bring the half-built project. Bring the question you&apos;ve been sitting on. We&apos;ll see what happens.</p>
          </div>
          <div className="founder-signoff">
            <div className="see-you">See You In The Lab.</div>
            <div className="dash-vishva">— VISHVA</div>
          </div>
        </div>
      </section>

      <section className="founder-contact">
        <div className="wrap">
          <span className="tag-label" style={{ textAlign: 'center' }}>WANT TO TALK?</span>
          <div className="founder-contact-name">Vishva Patel</div>
          <div className="founder-contact-role">FOUNDER / COMET FOUNDRY</div>
          <div className="founder-contact-rows">
            <div>
              <span className="row-label">EMAIL</span>
              <a href="mailto:vishva.patel@cometfoundry.com">vishva.patel@cometfoundry.com</a>
            </div>
            <div>
              <span className="row-label">LINKEDIN</span>
              <a className="founder-linkedin" href="https://www.linkedin.com/in/vishva-vp/" target="_blank" rel="noopener noreferrer" aria-label="Vishva Patel on LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
