import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ArrowRight, MapPin, Calendar, Layers } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects, getProject } from '@/data/projects';
import { buildMetadata } from '@/lib/seo';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return buildMetadata({ title: 'Not Found', locale: params.locale });
  const t = await getTranslations({ locale: params.locale, namespace: 'prj' });
  return buildMetadata({
    title: t(`${project.slug}.title`),
    description: t(`${project.slug}.description`),
    path: `/projects/${project.slug}`,
    image: project.cover,
    locale: params.locale,
  });
}

export default function ProjectDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(params.locale);
  const project = getProject(params.slug);
  if (!project) notFound();
  return (
    <ProjectDetail
      slug={project.slug}
      category={project.category}
      location={project.location}
      year={project.year}
      cover={project.cover}
      gallery={project.gallery}
    />
  );
}

function ProjectDetail({
  slug,
  category,
  location,
  year,
  cover,
  gallery,
}: {
  slug: string;
  category: string;
  location: string;
  year: string;
  cover: string;
  gallery: string[];
}) {
  const t = useTranslations('prj');
  const td = useTranslations('projectsPage.detail');
  const tCat = useTranslations('projectsPage.categories');
  const tNav = useTranslations('nav');

  const title = t(`${slug}.title`);
  const specs = t.raw(`${slug}.specs`) as { label: string; value: string }[];

  const related = projects
    .filter((p) => p.slug !== slug && p.category === category)
    .concat(projects.filter((p) => p.slug !== slug))
    .slice(0, 3);

  const meta = [
    { icon: MapPin, label: td('location'), value: location },
    { icon: Calendar, label: td('year'), value: year },
    { icon: Layers, label: td('system'), value: t(`${slug}.system`) },
  ];

  return (
    <>
      <header className="relative min-h-[70vh] overflow-hidden bg-ink text-white">
        <Image src={cover} alt={title} fill priority className="object-cover opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end pb-16 pt-40">
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/50">
            <Link href="/" className="hover:text-white">{tNav('home')}</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white">{tNav('projects')}</Link>
            <span>/</span>
            <span className="text-white/80">{title}</span>
          </nav>
          <span className="eyebrow text-white/60">
            <span className="h-px w-6 bg-white/40" />
            {tCat(category)}
          </span>
          <h1 className="text-display-lg mt-4 max-w-4xl text-balance">{title}</h1>
        </Container>
      </header>

      <section className="border-b border-line bg-white">
        <Container>
          <div className="grid grid-cols-1 divide-line sm:grid-cols-3 sm:divide-x">
            {meta.map((m) => (
              <div key={m.label} className="flex items-center gap-4 py-8 sm:justify-center">
                <m.icon className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-text-muted">{m.label}</div>
                  <div className="mt-1 text-sm font-medium text-ink">{m.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                {td('aboutEyebrow')}
              </span>
              <p className="mt-6 text-xl leading-relaxed text-ink">{t(`${slug}.description`)}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-line bg-white p-8">
                <h2 className="font-display text-lg font-semibold text-ink">{td('technical')}</h2>
                <dl className="mt-6 divide-y divide-line border-t border-line">
                  {specs.map((spec, i) => (
                    <div key={i} className="flex justify-between gap-4 py-3.5">
                      <dt className="text-sm text-text-muted">{spec.label}</dt>
                      <dd className="text-right text-sm font-medium text-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-section">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <Reveal key={i} delay={i * 0.06} className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${title} — ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-premium hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-section text-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="text-display-md max-w-xl text-balance font-display font-semibold">
              {td('ctaTitle')}
            </h2>
            <Link href="/contact" className="btn-white group shrink-0 px-8 py-4">
              {td('cta')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {td('other')}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} className="aspect-[4/5]" />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
