export type Listing = {
  backer: string;
  roleType: string;
  company: string;
  role: string;
  description: string;
  location: string;
  type: string;
  apply: string;
};

export const ECOSYSTEM_LISTINGS: Listing[] = [
  { backer: 'YC · W26', roleType: 'INTERNSHIP', company: 'Haladir', role: 'Software Engineering Intern (Fall 2026)', description: 'Building operational superintelligence for global logistics. One of the most ambitious infrastructure plays in the current YC batch.', location: 'Remote', type: 'Internship · Fall 2026', apply: 'https://www.workatastartup.com' },
  { backer: 'YC · W26', roleType: 'INTERNSHIP', company: 'TraceRoot.AI', role: 'GTM Engineer Intern', description: 'Open source self-improving layer for AI agents. Early stage, high ownership, direct founder access.', location: 'Remote', type: 'Internship', apply: 'https://www.workatastartup.com' },
  { backer: 'A16Z', roleType: 'FULL TIME', company: 'Cursor', role: 'Software Engineer', description: 'The AI code editor used by engineers at OpenAI, Stripe, and Spotify. Hit $1B ARR faster than any SaaS company in history.', location: 'San Francisco / NYC', type: 'Full Time', apply: 'https://cursor.com/careers' },
  { backer: 'A16Z', roleType: 'FULL TIME', company: 'Decagon', role: 'Software Engineer', description: 'AI customer support agents used by Hertz, Duolingo, and Rippling. $4.5B valuation, Series C, still early team.', location: 'San Francisco', type: 'Full Time', apply: 'https://decagon.ai/careers' },
  { backer: 'NVIDIA INCEPTION', roleType: 'INTERNSHIP · FULL TIME', company: 'NVIDIA Inception Network', role: 'Browse All Roles', description: '40,000+ AI startups in the NVIDIA Inception program — building across every industry. The largest AI startup network in the world.', location: 'Various', type: 'Internship + Full Time', apply: 'https://www.nvidia.com/en-us/startups/' },
  { backer: 'YC', roleType: 'INTERNSHIP · FULL TIME', company: 'Work at a Startup (YC)', role: 'Browse All YC Roles', description: 'The official YC job board. 200+ startups hiring engineers, designers, operators, and researchers. Updated daily.', location: 'Various', type: 'Internship + Full Time', apply: 'https://www.workatastartup.com' },
  { backer: 'A16Z', roleType: 'INTERNSHIP · FULL TIME', company: 'a16z Portfolio Jobs', role: 'Browse All a16z Roles', description: 'The official a16z portfolio job board. Filter by role type, location, and stage. Direct access to the best a16z-backed companies hiring now.', location: 'Various', type: 'Internship + Full Time', apply: 'https://portfoliojobs.a16z.com' },
  { backer: 'GENERAL', roleType: 'INTERNSHIP', company: 'Cloudflare', role: 'Internship Program 2026', description: 'Cloudflare is hiring 1,111 interns in 2026. Work on infrastructure that impacts millions of users. Austin, SF, NYC, and remote options.', location: 'Austin TX / SF / NYC / Remote', type: 'Internship · 2026', apply: 'https://www.cloudflare.com/careers/' },
];

export const POST_ROLE_URL = 'https://forms.cloud.microsoft/r/PkN2tH7jmt';
