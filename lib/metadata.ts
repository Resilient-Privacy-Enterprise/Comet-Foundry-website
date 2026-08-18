import type { Metadata } from 'next';

const BASE_URL = 'https://www.cometfoundry.com';
const OG_IMAGE = `${BASE_URL}/assets/og-image.png`;

// The browser <title> tag stays constant ("Comet Foundry") on every page by
// design -- see the "keep the tab title constant" fix. og:title/twitter:title
// stay page-specific since they only show up when a link is shared, never in
// the tab itself.
export function pageMetadata(opts: { path: string; ogTitle: string; description: string; keywords?: string[] }): Metadata {
  const url = `${BASE_URL}${opts.path}`;

  // Default keywords emphasizing hackerhouse positioning
  const defaultKeywords = [
    'hackerhouse',
    'hacker house',
    'student organization',
    'startup community',
    'innovation lab',
    'UT Dallas',
    'UTD',
    'entrepreneurship',
    'building community',
    'tech innovation',
    'maker space',
    'demo day',
  ];

  const allKeywords = opts.keywords ? [...opts.keywords, ...defaultKeywords] : defaultKeywords;

  return {
    title: 'Comet Foundry',
    description: opts.description,
    keywords: allKeywords,
    authors: [{ name: 'Vishva Patel' }],
    creator: 'Comet Foundry',
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'Comet Foundry',
      title: opts.ogTitle,
      description: opts.description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.ogTitle,
      description: opts.description,
      images: [OG_IMAGE],
      creator: '@cometfoundry',
    },
    robots: 'index, follow',
    applicationName: 'Comet Foundry',
  };
}
