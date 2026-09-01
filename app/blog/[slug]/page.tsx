import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { BlogCard } from '@/components/blog/BlogCard';
import { posts, getPost, formatDate } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return buildMetadata({ title: 'Yazı Bulunamadı' });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category],
    image: post.cover,
  });
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="pt-36 md:pt-44">
          <Container className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              Tüm Yazılar
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs text-text-muted">
              <span className="font-medium uppercase tracking-[0.14em] text-ink">
                {post.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{post.readingTime} okuma</span>
            </div>
            <h1 className="text-display-md mt-5 text-balance text-ink">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              {post.excerpt}
            </p>
          </Container>
        </header>

        <Container className="mt-12 max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </Container>

        <Container className="max-w-3xl py-14">
          <div className="flex flex-col gap-6">
            {post.content.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-text">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-10">
            <div className="flex flex-col items-start justify-between gap-6 bg-ink p-8 text-white sm:flex-row sm:items-center md:p-10">
              <div>
                <h2 className="font-display text-xl font-semibold">
                  Projeniz için doğru sistemi birlikte belirleyelim.
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  Ücretsiz keşif ve teklif için bize ulaşın.
                </p>
              </div>
              <Link href="/iletisim" className="btn-white group shrink-0 px-7 py-3.5">
                Teklif Al
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </article>

      <section className="bg-white py-section">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            İlgili Yazılar
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {more.map((p) => (
              <Reveal key={p.slug}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
