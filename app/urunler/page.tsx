import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { productGroups } from '@/data/products';
import { images } from '@/data/images';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Ürünler',
  description:
    'PVC, alüminyum, cam, gölgelendirme, güvenlik ve garaj sistemleri. Tüm ürün kategorilerimizi keşfedin.',
  path: '/urunler',
});

export default function UrunlerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ürün Kataloğu"
        title="Ürünler"
        description="Kategorilere ayrılmış geniş ürün yelpazemizle her projeye uygun sistem çözümleri sunuyoruz."
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Ürünler' }]}
        image={images.aboutProduction}
      />

      <section className="py-section">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            {productGroups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 2) * 0.08}>
                <div className="flex flex-col">
                  <span className="font-display text-xs text-accent">
                    0{i + 1}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                    {group.title}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                    {group.description}
                  </p>
                  <ul className="mt-6 divide-y divide-line border-t border-line">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="group flex items-center justify-between py-3.5 text-sm text-ink transition-colors hover:text-text-muted"
                          >
                            {item.name}
                            <ArrowUpRight className="h-4 w-4 text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                          </Link>
                        ) : (
                          <span className="flex items-center justify-between py-3.5 text-sm text-text-muted">
                            {item.name}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
