import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/whatsapp/WhatsAppButton';
import { buildMetadata } from '@/lib/seo';
import { OrganizationJsonLd } from '@/components/OrganizationJsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <OrganizationJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
