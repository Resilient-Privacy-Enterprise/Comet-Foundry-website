import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { LABS, otherLabs } from '@/lib/labs';
import LabPageLayout from '@/components/LabPageLayout';

export const metadata: Metadata = pageMetadata({
  path: '/programs/think-lab',
  ogTitle: 'Think Lab — Comet Foundry',
  description: 'Mentorship, research discussions, and 1:1 feedback sessions. Bring a half-formed argument and leave with a sharper one — preferably a controversial one.',
});

const lab = LABS.find((l) => l.slug === 'think-lab')!;

export default function ThinkLabPage() {
  return (
    <LabPageLayout
      num={lab.num}
      name={lab.name}
      cmd={lab.cmd}
      handNote={lab.stamp}
      accent={lab.accent}
      intro="Mentorship, research discussions, and 1:1 feedback sessions — the place to argue about your idea before you build the wrong version of it."
      body={[
        "Think Lab is the slower, sharper counterpart to Build Lab — less about shipping, more about figuring out if you're building the right thing in the first place.",
        "Bring a half-formed argument, a business model you're not sure about, or a research question you can't shake. Leave with a sharper version of it, or a good reason to drop it.",
        "Mentorship sessions and 1:1 feedback happen here too — the kind where someone actually pushes back.",
      ]}
      whatsHere={['Mentorship sessions', 'Research discussions', '1:1 feedback', 'Half-formed arguments welcome']}
      otherLabs={otherLabs('think-lab')}
    />
  );
}
