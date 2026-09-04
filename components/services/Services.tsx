import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from './ServiceCard';
import { services, serviceCount } from '@/data/services';

export function Services({ limit }: { limit?: number }) {
  const t = useTranslations('home');
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="pb-section pt-14 md:pt-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t('servicesEyebrow')}
          title={t('servicesTitle')}
          description={t('servicesDesc')}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 0.05}>
              <ServiceCard service={service} priority={i < 4} />
            </Reveal>
          ))}
        </div>

        {limit && (
          <Reveal className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              {t('servicesCta', { count: serviceCount })}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
