import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/partners',
  ogTitle: 'Partners — Comet Foundry',
  description: "Comet Foundry's industry partners fund experiments, send mentors, and show up for demo nights. Meet Resilient Privacy Inc. and others.",
});

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Partners</div>
          <h1>Who Backs The Lab</h1>
          <p className="lede">Industry partners who fund experiments, send mentors, and show up for demo nights.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="partners-grid">
            {/* Founding Partner - Featured Compact Card */}
            <div className="partner-card-featured">
              <div className="partner-card-featured-content">
                <span className="partner-badge">FOUNDING PARTNER</span>
                <h3>RESILIENT PRIVACY Inc.</h3>
                <p>
                  <a href="https://www.resilientprivacy.com/?utm_source=chatgpt.com" target="_blank" rel="noopener">Resilient Privacy</a> is building an AI-native, unified platform for IT and cybersecurity operations — and backing Comet Foundry as our first industry partner.
                </p>
                <div className="partner-meta">
                  <div><strong>ROLE:</strong> Founding Industry Partner</div>
                  <div><strong>FOCUS:</strong> AI-native cybersecurity</div>
                  <div><strong>BRINGS:</strong> Mentorship &amp; internship pipeline</div>
                </div>
                <a className="card-link" href="https://www.resilientprivacy.com/?utm_source=chatgpt.com" target="_blank" rel="noopener">Visit site →</a>
              </div>
              <div className="partner-card-featured-logo">
                <Image src="/assets/resilient-privacy-logo.jpg" alt="RESILIENT PRIVACY Inc." width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Slots Section - More Compact */}
      <section className="tight">
        <div className="wrap">
          <div className="partners-open-section">
            <div className="partners-open-header">
              <h2>Open Partnership Slots</h2>
              <p>A few founding slots left — fund an experiment, send a mentor, or put your name on demo night.</p>
            </div>
            <div className="partners-open-cta">
              <a
                className="rsvp-btn"
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUNVNQVFY2NUpKWkVSTDFZR01LQjlRUTdJQi4u&route=shorturl"
                target="_blank"
                rel="noopener"
              >
                BECOME A PARTNER →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
