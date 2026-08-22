import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

const STRIPE_URL = 'https://donate.stripe.com/cNi9AT7RE1Xt6rX30Sfw400';
const GOFUNDME_URL = 'https://gofund.me/e64942534';
const EQUIPMENT_FORM = 'https://forms.cloud.microsoft/r/9xXGnMJ51x';

export const metadata: Metadata = pageMetadata({
  path: '/donate',
  ogTitle: 'Fuel It — Comet Foundry',
  description: 'Comet Foundry runs on the conviction of people who believe student founders deserve better infrastructure. Fund the labs, the events, and the movement.',
  keywords: ['donate', 'fuel it', 'support', 'comet foundry', 'funding', 'student founders'],
});

const allocations = [
  {
    num: '01',
    title: 'THE SPACE',
    desc: 'Keeping builder spaces open. Equipment, utilities, and everything that makes a lab a lab rather than an empty room.',
  },
  {
    num: '02',
    title: 'THE EVENTS',
    desc: 'Kickoff nights, critique sessions, Demo Days, founder dinners. The programming that makes the community real rather than theoretical.',
  },
  {
    num: '03',
    title: 'THE BUILD BENCH',
    desc: 'Hardware, materials, and tools that students cannot afford individually but every builder needs access to.',
  },
  {
    num: '04',
    title: 'THE MENTORS',
    desc: 'Bringing in operators, founders, and investors who have actually built something — and will show up, not just endorse from a distance.',
  },
];

const equipmentList = [
  'Technology and computing equipment',
  'Hardware and prototyping tools',
  '3D printers and fabrication equipment',
  'Lab materials and build supplies',
  'Anything a serious builder would use',
];

export default function Page() {
  return (
    <>
      <section className="mission-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/mission/why">Mission</Link> / Fuel It</div>
          <span className="mission-eyebrow mono">MISSION / 006</span>
          <h1 className="mission-h1">
            Every lab that stays<br />
            open tonight was funded<br />
            by someone who believed<br />
            in this before it was<br />
            <span className="orange">obvious.</span>
          </h1>
          <p className="doctrine-sub">Comet Foundry does not have a university budget line. It does not have institutional funding. It runs on the conviction of people who believe that student founders deserve better infrastructure — and are willing to put resources behind that belief.</p>
          <p className="doctrine-sub" style={{ marginTop: '8px' }}>If that is you, this is where it starts.</p>
        </div>
      </section>

      {/* WHERE IT GOES */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">THE ALLOCATION</span>
          <div className="mission-prose" style={{ maxWidth: '680px', marginBottom: '32px' }}>
            <p>Every dollar that comes into Comet Foundry goes directly back into the builder infrastructure. No administrative overhead. No middle layer. Straight to the labs.</p>
          </div>
          <div className="fuel-alloc-grid">
            {allocations.map((a) => (
              <div key={a.num} className="fuel-alloc-card">
                <span className="fuel-alloc-num mono">{a.num}</span>
                <h3 className="fuel-alloc-title">{a.title}</h3>
                <p className="fuel-alloc-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVE WHAT YOU CAN */}
      <section className="mission-block fuel-give-section">
        <div className="wrap">
          <span className="block-eyebrow mono">FINANCIAL SUPPORT</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(20px, 3vw, 30px)', marginTop: '16px', maxWidth: '640px' }}>&ldquo;There is no minimum. There is no right amount. There is only whether you believe students should get to build before they are told they are ready.&rdquo;</h2>
          <div className="fuel-donate-btns">
            <a className="payment-btn" href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="1.7">
                <rect x="2.5" y="5" width="19" height="14" rx="2.2" />
                <path d="M2.5 9.5h19" />
                <path d="M6 14.5h4" />
              </svg>
              <span>Donate with <strong style={{ color: '#635BFF' }}>Stripe</strong></span>
            </a>
            <a className="payment-btn" href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00B964" strokeWidth="1.7">
                <path d="M12 20.2s-7.8-4.7-7.8-10.2A4.6 4.6 0 0 1 12 6.9 4.6 4.6 0 0 1 19.8 10c0 5.5-7.8 10.2-7.8 10.2z" />
              </svg>
              <span>Donate with <strong style={{ color: '#00B964' }}>GoFundMe</strong></span>
            </a>
          </div>
          <p className="mono fuel-tax-note">Comet Foundry&apos;s 501(c)(3) status is pending IRS determination. Donations are not currently tax-deductible. We will notify all supporters when tax-deductible status is confirmed.</p>
          <a className="founder-icon-link" href="mailto:info@cometfoundry.com?subject=I'd%20like%20to%20support%20Comet%20Foundry" style={{ marginTop: '12px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
            <span className="mono">Prefer email? Reach out directly →</span>
          </a>
        </div>
      </section>

      {/* IN-KIND GIVING */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">EQUIPMENT &amp; MATERIALS</span>
          <div className="mission-prose" style={{ maxWidth: '680px' }}>
            <p>Not every contribution is financial. Some of the most valuable things in our labs arrived as equipment donations from individuals and organizations who had resources that belonged in a builder&apos;s hands.</p>
            <p>We actively welcome donations of:</p>
          </div>
          <ul className="fuel-equip-list">
            {equipmentList.map((item, i) => (
              <li key={i} className="mono">{item}</li>
            ))}
          </ul>
          <div className="mission-prose" style={{ maxWidth: '680px', marginTop: '20px' }}>
            <p>If your organization is upgrading equipment or has tools sitting idle — we want to hear from you. Every piece of equipment we receive is one more resource a student founder did not have yesterday.</p>
          </div>
          <a className="hero-cta-primary" href={EQUIPMENT_FORM} target="_blank" rel="noopener noreferrer" style={{ marginTop: '24px', display: 'inline-block' }}>DONATE EQUIPMENT →</a>
        </div>
      </section>

      {/* OTHER WAYS TO HELP */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">NOT READY TO GIVE?</span>
          <div className="fuel-other-grid">
            <div className="fuel-other-card">
              <h3 className="fuel-other-title">BECOME A BACKER</h3>
              <p>Fund experiments, send mentors, and support the lab as an organization. Partnership is how companies become part of what we are building — not just adjacent to it.</p>
              <Link href="/backers" className="doctrine-link mono">See Partnership Options →</Link>
            </div>
            <div className="fuel-other-card">
              <h3 className="fuel-other-title">BRING IT TO YOUR CAMPUS</h3>
              <p>If you are a faculty member, administrator, or motivated student at a campus not yet on our map — the most valuable thing you can do is start a chapter.</p>
              <Link href="/chapters/start" className="doctrine-link mono">Bring It To Your Campus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">THE BOTTOM LINE</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(20px, 3.5vw, 34px)', marginTop: '16px' }}>&ldquo;The next generation of founders is being built right now. The question is whether the infrastructure exists to support them.<br /><br />You can help answer that.&rdquo;</h2>
          <div className="mission-cta-row" style={{ marginTop: '32px' }}>
            <a className="hero-cta-primary" href={STRIPE_URL} target="_blank" rel="noopener noreferrer">DONATE VIA STRIPE →</a>
            <a className="hero-cta-secondary" href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">DONATE VIA GOFUNDME →</a>
          </div>
          <Link href="/backers" className="doctrine-link mono" style={{ marginTop: '16px', display: 'inline-block' }}>BECOME A BACKER →</Link>
        </div>
      </section>
    </>
  );
}
