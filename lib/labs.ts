export type Lab = {
  num: string;
  name: string;
  slug: string;
  cmd: string;
  detail: string;
  stamp: string;
  accent: string;
  annot?: string;
};

export const LABS: Lab[] = [
  {
    num: '01',
    name: 'Build Lab',
    slug: 'build-lab',
    cmd: 'Make things.',
    detail: 'Weekend build sprints, prototyping sessions, and open workshop hours with the hardware bench and dev tools. Show up with an idea, leave with a v1.',
    stamp: 'MAKE →',
    accent: 'var(--flask)',
    annot: 'seriously, anything',
  },
  {
    num: '02',
    name: 'Think Lab',
    slug: 'think-lab',
    cmd: 'Have an opinion.',
    detail: 'Mentorship, research discussions, and 1:1 feedback sessions. Bring a half-formed argument and leave with a sharper one — preferably a controversial one.',
    stamp: 'preferably controversial',
    accent: 'var(--blueprint)',
  },
  {
    num: '03',
    name: 'Network Lab',
    slug: 'network-lab',
    cmd: 'Meet people.',
    detail: 'Demo nights, founder dinners, and industry partnerships. The useful kind of networking — the kind where you actually stay in touch.',
    stamp: 'the useful kind',
    accent: '#b5860b',
  },
  {
    num: '04',
    name: 'After Hours',
    slug: 'after-hours',
    cmd: 'Touch grass. 😂',
    detail: 'Informal hangouts, game nights, and the community that makes the other three labs worth showing up for. Occasionally, we go outside.',
    stamp: 'occasionally',
    accent: '#a03d5b',
  },
];

export function otherLabs(slug: string) {
  return LABS.filter((l) => l.slug !== slug);
}
