import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/about',
  ogTitle: 'About — Comet Foundry',
  description: "Comet Foundry started because the good ideas at UT Dallas kept dying in group chats instead of becoming things. Here's the origin story.",
});

const faqs = [
  {
    q: 'What is Comet Foundry?',
    a: "A hacker house at UT Dallas — a physical space and community for students to build projects, ship ideas, and find people to build them with. It's technically a student org, but it doesn't run like one: no recurring meetings, no permission required to start something.",
  },
  {
    q: 'Do I need to be a CS major to join?',
    a: "Your major is just what you study. It doesn't define what you can build. Whether you're an engineer, designer, marketer, researcher, or still undecided, there's a place for you at Comet Foundry. We care about curiosity, ambition, and execution—not credentials.",
  },
  {
    q: 'How do I apply?',
    a: null, // rendered separately below, contains a link
  },
  { q: 'Where is Comet Foundry located?', a: '800 W Campbell Rd, Richardson, Texas. Room TBD.' },
  {
    q: "How do I find out about upcoming events?",
    a: null, // rendered separately below, contains links
  },
];

export default function AboutPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: faqs[0].q, acceptedAnswer: { '@type': 'Answer', text: faqs[0].a } },
      { '@type': 'Question', name: faqs[1].q, acceptedAnswer: { '@type': 'Answer', text: faqs[1].a } },
      { '@type': 'Question', name: 'How do I apply?', acceptedAnswer: { '@type': 'Answer', text: "Fill out the application form and tell us what you want to build — that's most of the application." } },
      { '@type': 'Question', name: faqs[3].q, acceptedAnswer: { '@type': 'Answer', text: faqs[3].a } },
      { '@type': 'Question', name: "How do I find out about upcoming events?", acceptedAnswer: { '@type': 'Answer', text: 'Check the Events page or RSVP to Foundry Kickoff Night, the first open house of the semester.' } },
    ],
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / About</div>
          <h1>The Story</h1>
          <span className="hero-note hand">why a hacker house?</span>
          <p className="lede">Comet Foundry started because the good ideas at UTD kept dying in group chats instead of becoming things.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap about-grid">
          <div className="about-text">
            <p>Every university teaches you how to get a job.</p>
            <p>Very few teach you how to create one.</p>
            <p>Comet Foundry was founded to close that gap.</p>
            <p>We wanted a place where students could learn the things that rarely appear in a syllabus: building startups, finding co-founders, hiring teams, navigating legal and compliance requirements, raising capital, launching products, and turning ideas into sustainable organizations.</p>
            <p>The reality is that most great ideas don&apos;t fail because of technology. They fail because the people behind them don&apos;t know where to start.</p>
            <p>Comet Foundry exists to make sure they do.</p>
          </div>
          <div className="doc-card">
            <span className="hand">the short version</span>
            <h3>Why A Hacker House</h3>
            <ul className="mono">
              <li><span>Space that&apos;s open late</span><span className="v">YES</span></li>
              <li><span>People who&apos;ll actually build with you</span><span className="v">YES</span></li>
              <li><span>Gatekeeping by GPA or résumé</span><span className="v">NO</span></li>
              <li><span>Meetings that could&apos;ve been an email</span><span className="v">NO</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">VALUES</span>
            <h2>What We Actually Believe</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <span className="code mono">01</span>
              <div><h3>Every Background Welcome</h3><p>CS major, art major, undeclared — if you want to build, there&apos;s a seat.</p></div>
            </div>
            <div className="value-card">
              <span className="code mono">02</span>
              <div><h3>Ideas Over Résumés</h3><p>We care what you want to make, not what&apos;s already on your LinkedIn.</p></div>
            </div>
            <div className="value-card">
              <span className="code mono">03</span>
              <div><h3>Bias Toward Shipping</h3><p>A rough thing that exists beats a perfect thing that doesn&apos;t.</p></div>
            </div>
            <div className="value-card">
              <span className="code mono">04</span>
              <div><h3>Community Over Competition</h3><p>We&apos;d rather you find a co-founder here than a rival.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">FAQ</span>
            <h2>Questions People Actually Ask</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is Comet Foundry?</summary>
              <p>{faqs[0].a}</p>
            </details>
            <details className="faq-item">
              <summary>Do I need to be a CS major to join?</summary>
              <p>{faqs[1].a}</p>
            </details>
            <details className="faq-item">
              <summary>How do I apply?</summary>
              <p>
                Fill out the{' '}
                <a
                  href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  application form
                </a>{' '}
                and tell us what you want to build — that&apos;s most of the application.
              </p>
            </details>
            <details className="faq-item">
              <summary>Where is Comet Foundry located?</summary>
              <p>{faqs[3].a}</p>
            </details>
            <details className="faq-item">
              <summary>How do I find out about upcoming events?</summary>
              <p>Check the <Link href="/events">Events page</Link> or RSVP to <Link href="/events/kickoff-night">Foundry Kickoff Night</Link>, the first open house of the semester.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">READY?</span>
            <h2>Come Build With Us</h2>
          </div>
          <a
            className="rsvp-btn"
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            APPLY TO JOIN →
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
