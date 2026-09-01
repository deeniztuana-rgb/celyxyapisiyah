import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0B',
          900: '#0B0B0B',
          800: '#151515',
          700: '#1f1f1f',
        },
        paper: '#F5F5F3',
        text: {
          DEFAULT: '#111111',
          muted: '#666666',
        },
        line: '#E4E4E1',
        accent: '#A8A8A8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.9rem, 3.2vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        container: '1320px',
      },
      spacing: {
        section: 'clamp(4.5rem, 9vw, 9rem)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      borderRadius: {
        card: '4px',
      },
    },
  },
  plugins: [],
};

export default config;
