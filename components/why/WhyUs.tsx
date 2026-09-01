import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { whyUs } from '@/data/content';

export function WhyUs() {
  return (
    <section className="bg-ink py-section text-white">
      <Container>
        <SectionHeading
          light
          eyebrow="Neden Biz?"
          title="Neden bizi tercih etmelisiniz?"
          description="Malzemeden montaja, projelendirmeden satış sonrası desteğe kadar her aşamada fark yaratıyoruz."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal
              key={item.number}
              delay={i * 0.08}
              className="group flex flex-col gap-6 bg-ink p-8 transition-colors duration-500 hover:bg-ink-800 md:p-10"
            >
              <span className="font-display text-5xl font-semibold text-white/15 transition-colors duration-500 group-hover:text-white/40">
                {item.number}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
