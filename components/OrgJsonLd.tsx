export default function OrgJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.cometfoundry.com/#organization',
        name: 'Comet Foundry',
        url: 'https://www.cometfoundry.com/',
        logo: 'https://www.cometfoundry.com/assets/comet-foundry-logo.png',
        email: 'info@cometfoundry.com',
        description: 'A hackerhouse at UT Dallas for building things nobody assigned you. No perfect ideas. Just interesting ones.',
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
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.cometfoundry.com/#education',
        name: 'Comet Foundry',
        url: 'https://www.cometfoundry.com/',
        description: 'An innovation and entrepreneurship hackerhouse at University of Texas at Dallas. A student-run community for building startups, experimenting with ideas, and shipping products.',
        parentOrganization: {
          '@type': 'EducationalOrganization',
          name: 'University of Texas at Dallas',
          url: 'https://www.utdallas.edu/',
        },
        educationalLevel: 'Higher Education',
        knowsAbout: [
          'Entrepreneurship',
          'Startup Development',
          'Innovation',
          'Product Building',
          'Community Building',
          'Technology',
          'Demo Day',
        ],
        areaServed: 'Richardson, Texas',
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
