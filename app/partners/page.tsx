import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/partners',
  ogTitle: 'Partners — Comet Foundry',
  description: 'Organizations and companies partnering with Comet Foundry.',
});

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Partners</div>
          <h1>Partners</h1>
          <span className="hero-note hand">together, we build</span>
          <p className="lede">Organizations and companies supporting builders.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Current Partners */}
            <div style={{ marginBottom: '5rem' }}>
              <p style={{ fontSize: '0.85em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--ink-soft)', marginBottom: '2rem' }}>Current Partners</p>

              <div style={{ padding: '2rem', backgroundColor: 'var(--paper-alt)', borderRadius: '4px', borderTop: '3px solid var(--flask)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
                  <div>
                    <p style={{ fontSize: '0.85em', fontWeight: 600, color: 'var(--flask)', margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}>Founding Partner</p>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1em', fontWeight: 600 }}>Resilient Privacy Inc.</h3>
                    <p style={{ fontSize: '0.9em', lineHeight: 1.6, color: 'var(--ink-soft)', margin: '0 0 1rem 0' }}>
                      AI-native cybersecurity platform. Mentorship, internship pipeline, and funding support.
                    </p>
                    <a href="https://www.resilientprivacy.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--flask)', fontWeight: 500, textDecoration: 'none', fontSize: '0.9em' }}>
                      Visit site →
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', minWidth: '120px' }}>
                    <Image src="/assets/resilient-privacy-logo.jpg" alt="Resilient Privacy Inc." width={120} height={120} style={{ borderRadius: '4px' }} />
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9em', color: 'var(--ink-soft)' }}>
                Building an expanding network of partners across companies and organizations that share our commitment to supporting builders.
              </p>
            </div>

            {/* What Partnership Means */}
            <div style={{ borderTop: '1px solid var(--ink-soft)', paddingTop: '4rem', marginBottom: '5rem' }}>
              <p style={{ fontSize: '0.85em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--ink-soft)', marginBottom: '2rem' }}>Partnership</p>
              <h2 style={{ marginTop: 0, marginBottom: '2rem' }}>What Partnership Means</h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
                <div>
                  <p style={{ fontSize: '0.85em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--flask)', margin: '0 0 1rem 0' }}>For Partners</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.9, fontSize: '0.95em' }}>
                    <li>Access to a community of early-stage builders</li>
                    <li>Brand visibility and thought leadership</li>
                    <li>Opportunities to mentor and invest in founders</li>
                    <li>First look at emerging projects and ideas</li>
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: '0.85em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--flask)', margin: '0 0 1rem 0' }}>For Builders</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.9, fontSize: '0.95em' }}>
                    <li>Mentorship and guidance from experienced experts</li>
                    <li>Potential funding and investment opportunities</li>
                    <li>Resources, tools, and infrastructure</li>
                    <li>Expanded network and partnership opportunities</li>
                  </ul>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--paper-alt)', padding: '2.5rem', borderRadius: '4px', borderLeft: '4px solid var(--flask)' }}>
                <p style={{ fontSize: '0.95em', lineHeight: 1.8, margin: 0 }}>
                  Partnerships are built on mutual value creation. We work with organizations that are genuinely invested in supporting builders and innovation. Our partners become part of the Comet Foundry ecosystem, directly engaging with our community.
                </p>
              </div>
            </div>

            {/* Become a Partner */}
            <div style={{ borderTop: '1px solid var(--ink-soft)', paddingTop: '4rem' }}>
              <p style={{ fontSize: '0.85em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--ink-soft)', marginBottom: '2rem' }}>Join Us</p>
              <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Become a Partner</h2>

              <p style={{ fontSize: '1.05em', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '700px' }}>
                We're looking for organizations that share our passion for supporting builders and fostering innovation.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--paper-alt)', borderRadius: '4px' }}>
                  <p style={{ fontSize: '0.85em', fontWeight: 600, color: 'var(--flask)', margin: '0 0 0.75rem 0', textTransform: 'uppercase' }}>Ideal Partners</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.7, fontSize: '0.9em' }}>
                    <li>Aligned with builder-first values</li>
                    <li>Genuine interest in our community</li>
                    <li>Resources to add real value</li>
                    <li>Committed to long-term relationship</li>
                  </ul>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: 'var(--paper-alt)', borderRadius: '4px' }}>
                  <p style={{ fontSize: '0.85em', fontWeight: 600, color: 'var(--flask)', margin: '0 0 0.75rem 0', textTransform: 'uppercase' }}>Partnership Types</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.7, fontSize: '0.9em' }}>
                    <li>Mentorship & advisory</li>
                    <li>Resource & tool access</li>
                    <li>Funding & investment</li>
                    <li>Sponsorship & events</li>
                  </ul>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--ink)', color: 'white', padding: '3rem', borderRadius: '4px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.85em', fontWeight: 500, textTransform: 'uppercase', color: 'var(--flask)', margin: '0 0 1rem 0' }}>Get in Touch</p>
                <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.2em', fontWeight: 600, color: 'white' }}>Interested in Partnering?</h3>
                <p style={{ fontSize: '0.95em', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>
                  Let's explore how we can work together.
                </p>
                <a href="mailto:partners@cometfoundry.com" style={{ color: 'var(--flask)', fontWeight: 500, textDecoration: 'none' }}>
                  partners@cometfoundry.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
