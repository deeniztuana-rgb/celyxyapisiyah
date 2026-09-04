import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'productsPage' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/products',
    locale: params.locale,
  });
}

export default function ProductsPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('productsPage');
  const tNav = useTranslations('nav');
  const groups = t.raw('groups') as {
    title: string;
    description: string;
    items: string[];
  }[];

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
        breadcrumbs={[{ label: tNav('home'), href: '/' }, { label: tNav('products') }]}
        image={images.aboutProduction}
      />

      <section className="py-section">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            {groups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 2) * 0.08}>
                <div className="flex flex-col">
                  <span className="font-display text-xs text-accent">0{i + 1}</span>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                    {group.title}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                    {group.description}
                  </p>
                  <ul className="mt-6 divide-y divide-line border-t border-line">
                    {group.items.map((item) => (
                      <li key={item} className="py-3.5 text-sm text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
