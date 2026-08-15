import Link from 'next/link';

export default function LegalLayout({ title, effective, bodyHtml }: { title: string; effective: string; bodyHtml: string }) {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / {title}</div>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <div className="legal-effective" dangerouslySetInnerHTML={{ __html: effective }} />
            <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </div>
        </div>
      </section>
    </>
  );
}
