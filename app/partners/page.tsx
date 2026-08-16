import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/partners',
  ogTitle: 'Partners — Comet Foundry',
  description: "Comet Foundry's industry partners fund experiments, send mentors, and show up for demo nights. Meet Resilient Privacy Inc. and others.",
});

function ComingSoonPartnerCard() {
  return (
    <div className="coming-soon-card">
      <span className="tag mono">COMING SOON</span>
      <h3>Partner</h3>
      <p>This spot&apos;s open. New industry partners will show up here as they join.</p>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Partners</div>
          <h1>Who Backs The Lab</h1>
          <span className="hero-note hand">the useful kind, again</span>
          <p className="lede">Industry partners who fund experiments, send mentors, and show up for demo nights.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="partner-feature">
            <div className="partner-feature-media">
              <Image src="/assets/resilient-privacy-logo.jpg" alt="RESILIENT PRIVACY Inc." width={500} height={552} />
            </div>
            <div className="partner-feature-body">
              <span className="partner-feature-tag">FOUNDING PARTNER</span>
              <h3>RESILIENT PRIVACY Inc.</h3>
              <p>
                <a href="https://www.resilientprivacy.com/?utm_source=chatgpt.com" target="_blank" rel="noopener">Resilient Privacy</a> is building an AI-native, unified platform for IT and cybersecurity operations — and backing Comet Foundry as our first industry partner.
              </p>
              <div className="partner-feature-meta">
                <div>ROLE<span>Founding Industry Partner</span></div>
                <div>FOCUS<span>AI-native cybersecurity</span></div>
                <div>BRINGS<span>Mentorship &amp; internship pipeline</span></div>
              </div>
              <a className="card-link" href="https://www.resilientprivacy.com/?utm_source=chatgpt.com" target="_blank" rel="noopener">Visit site →</a>
            </div>
          </div>

          <div className="partners-open">
            <span className="section-label">OPEN PARTNERSHIP SLOTS</span>
            <p className="section-intro">A few founding slots left — fund an experiment, send a mentor, or put your name on demo night.</p>
            <div className="card-grid pair">
              <ComingSoonPartnerCard />
              <ComingSoonPartnerCard />
            </div>
          </div>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">FOR COMPANIES</span>
            <h2>Become A Partner</h2>
            <p>Fund an experiment, send a mentor, or just come to a demo night and see what&apos;s brewing.</p>
          </div>
          <a
            className="rsvp-btn"
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUNVNQVFY2NUpKWkVSTDFZR01LQjlRUTdJQi4u&route=shorturl"
            target="_blank"
            rel="noopener"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            GET IN TOUCH →
          </a>
        </div>
      </section>
    </>
  );
}
