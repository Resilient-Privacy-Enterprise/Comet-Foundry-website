import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/apply',
  ogTitle: 'Apply — Comet Foundry',
  description: "Apply to Comet Foundry, UT Dallas's hacker house. Tell us what you want to build — that's most of the application.",
});

export default function ApplyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Apply</div>
          <h1>Apply</h1>
          <span className="hero-note hand">ideas over résumés</span>
          <p className="lede">Tell us what you want to build. That&apos;s most of the application.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          {/* Hidden pending redesign -- see comet-foundry (static site) apply-form history */}
          <form className="apply-form" hidden>
            <div>
              <label htmlFor="apply-name">Name</label>
              <input type="text" id="apply-name" required />
            </div>
            <div>
              <label htmlFor="apply-email">Email</label>
              <input type="email" id="apply-email" required />
            </div>
            <div>
              <label htmlFor="apply-year">Major / Year</label>
              <input type="text" id="apply-year" placeholder="e.g. CS, Sophomore" />
            </div>
            <div>
              <label htmlFor="apply-build">What do you want to build?</label>
              <textarea id="apply-build" placeholder="A rough idea is plenty." />
            </div>
            <div>
              <label htmlFor="apply-heard">How&apos;d you hear about us?</label>
              <select id="apply-heard">
                <option>A friend</option>
                <option>An event</option>
                <option>Social media</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit">SUBMIT APPLICATION →</button>
            <span className="apply-note">We read every application ourselves. No perfect ideas required.</span>
          </form>
        </div>
      </section>
    </>
  );
}
