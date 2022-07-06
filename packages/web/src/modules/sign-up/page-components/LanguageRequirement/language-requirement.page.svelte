<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { locales } from '$lang/i18n-util';
  import { switchLocale } from '$lang/switch-locale';
  import { page } from '$app/stores';
  import { ExamplePath, Path } from '$config';
  import { nav } from '$utils';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Radio } from '$components/Radio';
  import { TitleH1 } from '$components/TitleH1';

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

  const fakeConfirmation = () => {
    nav({ locale: $locale, path: ExamplePath.FIRST_ACCESS_MESSAGE });
    // nav({ locale: $locale, path: Path.SIGN_UP_REQUIREMENTS });
  };
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<!-- <Header brandAndSessionOnly={true}>{$LL.language.languageSettings()}</Header>
<Line /> -->

<!-- <PageContent> -->
<main class="main-container">
  <div class="content-container">
    <TitleH1 strong>
      {$LL.language.chooseALanguage()}
    </TitleH1>

    <Paragraph>
      {$LL.language.messageToChooseLanguage()}
    </Paragraph>

    <div class="languages-container">
      {#each locales as targetLang}
        <label
          for="en-lang"
          class="label"
          on:click={() => handleLocale(targetLang, true, location.pathname)}
        >
          <Radio
            id="{targetLang}-lang"
            name="language"
            value={targetLang}
            checked={$locale === `${targetLang}`}
          />
          <span>{$LL.language.originalName[targetLang]()}</span>
        </label>
      {/each}
    </div>

    <Button on:click={fakeConfirmation}>
      {$LL.language.confirmLanguageChoice()}
    </Button>

    <!-- <LeftBorderDiv style="margin-top: 40px;">
      {$LL.common.warningMessage()}
    </LeftBorderDiv> -->
  </div>
</main>
<!-- </PageContent> -->

<!-- <Footer showOnlyLogo={true} /> -->
<style lang="scss">
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-container {
    display: flex;
    flex-direction: column;

    max-width: 530px;
    padding: var(--gap-l3) var(--gap-s);
    gap: var(--gap-l2);
  }

  .languages-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-l2);
    padding-bottom: var(--spacing-s2);
  }

  .label {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: fit-content;
    gap: var(--gap-s);
  }
</style>
