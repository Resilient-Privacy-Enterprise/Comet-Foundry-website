import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { POST_ROLE_URL } from '@/lib/careers';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export const metadata: Metadata = pageMetadata({
  path: '/careers/built-at-cf',
  ogTitle: 'Built at CF — Careers',
  description: 'Jobs and internships at startups born inside Comet Foundry chapters.',
});

export default function Page() {
  return (
    <>
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/careers">Careers</Link> / Built at CF</div>
          <span className="mission-eyebrow mono">CAREERS / BUILT AT CF</span>
          <h1 className="mission-h1">Startups born here.<br />Hiring builders like you.</h1>
          <p className="doctrine-sub">Every company on this page started inside a Comet Foundry chapter. These are your future colleagues, co-founders, and first bosses — people who sat in the same lab you are sitting in right now.</p>
        </div>
      </section>

      <section className="mission-block">
        <div className="wrap">
          <div className="stash-layout">
            {/* SIDEBAR */}
            <aside className="stash-sidebar">
              <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', display: 'block', marginBottom: '16px' }}>ABOUT THIS PAGE</span>
              <p style={{ fontSize: '12px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 24px' }}>Only companies that started inside a Comet Foundry chapter are listed here. No outside companies. No exceptions.</p>
              <div style={{ paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
                <p style={{ fontSize: '13px', color: 'var(--ink)', fontStyle: 'italic', margin: '0 0 12px' }}>Building something at CF and ready to make your first hire?</p>
                <a className="hero-cta-secondary" href={POST_ROLE_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', padding: '10px 14px' }}>POST A ROLE →</a>
              </div>
              <p className="mono" style={{ fontSize: '10px', color: 'var(--ink-soft)', margin: '24px 0 0', paddingTop: '20px', borderTop: '1px solid var(--line)', letterSpacing: '.08em' }}>Last updated: Aug 2026</p>
            </aside>

            {/* CONTENT */}
            <div className="stash-content">
              <div style={{ border: '1px dashed var(--line)', padding: '48px', background: 'var(--paper-raised)' }}>
                <span className="mono" style={{ fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)' }}>CHAPTER 01 · FALL 2026</span>
                <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase', margin: '16px 0 20px' }}>The first roles will be posted after Demo Day.</h2>
                <div style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '640px' }}>
                  <p style={{ margin: '0 0 16px' }}>The startups being built inside Chapter 01 right now are still in their first semester.</p>
                  <p style={{ margin: '0 0 16px' }}>Some of them will make their first hire before the year is out. When they do — whether that is a co-founder, a part-time engineer, or a first intern — that role will appear right here.</p>
                  <p style={{ margin: '0 0 16px' }}>Come back after Demo Day. Fall 2026.</p>
                  <p style={{ margin: 0 }}>Or be the one posting the role — apply to join Chapter 01 and start building.</p>
                </div>
                <div className="mission-cta-row" style={{ marginTop: '32px' }}>
                  <a className="hero-cta-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">APPLY TO JOIN CHAPTER 01 →</a>
                  <Link className="hero-cta-secondary" href="/demo-day">VIEW DEMO DAY →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
