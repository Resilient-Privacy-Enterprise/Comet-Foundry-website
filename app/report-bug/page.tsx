import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import BugReportForm from '@/components/BugReportForm';

export const metadata: Metadata = pageMetadata({
  path: '/report-bug',
  ogTitle: 'Report a Bug — Comet Foundry',
  description: 'Found something broken on the Comet Foundry site? This site is built and maintained by Vishva Patel — let us know and we\'ll fix it.',
});

export default function ReportBugPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Report a Bug</div>
          <h1>Found A Bug?</h1>
          <span className="hero-note hand">tell us what broke</span>
          <p className="lede">
            This site is designed, built, and maintained by our founder, <Link href="/founder">Vishva Patel</Link> — not a dev team, not an agency. If something&apos;s broken, slow, or just looks wrong, this is the fastest way to get it fixed.
          </p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <BugReportForm />
        </div>
      </section>
    </>
  );
}
