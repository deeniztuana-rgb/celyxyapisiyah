'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { images } from '@/data/images';
import { heroStats } from '@/data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-ink text-white">
      {/* Arka plan görseli + yavaş zoom */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src={images.hero}
            alt="Modern mimari cephe ve cam sistemleri uygulaması"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Koyu gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      <div className="container-x relative z-10 pb-16 pt-32 md:pb-24">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="eyebrow mb-6 text-white/70"
        >
          <span className="h-px w-8 bg-white/50" />
          PVC · Alüminyum · Cam · Gölgelendirme
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-display-xl max-w-4xl text-balance font-display font-semibold"
        >
          Modern Yapılar İçin
          <br />
          Premium Sistem Çözümleri
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/75"
        >
          PVC, alüminyum, cam ve gölgelendirme sistemlerinde estetik, dayanıklılık
          ve mühendisliği bir araya getiriyoruz.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link href="/iletisim" className="btn-white group px-8 py-4">
            Projeni Anlat
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/hizmetler" className="btn-ghost-light px-8 py-4">
            Hizmetleri İncele
          </Link>
        </motion.div>

        {/* Hero istatistik bilgisi */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/15 pt-8"
        >
          {heroStats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-semibold md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-6 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 md:right-10 md:flex"
      >
        Keşfet
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
