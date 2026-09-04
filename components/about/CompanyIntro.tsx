import { useTranslations } from 'next-intl';
import { ArrowRight, ShieldCheck, Ruler, Wrench } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

const icons = [Ruler, Wrench, ShieldCheck];

export function CompanyIntro() {
  const t = useTranslations('companyIntro');
  const paragraphs = t.raw('paragraphs') as string[];
  const points = t.raw('points') as { title: string; text: string }[];

  return (
    <section className="border-y border-line bg-white py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                {t('eyebrow')}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md mt-5 max-w-xl text-balance text-ink">
                {t('title')}
              </h2>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="flex flex-col gap-5 text-lg leading-relaxed text-text-muted">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-9 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                {points.map((p, i) => {
                  const Icon = icons[i] ?? Ruler;
                  return (
                    <li key={p.title} className="flex flex-col gap-3 bg-white p-6">
                      <Icon className="h-6 w-6 text-ink" />
                      <span className="font-display text-sm font-semibold text-ink">
                        {p.title}
                      </span>
                      <span className="text-sm leading-relaxed text-text-muted">
                        {p.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                {t('cta')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
