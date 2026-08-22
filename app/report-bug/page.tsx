import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import BugReportForm from '@/components/BugReportForm';

export const metadata: Metadata = pageMetadata({
  path: '/report-bug',
  ogTitle: 'Report a Bug — Comet Foundry',
  description: 'Found something broken on the Comet Foundry site? Let us know and we\'ll fix it.',
});

export default function ReportBugPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Chronicle / Report a Bug</div>
          <span className="mono" style={{ display: 'block', fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', marginBottom: '12px' }}>CHRONICLE / REPORT A BUG</span>
          <h1>Found something broken? Tell us.</h1>
          <span className="hero-note hand">we appreciate the catch. :)</span>
          <p className="lede">We build this ourselves. Sometimes things break. If you found something wrong on cometfoundry.com — a broken link, a missing page, a layout issue, anything — let us know and we will fix it.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <BugReportForm />
          <p className="mono" style={{ fontSize: '12px', color: 'var(--ink-soft)', letterSpacing: '.06em', margin: '32px 0 0', maxWidth: '640px', lineHeight: 1.7 }}>You can also email about the issue on <a href="mailto:security@cometfoundry.com" style={{ color: 'var(--flask)' }}>security@cometfoundry.com</a>. We review all submissions and fix issues as fast as we can. Thank you for helping us build better.</p>
          <div className="mission-cta-row" style={{ marginTop: '28px' }}>
            <Link className="hero-cta-secondary" href="/">BACK TO HOME →</Link>
            <Link className="hero-cta-secondary" href="/field-notes">VIEW FIELD NOTES →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
