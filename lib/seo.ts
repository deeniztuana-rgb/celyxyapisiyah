import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

type SeoParams = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  locale?: string;
};

const defaultKeywords = [
  'PVC window',
  'aluminium joinery',
  'winter garden',
  'bioclimatic pergola',
  'guillotine glass',
  'glass balcony',
  'automatic door',
  'building systems',
  'Istanbul',
];

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  image,
  locale = 'en',
}: SeoParams = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.legalName}`
    : `${siteConfig.legalName} — ${siteConfig.tagline}`;
  const desc = description ?? siteConfig.description;

  const prefix = locale && locale !== 'en' ? `/${locale}` : '';
  const cleanPath = path === '/' ? '' : path;
  const url = `${siteConfig.url}${prefix}${cleanPath}`;

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
