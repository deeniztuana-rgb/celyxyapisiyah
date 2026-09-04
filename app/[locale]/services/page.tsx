import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { services } from '@/data/services';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'servicesPage' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/services',
    locale: params.locale,
  });
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('servicesPage');
  const tNav = useTranslations('nav');

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
        breadcrumbs={[{ label: tNav('home'), href: '/' }, { label: tNav('services') }]}
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
