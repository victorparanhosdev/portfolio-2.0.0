import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({

  locales: ['en', 'pt', 'es', 'it', 'de', 'fr'],
  defaultLocale: 'pt',
  
});
 
export type Locale = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);