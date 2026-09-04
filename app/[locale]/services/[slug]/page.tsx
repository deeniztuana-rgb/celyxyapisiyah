import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Check, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceFaq } from '@/components/services/ServiceFaq';
import { ServiceToc } from '@/components/services/ServiceToc';
import { services, getService } from '@/data/services';
import { images } from '@/data/images';
import { whatsappLink } from '@/config/site';
import { buildMetadata } from '@/lib/seo';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const service = getService(params.slug);
  if (!service) return buildMetadata({ title: 'Not Found', locale: params.locale });
  const t = await getTranslations({ locale: params.locale, namespace: 'svc' });
  return buildMetadata({
    title: t(`${service.slug}.title`),
    description: t(`${service.slug}.short`),
    path: `/services/${service.slug}`,
    image: service.image,
    locale: params.locale,
  });
}

export default function ServiceDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(params.locale);
  const service = getService(params.slug);
  if (!service) notFound();

  return <ServiceDetail slug={service.slug} category={service.category} image={service.image} />;
}

function ServiceDetail({
  slug,
  category,
  image,
}: {
  slug: string;
  category: string;
  image: string;
}) {
  const t = useTranslations('svc');
  const td = useTranslations('serviceDetail');
  const tCat = useTranslations('serviceCategories');
  const tNav = useTranslations('nav');

  const title = t(`${slug}.title`);
  const advantages = t.raw(`${slug}.advantages`) as { title: string; description: string }[];
  const specs = t.raw(`${slug}.specs`) as { label: string; value: string }[];
  const useCases = t.raw(`${slug}.useCases`) as string[];
  const faq = t.raw(`${slug}.faq`) as { q: string; a: string }[];

  const related = services
    .filter((s) => s.slug !== slug && s.category === category)
    .concat(services.filter((s) => s.slug !== slug))
    .slice(0, 3);

  const gallery = [
    image,
    images.projects.p2,
    images.projects.p5,
    images.projects.p3,
    images.projects.p6,
    images.projects.p8,
  ];

  const waMessage = `Hello, I would like to get a quote for ${title}.`;

  const tocSections = [
    { id: 'overview', label: td('overviewEyebrow') },
    { id: 'advantages', label: td('advantages') },
    { id: 'technical', label: td('technical') },
    { id: 'useCases', label: td('useCases') },
    { id: 'gallery', label: td('gallery') },
    { id: 'faq', label: td('faq') },
  ];

  return (
    <>
      <PageHeader
        eyebrow={tCat(category)}
        title={title}
        description={t(`${slug}.short`)}
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('services'), href: '/services' },
          { label: title },
        ]}
        image={image}
      />

      <section className="py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="lg:sticky lg:top-28">
                <ServiceToc sections={tocSections} />
                <div className="mt-8 border border-line bg-white p-6">
                  <p className="text-sm font-medium text-ink">
                    {td('quoteBoxTitle', { title })}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{td('quoteBoxText')}</p>
                  <Link href="/contact" className="btn-dark mt-4 w-full py-3 text-sm">
                    {tNav('getQuote')}
                  </Link>
                  <a
                    href={whatsappLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-light mt-2 w-full py-3 text-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>

            <div className="flex flex-col gap-16">
              <section id="overview" className="scroll-mt-28">
                <Reveal>
                  <span className="eyebrow">
                    <span className="h-px w-6 bg-accent" />
                    {td('overviewEyebrow')}
                  </span>
                  <h2 className="text-display-md mt-4 text-balance text-ink">
                    {td('overviewTitle', { title })}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-muted">
                    {t(`${slug}.intro`)}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="relative mt-8 aspect-[16/9] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>
                </Reveal>
              </section>

              <section id="advantages" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {td('advantages')}
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                  {advantages.map((adv, i) => (
                    <Reveal key={i} delay={i * 0.05} className="flex flex-col gap-4 bg-white p-7">
                      <span className="flex h-10 w-10 items-center justify-center bg-ink text-white">
                        <Check className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-ink">{adv.title}</h3>
                      <p className="text-sm leading-relaxed text-text-muted">{adv.description}</p>
                    </Reveal>
                  ))}
                </div>
              </section>

              <section id="technical" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {td('technical')}
                </h2>
                <dl className="mt-8 divide-y divide-line border-y border-line">
                  {specs.map((spec, i) => (
                    <div key={i} className="flex justify-between gap-6 py-4">
                      <dt className="text-sm text-text-muted">{spec.label}</dt>
                      <dd className="text-right text-sm font-medium text-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section id="useCases" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {td('useCases')}
                </h2>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {useCases.map((use, i) => (
                    <li key={i} className="flex items-center gap-3 border border-line bg-white px-5 py-4 text-sm text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                      {use}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="gallery" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {td('gallery')}
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {gallery.map((src, i) => (
                    <Reveal
                      key={i}
                      delay={(i % 3) * 0.05}
                      className={i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''}
                    >
                      <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/10] md:h-full' : 'aspect-[4/3]'}`}>
                        <Image
                          src={src}
                          alt={`${title} — ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 ease-premium hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>

              <section id="faq" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {td('faq')}
                </h2>
                <div className="mt-8">
                  <ServiceFaq items={faq} />
                </div>
              </section>

              <div className="flex flex-col gap-3 border border-line bg-white p-6 sm:flex-row lg:hidden">
                <Link href="/contact" className="btn-dark flex-1 py-3.5">
                  {tNav('getQuote')}
                </Link>
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light flex-1 py-3.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <Image src={images.ctaBackground} alt="" fill className="object-cover opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
        <Container className="relative py-section">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="text-display-md max-w-xl text-balance font-display font-semibold">
              {td('ctaTitle', { title })}
            </h2>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-white group px-8 py-4">
                {tNav('getQuote')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-ghost-light px-8 py-4">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {td('otherServices')}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex flex-col overflow-hidden border border-line bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(11,11,11,0.35)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={t(`${s.slug}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <span className="eyebrow text-[10px]">{tCat(s.category)}</span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                      {t(`${s.slug}.title`)}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
