import Link from 'next/link';
import { ArrowRight, ShieldCheck, Ruler, Wrench } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

const points = [
  { icon: Ruler, title: 'Özel Ölçü Üretim', text: 'Her projeye özel tasarım ve üretim.' },
  { icon: Wrench, title: 'Profesyonel Montaj', text: 'Temiz, hızlı ve titiz uygulama.' },
  { icon: ShieldCheck, title: 'Satış Sonrası Destek', text: 'Montaj sonrası teknik güvence.' },
];

export function CompanyIntro() {
  return (
    <section className="border-y border-line bg-white py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                Hakkımızda
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md mt-5 max-w-xl text-balance text-ink">
                2020’den beri modern yapılara değer katıyoruz
              </h2>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="flex flex-col gap-5 text-lg leading-relaxed text-text-muted">
                <p>
                  Celyx Prime Global olarak 2020 yılından bu yana PVC, alüminyum, cam
                  ve gölgelendirme sistemlerinde konut ve ticari projelere profesyonel
                  çözümler üretiyoruz. İşimizi mühendislik disiplini ve modern mimari
                  anlayışıyla ele alıyoruz.
                </p>
                <p>
                  Keşiften üretime, montajdan satış sonrası desteğe kadar tüm
                  süreçlerde yanınızdayız. Amacımız yalnızca ürün sunmak değil; uzun
                  ömürlü, estetik ve konforlu yaşam alanları inşa etmek.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-9 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                {points.map((p) => (
                  <li key={p.title} className="flex flex-col gap-3 bg-white p-6">
                    <p.icon className="h-6 w-6 text-ink" />
                    <span className="font-display text-sm font-semibold text-ink">
                      {p.title}
                    </span>
                    <span className="text-sm leading-relaxed text-text-muted">
                      {p.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/hakkimizda"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                Şirketimizi Tanıyın
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
