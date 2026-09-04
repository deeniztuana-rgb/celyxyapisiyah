import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span
        className={cn(
          'flex h-9 w-9 items-center justify-center border text-sm font-semibold tracking-tight transition-colors',
          light
            ? 'border-white/30 text-white'
            : 'border-ink/20 text-ink group-hover:border-ink'
        )}
      >
        C
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg font-semibold tracking-tight',
            light ? 'text-white' : 'text-ink'
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            'text-[10px] uppercase tracking-[0.28em]',
            light ? 'text-white/50' : 'text-text-muted'
          )}
        >
          Building Systems
        </span>
      </span>
    </Link>
  );
}
