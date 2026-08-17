import type { MetadataRoute } from 'next';

const BASE = 'https://www.cometfoundry.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: '2026-08-15', changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/programs`, lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/programs/build-lab`, lastModified: '2026-08-16', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/programs/think-lab`, lastModified: '2026-08-16', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/programs/network-lab`, lastModified: '2026-08-16', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/programs/after-hours`, lastModified: '2026-08-16', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/projects`, lastModified: '2026-08-15', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/team`, lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/partners`, lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/donate`, lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/report-bug`, lastModified: '2026-08-15', changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/events`, lastModified: '2026-08-15', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/events/kickoff-night`, lastModified: '2026-08-15', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: '2026-08-15', changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/blog/9-5-felt-safe`, lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/blog/first-idea-doesnt-work`, lastModified: '2026-08-08', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/blog/build-dont-follow`, lastModified: '2026-08-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/founder`, lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/privacy-policy`, lastModified: '2026-08-15', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms-of-use`, lastModified: '2026-08-15', changeFrequency: 'yearly', priority: 0.3 },
  ];
}
