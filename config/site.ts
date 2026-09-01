/**
 * Merkezi site yapılandırması.
 * Firma bilgilerini buradan tek noktadan güncelleyebilirsiniz.
 */

export const siteConfig = {
  name: 'CELYX',
  legalName: 'CELYX Yapı',
  tagline: 'Premium Yapı Sistemleri',
  description:
    'PVC, alüminyum, cam ve gölgelendirme sistemlerinde estetik, dayanıklılık ve mühendisliği bir araya getiren premium yapı çözümleri.',
  url: 'https://celyxyapi.com',
  locale: 'tr_TR',

  // İletişim bilgileri — kolayca değiştirilebilir
  phone: '0540 100 40 62',
  phoneHref: 'tel:+905401004062',
  whatsappNumber: '905401004062', // ülke kodu dahil, + ve boşluk olmadan
  email: 'celyxprimeglobal@gmail.com',
  address: 'Maltepe / İstanbul',
  mapQuery: 'Maltepe İstanbul',

  workingHours: [
    { days: 'Pazartesi – Cuma', hours: '09:00 – 18:30' },
    { days: 'Cumartesi', hours: '09:00 – 15:00' },
    { days: 'Pazar', hours: 'Kapalı' },
  ],

  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Navigasyon menüsü
export const mainNav = [
  { title: 'Ana Sayfa', href: '/' },
  { title: 'Hakkımızda', href: '/hakkimizda' },
  { title: 'Hizmetler', href: '/hizmetler' },
  { title: 'Projeler', href: '/projeler' },
  { title: 'İletişim', href: '/iletisim' },
] as const;

// WhatsApp mesaj şablonu
export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? 'Merhaba, projem için teklif almak istiyorum.'
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
