import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceFaq } from '@/components/services/ServiceFaq';
import { ServiceToc } from '@/components/services/ServiceToc';
import { services, getService } from '@/data/services';
import { images } from '@/data/images';
import { whatsappLink } from '@/config/site';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return buildMetadata({ title: 'Hizmet Bulunamadı' });
  return buildMetadata({
    title: service.title,
    description: service.short,
    path: `/hizmetler/${service.slug}`,
    keywords: [service.title, service.category],
    image: service.image,
  });
}

const tocSections = [
  { id: 'genel', label: 'Genel Bakış' },
  { id: 'avantajlar', label: 'Avantajlar' },
  { id: 'teknik', label: 'Teknik Özellikler' },
  { id: 'kullanim', label: 'Kullanım Alanları' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'sss', label: 'Sık Sorulan Sorular' },
];

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .concat(services.filter((s) => s.slug !== service.slug))
    .slice(0, 3);

  const gallery = [
    service.image,
    images.projects.p2,
    images.projects.p5,
    images.projects.p3,
    images.projects.p6,
    images.projects.p8,
  ];

  const waMessage = `Merhaba, ${service.title} için teklif almak istiyorum.`;

  return (
    <>
      <PageHeader
        eyebrow={service.category}
        title={service.title}
        description={service.short}
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hizmetler', href: '/hizmetler' },
          { label: service.title },
        ]}
        image={service.image}
      />

      <section className="py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-16">
            {/* İçindekiler — masaüstünde sabit */}
            <aside className="hidden lg:block">
              <div className="lg:sticky lg:top-28">
                <ServiceToc sections={tocSections} />
                <div className="mt-8 border border-line bg-white p-6">
                  <p className="text-sm font-medium text-ink">
                    {service.title} için teklif alın
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Ücretsiz keşif ve fiyat teklifi.
                  </p>
                  <Link href="/iletisim" className="btn-dark mt-4 w-full py-3 text-sm">
                    Teklif Al
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

            {/* İçerik */}
            <div className="flex flex-col gap-16">
              {/* Genel Bakış */}
              <section id="genel" className="scroll-mt-28">
                <Reveal>
                  <span className="eyebrow">
                    <span className="h-px w-6 bg-accent" />
                    Genel Bakış
                  </span>
                  <h2 className="text-display-md mt-4 text-balance text-ink">
                    {service.title} nedir?
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-muted">
                    {service.intro}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="relative mt-8 aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>
                </Reveal>
              </section>

              {/* Avantajlar */}
              <section id="avantajlar" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Avantajlar
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                  {service.advantages.map((adv, i) => (
                    <Reveal
                      key={adv.title}
                      delay={i * 0.05}
                      className="flex flex-col gap-4 bg-white p-7"
                    >
                      <span className="flex h-10 w-10 items-center justify-center bg-ink text-white">
                        <Check className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {adv.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-muted">
                        {adv.description}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </section>

              {/* Teknik Özellikler */}
              <section id="teknik" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Teknik Özellikler
                </h2>
                <dl className="mt-8 divide-y divide-line border-y border-line">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-6 py-4">
                      <dt className="text-sm text-text-muted">{spec.label}</dt>
                      <dd className="text-right text-sm font-medium text-ink">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Kullanım Alanları */}
              <section id="kullanim" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Kullanım Alanları
                </h2>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.useCases.map((use) => (
                    <li
                      key={use}
                      className="flex items-center gap-3 border border-line bg-white px-5 py-4 text-sm text-ink"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                      {use}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Galeri */}
              <section id="galeri" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Galeri
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {gallery.map((src, i) => (
                    <Reveal
                      key={i}
                      delay={(i % 3) * 0.05}
                      className={i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''}
                    >
                      <div
                        className={`relative overflow-hidden ${
                          i === 0 ? 'aspect-[16/10] md:h-full' : 'aspect-[4/3]'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${service.title} — görsel ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 ease-premium hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>

              {/* SSS */}
              <section id="sss" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Sık Sorulan Sorular
                </h2>
                <div className="mt-8">
                  <ServiceFaq items={service.faq} />
                </div>
              </section>

              {/* Mobil CTA */}
              <div className="flex flex-col gap-3 border border-line bg-white p-6 sm:flex-row lg:hidden">
                <Link href="/iletisim" className="btn-dark flex-1 py-3.5">
                  Teklif Al
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

      {/* Büyük CTA */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src={images.ctaBackground}
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
        <Container className="relative py-section">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="text-display-md max-w-xl text-balance font-display font-semibold">
              {service.title} için benzer bir proje mi planlıyorsunuz?
            </h2>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/iletisim" className="btn-white group px-8 py-4">
                Ücretsiz Teklif Al
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light px-8 py-4"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp’tan Yaz
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Diğer Hizmetler */}
      <section className="py-section">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Diğer Sistemler
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group relative flex flex-col overflow-hidden border border-line bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(11,11,11,0.35)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <span className="eyebrow text-[10px]">{s.category}</span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                      {s.title}
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
