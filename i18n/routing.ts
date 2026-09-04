import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'de', 'fr', 'it', 'el'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  el: 'Ελληνικά',
};

export const localeShort: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  fr: 'FR',
  it: 'IT',
  el: 'EL',
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
