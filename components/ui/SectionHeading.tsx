import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn('eyebrow', light && 'text-white/60')}>
            <span className={cn('h-px w-6', light ? 'bg-white/40' : 'bg-accent')} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'text-display-md max-w-3xl text-balance',
            light ? 'text-white' : 'text-ink',
            align === 'center' && 'mx-auto'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'max-w-2xl text-base leading-relaxed md:text-lg',
              light ? 'text-white/70' : 'text-text-muted',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
