import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/hero/Hero';
import { Services } from '@/components/services/Services';
import { QuoteSection } from '@/components/quote/QuoteSection';
import { CompanyIntro } from '@/components/about/CompanyIntro';
import { WhyUs } from '@/components/why/WhyUs';
import { FeaturedSystem } from '@/components/featured/FeaturedSystem';
import { Process } from '@/components/process/Process';
import { ProjectsTeaser } from '@/components/projects/ProjectsTeaser';
import { BlogTeaser } from '@/components/blog/BlogTeaser';

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return (
    <>
      <Hero />
      <Services />
      <QuoteSection />
      <CompanyIntro />
      <WhyUs />
      <FeaturedSystem />
      <Process />
      <ProjectsTeaser />
      <BlogTeaser />
    </>
  );
}
