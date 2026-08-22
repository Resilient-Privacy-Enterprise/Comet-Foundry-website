import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/field-notes',
  ogTitle: 'Field Notes — Comet Foundry',
  description: 'Field Notes — Coming soon to Comet Foundry.',
});

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Chronicle / Field Notes</div>
          <span className="mono" style={{ display: 'block', fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', marginBottom: '12px' }}>CHRONICLE / FIELD NOTES</span>
          <h1>Field Notes</h1>
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
