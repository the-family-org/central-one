<script lang="ts">
  import type { Locales } from '$lang/i18n-types';

  import { page } from '$app/stores';
  import { LL } from '$lang/i18n-svelte';
  import { locales } from '$lang/i18n-util';
  import { locale } from '$lang/i18n-svelte';
  import { switchLocale } from '$lang/switch-locale';

  import { LinkButton } from '../LinkButton';
  import { List } from '../List';
  import { ListGroup } from '../ListGroup';
  import { ListItem } from '../ListItem';
  import { TitleH3 } from '../TitleH3';
  import { LeftArrowIcon } from '$icons';

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

<TitleH3 marginBottom="s" fontSize="l">{$LL.language.languages()}</TitleH3>

<ListGroup>
  <List fontSize="s">
    {#each locales as targetLang}
      <ListItem>
        <div class="item">
          <LinkButton
            on:click={() => handleLocale(targetLang, true, location.pathname)}
          >
            {$LL.language.originalName[targetLang]()}
          </LinkButton>

          {#if targetLang === $locale}
            <LeftArrowIcon />
          {/if}
        </div>
      </ListItem>
    {/each}
  </List>
</ListGroup>

<style lang="scss">
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: var(--gap-s2);

    color: var(--color-foreground-secondary);
  }
</style>
