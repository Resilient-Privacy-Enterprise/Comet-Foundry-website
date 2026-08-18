import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Door from '@/components/Door';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BoredButton from '@/components/BoredButton';
import CookieConsent from '@/components/CookieConsent';
import OrgJsonLd from '@/components/OrgJsonLd';
import HackerhouseSchema from '@/components/HackerhouseSchema';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...pageMetadata({
    path: '/',
    ogTitle: 'Comet Foundry — Your Hacker House',
    description: 'A hacker house at UT Dallas. No perfect ideas. Just interesting ones.',
  }),
  icons: {
    icon: [
      { url: '/assets/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/assets/icon-180.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;700&family=Caveat:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#15161A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="favicon" href="/assets/favicon.png" />
        <link rel="shortcut icon" href="/assets/favicon.png" type="image/png" />
        <meta name="apple-mobile-web-app-title" content="Comet Foundry" />
        <meta name="application-name" content="Comet Foundry" />
        <OrgJsonLd />
        <HackerhouseSchema />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Door />
        <main id="main">
          <Nav />
          {children}
          <Footer />
        </main>
        <BoredButton />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
