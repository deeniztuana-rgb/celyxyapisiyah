/**
 * Ürün kategorileri — /urunler sayfasında kullanılır.
 * İlgili hizmet detayına yönlendirmek için opsiyonel `href` eklenmiştir.
 */

export type ProductGroup = {
  title: string;
  description: string;
  items: { name: string; href?: string }[];
};

export const productGroups: ProductGroup[] = [
  {
    title: 'PVC Sistemleri',
    description: 'Yüksek yalıtımlı, dayanıklı ve ekonomik PVC pencere ve kapı çözümleri.',
    items: [
      { name: 'Schüco PVC Sistemleri', href: '/hizmetler/schuco-pvc' },
      { name: 'Kömmerling PVC Sistemleri', href: '/hizmetler/kommerling-pvc' },
      { name: 'Salamander PVC Sistemleri', href: '/hizmetler/salamander-pvc' },
      { name: 'PVC Pencere' },
      { name: 'Renkli / Ahşap Desenli PVC' },
    ],
  },
  {
    title: 'Alüminyum Sistemleri',
    description: 'İnce profil estetiği ve yüksek mukavemetle modern cephe ve doğrama.',
    items: [
      { name: 'Alüminyum Doğrama', href: '/hizmetler/aluminyum-dograma' },
      { name: 'Alüminyum Kapı' },
      { name: 'Alüminyum Pencere' },
      { name: 'Alüminyum Giydirme Cephe' },
      { name: 'Katlanır Alüminyum Sistemler' },
    ],
  },
  {
    title: 'Cam Sistemleri',
    description: 'Kesintisiz manzara ve alan tasarrufu sağlayan modern cam çözümleri.',
    items: [
      { name: 'Giyotin Cam', href: '/hizmetler/giyotin-cam' },
      { name: 'Cam Balkon', href: '/hizmetler/cam-balkon' },
      { name: 'Isı Camlı Sürme' },
      { name: 'Fotoselli Kapı', href: '/hizmetler/otomatik-kapi' },
    ],
  },
  {
    title: 'Gölgelendirme',
    description: 'Güneş ve yağmur kontrolü sağlayan estetik dış mekân sistemleri.',
    items: [
      { name: 'Pergola', href: '/hizmetler/pergola-tente' },
      { name: 'Bioklimatik Pergola', href: '/hizmetler/bioklimatik-pergola' },
      { name: 'Zip Perde', href: '/hizmetler/zip-perde' },
      { name: 'Tente' },
      { name: 'Kasetli Tente' },
    ],
  },
  {
    title: 'Güvenlik & Garaj',
    description: 'Konut ve ticari alanlar için güvenlik ve garaj kapı sistemleri.',
    items: [
      { name: 'Panjur', href: '/hizmetler/panjur' },
      { name: 'Kepenk', href: '/hizmetler/kepenk' },
      { name: 'Seksiyonel Garaj Kapısı', href: '/hizmetler/seksiyonel-garaj' },
      { name: 'Alüminyum Panel Kapı' },
    ],
  },
];
