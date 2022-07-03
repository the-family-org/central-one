<script lang="ts">
  import type { ThemeNamesType } from '$types';

  import { LL } from '$lang/i18n-svelte';
  import { setThemeFromClient } from '$utils';
  import { currentTheme } from '$stores';
  import { LeftArrowIcon } from '$icons';
  import { ThemeKey } from '$config';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Surface } from '$components/Surface';
  import { Tag } from '$components/Tag';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';

  import { DefaultThemeImage } from '../DefaultThemeImage';
  import { PotatoThemeImage } from '../PotatoThemeImage';
  import { ReptilianThemeImage } from '../ReptilianThemeImage';

  let currentThemeKey: ThemeNamesType;

  currentTheme.subscribe((themeKey) => {
    currentThemeKey = themeKey;
  });

  const handleSetTheme = (newTheme: ThemeNamesType) => {
    setThemeFromClient(newTheme);
    currentTheme.update(() => newTheme);
  };
</script>

<Surface paddingTop="l2" paddingBottom="l2">
  <TitleH1 marginBottom="s">
    <b>{$LL.theme.themeName[currentThemeKey]().toUpperCase()}</b>
  </TitleH1>

  <TitleH3>
    {$LL.theme.themeMessage[currentThemeKey]()}
  </TitleH3>
</Surface>

<PageContent rowGap="none" direction="row" justify="space-around">
  <div class="group">
    <TitleH1 strong marginBottom="s">
      {$LL.theme.themesAvailable()}
    </TitleH1>

    <List>
      <ListItem>
        <div class="item">
          <TitleH3>
            <LinkButton on:click={() => handleSetTheme(ThemeKey.DEFAULT_THEME)}>
              {$LL.theme.themeName.default()}
            </LinkButton>
          </TitleH3>

          {#if currentThemeKey === ThemeKey.DEFAULT_THEME}
            <Tag status="neutral"><LeftArrowIcon /> {$LL.theme.current()}</Tag>
          {/if}
        </div>
      </ListItem>

      <ListItem>
        <div class="item">
          <TitleH3>
            <LinkButton
              on:click={() => handleSetTheme(ThemeKey.LIGHT_POTATO_THEME)}
            >
              {$LL.theme.themeName[ThemeKey.LIGHT_POTATO_THEME]()}
            </LinkButton>
          </TitleH3>

          {#if currentThemeKey === ThemeKey.LIGHT_POTATO_THEME}
            <Tag status="neutral"><LeftArrowIcon /> {$LL.theme.current()}</Tag>
          {/if}
        </div>
      </ListItem>

      <ListItem>
        <div class="item">
          <TitleH3>
            <LinkButton
              on:click={() => handleSetTheme(ThemeKey.LIGHT_REPTILIAN_THEME)}
              >{$LL.theme.themeName[ThemeKey.LIGHT_REPTILIAN_THEME]()}
            </LinkButton>
          </TitleH3>

          {#if currentThemeKey === ThemeKey.LIGHT_REPTILIAN_THEME}
            <Tag status="neutral"><LeftArrowIcon /> {$LL.theme.current()}</Tag>
          {/if}
        </div>
      </ListItem>
    </List>
  </div>

  <div class="group theme-image-container">
    {#if currentThemeKey === ThemeKey.DEFAULT_THEME}
      <DefaultThemeImage />
    {/if}

    {#if currentThemeKey === ThemeKey.LIGHT_POTATO_THEME}
      <PotatoThemeImage />
    {/if}

    {#if currentThemeKey === ThemeKey.LIGHT_REPTILIAN_THEME}
      <ReptilianThemeImage />
    {/if}
  </div>
</PageContent>

<style lang="scss">
  .group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-s2);
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: var(--gap-s2);
    margin-bottom: var(--spacing-s);
  }

  .theme-image-container {
    margin-top: 20px;
  }
</style>
