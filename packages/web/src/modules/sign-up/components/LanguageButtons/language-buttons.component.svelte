<script lang="ts">
  import type { Locales } from '$lang/i18n-types';

  import { page } from '$app/stores';
  import { locale } from '$lang/i18n-svelte';
  import { switchLocale } from '$lang/switch-locale';
  import { LinkButton } from '$components/LinkButton';

  const handleLocale = (
    newLocale: Locales,
    updateHistoryState: boolean,
    pathname?: string,
  ) => {
    switchLocale(newLocale, $locale, updateHistoryState, pathname);
  };

  // Update locale when navigating via browser back/forward buttons
  const handlePopStateEvent = async ({ state }: PopStateEvent) =>
    handleLocale(state.locale, false);

  // Update locale when page store changes
  $: handleLocale($page.params.lang as Locales, false);
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<LinkButton on:click={() => handleLocale('pt', true, location.pathname)}
  >Português</LinkButton
> ❙ <LinkButton on:click={() => handleLocale('en', true, location.pathname)}
  >English</LinkButton
>
