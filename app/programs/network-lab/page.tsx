import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LABS, otherLabs } from '@/lib/labs';
import LabPageLayout from '@/components/LabPageLayout';

export const metadata: Metadata = pageMetadata({
  path: '/programs/network-lab',
  ogTitle: 'Network Lab — Comet Foundry',
  description: 'Demo nights, founder dinners, and industry partnerships. The useful kind of networking — the kind where you actually stay in touch.',
});

const lab = LABS.find((l) => l.slug === 'network-lab')!;

export default function NetworkLabPage() {
  return (
    <LabPageLayout
      num={lab.num}
      name={lab.name}
      cmd={lab.cmd}
      handNote={lab.stamp}
      accent={lab.accent}
      intro="Demo nights, founder dinners, and industry partnerships — the useful kind of networking, the kind where you actually stay in touch."
      body={[
        "Network Lab exists because most “networking” is a waste of everyone's time. This is the version that isn't.",
        "Demo nights where you show real work to real people. Founder dinners where the conversation doesn't stop at a business card. Industry partnerships that turn into actual mentorship, not a connection you'll never message again.",
        "You leave with people you'll actually stay in touch with.",
      ]}
      whatsHere={['Demo nights', 'Founder dinners', 'Industry partnerships', "People you'll actually stay in touch with"]}
      otherLabs={otherLabs('network-lab')}
    />
  );
}
