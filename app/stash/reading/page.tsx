import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import StashLayout from '@/components/StashLayout';

export const metadata: Metadata = pageMetadata({
  path: '/stash/reading',
  ogTitle: 'Reading List — The Stash',
  description: 'Books, essays, and long reads every serious builder should have gone through at least once.',
});

const sections = [
  {
    heading: 'MUST READ — BOOKS',
    entries: [
      { tag: 'BOOK', title: 'Zero to One — Peter Thiel', description: 'The most direct book on what it actually means to build something new. Required reading before you write your first pitch.' },
      { tag: 'BOOK', title: 'The Mom Test — Rob Fitzpatrick', description: 'How to talk to customers and validate ideas without getting lied to. The most practical startup book ever written.' },
      { tag: 'BOOK', title: 'The Hard Thing About Hard Things — Ben Horowitz', description: 'What running a company actually feels like. Not theory. Not frameworks. Real decisions with no good answers.' },
      { tag: 'BOOK', title: 'Founders at Work — Jessica Livingston', description: 'Interviews with founders of companies in their earliest days. What it looked like before it was obvious it would work.' },
    ],
  },
  {
    heading: 'ESSAYS & LONG READS',
    entries: [
      { tag: 'ESSAY', title: "Do Things That Don't Scale — Paul Graham", description: 'The most important early stage startup advice ever written. Read it before you automate anything.', link: 'http://paulgraham.com/ds.html', linkLabel: 'READ →' },
      { tag: 'ESSAY', title: 'Startup = Growth — Paul Graham', description: 'The clearest definition of what a startup actually is and why growth is the only metric that matters.', link: 'http://paulgraham.com/growth.html', linkLabel: 'READ →' },
      { tag: 'ESSAY', title: 'The Pmarca Guide to Startups — Marc Andreessen', description: 'A series of posts on product/market fit, hiring, and building companies. Still the best writing on PMF.', link: 'https://pmarchive.com', linkLabel: 'READ →' },
    ],
  },
];

export default function Page() {
  return (
    <StashLayout
      currentSlug="reading"
      eyebrow="READING"
      h1="Reading List."
      sub="Books, essays, and long reads every serious builder should have gone through at least once. No business school fluff."
      sections={sections}
    />
  );
}
