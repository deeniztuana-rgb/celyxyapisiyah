import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { BlogCard } from '@/components/blog/BlogCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { posts } from '@/data/blog';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Bilgi Merkezi',
  description:
    'PVC, alüminyum, kış bahçesi, pergola ve cam sistemleri hakkında rehberler ve uzman içerikler.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bilgi Merkezi"
        title="Blog & Rehberler"
        description="Doğru sistemi seçmenize yardımcı olacak uzman içerikler ve sektör rehberleri."
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Blog' }]}
        image={images.blog.b1}
      />

      <section className="py-section">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <BlogCard post={post} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
