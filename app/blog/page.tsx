import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/blog',
  ogTitle: 'Blog — Comet Foundry',
  description: "Updates, postmortems, and the occasional controversial opinion from Comet Foundry's Think Lab.",
});

const POSTS = [
  {
    grad: '',
    date: 'AUG 15, 2026',
    title: "The 9-5 Felt Safe. It Wasn't.",
    excerpt: "A friend got laid off after six years of good reviews. That's when I stopped thinking of a steady job as the safe path.",
    href: '/blog/9-5-felt-safe',
  },
  {
    grad: 'alt',
    date: 'AUG 08, 2026',
    title: "Nobody Tells You the First Idea Usually Doesn't Work",
    excerpt: "Almost everyone who's built something real has a first attempt that quietly died. You just never hear about it.",
    href: '/blog/first-idea-doesnt-work',
  },
  {
    grad: 'alt2',
    date: 'AUG 01, 2026',
    title: 'We Trained a Generation to Follow Instructions. The World Needs People Who Can Build.',
    excerpt: 'School teaches you to follow instructions well. Nobody teaches you to decide what the problem even is.',
    href: '/blog/build-dont-follow',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Blog</div>
          <h1>Notes From The Lab</h1>
          <span className="hero-note hand">fresh from the lab</span>
          <p className="lede">Updates, postmortems, and the occasional controversial opinion from Think Lab.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="card-grid">
            {POSTS.map((post) => (
              <div className="post-card" key={post.href}>
                <div className={`card-media${post.grad ? ` ${post.grad}` : ''}`} />
                <div className="card-body">
                  <span className="mono-small">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="card-link" href={post.href}>Read →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
