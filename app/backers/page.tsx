import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/backers',
  ogTitle: 'The Backers — Comet Foundry',
  description: 'The Backers — Coming soon to Comet Foundry.',
});

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / The Backers</div>
          <h1>The Backers</h1>
        </div>
      </section>
      <section className="coming-soon-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="rocket">🚀</div>
          <h2 className="coming-soon-title">Coming Soon</h2>
          <p className="coming-soon-message">This page is under construction. Check back soon.</p>
          <Link href="/"><button className="back-btn">← Back to Home</button></Link>
        </div>
      </section>
    </>
  );
}
