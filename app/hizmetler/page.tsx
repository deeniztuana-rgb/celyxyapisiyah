import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { services } from '@/data/services';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Hizmetler & Sistemler',
  description:
    'Kış bahçesi, pergola, giyotin cam, cam balkon, alüminyum doğrama, PVC, otomatik kapı ve daha fazlası. Modern yapıların tüm sistem çözümleri.',
  path: '/hizmetler',
  keywords: ['pergola', 'zip perde', 'panjur', 'kepenk', 'seksiyonel garaj kapısı'],
});

export default function HizmetlerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Çözüm Alanlarımız"
        title="Hizmetler & Sistemler"
        description="Modern yapıların ihtiyaç duyduğu tüm sistemleri estetik, dayanıklılık ve mühendislikle bir araya getiriyoruz."
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hizmetler' }]}
        image={images.hero}
      />

      <section className="py-section">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 0.05}>
                <ServiceCard service={service} priority={i < 4} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
