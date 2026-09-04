import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'projectsPage' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/projects',
    locale: params.locale,
  });
}

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('projectsPage');
  const tNav = useTranslations('nav');

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
        breadcrumbs={[{ label: tNav('home'), href: '/' }, { label: tNav('projects') }]}
        image={images.projects.p1}
      />
      <section className="py-section">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
