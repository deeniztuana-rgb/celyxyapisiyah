import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { BlogCard } from '@/components/blog/BlogCard';
import { posts, getPost, formatDate } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return buildMetadata({ title: 'Not Found', locale: params.locale });
  const t = await getTranslations({ locale: params.locale, namespace: 'post' });
  return buildMetadata({
    title: t(`${post.slug}.title`),
    description: t(`${post.slug}.excerpt`),
    path: `/blog/${post.slug}`,
    image: post.cover,
    locale: params.locale,
  });
}

export default function BlogDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(params.locale);
  const post = getPost(params.slug);
  if (!post) notFound();
  return <BlogDetail slug={post.slug} cover={post.cover} date={post.date} />;
}

function BlogDetail({ slug, cover, date }: { slug: string; cover: string; date: string }) {
  const t = useTranslations('post');
  const td = useTranslations('blogPage.detail');
  const locale = useLocale();

  const title = t(`${slug}.title`);
  const content = t.raw(`${slug}.content`) as string[];
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

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
              {td('back')}
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs text-text-muted">
              <span className="font-medium uppercase tracking-[0.14em] text-ink">
                {t(`${slug}.category`)}
              </span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{formatDate(date, locale)}</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{t(`${slug}.readingTime`)} {td('reading')}</span>
            </div>
            <h1 className="text-display-md mt-5 text-balance text-ink">{title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              {t(`${slug}.excerpt`)}
            </p>
          </Container>
        </header>

        <Container className="mt-12 max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image src={cover} alt={title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" />
          </div>
        </Container>

        <Container className="max-w-3xl py-14">
          <div className="flex flex-col gap-6">
            {content.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-text">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-10">
            <div className="flex flex-col items-start justify-between gap-6 bg-ink p-8 text-white sm:flex-row sm:items-center md:p-10">
              <div>
                <h2 className="font-display text-xl font-semibold">{td('ctaTitle')}</h2>
                <p className="mt-2 text-sm text-white/60">{td('ctaText')}</p>
              </div>
              <Link href="/contact" className="btn-white group shrink-0 px-7 py-3.5">
                {td('cta')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </article>

      <section className="bg-white py-section">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {td('related')}
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
