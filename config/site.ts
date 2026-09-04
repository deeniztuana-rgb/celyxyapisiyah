/**
 * Merkezi site yapılandırması.
 * Firma bilgilerini buradan tek noktadan güncelleyebilirsiniz.
 * Çevrilebilir metinler messages/{locale}.json dosyalarındadır.
 */

export const siteConfig = {
  name: 'CELYX',
  legalName: 'CELYX Yapı',
  tagline: 'Premium Building Systems',
  description:
    'Premium building solutions bringing together aesthetics, durability and engineering in PVC, aluminium, glass and shading systems.',
  url: 'https://celyxyapi.com',

  // İletişim bilgileri
  phone: '0540 100 40 62',
  phoneHref: 'tel:+905401004062',
  whatsappNumber: '905401004062', // ülke kodu dahil, + ve boşluk olmadan
  email: 'celyxprimeglobal@gmail.com',
  address: 'Maltepe / İstanbul',
  mapQuery: 'Maltepe İstanbul',

  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Navigasyon menüsü — etiketler messages "nav" altından gelir, href İngilizce slug
export const mainNav = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'contact', href: '/contact' },
] as const;

// WhatsApp mesaj bağlantısı
export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? 'Hello, I would like to get a quote for my project.'
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
