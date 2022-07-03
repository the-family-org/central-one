<script lang="ts">
  import { page } from '$app/stores';
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LinkButton } from '$components/LinkButton';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { Radio } from '$components/Radio';
  import { Checkbox } from '$components/Checkbox';

  import { ThemeContent } from '$modules/theme/components/ThemeContent';

  enum Section {
    GENERAL = 'general',
    THEME = 'theme',
    ACCOUNT = 'account',
    LOREM_IPSUM = 'lorem-ipsum',
  }

  let currentSection: Section = Section.GENERAL;

  const setSection = (section: Section) => {
    currentSection = section;
  };

  const urlSection = $page.url.searchParams.get('section');
  const sectionValues = Object.values(Section);

  if (urlSection && sectionValues.includes(urlSection as unknown as Section)) {
    currentSection = urlSection as Section;
  }
</script>

<Header sessionTitle={$LL.userSettings.userSettings()} />

<main class="main">
  <div class="menu">
    <LinkButton
      linkType={currentSection === Section.GENERAL ? 'current' : 'default'}
      on:click={() => setSection(Section.GENERAL)}
    >
      {$LL.userSettings.generalSettings()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.THEME ? 'current' : 'default'}
      on:click={() => setSection(Section.THEME)}
    >
      {$LL.userSettings.theme()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.ACCOUNT ? 'current' : 'default'}
      on:click={() => setSection(Section.ACCOUNT)}
    >
      {$LL.userSettings.account()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.LOREM_IPSUM ? 'current' : 'default'}
      on:click={() => setSection(Section.LOREM_IPSUM)}
    >
      Lorem ipsum
    </LinkButton>
  </div>

  {#if currentSection === Section.GENERAL}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">
          {$LL.userSettings.generalSettings()}
        </TitleH1>

        <Paragraph>Lorem ipsum dolor sit amet consectetur...</Paragraph>
      </div>

      <div class="content-group">
        <TitleH3 strong>Lorem ipsum 1</TitleH3>

        <div class="row">
          <Radio name="lorem-ipsum-1" value="" />
          <span>Lorem ipsum</span>
        </div>

        <div class="row">
          <Radio name="lorem-ipsum-1" value="" />
          <span>Lorem ipsum</span>
        </div>
      </div>

      <div class="content-group">
        <TitleH3 strong>Lorem ipsum 2</TitleH3>

        <div class="row">
          <Checkbox value="" />
          <span>Lorem ipsum</span>
        </div>

        <div class="row">
          <Checkbox value="" />
          <span>Lorem ipsum</span>
        </div>
      </div>
    </div>
  {/if}

  {#if currentSection === Section.THEME}
    <div class="theme-content">
      <ThemeContent />
    </div>
  {/if}

  {#if currentSection === Section.ACCOUNT}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">
          {$LL.userSettings.account()}
        </TitleH1>

        <Paragraph marginBottom="s">
          {@html $LL.userSettings.accountTypeMessage()}
        </Paragraph>

        <Paragraph marginBottom="s">
          Lorem ipsum dolor sit amet consectetur...
        </Paragraph>
      </div>
    </div>
  {/if}

  {#if currentSection === Section.LOREM_IPSUM}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">Lorem ipsum</TitleH1>

        <Paragraph>Lorem ipsum dolor sit amet consectetur...</Paragraph>
      </div>
    </div>
  {/if}
</main>

<Footer marginTop={false} />

<style lang="scss">
  .main {
    display: flex;
    flex-direction: row;

    flex: 1;
  }

  .menu {
    display: flex;
    flex-direction: column;

    min-width: 270px;

    height: auto;
    padding: var(--spacing-m);
    gap: var(--gap-s);
    border-right: 1px solid var(--color-border);
    border-left: none;
    border-top: none;
    border-bottom: none;
  }

  .theme-content {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding-bottom: var(--spacing-l4);
  }

  .content {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: var(--spacing-l) var(--spacing-l) var(--spacing-l5)
      var(--spacing-l);
    gap: var(--gap-l3);
  }

  .content-group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .row {
    display: flex;
    flex-direction: row;

    gap: var(--gap-s);
  }

  @media (max-width: 860px) {
    .main {
      flex-direction: column;
    }

    .menu {
      border-bottom: 1px solid var(--color-border);
      border-left: none;
    }
  }
</style>
