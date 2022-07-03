/**
 * ### Replaces the locale slug in a relative url
 *
 * **Example:** /en/blog/article **➜** /pt/blog/article
 * ```ts
 * replaceUrlLocale('/en/blog/article', 'pt');
 * ```
 *
 * @param path - The path to replace the locale slug in
 * @param locale - The locale to replace the slug with
 * @returns The path with the locale slug replaced
 */
export const replaceUrlLocale = (path: string, locale: string): string => {
  const [, , ...rest] = path.split('/');

  return `/${[locale, ...rest].join('/')}`;
};
