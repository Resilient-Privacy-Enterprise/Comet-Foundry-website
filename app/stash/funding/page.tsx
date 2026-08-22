import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import StashLayout from '@/components/StashLayout';

export const metadata: Metadata = pageMetadata({
  path: '/stash/funding',
  ogTitle: 'Funding & Grants — The Stash',
  description: 'Student-eligible grants, fellowships, and pre-seed programs for early stage builders.',
});

const sections = [
  {
    heading: 'FELLOWSHIPS & PROGRAMS',
    entries: [
      { tag: 'FELLOWSHIP · ANNUAL', title: 'Thiel Fellowship', description: '$100,000 to stop out of school and build a company. The most prestigious builder fellowship in the country. Extremely competitive. Apply anyway.', link: 'https://thielfellowship.org', linkLabel: 'APPLY →' },
      { tag: 'PROGRAM · ROLLING', title: 'Y Combinator', description: 'The most successful startup accelerator in the world. $500K for 7% equity. Apply as early as possible — student teams are actively recruited.', link: 'https://ycombinator.com/apply', linkLabel: 'APPLY →' },
      { tag: 'GRANT · ANNUAL', title: 'NSF I-Corps', description: 'National Science Foundation program that provides $50,000 in non-dilutive funding for student-led startups with a technology component.', link: 'https://nsf.gov/i-corps', linkLabel: 'LEARN MORE →' },
      { tag: 'FELLOWSHIP · ANNUAL', title: 'Kleiner Perkins Fellows', description: 'Fellowship for engineering, design, and product students. Access to KP network, mentorship, and recruiting.', link: 'https://fellows.kleinerperkins.com', linkLabel: 'APPLY →' },
      { tag: 'PROGRAM · ROLLING', title: 'Pear VC Garage', description: 'Pre-seed program for student founders. $250K investment, office space in Palo Alto, access to the Pear network.', link: 'https://pear.vc/garage', linkLabel: 'LEARN MORE →' },
      { tag: 'GRANT · ROLLING', title: 'MIT $100K Competition', description: 'One of the oldest and most prestigious student startup competitions. Open to all students. $100K in prizes.', link: 'https://mit100k.org', linkLabel: 'LEARN MORE →' },
    ],
  },
];

export default function Page() {
  return (
    <StashLayout
      currentSlug="funding"
      eyebrow="FUNDING"
      h1="Funding & Grants."
      sub="Student-eligible grants, fellowships, pre-seed programs, and non-dilutive funding for early stage builders. No equity required for most of these."
      sections={sections}
    />
  );
}
