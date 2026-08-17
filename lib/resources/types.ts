export type ResourceCategory = 'dev' | 'learning' | 'ai-ml' | 'design' | 'hardware' | 'business';
export type ResourceType = 'github-repo' | 'tutorial' | 'course' | 'guide' | 'tool' | 'alternative';

export type ResourceTag =
  | 'free'
  | 'open-source'
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'downloadable'
  | 'self-hosted'
  | 'no-signup';

export type Resource = {
  id: string;
  name: string;
  description: string; // 3-5 lines: what it is, why it's useful
  category: ResourceCategory;
  type: ResourceType;
  tags: ResourceTag[];
  url: string; // Direct link (GitHub URL, tutorial link, guide URL, download, etc.)
  github?: { owner: string; repo: string }; // For GitHub repos
  howtoaccess?: string; // Brief: how to get started (clone, download, sign up steps)
  usecase?: string; // What students can actually do with it
};

export const CATEGORY_DISPLAY = {
  dev: 'Dev Tools & Code',
  learning: 'Learning',
  'ai-ml': 'AI & ML',
  design: 'Design',
  hardware: 'Hardware',
  business: 'Business',
} as const;

export const RESOURCE_TYPE_DISPLAY = {
  'github-repo': 'GitHub Repo',
  tutorial: 'Tutorial',
  course: 'Course',
  guide: 'Guide',
  tool: 'Tool',
  alternative: 'Free Alternative',
} as const;

export const TAG_DISPLAY = {
  free: 'Free',
  'open-source': 'Open Source',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  downloadable: 'Downloadable',
  'self-hosted': 'Self-Hosted',
  'no-signup': 'No Signup',
} as const;
