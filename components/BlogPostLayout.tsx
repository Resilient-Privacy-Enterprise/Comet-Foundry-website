import Link from 'next/link';

export default function BlogPostLayout({
  title,
  dateLabel,
  isoDate,
  slug,
  paragraphs,
}: {
  title: string;
  dateLabel: string;
  isoDate: string;
  slug: string;
  paragraphs: string[];
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    datePublished: isoDate,
    author: { '@type': 'Person', name: 'Vishva Patel' },
    publisher: { '@type': 'Organization', name: 'Comet Foundry', url: 'https://www.cometfoundry.com/' },
    mainEntityOfPage: `https://www.cometfoundry.com/blog/${slug}`,
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / {title}</div>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <div className="legal-effective">{dateLabel} &nbsp;|&nbsp; THINK LAB</div>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div style={{ maxWidth: 760, margin: '44px auto 0', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <Link
              className="lab-link mono"
              href="/blog"
              style={{ color: 'var(--ink-soft)', borderBottom: '1px solid var(--line)', textDecoration: 'none', fontSize: 13 }}
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
