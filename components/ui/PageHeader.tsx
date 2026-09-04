import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from './Container';

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  image?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-ink text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        </>
      )}
      <Container className="relative pb-16 pt-36 md:pb-24 md:pt-44">
        {breadcrumbs && (
          <nav
            aria-label="breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-white/50"
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="eyebrow mb-5 text-white/60">
            <span className="h-px w-6 bg-white/40" />
            {eyebrow}
          </span>
        )}
        <h1 className="text-display-lg mt-4 max-w-4xl text-balance">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {description}
          </p>
        )}
      </Container>
    </header>
  );
}
