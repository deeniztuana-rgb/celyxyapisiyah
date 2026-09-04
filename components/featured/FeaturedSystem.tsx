import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { images } from '@/data/images';

export function FeaturedSystem() {
  const t = useTranslations('featured');
  const highlights = t.raw('highlights') as string[];

  return (
    <section className="bg-white py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.featuredWinterGarden}
                alt={t('title')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden bg-ink px-8 py-6 text-white sm:block md:-right-6">
              <div className="font-display text-3xl font-semibold">
                {t('badgeValue')}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/60">
                {t('badgeLabel')}
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                {t('eyebrow')}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md mt-5 text-balance text-ink">
                {t('title')}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
                {t('description')}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink">
                    <span className="flex h-5 w-5 items-center justify-center bg-ink text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/services/kis-bahcesi" className="btn-dark group mt-10 px-8 py-4">
                {t('cta')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
