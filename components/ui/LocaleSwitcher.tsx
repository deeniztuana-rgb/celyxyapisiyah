'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { Globe, Check, ChevronDown } from 'lucide-react';
import {
  usePathname,
  useRouter,
  routing,
  localeNames,
  localeShort,
  type Locale,
} from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LocaleSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function change(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        aria-expanded={open}
        disabled={isPending}
        className={cn(
          'inline-flex items-center gap-1.5 border px-3 py-2 text-sm font-medium transition-colors',
          light
            ? 'border-white/30 text-white hover:border-white'
            : 'border-ink/15 text-ink hover:border-ink'
        )}
      >
        <Globe className="h-4 w-4" />
        {localeShort[locale]}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          className={cn(
            'absolute right-0 z-50 mt-2 w-44 border bg-white py-1 shadow-[0_20px_40px_-20px_rgba(11,11,11,0.4)]',
            'border-line'
          )}
        >
          {routing.locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => change(l as Locale)}
              className={cn(
                'flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-paper',
                l === locale ? 'font-medium text-ink' : 'text-text-muted'
              )}
            >
              <span>
                {localeNames[l as Locale]}
                <span className="ml-1.5 text-xs text-accent">
                  {localeShort[l as Locale]}
                </span>
              </span>
              {l === locale && <Check className="h-4 w-4 text-ink" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
