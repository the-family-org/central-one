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

  enum Section {
    GENERAL = 'general',
    LOREM_IPSUM_ONE = 'lorem-ipsum-one',
    LOREM_IPSUM_TWO = 'lorem-ipsum-two',
    LOREM_IPSUM_THREE = 'lorem-ipsum-three',
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

<Header sessionTitle={$LL.platformSettings.platformSettings()} />

<main class="main">
  <div class="menu">
    <LinkButton
      linkType={currentSection === Section.GENERAL ? 'current' : 'default'}
      on:click={() => setSection(Section.GENERAL)}
    >
      {$LL.platformSettings.generalSettingsMenu()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.LOREM_IPSUM_ONE
        ? 'current'
        : 'default'}
      on:click={() => setSection(Section.LOREM_IPSUM_ONE)}
    >
      Lorem ipsum 1
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.LOREM_IPSUM_TWO
        ? 'current'
        : 'default'}
      on:click={() => setSection(Section.LOREM_IPSUM_TWO)}
    >
      Lorem ipsum 2
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.LOREM_IPSUM_THREE
        ? 'current'
        : 'default'}
      on:click={() => setSection(Section.LOREM_IPSUM_THREE)}
    >
      Lorem ipsum 3
    </LinkButton>
  </div>

  {#if currentSection === Section.GENERAL}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">
          {$LL.platformSettings.generalSettingsTitle()}
        </TitleH1>

        <Paragraph>Lorem ipsum dolor sit amet consectetur...</Paragraph>
      </div>

      <div class="content-group">
        <TitleH3 strong>Lorem ipsum</TitleH3>

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
        <TitleH3 strong>Lorem ipsum</TitleH3>

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

  {#if currentSection === Section.LOREM_IPSUM_ONE}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">Lorem ipsum 1</TitleH1>

        <Paragraph>Lorem ipsum dolor sit amet consectetur...</Paragraph>
      </div>
    </div>
  {/if}

  {#if currentSection === Section.LOREM_IPSUM_TWO}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">Lorem ipsum 2</TitleH1>

        <Paragraph>Lorem ipsum dolor sit amet consectetur...</Paragraph>
      </div>
    </div>
  {/if}

  {#if currentSection === Section.LOREM_IPSUM_THREE}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">Lorem ipsum 3</TitleH1>

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
