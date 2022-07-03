<script lang="ts">
  import { page } from '$app/stores';
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LinkButton } from '$components/LinkButton';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';

  enum Section {
    PAGE_ONE = 'page-one',
    PAGE_TWO = 'page-two',
    PAGE_THREE = 'page-three',
    PAGE_FOUR = 'page-four',
  }

  let currentSection: Section = Section.PAGE_ONE;

  const setSection = (section: Section) => {
    currentSection = section;
  };

  const urlSection = $page.url.searchParams.get('section');
  const sectionValues = Object.values(Section);

  if (urlSection && sectionValues.includes(urlSection as unknown as Section)) {
    currentSection = urlSection as Section;
  }
</script>

<Header sessionTitle={$LL.topics.topics()} />

<main class="main">
  <div class="menu">
    <LinkButton
      linkType={currentSection === Section.PAGE_ONE ? 'current' : 'default'}
      on:click={() => setSection(Section.PAGE_ONE)}
    >
      {$LL.topics.example.intro()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.PAGE_TWO ? 'current' : 'default'}
      on:click={() => setSection(Section.PAGE_TWO)}
    >
      {$LL.topics.example.coatOfArms()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.PAGE_THREE ? 'current' : 'default'}
      on:click={() => setSection(Section.PAGE_THREE)}
    >
      {$LL.topics.example.page()} 3
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.PAGE_FOUR ? 'current' : 'default'}
      on:click={() => setSection(Section.PAGE_FOUR)}
    >
      {$LL.topics.example.page()} 4
    </LinkButton>
  </div>

  {#if currentSection === Section.PAGE_ONE}
    <div class="content">
      <div>
        <TitleH1 marginBottom="s">{$LL.topics.example.topicTitle()}</TitleH1>

        <Paragraph>
          {$LL.topics.example.introMessage()}
        </Paragraph>
      </div>

      <LeftBorderDiv style="max-width: 440px">
        {$LL.topics.example.warningMessage()}
      </LeftBorderDiv>
    </div>
  {/if}

  {#if currentSection === Section.PAGE_TWO}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">
          {$LL.topics.example.doeFamilyCoatOfArms()}
        </TitleH1>

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quaerat odio beatae libero fugit architecto quis ad minus nesciunt,
          repellat commodi quidem! Eos, esse totam praesentium corporis
          repudiandae ut voluptatem.
        </Paragraph>
      </div>

      <div class="row">
        <div>
          <TitleH3 strong marginBottom="s2">
            {$LL.topics.example.traditionalCoatOfArms()}
          </TitleH3>

          <Paragraph marginBottom="s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quaerat odio beatae libero fugit architecto quis ad minus nesciunt,
            repellat commodi...
          </Paragraph>
        </div>

        <div>
          <img
            src="/images/medium-logo.example.svg"
            alt="Brand"
            width="210"
            height="190"
          />
        </div>
      </div>

      <div class="row">
        <div>
          <TitleH3 strong marginBottom="s2">
            {$LL.topics.example.funCoatOfArms()}
          </TitleH3>

          <Paragraph marginBottom="s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quaerat odio beatae libero fugit architecto quis ad minus nesciunt,
            repellat commodi...
          </Paragraph>
        </div>

        <div>
          <img
            src="/images/medium-logo-yellow.example.svg"
            alt="Brand"
            width="210"
            height="190"
          />
        </div>
      </div>

      <div class="row">
        <div>
          <TitleH3 strong marginBottom="s2">
            {$LL.topics.example.mourningCoatOfArms()}
          </TitleH3>

          <Paragraph marginBottom="s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quaerat odio beatae libero fugit architecto quis ad minus nesciunt,
            repellat commodi...
          </Paragraph>
        </div>

        <div>
          <img
            src="/images/medium-logo-dark.example.svg"
            alt="Brand"
            width="210"
            height="190"
          />
        </div>
      </div>
    </div>
  {/if}

  {#if currentSection === Section.PAGE_THREE}
    <div class="content">
      <div>
        <TitleH1 marginBottom="s">{$LL.topics.example.page()} 3</TitleH1>

        <Paragraph>Lorem ipsum dolor sit amet consectetur...</Paragraph>
      </div>
    </div>
  {/if}

  {#if currentSection === Section.PAGE_FOUR}
    <div class="content">
      <div>
        <TitleH1 marginBottom="s">{$LL.topics.example.page()} 4</TitleH1>

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

    max-width: 700px;
    padding: var(--spacing-l3) var(--spacing-l) var(--spacing-l5)
      var(--spacing-l);
    gap: var(--gap-l5);
  }

  .row {
    display: flex;
    flex-direction: row;

    gap: var(--gap-m) var(--gap-l3);
  }

  @media (max-width: 960px) {
    .main {
      flex-direction: column;
    }

    .menu {
      border-bottom: 1px solid var(--color-border);
      border-left: none;
    }
  }

  @media (max-width: 700px) {
    .row {
      flex-direction: column;
    }
  }
</style>
