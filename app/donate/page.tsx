import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/donate',
  ogTitle: 'Donate — Comet Foundry',
  description: 'Comet Foundry runs on the support of people who believe students should get to build. Help fund the space, the events, and the labs.',
});

export default function DonatePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Donate</div>
          <h1>Fuel The Lab</h1>
          <span className="hero-note hand">every bit helps</span>
          <p className="lede">Comet Foundry runs on people who believe students should get to build before they&apos;re told they&apos;re ready. Your support keeps the lab open.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap about-grid">
          <div className="about-text">
            <p>Comet Foundry doesn&apos;t have a line item in a university budget — it runs on time, space, and whatever we can put together ourselves.</p>
            <p>Every dollar goes straight back into the house: keeping the space open late, feeding people at events, stocking the build bench, and bringing in mentors who actually show up.</p>
            <p>If you believe in what we&apos;re building, this is the most direct way to help.</p>
          </div>
          <div className="doc-card">
            <span className="hand">the short version</span>
            <h3>Where It Goes</h3>
            <ul className="mono">
              <li><span>Space &amp; equipment</span></li>
              <li><span>Event costs — food, space, Kickoff Night</span></li>
              <li><span>Build Lab materials &amp; tools</span></li>
              <li><span>Mentorship &amp; Think Lab programming</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">SUPPORT THE LAB</span>
            <h2>Give What You Can</h2>
            <p>Every dollar goes straight back into the lab. Give directly, or reach out and we&apos;ll make it easy.</p>
          </div>
          <a
            className="rsvp-btn"
            href="https://gofund.me/e64942534"
            target="_blank"
            rel="noopener"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            DONATE ON GOFUNDME →
          </a>
          <div>
            <a
              className="mono-link"
              href="mailto:info@cometfoundry.com?subject=I'd%20like%20to%20support%20Comet%20Foundry"
              style={{ marginTop: 18, display: 'inline-block' }}
            >
              Prefer email? Reach out directly →
            </a>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">IN-KIND GIVING</span>
            <h2>Donate Equipment &amp; Materials</h2>
          </div>
          <div className="about-text" style={{ maxWidth: 680 }}>
            <p>If a financial contribution isn&apos;t possible, you can still make a lasting impact. We welcome donations of technology, equipment, tools, 3D printers, materials, and other resources from individuals and companies.</p>
            <p>Whether you&apos;re upgrading your workspace, replacing equipment, or simply have items you&apos;d like to put to good use, your donation can help power innovation, education, and hands-on learning through Comet Foundry. Every contribution — large or small — helps us expand our reach and create more opportunities for the communities we serve.</p>
          </div>
          <a
            className="rsvp-btn"
            href="https://forms.cloud.microsoft/r/9xXGnMJ51x"
            target="_blank"
            rel="noopener"
            style={{ background: 'var(--ink)', color: 'var(--paper)', marginTop: 8 }}
          >
            DONATE EQUIPMENT →
          </a>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">OTHER WAYS TO HELP</span>
            <h2>Not Ready To Give?</h2>
          </div>
          <div className="values-grid single">
            <div className="value-card">
              <div>
                <h3>Become A Partner</h3>
                <p>Fund experiments, send mentors, and back the lab as a company.</p>
              </div>
              <Link className="value-link" href="/partners">See partnerships →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
