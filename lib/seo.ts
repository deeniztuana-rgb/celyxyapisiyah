import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

type SeoParams = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

const defaultKeywords = [
  'PVC pencere',
  'alüminyum doğrama',
  'kış bahçesi',
  'bioklimatik pergola',
  'giyotin cam',
  'cam balkon',
  'otomatik kapı',
  'yapı sistemleri',
  'İstanbul',
];

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  image,
}: SeoParams = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.legalName}`
    : `${siteConfig.legalName} — ${siteConfig.tagline}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path === '/' ? '' : path}`;

  return {
    title: fullTitle,
    description: desc,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.legalName,
      locale: siteConfig.locale,
      type: 'website',
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: image ? [image] : undefined,
    },
  };
}
