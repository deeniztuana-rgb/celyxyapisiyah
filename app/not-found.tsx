import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// Locale dışı (eşleşmeyen) yollar için global 404 — kendi html/body'sini render eder.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <h1 style={{ fontSize: '4rem', fontWeight: 700, margin: 0 }}>404</h1>
          <p style={{ color: '#666' }}>This page could not be found.</p>
          <a
            href="/"
            style={{
              background: '#0B0B0B',
              color: '#fff',
              padding: '0.75rem 1.75rem',
              textDecoration: 'none',
              fontSize: '0.875rem',
            }}
          >
            Back to Home
          </a>
        </div>
      </body>
    </html>
  );
}
