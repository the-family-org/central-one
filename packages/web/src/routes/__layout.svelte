<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { Locales } from '$lang/i18n-types';

  import { pathRedirect } from '$lang/i18n-path-redirect';
  import { loadLocaleAsync } from '$lang/i18n-util.async';

  type LoadParams = {
    lang?: Locales;
  };

  export const load: Load<LoadParams> = async ({ url, session, params }) => {
    const lang = params.lang;
    const redirectData = pathRedirect({
      langParm: lang,
      pathname: url.pathname,
      sessionLocale: session.locale,
    });

    if (redirectData.isRedirect || !lang) {
      return {
        status: redirectData.status,
        redirect: redirectData.redirectPath,
      };
    }

    // Delete session locale (client doesn't need this)
    delete session.locale;

    // Load language dictionary
    await loadLocaleAsync(lang);

    return { props: { locale: lang } };
  };
</script>

<script lang="ts">
  import '@central/ui/src/themes/themes.scss';
  import { initClient } from '@urql/svelte';
  import { setLocale } from '$lang/i18n-svelte';
  import { env } from '$config';

  initClient({
    url: env.apiUrl,
    // fetchOptions: {
    //   credentials: 'include',
    // },
  });

  export let locale: Locales;
  setLocale(locale);
</script>

<svelte:head>
  <title>{env.groupName}</title>
  <meta name="description" content={env.groupName} />
</svelte:head>

<slot />
