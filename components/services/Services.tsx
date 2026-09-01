import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from './ServiceCard';
import { services, serviceCount } from '@/data/services';

export function Services({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section id="hizmetler" className="pb-section pt-14 md:pt-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Hizmetlerimiz"
          title="Çözüm Alanlarımız"
          description="Modern yapıların ihtiyaç duyduğu tüm sistemleri estetik, dayanıklılık ve mühendislikle bir araya getiriyoruz."
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
              href="/hizmetler"
              className="group inline-flex items-center gap-2 border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              {serviceCount} Sistem — Tüm Hizmetleri Gör
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
