import type { Metadata } from 'next';

const BASE_URL = 'https://www.cometfoundry.com';
const OG_IMAGE = `${BASE_URL}/assets/og-image.png`;

// The browser <title> tag stays constant ("Comet Foundry") on every page by
// design -- see the "keep the tab title constant" fix. og:title/twitter:title
// stay page-specific since they only show up when a link is shared, never in
// the tab itself.
export function pageMetadata(opts: { path: string; ogTitle: string; description: string }): Metadata {
  const url = `${BASE_URL}${opts.path}`;
  return {
    title: 'Comet Foundry',
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'Comet Foundry',
      title: opts.ogTitle,
      description: opts.description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.ogTitle,
      description: opts.description,
      images: [OG_IMAGE],
    },
  };
}
