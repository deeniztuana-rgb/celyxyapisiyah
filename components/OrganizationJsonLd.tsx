import { siteConfig } from '@/config/site';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressCountry: 'TR',
    },
    sameAs: Object.values(siteConfig.socialLinks),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
