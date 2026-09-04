import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // API, statik dosyalar ve Next dahili yolları hariç her şey
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
