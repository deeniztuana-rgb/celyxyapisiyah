import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Layers } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects, getProject } from '@/data/projects';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return buildMetadata({ title: 'Proje Bulunamadı' });
  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projeler/${project.slug}`,
    keywords: [project.category, project.system, project.location],
    image: project.cover,
  });
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);
  const fallback = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const relatedList = related.length > 0 ? related : fallback;

  const meta = [
    { icon: MapPin, label: 'Lokasyon', value: project.location },
    { icon: Calendar, label: 'Yıl', value: project.year },
    { icon: Layers, label: 'Sistem', value: project.system },
  ];

  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[70vh] overflow-hidden bg-ink text-white">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end pb-16 pt-40">
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/50">
            <Link href="/" className="hover:text-white">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/projeler" className="hover:text-white">Projeler</Link>
            <span>/</span>
            <span className="text-white/80">{project.title}</span>
          </nav>
          <span className="eyebrow text-white/60">
            <span className="h-px w-6 bg-white/40" />
            {project.category}
          </span>
          <h1 className="text-display-lg mt-4 max-w-4xl text-balance">
            {project.title}
          </h1>
        </Container>
      </header>

      {/* Meta bilgiler */}
      <section className="border-b border-line bg-white">
        <Container>
          <div className="grid grid-cols-1 divide-line sm:grid-cols-3 sm:divide-x">
            {meta.map((m) => (
              <div key={m.label} className="flex items-center gap-4 py-8 sm:justify-center">
                <m.icon className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-text-muted">
                    {m.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink">{m.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Açıklama + teknik */}
      <section className="py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                Proje Hakkında
              </span>
              <p className="mt-6 text-xl leading-relaxed text-ink">
                {project.description}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-line bg-white p-8">
                <h2 className="font-display text-lg font-semibold text-ink">
                  Teknik Özellikler
                </h2>
                <dl className="mt-6 divide-y divide-line border-t border-line">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-4 py-3.5">
                      <dt className="text-sm text-text-muted">{spec.label}</dt>
                      <dd className="text-right text-sm font-medium text-ink">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Galeri */}
      <section className="pb-section">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((src, i) => (
              <Reveal
                key={i}
                delay={i * 0.06}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${project.title} — görsel ${i + 1}`}
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

      {/* CTA */}
      <section className="bg-ink py-section text-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="text-display-md max-w-xl text-balance font-display font-semibold">
              Benzer bir proje için teklif al
            </h2>
            <Link href="/iletisim" className="btn-white group shrink-0 px-8 py-4">
              Ücretsiz Teklif Al
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* İlgili projeler */}
      <section className="py-section">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Diğer Projeler
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedList.map((p) => (
              <ProjectCard key={p.slug} project={p} className="aspect-[4/5]" />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
