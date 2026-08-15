import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = pageMetadata({
  path: '/blog/first-idea-doesnt-work',
  ogTitle: "Nobody Tells You the First Idea Usually Doesn't Work — Comet Foundry",
  description: "Almost everyone who's built something real has a first attempt that quietly died. You just never hear about it. Notes from Comet Foundry's Think Lab.",
});

const paragraphs = [
  "When I started my first company, I thought I had it figured out. I hadn't. It didn't work, and for a while that felt like proof I wasn't cut out for this.",
  "Looking back, almost everyone I know who's built something real has a version of this story — an idea that didn't land, a launch nobody showed up for, months spent on something that quietly died. The founders you hear about are usually on their second or third attempt by the time anyone's paying attention. You just never hear about attempt one.",
  "That gap between the story you're told and the reality is what makes people quit too early. They assume struggling on the first try means they're not built for this, so they go back to something safer before they get the chance to actually get good at it.",
  "Nobody's born knowing how to hire, how to talk to a customer who hates your product, or how to keep going after a partner backs out. You learn that by doing it badly the first time and less badly the second. That's not failure — that's just what the process looks like from the inside.",
  "This is the actual reason a house like Comet Foundry matters more than another mentorship program or another pitch deck template. Put people in the same kitchen while they're on attempt one, two, and three at the same time, and the lesson passes between them faster than any advice could. You watch someone else survive their bad idea, and it makes yours feel a lot less like the end of the road.",
];

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="Nobody Tells You the First Idea Usually Doesn't Work"
      dateLabel="AUG 08, 2026"
      isoDate="2026-08-08"
      slug="first-idea-doesnt-work"
      paragraphs={paragraphs}
    />
  );
}
