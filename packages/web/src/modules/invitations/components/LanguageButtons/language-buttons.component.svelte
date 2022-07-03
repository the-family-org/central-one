<script lang="ts">
  import type { Locales } from '$lang/i18n-types';

  import { page } from '$app/stores';
  import { LL, locale } from '$lang/i18n-svelte';
  import { locales } from '$lang/i18n-util';
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

{#each locales as targetLang, i}
  {#if i !== 0} ❙ {/if}<LinkButton
    disabled={targetLang === $locale}
    on:click={() => handleLocale(targetLang, true, location.pathname)}
    >{$LL.language.originalName[targetLang]()}</LinkButton
  >{' '}
{/each}
