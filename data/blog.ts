import { images } from './images';

export type PostStruct = {
  slug: string;
  cover: string;
  date: string; // ISO
};

// Yapısal veri. Metinler messages/{locale}.json → "post" altında.
export const posts: PostStruct[] = [
  { slug: 'pvc-aluminyum-karsilastirmasi', cover: images.blog.b1, date: '2026-08-12' },
  { slug: 'kis-bahcesi-secerken-dikkat', cover: images.blog.b2, date: '2026-07-28' },
  { slug: 'pergola-sistemleri-rehberi', cover: images.blog.b3, date: '2026-07-10' },
  { slug: 'giyotin-cam-sistemleri', cover: images.blog.b4, date: '2026-06-22' },
  { slug: 'aluminyum-dograma-rehberi', cover: images.blog.b5, date: '2026-06-05' },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

const intlLocale: Record<string, string> = {
  en: 'en-GB',
  de: 'de-DE',
  fr: 'fr-FR',
  it: 'it-IT',
  el: 'el-GR',
};

export function formatDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(intlLocale[locale] ?? 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
