export default function OrgJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Comet Foundry',
    url: 'https://www.cometfoundry.com/',
    logo: 'https://www.cometfoundry.com/assets/comet-foundry-logo.png',
    email: 'info@cometfoundry.com',
    foundingDate: '2026',
    founder: { '@type': 'Person', name: 'Vishva Patel' },
    sameAs: [
      'https://www.linkedin.com/company/cometfoundry/',
      'https://www.instagram.com/cometfoundry',
      'https://discord.com/invite/Hdg8VBFUW',
    ],
    location: {
      '@type': 'Place',
      name: 'UT Dallas',
      address: { '@type': 'PostalAddress', addressLocality: 'Richardson', addressRegion: 'TX', addressCountry: 'US' },
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
