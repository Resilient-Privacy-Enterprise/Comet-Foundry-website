import { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { ResourcesPageContent } from '@/components/ResourcesPageContent';

export const metadata: Metadata = pageMetadata({
  path: '/resources',
  ogTitle: 'Free Resources for Student Builders',
  description: 'Free access to tools, APIs, learning materials, and services. Everything you need to build amazing things.',
});

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="breadcrumb">
            <a href="/">Home</a> / Resources
          </span>
          <h1>Free Resources for Student Builders</h1>
          <p className="lede">
            Free access to tools, APIs, learning materials, and services. Everything you need to build amazing things.
          </p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <ResourcesPageContent />
        </div>
      </section>

      <section className="tight join">
        <div className="wrap">
          <h2>Stay Updated</h2>
          <p>Join the Comet Foundry community to stay updated on new resources, workshops, and opportunities.</p>
          <a href="/apply" className="btn">Join The Foundry →</a>
        </div>
      </section>
    </>
  );
}
