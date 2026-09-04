import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { posts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const paths: string[] = [
    '',
    '/about',
    '/services',
    '/products',
    '/projects',
    '/blog',
    '/contact',
    ...services.map((s) => `/services/${s.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
    for (const path of paths) {
      entries.push({
        url: `${base}${prefix}${path}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : path.split('/').length > 2 ? 0.6 : 0.8,
      });
    }
  }

  return entries;
}
