import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-paper">
      <Container className="flex flex-col items-center py-32 text-center">
        <span className="font-display text-[clamp(5rem,18vw,12rem)] font-semibold leading-none text-ink">
          404
        </span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">
          Sayfa bulunamadı
        </h1>
        <p className="mt-4 max-w-md text-text-muted">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya
          dönerek devam edebilirsiniz.
        </p>
        <Link href="/" className="btn-dark group mt-8 px-8 py-4">
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Ana Sayfaya Dön
        </Link>
      </Container>
    </section>
  );
}
