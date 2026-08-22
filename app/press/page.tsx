import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

const PRESS_EMAIL = 'press@cometfoundry.com';
const LOGO_PATH = '/assets/comet-foundry-logo.png';

export const metadata: Metadata = pageMetadata({
  path: '/press',
  ogTitle: 'Press & Brand — Comet Foundry',
  description: 'Brand assets, media kit, press contact, and usage guidelines for anyone covering Comet Foundry or using our visual identity.',
  keywords: ['press', 'brand', 'media kit', 'comet foundry'],
});

const swatches = [
  { name: 'PRIMARY BACKGROUND', hex: '#F7F6F2', text: '#15161A' },
  { name: 'PRIMARY TEXT', hex: '#15161A', text: '#F7F6F2' },
  { name: 'ACCENT ORANGE', hex: '#FF7A29', text: '#15161A' },
  { name: 'ACCENT TEAL', hex: '#1F6F5C', text: '#F7F6F2' },
];

const facts = [
  { label: 'Founded', body: '2026 at UT Dallas, Texas.' },
  { label: 'Structure', body: 'Independent 501(c)(3) nonprofit — pending IRS determination.' },
  { label: 'Active chapters', body: '1 — UT Dallas (Chapter 01).' },
  { label: 'Incoming chapters', body: '6 — UT Austin, Texas A&M, Rice, Georgia Tech, Berkeley, MIT.' },
  { label: 'Total applicants to date', body: '257 — before first semester began.' },
  { label: 'The program', body: 'Four Labs (Build, Think, Network, After Hours) + Semester Arc (Kickoff → Experiments → Demo Day) running every semester at every chapter.' },
  { label: 'Founder', body: 'Vishva Patel — 2x founder, 10+ years cybersecurity, former GSA President at UTD.' },
  { label: 'Website', body: 'cometfoundry.com' },
  { label: 'Press contact', body: PRESS_EMAIL },
];

