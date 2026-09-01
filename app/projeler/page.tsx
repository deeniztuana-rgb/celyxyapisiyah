import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Projeler',
  description:
    'Villa, konut ve ticari projelerde hayata geçirdiğimiz kış bahçesi, pergola, cam sistemleri ve daha fazlası.',
  path: '/projeler',
});

export default function ProjelerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portföy"
        title="Projelerimiz"
        description="Hayata geçirdiğimiz seçkin projelerden bir seçki. Her biri özel ölçü ve mühendislikle tasarlandı."
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Projeler' }]}
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
