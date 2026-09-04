import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { ServiceStruct } from '@/data/services';

export function ServiceCard({
  service,
  priority = false,
}: {
  service: ServiceStruct;
  priority?: boolean;
}) {
  const t = useTranslations('svc');
  const tCat = useTranslations('serviceCategories');
  const tCommon = useTranslations('common');

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden border border-line bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_24px_60px_-30px_rgba(11,11,11,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={t(`${service.slug}.title`)}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow text-[10px]">{tCat(service.category)}</span>
        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
          {t(`${service.slug}.title`)}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-muted">
          {t(`${service.slug}.short`)}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
          {tCommon('review')}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
