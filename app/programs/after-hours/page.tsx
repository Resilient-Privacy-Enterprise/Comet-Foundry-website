import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LABS, otherLabs } from '@/lib/labs';
import LabPageLayout from '@/components/LabPageLayout';

export const metadata: Metadata = pageMetadata({
  path: '/programs/after-hours',
  ogTitle: 'After Hours — Comet Foundry',
  description: 'Informal hangouts, game nights, and the community that makes the other three labs worth showing up for. Occasionally, we go outside.',
});

const lab = LABS.find((l) => l.slug === 'after-hours')!;

export default function AfterHoursPage() {
  return (
    <LabPageLayout
      num={lab.num}
      name={lab.name}
      cmd={lab.cmd}
      handNote={lab.stamp}
      accent={lab.accent}
      intro="Informal hangouts, game nights, and the community that makes the other three labs worth showing up for."
      body={[
        "After Hours is the least structured lab, and arguably the most important one — it's where the house actually becomes a community instead of four separate programs.",
        "Game nights, informal hangouts, and the in-between moments that don't show up on a calendar but are the reason people keep showing up.",
        "Occasionally, we even go outside.",
      ]}
      whatsHere={['Informal hangouts', 'Game nights', 'Community, not curriculum', 'Occasional outside time']}
      otherLabs={otherLabs('after-hours')}
    />
  );
}
