<script lang="ts">
  import type { Locales } from '$lang/i18n-types';

  import { LL, locale } from '$lang/i18n-svelte';
  import { LocaleCodes } from '$config';
  import { page } from '$app/stores';
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

<LinkButton
  linkType={$locale === LocaleCodes.PORTUGUESE ? 'current' : 'default'}
  on:click={() => handleLocale(LocaleCodes.PORTUGUESE, true, location.pathname)}
>
  {$LL.language.originalName.pt()}
</LinkButton>

<span class="separator">❙</span>

<LinkButton
  linkType={$locale === LocaleCodes.ENGLISH ? 'current' : 'default'}
  on:click={() => handleLocale(LocaleCodes.ENGLISH, true, location.pathname)}
>
  {$LL.language.originalName.en()}
</LinkButton>

<style lang="scss">
  .separator {
    padding: 0 var(--spacing-s3);
  }
</style>
