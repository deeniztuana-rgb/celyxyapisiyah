import { images } from './images';

export type ProjectCategoryKey =
  | 'winter-garden'
  | 'pergola'
  | 'glass'
  | 'aluminium'
  | 'pvc'
  | 'automatic-door';

export type ProjectStruct = {
  slug: string;
  category: ProjectCategoryKey;
  location: string;
  year: string;
  cover: string;
  gallery: string[];
};

export const projectCategoryKeys = [
  'all',
  'winter-garden',
  'pergola',
  'glass',
  'aluminium',
  'pvc',
  'automatic-door',
] as const;

// Yapısal veri. Metinler messages/{locale}.json → "prj" altında.
export const projects: ProjectStruct[] = [
  {
    slug: 'bahcesehir-villa-kis-bahcesi',
    category: 'winter-garden',
    location: 'İstanbul',
    year: '2025',
    cover: images.projects.p1,
    gallery: [images.projects.p1, images.projects.p3, images.projects.p4],
  },
  {
    slug: 'zekeriyakoy-bioklimatik-pergola',
    category: 'pergola',
    location: 'İstanbul',
    year: '2025',
    cover: images.projects.p5,
    gallery: [images.projects.p5, images.projects.p2, images.projects.p6],
  },
  {
    slug: 'kadikoy-cam-balkon',
    category: 'glass',
    location: 'İstanbul',
    year: '2024',
    cover: images.projects.p4,
    gallery: [images.projects.p4, images.projects.p1, images.projects.p9],
  },
  {
    slug: 'levent-ofis-aluminyum-cephe',
    category: 'aluminium',
    location: 'İstanbul',
    year: '2024',
    cover: images.projects.p7,
    gallery: [images.projects.p7, images.projects.p8, images.projects.p6],
  },
  {
    slug: 'atasehir-pvc-pencere',
    category: 'pvc',
    location: 'İstanbul',
    year: '2024',
    cover: images.projects.p9,
    gallery: [images.projects.p9, images.projects.p3, images.projects.p1],
  },
  {
    slug: 'nisantasi-magaza-otomatik-kapi',
    category: 'automatic-door',
    location: 'İstanbul',
    year: '2025',
    cover: images.projects.p8,
    gallery: [images.projects.p8, images.projects.p7, images.projects.p2],
  },
  {
    slug: 'buyukcekmece-pergola-tente',
    category: 'pergola',
    location: 'İstanbul',
    year: '2023',
    cover: images.projects.p6,
    gallery: [images.projects.p6, images.projects.p5, images.projects.p4],
  },
  {
    slug: 'sariyer-villa-giyotin-cam',
    category: 'glass',
    location: 'İstanbul',
    year: '2025',
    cover: images.projects.p3,
    gallery: [images.projects.p3, images.projects.p1, images.projects.p5],
  },
  {
    slug: 'cekmekoy-villa-garaj-kapisi',
    category: 'automatic-door',
    location: 'İstanbul',
    year: '2024',
    cover: images.projects.p2,
    gallery: [images.projects.p2, images.projects.p8, images.projects.p7],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
