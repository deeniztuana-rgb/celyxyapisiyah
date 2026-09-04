import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export function ProjectsTeaser() {
  const t = useTranslations('projectsTeaser');
  const featured = projects.slice(0, 5);

  return (
    <section className="bg-paper py-section">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <ProjectCard
              project={featured[0]}
              className="aspect-[4/3] h-full lg:aspect-auto"
              priority
            />
          </Reveal>
          {featured.slice(1, 5).map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} className="aspect-[4/3]" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
