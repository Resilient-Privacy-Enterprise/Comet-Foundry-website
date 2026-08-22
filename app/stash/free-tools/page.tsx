import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import StashLayout from '@/components/StashLayout';

export const metadata: Metadata = pageMetadata({
  path: '/stash/free-tools',
  ogTitle: 'Free Tools — The Stash',
  description: 'The best free and student-tier tools for building products. No paid recommendations. No affiliate links.',
});

const sections = [
  {
    heading: 'DESIGN & PROTOTYPING',
    entries: [
      { tag: 'FREE TIER', title: 'Figma', description: 'The industry standard for UI design and prototyping. Free tier is genuinely sufficient for most student projects.', link: 'https://figma.com', linkLabel: 'GET IT →' },
      { tag: 'FREE', title: 'Excalidraw', description: 'Whiteboard tool for sketching system architecture, user flows, and rough wireframes. No account required.', link: 'https://excalidraw.com', linkLabel: 'GET IT →' },
    ],
  },
  {
    heading: 'DEVELOPMENT',
    entries: [
      { tag: 'FREE TIER', title: 'Vercel', description: 'The fastest way to deploy a web app. Free tier covers most student projects. One command deployment.', link: 'https://vercel.com', linkLabel: 'GET IT →' },
      { tag: 'FREE TIER', title: 'Supabase', description: 'Open source Firebase alternative. Postgres database, auth, storage, and edge functions. Free tier is generous.', link: 'https://supabase.com', linkLabel: 'GET IT →' },
      { tag: 'FREE TIER', title: 'Railway', description: 'Simple backend deployment. Deploy anything — Node, Python, Postgres, Redis — in minutes. Better free tier than most alternatives.', link: 'https://railway.app', linkLabel: 'GET IT →' },
    ],
  },
  {
    heading: 'PRODUCTIVITY & COLLABORATION',
    entries: [
      { tag: 'FREE', title: 'Notion', description: 'The default workspace for early stage teams. Free for small teams. Good enough for most use cases.', link: 'https://notion.so', linkLabel: 'GET IT →' },
      { tag: 'FREE TIER', title: 'Linear', description: 'Issue tracking built for teams that move fast. Significantly better than Jira for small teams. Free tier works.', link: 'https://linear.app', linkLabel: 'GET IT →' },
    ],
  },
  {
    heading: 'AI & RESEARCH',
    entries: [
      { tag: 'FREE TIER', title: 'Claude (Anthropic)', description: 'The most capable AI assistant for research, writing, coding, and analysis. Free tier available.', link: 'https://claude.ai', linkLabel: 'GET IT →' },
      { tag: 'FREE TIER', title: 'Perplexity', description: 'AI-powered research tool with citations. Better than a search engine for technical research and competitive analysis.', link: 'https://perplexity.ai', linkLabel: 'GET IT →' },
    ],
  },
];

export default function Page() {
  return (
    <StashLayout
      currentSlug="free-tools"
      eyebrow="FREE TOOLS"
      h1="Free Tools & Software."
      sub="The best free and student-tier tools for building products. No paid recommendations. No affiliate links."
      sections={sections}
    />
  );
}
