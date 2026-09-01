import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Eye,
  Search,
  Ruler,
  Factory,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { companyValues } from '@/data/content';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Hakkımızda',
  description:
    'Celyx Prime Global — 2020’den beri PVC, alüminyum, cam ve gölgelendirme sistemlerinde premium ve profesyonel çözümler. Hikayemiz, uzmanlık alanlarımız ve değerlerimiz.',
  path: '/hakkimizda',
  keywords: ['Celyx Prime Global', 'hakkımızda', 'yapı sistemleri firması', 'İstanbul Maltepe'],
});

const expertise = [
  {
    title: 'PVC Sistemleri',
    text: 'Schüco, Kömmerling ve Salamander gibi premium markalarla yüksek yalıtımlı pencere ve kapı çözümleri.',
  },
  {
    title: 'Alüminyum Doğrama & Cephe',
    text: 'İnce profilli, dayanıklı doğrama; giydirme cephe ve katlanır alüminyum sistemler.',
  },
  {
    title: 'Cam Sistemleri',
    text: 'Giyotin cam, cam balkon, kış bahçesi ve ısı camlı sürme sistemleri.',
  },
  {
    title: 'Gölgelendirme',
    text: 'Bioklimatik pergola, zip perde, kasetli tente ve sundurma sistemleri.',
  },
  {
    title: 'Otomatik Kapı & Garaj',
    text: 'Fotoselli otomatik kapılar ve ısı yalıtımlı seksiyonel garaj kapıları.',
  },
  {
    title: 'Güvenlik Sistemleri',
    text: 'Panjur, kepenk ve alüminyum panel kapı güvenlik çözümleri.',
  },
];

const principles = [
  {
    icon: Search,
    title: 'Keşif & Danışmanlık',
    text: 'Ücretsiz yerinde keşifle ihtiyaçlarınızı ve ölçüleri netleştiriyoruz.',
  },
  {
    icon: Ruler,
    title: 'Özel Projelendirme',
    text: 'Her mekâna özel ölçü, tasarım ve mühendislik çözümü hazırlıyoruz.',
  },
  {
    icon: Factory,
    title: 'Titiz Üretim & Montaj',
    text: 'Onaylı projeleri hassas ölçülerle üretip uzman ekibimizle uyguluyoruz.',
  },
  {
    icon: ShieldCheck,
    title: 'Satış Sonrası Destek',
    text: 'Montaj sonrası bakım, servis ve garanti güvencesi sunuyoruz.',
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hakkımızda"
        title="2020’den beri yapılara değer katıyoruz"
        description="Celyx Prime Global; mühendislik disiplinini modern mimari estetikle buluşturan, güven odaklı bir yapı sistemleri firmasıdır."
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hakkımızda' }]}
        image={images.aboutStudio}
      />

      {/* Firma Hikayemiz */}
      <section className="py-section">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.aboutTeam}
                  alt="Celyx Prime Global ekibi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 hidden bg-ink px-7 py-5 text-white sm:block md:-right-6">
                <div className="font-display text-2xl font-semibold">2020</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/60">
                  Kuruluş
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <SectionHeading eyebrow="Firma Hikayemiz" title="Deneyim ve güvenin adı" />
              <Reveal delay={0.1}>
                <div className="mt-6 flex flex-col gap-5 text-lg leading-relaxed text-text-muted">
                  <p className="text-xl text-ink">
                    Celyx Prime Global, modern yapıların ihtiyaç duyduğu tüm sistemleri
                    tek çatı altında sunan bir premium yapı çözümleri firmasıdır.
                  </p>
                  <p>
                    2020 yılından bu yana PVC, alüminyum, cam ve gölgelendirme
                    sistemlerinde konut ve ticari projelere çözüm üretiyoruz. İşimizin
                    merkezine mühendislik disiplinini, kaliteli malzemeyi ve modern
                    mimari anlayışı koyuyoruz.
                  </p>
                  <p>
                    İstanbul Maltepe merkezli ekibimizle; villalardan toplu konutlara,
                    ofislerden restoranlara kadar farklı ölçeklerde projeleri hayata
                    geçirdik. Her projeye özel yaklaşımımız sayesinde standart çözümler
                    yerine mekâna özel tasarımlar sunuyoruz.
                  </p>
                  <p>
                    Keşiften projelendirmeye, üretimden montaja ve satış sonrası desteğe
                    kadar tüm süreçte yanınızdayız. Amacımız yalnızca ürün satmak değil;
                    uzun ömürlü, estetik ve konforlu yaşam alanları inşa etmektir.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <Link href="/iletisim" className="btn-dark group mt-8 px-8 py-4">
                  Bizimle İletişime Geçin
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Uzmanlık Alanlarımız */}
      <section className="bg-white py-section">
        <Container>
          <SectionHeading
            eyebrow="Ne Yapıyoruz?"
            title="Uzmanlık Alanlarımız"
            description="Modern yapıların ihtiyaç duyduğu tüm sistemleri, alanında uzman ekibimizle sunuyoruz."
          />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((area, i) => (
              <Reveal
                key={area.title}
                delay={(i % 3) * 0.06}
                className="flex flex-col gap-3 bg-white p-8"
              >
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">{area.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Link
              href="/hizmetler"
              className="group inline-flex items-center gap-2 border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-section">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="flex flex-col gap-5 border border-line bg-white p-10">
              <span className="flex h-12 w-12 items-center justify-center bg-ink text-white">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">Misyon</h3>
              <p className="text-base leading-relaxed text-text-muted">
                Modern yapıların ihtiyaç duyduğu sistemleri en yüksek kalite
                standartlarında, özel ölçü ve mühendislik çözümleriyle sunarak
                müşterilerimize uzun ömürlü ve estetik yaşam alanları kazandırmak.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-5 border border-line bg-white p-10">
              <span className="flex h-12 w-12 items-center justify-center bg-ink text-white">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">Vizyon</h3>
              <p className="text-base leading-relaxed text-text-muted">
                Yenilikçi sistemleri ve müşteri odaklı hizmet anlayışımızı sürekli
                geliştirerek; yurt içinde ve ihracatta tercih edilen, güvenilir bir
                premium yapı sistemleri markası olmak.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Çalışma Prensiplerimiz */}
      <section className="bg-ink py-section text-white">
        <Container>
          <SectionHeading
            light
            eyebrow="Nasıl Çalışıyoruz?"
            title="Çalışma prensiplerimiz"
            description="Her projede aynı özen ve şeffaflıkla ilerleyen, uçtan uca bir hizmet anlayışı."
          />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="flex flex-col gap-5 bg-ink p-8 md:p-10"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-white/20 text-white">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Değerlerimiz */}
      <section className="bg-white py-section">
        <Container>
          <SectionHeading eyebrow="Değerlerimiz" title="Bizi biz yapan ilkeler" />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 0.08}
                className="flex flex-col gap-4 bg-white p-8 md:p-10"
              >
                <span className="font-display text-3xl font-semibold text-line">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Üretim & Kalite */}
      <section className="py-section">
        <Container>
          <SectionHeading
            eyebrow="Üretim & Kalite"
            title="Detaylara verdiğimiz önem, işin kalitesini belirler"
            description="Kaliteli malzeme seçimi, hassas üretim ve titiz montajla her projede kalıcı sonuçlar elde ediyoruz."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={images.aboutProduction}
                  alt="Üretim ve uygulama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[16/10] h-full overflow-hidden lg:aspect-auto">
                <Image
                  src={images.aboutDetail}
                  alt="Sistem detayı"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
