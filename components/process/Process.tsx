'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/data/content';

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 60%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-white py-section">
      <Container>
        <SectionHeading
          eyebrow="Çalışma Sürecimiz"
          title="Keşiften teslime, kusursuz bir yolculuk"
          description="Her projeyi şeffaf ve planlı bir süreçle, zamanında ve eksiksiz teslim ediyoruz."
        />

        <div ref={ref} className="relative mt-16">
          {/* Yatay çizgi (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block">
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: 'left' }}
              className="h-full bg-ink"
            />
          </div>
          {/* Dikey çizgi (mobile) */}
          <div className="absolute bottom-0 left-6 top-6 w-px bg-line lg:hidden">
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: 'top' }}
              className="h-full w-full bg-ink"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-5 pl-16 lg:block lg:pl-0"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-ink bg-white font-display text-sm font-semibold text-ink lg:relative">
                  {step.number}
                </div>
                <div className="lg:mt-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
