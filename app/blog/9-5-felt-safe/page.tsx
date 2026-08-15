import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = pageMetadata({
  path: '/blog/9-5-felt-safe',
  ogTitle: "The 9-5 Felt Safe. It Wasn't. — Comet Foundry",
  description: "A steady job isn't the safe path it looks like — it's a bet on one company, one manager, one budget cycle you don't get a vote in. Notes from Comet Foundry's Think Lab.",
});

const paragraphs = [
  "A friend of mine got laid off last year. Six years at the same company, good reviews every cycle, never missed a deadline. Then one Tuesday morning, a 15-minute call, and it was over. No warning, no say in it, no plan B because he'd never needed one — the job was the plan.",
  "I used to think startups were the risky path and a steady job was the safe one. I don't think that anymore. A job is a bet you make on one company, one manager, one budget cycle, and you don't get a vote in any of it. If it goes well, you get a raise. If it doesn't, you get an email.",
  "Building something of your own is a different kind of risk — the kind where the outcome is actually tied to your effort. It's harder in the short term. There's no bi-weekly paycheck telling you you're doing fine. But over a longer stretch, you end up owning something instead of renting your income from someone else.",
  'I\'m not saying everyone should quit their job tomorrow. Most people can\'t, and that\'s a real constraint, not a mindset problem. What I am saying is: stop assuming the safe-looking path is actually the safe one. Ask what happens to you the day the company decides it doesn\'t need you anymore. If the answer is "not much," that\'s worth sitting with.',
  "That's part of why we started Comet Foundry. Not everyone in the house has quit their job. Some are building nights and weekends, testing the waters before jumping. That's fine — the point isn't recklessness. The point is not mistaking comfort for security.",
];

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="The 9-5 Felt Safe. It Wasn't."
      dateLabel="AUG 15, 2026"
      isoDate="2026-08-15"
      slug="9-5-felt-safe"
      paragraphs={paragraphs}
    />
  );
}
