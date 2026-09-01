import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

export function ProjectCard({
  project,
  className,
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className={cn(
        'group relative block overflow-hidden bg-ink',
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
        <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
          <span className="eyebrow text-[10px] text-white/60">{project.category}</span>
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-white/60">
            <MapPin className="h-3.5 w-3.5" />
            {project.location} · {project.year}
          </p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-ink">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}
