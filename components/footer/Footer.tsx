import { useTranslations } from 'next-intl';
import { Instagram, Facebook, Linkedin, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { siteConfig, whatsappLink } from '@/config/site';

const corporate = [
  { key: 'about', href: '/about' },
  { key: 'projects', href: '/projects' },
  { key: 'products', href: '/products' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
] as const;

const serviceLinks = [
  { key: 'winter-garden', href: '/services/kis-bahcesi' },
  { key: 'pergola', href: '/services/pergola-tente' },
  { key: 'glass', href: '/services/giyotin-cam' },
  { key: 'pvc', href: '/services/pvc-pencere' },
  { key: 'aluminium', href: '/services/aluminyum-dograma' },
  { key: 'automatic-door', href: '/services/otomatik-kapi' },
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tSvcLink = useTranslations('footer.servicesLinks');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="text-display-md max-w-xl text-balance font-display font-semibold">
            {t('ctaTitle')}
          </h2>
          <Link href="/contact" className="btn-white group shrink-0 px-8 py-4">
            {t('ctaButton')}
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
              {[
                { href: siteConfig.socialLinks.instagram, Icon: Instagram, label: 'Instagram' },
                { href: siteConfig.socialLinks.facebook, Icon: Facebook, label: 'Facebook' },
                { href: siteConfig.socialLinks.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              {t('corporate')}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {corporate.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {tNav(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              {t('servicesTitle')}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {tSvcLink(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              {t('contactTitle')}
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
                  {t('whatsappCta')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
            <p>© {year} {siteConfig.legalName}. {t('rights')}</p>
            <p>{t('tagline')}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
