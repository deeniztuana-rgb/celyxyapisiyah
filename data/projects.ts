import { images } from './images';

export type Project = {
  slug: string;
  title: string;
  category: string; // filtre kategorisi
  location: string;
  year: string;
  system: string;
  cover: string;
  gallery: string[];
  description: string;
  specs: { label: string; value: string }[];
};

export const projectCategories = [
  'Tümü',
  'Kış Bahçesi',
  'Pergola',
  'Cam Sistemleri',
  'Alüminyum',
  'PVC',
  'Otomatik Kapı',
] as const;

export const projects: Project[] = [
  {
    slug: 'bahcesehir-villa-kis-bahcesi',
    title: 'Bahçeşehir Villa Kış Bahçesi',
    category: 'Kış Bahçesi',
    location: 'İstanbul',
    year: '2025',
    system: 'Isı Yalıtımlı Kış Bahçesi + Giyotin Cam',
    cover: images.projects.p1,
    gallery: [images.projects.p1, images.projects.p3, images.projects.p4],
    description:
      'Bahçeşehir’de yer alan lüks villa için tasarlanan kış bahçesi projesi, dört mevsim kullanılabilir bir yaşam alanı oluşturmak üzere ısı yalıtımlı alüminyum profiller ve giyotin cam sistemleri ile hayata geçirildi.',
    specs: [
      { label: 'Sistem', value: 'Isı yalıtımlı kış bahçesi' },
      { label: 'Cam', value: 'Üçlü ısı camı, Low-E' },
      { label: 'Alan', value: '48 m²' },
      { label: 'Süre', value: '12 iş günü' },
    ],
  },
  {
    slug: 'zekeriyakoy-bioklimatik-pergola',
    title: 'Zekeriyaköy Bioklimatik Pergola',
    category: 'Pergola',
    location: 'İstanbul',
    year: '2025',
    system: 'Bioklimatik Pergola + Zip Perde',
    cover: images.projects.p5,
    gallery: [images.projects.p5, images.projects.p2, images.projects.p6],
    description:
      'Havuz kenarı yaşam alanı için tasarlanan bioklimatik pergola, motorlu lamel sistemi ve entegre zip perdelerle güneş ve rüzgâr kontrolü sağlayan konforlu bir dış mekân sundu.',
    specs: [
      { label: 'Sistem', value: 'Bioklimatik pergola' },
      { label: 'Kontrol', value: 'Motorlu, akıllı ev' },
      { label: 'Alan', value: '36 m²' },
      { label: 'Opsiyon', value: 'Zip perde + LED' },
    ],
  },
  {
    slug: 'kadikoy-cam-balkon',
    title: 'Kadıköy Rezidans Cam Balkon',
    category: 'Cam Sistemleri',
    location: 'İstanbul',
    year: '2024',
    system: 'Katlanır Cam Balkon',
    cover: images.projects.p4,
    gallery: [images.projects.p4, images.projects.p1, images.projects.p9],
    description:
      'Deniz manzaralı rezidans balkonları için uygulanan katlanır cam balkon sistemi, kesintisiz manzarayı korurken balkonları dört mevsim kullanılabilir hale getirdi.',
    specs: [
      { label: 'Sistem', value: 'Katlanır cam balkon' },
      { label: 'Cam', value: '8 mm temperli' },
      { label: 'Daire', value: '24 daire' },
      { label: 'Süre', value: '20 iş günü' },
    ],
  },
  {
    slug: 'levent-ofis-aluminyum-cephe',
    title: 'Levent Ofis Alüminyum Cephe',
    category: 'Alüminyum',
    location: 'İstanbul',
    year: '2024',
    system: 'Alüminyum Giydirme Cephe',
    cover: images.projects.p7,
    gallery: [images.projects.p7, images.projects.p8, images.projects.p6],
    description:
      'Levent’teki ofis binası için tasarlanan giydirme cephe projesi, ince profilli alüminyum sistemler ve yüksek performanslı ısı camları ile modern ve enerji verimli bir cephe oluşturdu.',
    specs: [
      { label: 'Sistem', value: 'Giydirme cephe' },
      { label: 'Cam', value: 'Isı kontrol camı' },
      { label: 'Yükseklik', value: '8 kat' },
      { label: 'Alan', value: '1.200 m²' },
    ],
  },
  {
    slug: 'atasehir-pvc-pencere',
    title: 'Ataşehir Konut PVC Pencere',
    category: 'PVC',
    location: 'İstanbul',
    year: '2024',
    system: 'PVC Pencere & Kapı',
    cover: images.projects.p9,
    gallery: [images.projects.p9, images.projects.p3, images.projects.p1],
    description:
      'Toplu konut projesinde uygulanan PVC pencere ve kapı sistemleri, yüksek ısı-ses yalıtımı ve dayanıklılığı ile daire sakinlerine konforlu bir yaşam sundu.',
    specs: [
      { label: 'Sistem', value: '82 mm PVC profil' },
      { label: 'Cam', value: 'Çift ısı camı' },
      { label: 'Daire', value: '60 daire' },
      { label: 'Süre', value: '45 iş günü' },
    ],
  },
  {
    slug: 'nisantasi-magaza-otomatik-kapi',
    title: 'Nişantaşı Mağaza Otomatik Kapı',
    category: 'Otomatik Kapı',
    location: 'İstanbul',
    year: '2025',
    system: 'Fotoselli Sürme Kapı',
    cover: images.projects.p8,
    gallery: [images.projects.p8, images.projects.p7, images.projects.p2],
    description:
      'Yüksek yaya trafiğine sahip perakende mağazası için uygulanan fotoselli otomatik sürme kapı, konforlu geçiş ve enerji verimliliği sağladı.',
    specs: [
      { label: 'Sistem', value: 'Fotoselli sürme kapı' },
      { label: 'Cam', value: 'Temperli güvenlik camı' },
      { label: 'Sensör', value: 'Radar + fotosel' },
      { label: 'Opsiyon', value: 'UPS destekli' },
    ],
  },
  {
    slug: 'buyukcekmece-pergola-tente',
    title: 'Büyükçekmece Restoran Pergola',
    category: 'Pergola',
    location: 'İstanbul',
    year: '2023',
    system: 'Kasetli Tente + Pergola',
    cover: images.projects.p6,
    gallery: [images.projects.p6, images.projects.p5, images.projects.p4],
    description:
      'Sahil restoranı için tasarlanan gölgelendirme projesi, geniş açıklıklı pergola ve kasetli tente kombinasyonu ile misafirlere konforlu bir dış mekân deneyimi sundu.',
    specs: [
      { label: 'Sistem', value: 'Pergola + kasetli tente' },
      { label: 'Kumaş', value: 'Akrilik, su itici' },
      { label: 'Alan', value: '120 m²' },
      { label: 'Süre', value: '15 iş günü' },
    ],
  },
  {
    slug: 'sariyer-villa-giyotin-cam',
    title: 'Sarıyer Villa Giyotin Cam',
    category: 'Cam Sistemleri',
    location: 'İstanbul',
    year: '2025',
    system: 'Giyotin Cam Sistemi',
    cover: images.projects.p3,
    gallery: [images.projects.p3, images.projects.p1, images.projects.p5],
    description:
      'Boğaz manzaralı villa terası için uygulanan motorlu giyotin cam sistemi, tek dokunuşla açılıp kapanan yapısıyla kesintisiz manzara ve modern bir estetik sağladı.',
    specs: [
      { label: 'Sistem', value: 'Motorlu giyotin cam' },
      { label: 'Cam', value: '10 mm temperli' },
      { label: 'Alan', value: '30 m²' },
      { label: 'Kontrol', value: 'Kumandalı' },
    ],
  },
  {
    slug: 'cekmekoy-villa-garaj-kapisi',
    title: 'Çekmeköy Villa Garaj Kapısı',
    category: 'Otomatik Kapı',
    location: 'İstanbul',
    year: '2024',
    system: 'Seksiyonel Garaj Kapısı',
    cover: images.projects.p2,
    gallery: [images.projects.p2, images.projects.p8, images.projects.p7],
    description:
      'Modern villa için uygulanan ahşap desenli seksiyonel garaj kapısı, ısı yalıtımlı panelleri ve sessiz motoruyla mimariyle uyumlu şık bir giriş oluşturdu.',
    specs: [
      { label: 'Sistem', value: 'Seksiyonel garaj kapısı' },
      { label: 'Panel', value: '40 mm PU dolgulu' },
      { label: 'Yüzey', value: 'Ahşap desen' },
      { label: 'Motor', value: 'Sessiz, kumandalı' },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
