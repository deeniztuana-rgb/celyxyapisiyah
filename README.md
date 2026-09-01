# CELYX Yapı — Premium Yapı Sistemleri Web Sitesi

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React.

## Başlangıç

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # production sunucusu
```

## İçeriği Nereden Düzenlerim?

Tüm içerik ve ayarlar merkezi dosyalarda tutulur — kod bilmeden kolayca güncellenir:

| Dosya | İçerik |
| --- | --- |
| `config/site.ts` | Firma adı, telefon, WhatsApp, e-posta, adres, sosyal medya, menü |
| `data/images.ts` | Tüm görsel URL'leri (kendi görsellerinizle değiştirin) |
| `data/services.ts` | Hizmet/sistem kartları ve detay sayfaları (avantaj, teknik, SSS) |
| `data/products.ts` | Ürün kategorileri (`/urunler`) |
| `data/projects.ts` | Portföy projeleri ve detayları |
| `data/blog.ts` | Blog yazıları |
| `data/content.ts` | İstatistikler, süreç adımları, değerler, form seçenekleri |

### Görselleri değiştirme

`data/images.ts` içindeki URL'leri kendi görsellerinizle değiştirin. Yerel
görsel kullanmak için dosyaları `public/` klasörüne koyup `/dosya-adi.jpg`
şeklinde referans verin. Uzak (remote) görsel için domain'i
`next.config.mjs` → `images.remotePatterns` listesine eklemeyi unutmayın.

### İletişim bilgileri

`config/site.ts` içindeki `phone`, `whatsappNumber`, `email`, `address`
alanlarını güncelleyin. WhatsApp numarası ülke kodu dahil, `+` ve boşluk
olmadan yazılır (örn. `905401004062`).

## Teklif Formu

Form şu an `app/api/quote/route.ts` üzerinde **mock (simülasyon)** olarak
çalışır; talep sunucu konsoluna loglanır. Gerçek e-posta/CRM entegrasyonu için
bu dosyayı düzenleyin (örn. Resend, Nodemailer veya bir webhook).

## SEO

- Her sayfada `title`, `description`, `keywords`, Open Graph ve canonical URL
  (`lib/seo.ts`).
- `app/sitemap.ts` ve `app/robots.ts` otomatik üretilir.
- Şehir/hizmet bazlı landing page'ler için mimari hazırdır
  (örn. ileride `/istanbul/kis-bahcesi` eklenebilir).

## Sayfa Yapısı

```
/                     Ana sayfa
/hakkimizda           Hakkımızda
/hizmetler            Tüm hizmetler
/hizmetler/[slug]     Hizmet detayı
/urunler              Ürün kategorileri
/projeler             Portföy (kategori filtreli)
/projeler/[slug]      Proje detayı
/blog                 Blog listesi
/blog/[slug]          Blog yazısı
/iletisim             İletişim + form
```
