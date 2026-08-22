import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import StashLayout from '@/components/StashLayout';

export const metadata: Metadata = pageMetadata({
  path: '/stash/guides',
  ogTitle: 'Founder Guides — The Stash',
  description: 'Step by step founder guides. No theory. Just the things that matter when you are building something real.',
});

export default function Page() {
  return (
    <StashLayout
      currentSlug="guides"
      eyebrow="GUIDES"
      h1="Founder Guides."
      sub="Step by step. No theory. The things that actually matter when you are building something real."
      emptyState
    />
  );
}
