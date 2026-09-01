import Link from 'next/link';
import { Instagram, Facebook, Linkedin, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { siteConfig, whatsappLink } from '@/config/site';

const corporate = [
  { title: 'Hakkımızda', href: '/hakkimizda' },
  { title: 'Projeler', href: '/projeler' },
  { title: 'Ürünler', href: '/urunler' },
  { title: 'Blog', href: '/blog' },
  { title: 'İletişim', href: '/iletisim' },
];

const servicesLinks = [
  { title: 'Kış Bahçesi', href: '/hizmetler/kis-bahcesi' },
  { title: 'Pergola', href: '/hizmetler/pergola-tente' },
  { title: 'Cam Sistemleri', href: '/hizmetler/giyotin-cam' },
  { title: 'PVC', href: '/hizmetler/schuco-pvc' },
  { title: 'Alüminyum', href: '/hizmetler/aluminyum-dograma' },
  { title: 'Otomatik Kapı', href: '/hizmetler/otomatik-kapi' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      {/* CTA şeridi */}
      <Container>
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="text-display-md max-w-xl text-balance font-display font-semibold">
            Bir sonraki projeniz için hazırız.
          </h2>
          <Link href="/iletisim" className="btn-white group shrink-0 px-8 py-4">
            Ücretsiz Teklif Al
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              Kurumsal
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {corporate.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              Hizmetler
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {servicesLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              İletişim
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                {siteConfig.address}
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-white/40" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-white/40" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex text-sm font-medium text-white underline-offset-4 hover:underline">
                  WhatsApp’tan Yazın →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
            <p>© {year} {siteConfig.legalName}. Tüm hakları saklıdır.</p>
            <p>Premium yapı sistemleri · İstanbul, Türkiye</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
