import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { images } from '@/data/images';
import { whatsappLink } from '@/config/site';

export function ContactCTA() {
  const t = useTranslations('cta');

  return (
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
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-display-md text-balance font-display font-semibold">
              {t('title')}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{t('description')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-white group px-8 py-4">
                {t('primary')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light px-8 py-4"
              >
                <MessageCircle className="h-4 w-4" />
                {t('whatsapp')}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
