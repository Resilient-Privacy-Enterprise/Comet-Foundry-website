import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comet Foundry',
  description: "This page doesn't exist. Head back to the Comet Foundry homepage.",
};

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Not Found</div>
          <h1>404</h1>
          <span className="hero-note hand">this experiment failed</span>
          <p className="lede">Nothing&apos;s built at this address. The page you&apos;re looking for either moved or never shipped.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Link className="rsvp-btn" href="/" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
            Back to home →
          </Link>
        </div>
      </section>
    </>
  );
}
