'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Section = { id: string; label: string };

export function ServiceToc({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="İçindekiler" className="flex flex-col">
      <span className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
        İçindekiler
      </span>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={cn(
            'border-l-2 py-2.5 pl-4 text-sm transition-all duration-300',
            active === s.id
              ? 'border-ink font-medium text-ink'
              : 'border-line text-text-muted hover:border-ink/40 hover:text-ink'
          )}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
