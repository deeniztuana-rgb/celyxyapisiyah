import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Target, Eye, Search, Ruler, Factory, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

const principleIcons = [Search, Ruler, Factory, ShieldCheck];

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'about' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/about',
    locale: params.locale,
  });
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('about');
  const tNav = useTranslations('nav');

  const paragraphs = t.raw('storyParagraphs') as string[];
  const expertise = t.raw('expertise') as { title: string; text: string }[];
  const principles = t.raw('principles') as { title: string; text: string }[];
  const values = t.raw('values') as { title: string; description: string }[];

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
        breadcrumbs={[{ label: tNav('home'), href: '/' }, { label: tNav('about') }]}
        image={images.aboutStudio}
      />

      {/* Story */}
      <section className="py-section">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={images.aboutTeam} alt="Celyx Prime Global" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-5 -right-4 hidden bg-ink px-7 py-5 text-white sm:block md:-right-6">
                <div className="font-display text-2xl font-semibold">2020</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/60">
                  {t('foundedLabel')}
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <SectionHeading eyebrow={t('storyEyebrow')} title={t('storyTitle')} />
              <Reveal delay={0.1}>
                <div className="mt-6 flex flex-col gap-5 text-lg leading-relaxed text-text-muted">
                  <p className="text-xl text-ink">{t('storyLead')}</p>
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <Link href="/contact" className="btn-dark group mt-8 px-8 py-4">
                  {t('storyCta')}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Expertise */}
      <section className="bg-white py-section">
        <Container>
          <SectionHeading eyebrow={t('expertiseEyebrow')} title={t('expertiseTitle')} description={t('expertiseDesc')} />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((area, i) => (
              <Reveal key={area.title} delay={(i % 3) * 0.06} className="flex flex-col gap-3 bg-white p-8">
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="font-display text-lg font-semibold text-ink">{area.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{area.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              {t('expertiseCta')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-section">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="flex flex-col gap-5 border border-line bg-white p-10">
              <span className="flex h-12 w-12 items-center justify-center bg-ink text-white">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">{t('missionTitle')}</h3>
              <p className="text-base leading-relaxed text-text-muted">{t('mission')}</p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-5 border border-line bg-white p-10">
              <span className="flex h-12 w-12 items-center justify-center bg-ink text-white">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">{t('visionTitle')}</h3>
              <p className="text-base leading-relaxed text-text-muted">{t('vision')}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-ink py-section text-white">
        <Container>
          <SectionHeading light eyebrow={t('principlesEyebrow')} title={t('principlesTitle')} description={t('principlesDesc')} />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => {
              const Icon = principleIcons[i] ?? Search;
              return (
                <Reveal key={p.title} delay={i * 0.08} className="flex flex-col gap-5 bg-ink p-8 md:p-10">
                  <span className="flex h-12 w-12 items-center justify-center border border-white/20 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{p.text}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-section">
        <Container>
          <SectionHeading eyebrow={t('valuesEyebrow')} title={t('valuesTitle')} />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08} className="flex flex-col gap-4 bg-white p-8 md:p-10">
                <span className="font-display text-3xl font-semibold text-line">0{i + 1}</span>
                <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Production */}
      <section className="py-section">
        <Container>
          <SectionHeading eyebrow={t('productionEyebrow')} title={t('productionTitle')} description={t('productionDesc')} />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={images.aboutProduction} alt={t('productionTitle')} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[16/10] h-full overflow-hidden lg:aspect-auto">
                <Image src={images.aboutDetail} alt={t('productionTitle')} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
