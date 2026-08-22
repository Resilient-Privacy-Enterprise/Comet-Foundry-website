import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import StashLayout from '@/components/StashLayout';

export const metadata: Metadata = pageMetadata({
  path: '/stash/github',
  ogTitle: 'GitHub Repos — The Stash',
  description: 'Open source repos, boilerplates, and starter kits that save builders weeks of work.',
});

const sections = [
  {
    heading: 'STARTER KITS & BOILERPLATES',
    entries: [
      { tag: 'OPEN SOURCE', title: 'Next.js + Supabase Starter', description: 'The fastest way to start a full stack web app. Auth, database, and deployment wired up out of the box.', link: 'https://github.com/vercel/next.js/tree/canary/examples/with-supabase', linkLabel: 'VIEW →' },
      { tag: 'OPEN SOURCE', title: 'Shadcn/ui', description: 'The best component library for React. Copy and paste components that actually look good. Used by serious products.', link: 'https://github.com/shadcn-ui/ui', linkLabel: 'VIEW →' },
    ],
  },
  {
    heading: 'LEARNING & REFERENCE',
    entries: [
      { tag: 'OPEN SOURCE', title: 'system-design-primer', description: 'The most comprehensive system design reference on GitHub. Essential reading before any technical interview or architecture conversation.', link: 'https://github.com/donnemartin/system-design-primer', linkLabel: 'VIEW →' },
      { tag: 'OPEN SOURCE', title: 'free-programming-books', description: 'A massive curated list of free programming books, courses, and resources in every language and framework.', link: 'https://github.com/EbookFoundation/free-programming-books', linkLabel: 'VIEW →' },
      { tag: 'OPEN SOURCE', title: 'public-apis', description: 'A curated list of free public APIs for building projects. Organized by category. Saves hours of searching.', link: 'https://github.com/public-apis/public-apis', linkLabel: 'VIEW →' },
      { tag: 'OPEN SOURCE', title: 'awesome-selfhosted', description: 'A list of software that can be self-hosted. Useful for builders who want full control over their stack.', link: 'https://github.com/awesome-selfhosted/awesome-selfhosted', linkLabel: 'VIEW →' },
    ],
  },
];

export default function Page() {
  return (
    <StashLayout
      currentSlug="github"
      eyebrow="GITHUB"
      h1="Useful GitHub Repos."
      sub="Open source repos, boilerplates, and starter kits that save builders weeks of work. All free. All open source."
      sections={sections}
    />
  );
}
