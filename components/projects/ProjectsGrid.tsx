'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects, projectCategoryKeys } from '@/data/projects';
import { cn } from '@/lib/utils';

export function ProjectsGrid() {
  const tCat = useTranslations('projectsPage.categories');
  const [active, setActive] = useState<string>('all');

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectCategoryKeys.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'border px-5 py-2.5 text-sm font-medium transition-all duration-300',
              active === cat
                ? 'border-ink bg-ink text-white'
                : 'border-line bg-white text-text-muted hover:border-ink/40 hover:text-ink'
            )}
          >
            {tCat(cat)}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5]"
            >
              <ProjectCard project={project} className="h-full" priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
