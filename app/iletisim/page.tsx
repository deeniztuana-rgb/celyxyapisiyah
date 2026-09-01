import type { Metadata } from 'next';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { QuoteForm } from '@/components/quote/QuoteForm';
import { siteConfig, whatsappLink } from '@/config/site';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'İletişim',
  description:
    'Ücretsiz keşif ve teklif için bize ulaşın. Telefon, WhatsApp, e-posta ve adres bilgilerimiz.',
  path: '/iletisim',
});

export default function IletisimPage() {
  const cards = [
    { icon: Phone, label: 'Telefon', value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Hemen yazın', href: whatsappLink() },
    { icon: Mail, label: 'E-posta', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Bize Ulaşın"
        title="İletişim"
        description="Projeniz için ücretsiz keşif ve teklif talep edin. Size en kısa sürede dönüş yapalım."
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'İletişim' }]}
        image={images.heroAlt}
      />

      {/* Hızlı iletişim kartları */}
      <section className="border-b border-line bg-white">
        <Container>
          <div className="grid grid-cols-1 divide-line sm:grid-cols-3 sm:divide-x">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 py-8 transition-colors sm:justify-center"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.14em] text-text-muted">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium text-ink">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Form + bilgi */}
      <section className="py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-accent" />
                  Ücretsiz Keşif Talep Et
                </span>
                <h2 className="text-display-md mt-5 text-balance text-ink">
                  Projenizi anlatın, çözümü hazırlayalım.
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-text-muted">
                  Formu doldurun, uzman ekibimiz projenize en uygun sistemi ve
                  ücretsiz keşif randevusunu planlasın.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-col divide-y divide-line border-y border-line">
                  <div className="flex items-start gap-4 py-5">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.14em] text-text-muted">
                        Adres
                      </div>
                      <div className="mt-1 text-sm font-medium text-ink">
                        {siteConfig.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-5">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.14em] text-text-muted">
                        Çalışma Saatleri
                      </div>
                      <ul className="mt-1 flex flex-col gap-0.5 text-sm font-medium text-ink">
                        {siteConfig.workingHours.map((w) => (
                          <li key={w.days} className="flex gap-2">
                            <span className="text-text-muted">{w.days}:</span>
                            {w.hours}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Harita placeholder */}
              <Reveal delay={0.15}>
                <div className="mt-8 flex aspect-[16/9] items-center justify-center border border-dashed border-line bg-white text-center">
                  <div className="flex flex-col items-center gap-2 text-text-muted">
                    <MapPin className="h-6 w-6" />
                    <span className="text-sm">Google Maps embed alanı</span>
                    <span className="text-xs">{siteConfig.mapQuery}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <QuoteForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
