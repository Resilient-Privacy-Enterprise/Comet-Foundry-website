import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LABS, otherLabs } from '@/lib/labs';
import LabPageLayout from '@/components/LabPageLayout';

export const metadata: Metadata = pageMetadata({
  path: '/programs/build-lab',
  ogTitle: 'Build Lab — Comet Foundry',
  description: 'Weekend build sprints, prototyping sessions, and open workshop hours with the hardware bench and dev tools. Show up with an idea, leave with a v1.',
});

const lab = LABS.find((l) => l.slug === 'build-lab')!;

export default function BuildLabPage() {
  return (
    <LabPageLayout
      num={lab.num}
      name={lab.name}
      cmd={lab.cmd}
      handNote={lab.stamp}
      accent={lab.accent}
      intro="Weekend build sprints, prototyping sessions, and open workshop hours with the hardware bench and dev tools."
      body={[
        "Build Lab is exactly what it sounds like: a space and a block of time set aside for making things. No pitch required, no idea too small or too weird to bring in.",
        "Weekend build sprints, open workshop hours, and the hardware bench are all here — bring your own project or find one already in progress and jump in.",
        "You don't leave with a plan. You leave with a v1.",
      ]}
      whatsHere={['Hardware bench & dev tools', 'Weekend build sprints', 'Open workshop hours', 'No idea too rough to start']}
      otherLabs={otherLabs('build-lab')}
    />
  );
}
