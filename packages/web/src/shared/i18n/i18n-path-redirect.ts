import type { Locales } from './i18n-types';

import { baseLocale, locales } from './i18n-util';
import { replaceUrlLocale } from './replace-url-locale';
import { Path } from '$config';

interface PathRedirectProps {
  langParm: Locales | undefined;
  pathname: string;
  sessionLocale: Locales | string | undefined;
}

interface PathRedirectReturn {
  isRedirect: boolean;
  status: number;
  redirectPath: string;
}

/**
 * ### Function to handle url redirection based on path
 *
 * __Example:__
 *```ts
 * // __layout.svelte
 * import { pathRedirect } from '$lang/i18n-path-redirect';
 *
 * export const load = async ({ url, session, params }) => {
 *   const redirectData = pathRedirect({
 *     langParm: params.lang,
 *     pathname: url.pathname,
 *     sessionLocale: session.locale,
 *   });
 *
 *   if (redirectData.isRedirect) {
 *     return {
 *       status: redirectData.status,
 *       redirect: redirectData.redirectPath,
 *     };
 *   }
 * //...
 * }
 *```
 *
 * @param langParm
 * @param pathname
 * @param sessionLocale
 */
export const pathRedirect = ({
  langParm,
  pathname,
  sessionLocale,
}: PathRedirectProps): PathRedirectReturn => {
  const pathLength = pathname.length;
  const slashLength = pathname.match(/\//g)?.length;
  const targetLang =
    !sessionLocale || sessionLocale === 'undefined'
      ? baseLocale || 'en'
      : sessionLocale;

  // Root path
  if (!slashLength || pathLength === 1) {
    return {
      isRedirect: true,
      status: 302,
      redirectPath: `/${targetLang + Path.HOME_PAGE}`,
    };
  }

  // Path with only two characters lang
  if (pathLength === 3 || (pathLength === 4 && slashLength === 2)) {
    const pathLang = pathname.replaceAll('/', '') as Locales;

    if (locales.includes(pathLang)) {
      return {
        isRedirect: true,
        status: 302,
        redirectPath: `/${pathLang + Path.HOME_PAGE}`,
      };
    }

    return {
      isRedirect: true,
      status: 302,
      redirectPath: `/${targetLang + Path.HOME_PAGE}`,
    };
  }

  // Path without two characters lang
  if (pathLength >= 4 && slashLength === 1) {
    return {
      isRedirect: true,
      status: 302,
      redirectPath: `/${targetLang + pathname}`,
    };
  }

  // Full path (more than 4 characters and 2 paths)
  if (pathLength > 4 && slashLength >= 2) {
    const [, urlLang] = pathname.split('/');

    // If the first path is not two characters lang
    if (urlLang.length !== 2) {
      return {
        isRedirect: true,
        status: 302,
        redirectPath: `/${targetLang + pathname}`,
      };
    }
  }

  // Path without lang
  if (!langParm) {
    return {
      isRedirect: true,
      status: 302,
      redirectPath: `/${targetLang + Path.HOME_PAGE}`,
    };
  }

  // Path with a non-existent lang
  if (!locales.includes(langParm)) {
    return {
      isRedirect: true,
      status: 302,
      redirectPath: replaceUrlLocale(pathname, baseLocale),
    };
  }

  // Returns "false" to not redirect as it passed all previous tests
  return {
    isRedirect: false,
    status: 302,
    redirectPath: `/${targetLang + Path.HOME_PAGE}`,
  };
};
