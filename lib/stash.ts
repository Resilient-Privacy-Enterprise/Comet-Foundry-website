export type StashCategory = {
  slug: string;
  label: string;
  title: string;
  eyebrow: string;
  hubDescription: string;
  status: 'ready' | 'coming-soon';
};

export const STASH_CATEGORIES: StashCategory[] = [
  { slug: 'legal', label: 'Legal Templates', title: 'Legal Templates', eyebrow: 'LEGAL', hubDescription: 'Term sheets, NDAs, co-founder agreements, incorporation checklists — the documents every early stage startup needs.', status: 'coming-soon' },
  { slug: 'guides', label: 'Founder Guides', title: 'Founder Guides', eyebrow: 'GUIDES', hubDescription: 'Step by step guides on building products, finding co-founders, pitching investors, and navigating the early stage.', status: 'coming-soon' },
  { slug: 'hackathons', label: 'Hackathons', title: 'Hackathons in the USA', eyebrow: 'HACKATHONS', hubDescription: 'A curated, updated list of upcoming hackathons across the US — filtered for student builders.', status: 'ready' },
  { slug: 'free-tools', label: 'Free Tools', title: 'Free Tools & Software', eyebrow: 'TOOLS', hubDescription: 'The best free and student-tier tools for building products — design, dev, productivity, and more.', status: 'ready' },
  { slug: 'github', label: 'GitHub Repos', title: 'Useful GitHub Repos', eyebrow: 'GITHUB', hubDescription: 'Open source repos, boilerplates, starter kits, and libraries that save builders weeks of work.', status: 'ready' },
  { slug: 'reading', label: 'Reading List', title: 'Reading List', eyebrow: 'READING', hubDescription: 'Books, essays, and long reads that every serious builder should have gone through at least once.', status: 'ready' },
  { slug: 'funding', label: 'Funding & Grants', title: 'Funding & Grants', eyebrow: 'FUNDING', hubDescription: 'Student-eligible grants, fellowships, pre-seed programs, and non-dilutive funding sources for early stage builders.', status: 'ready' },
];
