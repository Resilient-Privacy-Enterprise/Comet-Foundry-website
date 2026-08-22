import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import StashLayout from '@/components/StashLayout';

export const metadata: Metadata = pageMetadata({
  path: '/stash/hackathons',
  ogTitle: 'Hackathons — The Stash',
  description: 'A curated list of upcoming hackathons in the USA — filtered for student builders.',
});

const entries = [
  { tag: 'IN-PERSON · ANNUAL', title: 'HackMIT', description: 'One of the most competitive student hackathons in the country. Hosted at MIT every fall. 36 hours. Open to all students.', link: 'https://hackmit.org', linkLabel: 'VIEW →' },
  { tag: 'IN-PERSON · ANNUAL', title: 'TreeHacks (Stanford)', description: "Stanford's flagship hackathon. 36 hours, 1,000+ hackers, strong hardware and AI tracks. Open to all students.", link: 'https://treehacks.com', linkLabel: 'VIEW →' },
  { tag: 'IN-PERSON · ANNUAL', title: 'HackTX (UT Austin)', description: 'One of the largest hackathons in Texas. 24 hours, strong CS and entrepreneurship community. Relevant for Texas-based builders.', link: 'https://hacktx.com', linkLabel: 'VIEW →' },
  { tag: 'IN-PERSON · ANNUAL', title: 'HackUTD (UT Dallas)', description: 'The flagship hackathon at UT Dallas. Home turf for Chapter 01 builders. One of the largest in Texas.', link: 'https://hackutd.co', linkLabel: 'VIEW →' },
  { tag: 'VIRTUAL · ONGOING', title: 'MLH Hackathons (Major League Hacking)', description: 'The largest hackathon league in the world. 200+ events per year — virtual and in-person. The best place to find your next hackathon.', link: 'https://mlh.io', linkLabel: 'VIEW →' },
  { tag: 'IN-PERSON · ANNUAL', title: 'CalHacks (UC Berkeley)', description: "UC Berkeley's official hackathon. 36 hours, one of the largest collegiate hackathons in the country.", link: 'https://calhacks.io', linkLabel: 'VIEW →' },
  { tag: 'IN-PERSON · ANNUAL', title: 'HackGT (Georgia Tech)', description: "Georgia Tech's flagship hackathon. 36 hours in Atlanta. Strong hardware and ML tracks. Relevant for Chapter 05 builders.", link: 'https://hexlabs.org', linkLabel: 'VIEW →' },
];

export default function Page() {
  return (
    <StashLayout
      currentSlug="hackathons"
      eyebrow="HACKATHONS"
      h1="Hackathons in the USA."
      sub="Upcoming hackathons worth your time — curated for student builders. Updated regularly."
      filterStrip={['ALL', 'UPCOMING', 'VIRTUAL', 'IN-PERSON']}
      sections={[{ entries }]}
    />
  );
}
