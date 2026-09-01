import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { QuoteForm } from './QuoteForm';
import { siteConfig, whatsappLink } from '@/config/site';

export function QuoteSection() {
  const contacts = [
    { icon: Phone, label: 'Telefon', value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Teklif almak için yazın', href: whatsappLink() },
    { icon: Mail, label: 'E-posta', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <section id="teklif" className="bg-paper py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                Teklif Al
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md mt-5 text-balance text-ink">
                Projenizi birlikte hayata geçirelim.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-text-muted">
                Projeniz hakkında birkaç bilgi bırakın, size en uygun çözümü ve
                ücretsiz keşif randevusunu hazırlayalım.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col divide-y divide-line border-y border-line">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-4 py-4 transition-colors hover:text-ink"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors group-hover:bg-ink group-hover:text-white">
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
                <div className="flex items-center gap-4 py-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-line text-ink">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.14em] text-text-muted">
                      Çalışma Saatleri
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {siteConfig.workingHours[0].days}: {siteConfig.workingHours[0].hours}
                    </span>
                  </span>
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
  );
}
