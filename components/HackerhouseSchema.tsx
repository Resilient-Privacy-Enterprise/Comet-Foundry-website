export default function HackerhouseSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'Place', 'LocalBusiness'],
    name: 'Comet Foundry - Hackerhouse',
    alternateName: ['Comet Foundry', 'CF Hackerhouse'],
    description: 'A hackerhouse and innovation community at UT Dallas where students build startups, experiment with ideas, and ship products.',
    url: 'https://www.cometfoundry.com',
    logo: 'https://www.cometfoundry.com/assets/comet-foundry-logo.png',
    image: 'https://www.cometfoundry.com/assets/og-image.png',
    email: 'info@cometfoundry.com',
    telephone: null,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Richardson',
      addressRegion: 'TX',
      postalCode: '75080',
      addressCountry: 'US',
      streetAddress: 'University of Texas at Dallas',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.9898',
      longitude: '-96.7497',
    },
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: 'Vishva Patel',
    },
    member: {
      '@type': 'Organization',
      name: 'University of Texas at Dallas',
      url: 'https://www.utdallas.edu',
    },
    slogan: 'Not a club. A foundry. No perfect ideas. Just interesting ones.',
    priceRange: 'Free',
    knowsAbout: [
      'Entrepreneurship',
      'Startup Development',
      'Innovation',
      'Product Building',
      'Community Building',
      'Technology',
      'Software Development',
      'Business Development',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Comet Foundry Programs',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Build Lab',
          description: 'Make things. Learn by building real products and experiments.',
        },
        {
          '@type': 'Offer',
          name: 'Think Lab',
          description: 'Have an opinion. Discuss ideas and challenge assumptions.',
        },
        {
          '@type': 'Offer',
          name: 'Network Lab',
          description: 'Meet people. Connect with founders, investors, and builders.',
        },
        {
          '@type': 'Offer',
          name: 'Demo Day',
          description: 'Show the world what you made. Showcase your projects to the community.',
        },
      ],
    },
    sameAs: [
      'https://www.linkedin.com/company/cometfoundry/',
      'https://www.instagram.com/cometfoundry',
      'https://discord.com/invite/Hdg8VBFUW',
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
