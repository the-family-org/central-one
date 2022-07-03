import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { detectLocale } from '$lang/i18n-util';

/**
 * ### It is to get the user locale from the headers of the request.
 *
 * - It is used in the `getSession` function of the Svelte hooks.
 *
 * **Example**
 * ```ts
 * // hooks.ts
 * import type { GetSession } from '@sveltejs/kit';
 * import { getHeadersFromHooksEvent } from '$utils';
 *
 * export const getSession: GetSession = (event) => {
 *  const headers = getHeadersFromHooksEvent(event);
 *  const locale = localeFromHooksHeaders(headers);
 *
 *  return {
 *   locale,
 *  };
 * };
 * ```
 * @param headers The headers of the request.
 * @returns The user locale.
 */
export const localeFromHooksHeaders = (headers: Record<string, string>) => {
  // Detect the preferred language the user has configured in his browser
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
  const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers });
  const locale = detectLocale(acceptLanguageDetector);

  return locale;
};
