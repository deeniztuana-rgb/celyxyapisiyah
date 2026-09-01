import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { BlogCard } from './BlogCard';
import { posts } from '@/data/blog';

export function BlogTeaser() {
  const list = posts.slice(0, 3);

  return (
    <section className="bg-white py-section">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Bilgi Merkezi"
            title="Sistemler hakkında bilmeniz gerekenler"
            description="Doğru sistemi seçmenize yardımcı olacak rehberler ve uzman içerikler."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              Tüm Yazılar
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {list.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
