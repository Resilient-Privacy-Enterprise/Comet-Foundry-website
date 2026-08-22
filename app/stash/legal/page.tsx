import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import StashLayout from '@/components/StashLayout';

export const metadata: Metadata = pageMetadata({
  path: '/stash/legal',
  ogTitle: 'Legal Templates — The Stash',
  description: 'Free legal templates for early stage startups. Term sheets, NDAs, co-founder agreements, and more.',
});

export default function Page() {
  return (
    <StashLayout
      currentSlug="legal"
      eyebrow="LEGAL"
      h1="Legal Templates."
      sub="The documents every early stage startup needs — before they need a lawyer. Free. Plain English. No gatekeeping."
      disclaimer="These templates are provided for educational purposes only and do not constitute legal advice. Review with a qualified attorney before use."
      emptyState
    />
  );
}
