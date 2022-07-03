import { setLocale } from './i18n-svelte';
import { loadLocaleAsync } from './i18n-util.async';
import { replaceUrlLocale } from './replace-url-locale';

export const switchLocale = async (
  newLocale: Locales,
  oldLocale: Locales,
  updateHistoryState: boolean,
  pathname?: string,
) => {
  if (
    !newLocale ||
    oldLocale === newLocale ||
    typeof document === 'undefined' ||
    (updateHistoryState && !pathname)
  ) {
    return;
  }

  // Load new dictionary from server
  await loadLocaleAsync(newLocale);

  // Update locale
  setLocale(newLocale);

  // Update html "lang" attribute
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  document.querySelector('html').setAttribute('lang', newLocale);

  if (updateHistoryState && pathname) {
    // Update url to reflect locale changes
    history.pushState(
      { locale: newLocale },
      '',
      replaceUrlLocale(pathname, newLocale),
    );
  }
};