const h2Style = { fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' as const, margin: '0 0 16px' };
const cardStyle = { border: '1px solid var(--line)', padding: '28px 24px' };

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / Chronicle / Press</div>
          <span className="mission-eyebrow mono">CHRONICLE / PRESS & BRAND</span>
          <h1 className="mission-h1">Everything you need<br />to write about us<br />or work with our brand.</h1>
          <p className="doctrine-sub">Brand assets, media kit, press contact, and usage guidelines for anyone covering Comet Foundry or using our visual identity.</p>
        </div>
      </section>

      {/* ONE-PAGER */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">PRESS / 001</span>
          <h2 style={h2Style}>About Comet Foundry.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', margin: '0 0 24px' }}>The short version — for press, partners, and universities who need the facts fast.</p>
          <div style={{ border: '1px solid var(--line)', padding: '36px', background: 'var(--paper-raised)', display: 'grid', gap: '24px' }}>
            {[
              { label: 'WHAT WE ARE', body: 'Comet Foundry is a global nonprofit founder movement building the largest network of student builder communities on college campuses. We establish campus chapters — physical builder spaces that run the same Four Labs, the same Semester Arc, and the same builder standard at every university we operate in.' },
              { label: 'FOUNDED', body: '2026. Chapter 01 at UT Dallas.' },
              { label: 'STRUCTURE', body: 'Independent 501(c)(3) nonprofit organization — pending IRS determination. Campus chapters operate as registered student organizations at their host universities under the Comet Foundry Chapter Standard.' },
              { label: 'CURRENT FOOTPRINT', body: '1 active chapter — UT Dallas. 6 incoming chapters — UT Austin, Texas A&M, Rice, Georgia Tech, Berkeley, MIT.' },
              { label: 'THE MISSION', body: 'Building the largest founder movement on college campuses. Moving students from the 9-5 path to the venture path — by giving them the infrastructure, community, and programs to build real things while still in school.' },
              { label: 'FOUNDER', body: 'Vishva Patel — 2x founder, 10+ years cybersecurity, former GSA President at UTD, Spring 2025 alumnus.' },
              { label: 'CONTACT', body: `${PRESS_EMAIL} · cometfoundry.com` },
            ].map((row) => (
              <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--line)' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>{row.label}</span>
                <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.7, margin: 0 }}>{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND ASSETS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">PRESS / 002</span>
          <h2 style={h2Style}>Brand assets.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: '640px' }}>Official Comet Foundry logos, color palette, and typography. Use these when covering or featuring Comet Foundry. Do not modify, recolor, or distort any assets.</p>

          {/* LOGO */}
          <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', display: 'block', marginBottom: '16px' }}>LOGO</span>
          <div className="press-logo-grid">
            <div style={cardStyle}>
              <div style={{ background: 'var(--paper)', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', border: '1px solid var(--line)', minHeight: '160px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO_PATH} alt="Comet Foundry logo on light" style={{ maxWidth: '160px', height: 'auto' }} />
              </div>
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>PRIMARY LOGO</span>
              <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '8px 0 16px' }}>Use on light/white backgrounds</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href={`mailto:${PRESS_EMAIL}?subject=Logo%20Usage%20Request`} className="hero-cta-secondary" style={{ fontSize: '11px', padding: '8px 14px' }}>REQUEST PERMISSION →</a>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ background: 'var(--ink)', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', minHeight: '160px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO_PATH} alt="Comet Foundry logo on dark" style={{ maxWidth: '160px', height: 'auto', filter: 'invert(1) brightness(1.2)' }} />
              </div>
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>LOGO ON DARK</span>
              <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '8px 0 16px' }}>Use on dark backgrounds</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href={`mailto:${PRESS_EMAIL}?subject=Logo%20Usage%20Request`} className="hero-cta-secondary" style={{ fontSize: '11px', padding: '8px 14px' }}>REQUEST PERMISSION →</a>
              </div>
            </div>
          </div>

          {/* COLORS */}
          <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', display: 'block', margin: '48px 0 16px' }}>COLORS</span>
          <div className="press-swatch-grid">
            {swatches.map((s) => (
              <div key={s.name} style={{ border: '1px solid var(--line)' }}>
                <div style={{ background: s.hex, height: '120px', display: 'flex', alignItems: 'flex-end', padding: '14px', color: s.text }}>
                  <span className="mono" style={{ fontSize: '11px', letterSpacing: '.06em', fontWeight: 700 }}>{s.hex}</span>
                </div>
                <div style={{ padding: '14px 16px', background: 'var(--paper-raised)' }}>
                  <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--ink-soft)' }}>{s.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* TYPOGRAPHY */}
          <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', display: 'block', margin: '48px 0 16px' }}>TYPOGRAPHY</span>
          <div className="press-type-grid">
            <div style={cardStyle}>
              <span style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', display: 'block', lineHeight: 1 }}>Aa</span>
              <p style={{ fontSize: '18px', color: 'var(--ink)', margin: '16px 0 20px', letterSpacing: '-.01em' }}>The quick brown fox jumps.</p>
              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>PRIMARY FONT</span>
                <p style={{ fontSize: '13px', color: 'var(--ink)', margin: '8px 0 4px', fontWeight: 700 }}>Space Grotesk</p>
                <p style={{ fontSize: '12px', color: 'var(--ink-soft)', margin: 0 }}>Headings, display text, body copy</p>
              </div>
            </div>
            <div style={cardStyle}>
              <span className="mono" style={{ fontSize: '48px', fontWeight: 700, color: 'var(--ink)', display: 'block', lineHeight: 1 }}>Aa</span>
              <p className="mono" style={{ fontSize: '14px', color: 'var(--ink)', margin: '16px 0 20px', letterSpacing: '.06em' }}>SAMPLE MONO TEXT 0123</p>
              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>MONO FONT</span>
                <p className="mono" style={{ fontSize: '13px', color: 'var(--ink)', margin: '8px 0 4px', fontWeight: 700 }}>IBM Plex Mono</p>
                <p style={{ fontSize: '12px', color: 'var(--ink-soft)', margin: 0 }}>Eyebrows, labels, stamps, data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USAGE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">PRESS / 003</span>
          <h2 style={h2Style}>How to use our brand.</h2>
          <div style={{ borderLeft: '3px solid var(--flask)', background: 'var(--paper-raised)', padding: '18px 22px', margin: '0 0 24px', maxWidth: '760px' }}>
            <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', fontWeight: 700 }}>PERMISSION REQUIRED</span>
            <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.7, margin: '8px 0 0' }}>Any use of the Comet Foundry name, logo, or brand assets requires prior written permission from the Foundation. Request access by emailing <a href={`mailto:${PRESS_EMAIL}?subject=Brand%20Usage%20Request`} style={{ color: 'var(--flask)', textDecoration: 'none', fontWeight: 600 }}>{PRESS_EMAIL}</a> with your intended use, publication, and timeline. We respond within 2 business days.</p>
          </div>
          <div className="mission-split-grid" style={{ marginTop: '16px' }}>
            <div style={{ ...cardStyle, borderLeft: '3px solid var(--flask)' }}>
              <span className="mono" style={{ fontSize: '11px', letterSpacing: '.14em', color: 'var(--flask)', fontWeight: 700 }}>DO</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Request written permission before any use of our name, logo, or brand assets', 'Use only the files we send you after approval — do not extract assets from the site', 'Maintain the clear space around the logo defined in our brand guide', 'Refer to us as "Comet Foundry" (two words, both capitalized)', 'Use the official color palette exactly as documented above'].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--flask)', flexShrink: 0 }}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ ...cardStyle, borderLeft: '3px solid var(--ink)' }}>
              <span className="mono" style={{ fontSize: '11px', letterSpacing: '.14em', color: 'var(--ink)', fontWeight: 700 }}>DO NOT</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Use our logo or brand assets without prior written approval from the Foundation', 'Right-click, screenshot, or otherwise reproduce assets from this site without permission', 'Modify, stretch, distort, or recolor the logo in any form', 'Use the logo on busy backgrounds, patterns, or in a way that implies endorsement', 'Refer to us as "CF", "Comet", or "The Foundry" in formal contexts', 'Use unofficial colors or fonts to represent our brand'].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--ink)', flexShrink: 0 }}>✗</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA KIT */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">PRESS / 004</span>
          <h2 style={h2Style}>Media kit.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: '640px' }}>Our full media kit includes the brand assets above, key facts, founder bio, approved photography, and chapter information.</p>
          <div style={{ border: '1px solid var(--line)', padding: '32px', background: 'var(--paper-raised)' }}>
            <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>COMET FOUNDRY MEDIA KIT</span>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', margin: '4px 0 20px', letterSpacing: '.06em' }}>Last updated: August 2026</p>
            <p style={{ fontSize: '13px', color: 'var(--ink)', margin: '0 0 12px', fontWeight: 600 }}>Includes:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['Brand assets (logos, colors)', 'Key facts and statistics', 'Founder bio and photo', 'Chapter information', 'Mission and doctrine summary'].map((t) => (
                <li key={t} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--ink-soft)' }}>
                  <span style={{ color: 'var(--flask)' }}>·</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a className="hero-cta-primary" href={`mailto:${PRESS_EMAIL}?subject=Media%20Kit%20Request`}>DOWNLOAD MEDIA KIT →</a>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-soft)', margin: '16px 0 0', letterSpacing: '.06em', fontStyle: 'italic' }}>Media kit file coming soon. Request via email and we will send it directly.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">PRESS / 005</span>
          <h2 style={h2Style}>Press contact.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: '640px' }}>For press inquiries, interview requests, partnership announcements, or anything else requiring official comment from Comet Foundry — reach out directly.</p>
          <div style={{ border: '1px solid var(--line)', padding: '32px' }}>
            <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>PRESS & MEDIA INQUIRIES</span>
            <p style={{ fontSize: '16px', color: 'var(--ink)', margin: '12px 0 4px', fontWeight: 700 }}>Comet Foundry Foundation</p>
            <p className="mono" style={{ fontSize: '13px', color: 'var(--ink)', margin: '0 0 16px' }}>{PRESS_EMAIL}</p>
            <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '0 0 20px' }}>We respond to press inquiries within 2 business days.</p>
            <a className="hero-cta-primary" href={`mailto:${PRESS_EMAIL}?subject=Press%20Inquiry`}>SEND A PRESS INQUIRY →</a>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">PRESS / 006</span>
          <h2 style={h2Style}>Quick facts.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>{f.label}:</span>
                <span style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>{f.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
