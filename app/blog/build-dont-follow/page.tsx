import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = pageMetadata({
  path: '/blog/build-dont-follow',
  ogTitle: 'We Trained a Generation to Follow Instructions. The World Needs People Who Can Build. — Comet Foundry',
  description: "School teaches you to follow instructions well. Nobody teaches you to decide what the problem even is. Notes from Comet Foundry's Think Lab.",
});

const paragraphs = [
  "I think about this a lot when I talk to students at UT Dallas — smart, capable people who can solve almost any problem you hand them, as long as someone else defines the problem first. That's not a knock on them. It's what school actually teaches: follow the instructions well, get the grade, repeat.",
  "Nobody hands you the muscle for the opposite — deciding what the problem even is, building something nobody asked for yet, being wrong in public until you're right. That skill isn't taught. It's practiced, usually by accident, usually by people who ended up around others doing the same thing.",
  "I don't think this is a small gap. As more of the predictable work — the kind school prepares you for — gets automated, the people who stay hard to replace are the ones who can build from nothing, not the ones who can execute instructions well. That shift is already happening. Most people just haven't felt it yet.",
  "I didn't get this muscle from a classroom. I got it from failing at my first company, from late nights during a hackathon that didn't even place first, from being around other people trying to build things and watching how they thought. Comet Foundry exists because I don't think that kind of learning should be an accident. It should be something people can walk into on purpose.",
  "You don't need permission to build something. You need a room where building is normal, and people around you who won't let you talk yourself out of it. That's the bet we're making with this house — that if you put enough people like that in one place, some of them are going to build something the rest of us will be talking about in a few years.",
];

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="We Trained a Generation to Follow Instructions. The World Needs People Who Can Build."
      dateLabel="AUG 01, 2026"
      isoDate="2026-08-01"
      slug="build-dont-follow"
      paragraphs={paragraphs}
    />
  );
}
