'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNav, siteConfig } from '@/config/site';
import { serviceGroups } from '@/data/services';
import { Logo } from '@/components/ui/Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();

  const overHero = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || !overHero || megaOpen;
  const dark = solid;

  return (
    <>
      <header
        onMouseLeave={() => setMegaOpen(false)}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
          solid
            ? 'border-b border-line/80 bg-paper/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <nav className="container-x flex h-[72px] items-center justify-between md:h-20">
          <Logo light={!dark} />

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              if (item.title === 'Hizmetler') {
                return (
                  <li
                    key={item.href}
                    onMouseEnter={() => setMegaOpen(true)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
                        dark
                          ? active
                            ? 'text-ink'
                            : 'text-text-muted hover:text-ink'
                          : active
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-300',
                          megaOpen && 'rotate-180'
                        )}
                      />
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.href} onMouseEnter={() => setMegaOpen(false)}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors',
                      dark
                        ? active
                          ? 'text-ink'
                          : 'text-text-muted hover:text-ink'
                        : active
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className={cn(
                'group hidden items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 sm:inline-flex',
                dark
                  ? 'bg-ink text-white hover:bg-ink-800'
                  : 'bg-white text-ink hover:bg-white/90'
              )}
            >
              Teklif Al
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Menüyü aç"
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center transition-colors lg:hidden',
                dark ? 'text-ink' : 'text-white'
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Desktop mega menü */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_24px_50px_-24px_rgba(11,11,11,0.35)] lg:block"
            >
              <div className="container-x py-10">
                <div className="grid grid-cols-4 gap-x-8 gap-y-10">
                  {serviceGroups.map((group) => (
                    <div key={group.category}>
                      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                        {group.category}
                      </h3>
                      <ul className="flex flex-col gap-2.5">
                        {group.items.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/hizmetler/${s.slug}`}
                              className="group/link flex items-center gap-1.5 text-sm text-ink/80 transition-colors hover:text-ink"
                            >
                              <span className="h-1 w-1 rounded-full bg-accent transition-colors group-hover/link:bg-ink" />
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-line pt-6">
                  <Link
                    href="/hizmetler"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
                  >
                    Tüm Hizmetleri Gör
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobil menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-white lg:hidden"
          >
            <div className="container-x flex h-[72px] shrink-0 items-center justify-between">
              <Logo light />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Menüyü kapat"
                className="inline-flex h-11 w-11 items-center justify-center text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="container-x flex flex-1 flex-col overflow-y-auto pb-10 pt-4">
              <ul className="flex flex-col">
                {mainNav.map((item, i) => {
                  if (item.title === 'Hizmetler') {
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                        className="border-b border-white/10"
                      >
                        <button
                          type="button"
                          onClick={() => setMobileServices((v) => !v)}
                          className="flex w-full items-center justify-between py-5 font-display text-2xl font-medium tracking-tight"
                        >
                          {item.title}
                          <ChevronDown
                            className={cn(
                              'h-5 w-5 text-white/40 transition-transform duration-300',
                              mobileServices && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileServices && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <ul className="flex flex-col gap-1 pb-5 pl-1">
                                {serviceGroups.flatMap((g) => g.items).map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={`/hizmetler/${s.slug}`}
                                      className="block py-2 text-base text-white/60 transition-colors hover:text-white"
                                    >
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                                <li>
                                  <Link
                                    href="/hizmetler"
                                    className="mt-2 inline-flex items-center gap-2 py-2 text-base font-medium text-white"
                                  >
                                    Tüm Hizmetler
                                    <ArrowRight className="h-4 w-4" />
                                  </Link>
                                </li>
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                      className="border-b border-white/10"
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-5 font-display text-2xl font-medium tracking-tight"
                      >
                        {item.title}
                        <ArrowUpRight className="h-5 w-5 text-white/40" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-col gap-4">
                <Link href="/iletisim" className="btn-white w-full py-4">
                  Teklif Al
                </Link>
                <div className="flex flex-col gap-1 text-sm text-white/60">
                  <a href={siteConfig.phoneHref} className="hover:text-white">
                    {siteConfig.phone}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
