import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { posts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/urunler',
    '/projeler',
    '/blog',
    '/iletisim',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projeler/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
