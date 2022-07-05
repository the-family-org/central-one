<script lang="ts">
  import { page } from '$app/stores';
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LinkButton } from '$components/LinkButton';

  import { GeneralContent } from '../../components/GeneralContent';
  import { NewAccountContent } from '../../components/NewAccountContent';
  import { GuestsContent } from '../../components/GuestsContent';
  import { PollsContent } from '../../components/PollsContent';
  import { TopicsContent } from '../../components/TopicsContent';
  import { NewsReaderContent } from '../../components/NewsReaderContent';

  enum Section {
    GENERAL = 'general-section',
    NEW_ACCOUNT = 'new-account-section',
    GUESTS = 'guests-section',
    FEEDBACK = 'feedback-section',
    POLLS = 'polls-section',
    TOPICS = 'topics-section',
    NEWS_READER = 'news-reader-section',
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
      {$LL.platformSettings.generalSection.menu()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.NEW_ACCOUNT ? 'current' : 'default'}
      on:click={() => setSection(Section.NEW_ACCOUNT)}
    >
      {$LL.platformSettings.newAccountSection.menu()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.GUESTS ? 'current' : 'default'}
      on:click={() => setSection(Section.GUESTS)}
    >
      {$LL.platformSettings.guestsSection.menu()}
    </LinkButton>

    <!-- <LinkButton
      linkType={currentSection === Section.FEEDBACK ? 'current' : 'default'}
      on:click={() => setSection(Section.FEEDBACK)}
    >
      {$LL.platformSettings.feedbackSection.menu()}
    </LinkButton> -->

    <LinkButton
      linkType={currentSection === Section.POLLS ? 'current' : 'default'}
      on:click={() => setSection(Section.POLLS)}
    >
      {$LL.platformSettings.pollsSection.menu()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.TOPICS ? 'current' : 'default'}
      on:click={() => setSection(Section.TOPICS)}
    >
      {$LL.platformSettings.topicsSection.menu()}
    </LinkButton>

    <LinkButton
      linkType={currentSection === Section.NEWS_READER ? 'current' : 'default'}
      on:click={() => setSection(Section.NEWS_READER)}
    >
      {$LL.platformSettings.newsReaderSection.menu()}
    </LinkButton>
  </div>

  {#if currentSection === Section.GENERAL}
    <div class="content-container">
      <GeneralContent />
    </div>
  {/if}

  {#if currentSection === Section.NEW_ACCOUNT}
    <div class="content-container">
      <NewAccountContent />
    </div>
  {/if}

  {#if currentSection === Section.GUESTS}
    <div class="content-container">
      <GuestsContent />
    </div>
  {/if}

  <!-- {#if currentSection === Section.FEEDBACK}
    <div class="content-container">
      <div class="content-group">
        <TitleH1 strong marginBottom="s3">
          {$LL.platformSettings.feedbackSection.title()}
        </TitleH1>
      </div>
    </div>
  {/if} -->

  {#if currentSection === Section.POLLS}
    <div class="content-container">
      <PollsContent />
    </div>
  {/if}

  {#if currentSection === Section.TOPICS}
    <div class="content-container">
      <TopicsContent />
    </div>
  {/if}

  {#if currentSection === Section.NEWS_READER}
    <div class="content-container">
      <NewsReaderContent />
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

    min-width: 210px;

    height: auto;
    padding: var(--spacing-m);
    gap: var(--gap-s);
    border-right: 1px solid var(--color-border);
    border-left: none;
    border-top: none;
    border-bottom: none;
  }

  .content-container {
    display: flex;
    flex-direction: column;

    max-width: 800px;
    width: 100%;
    padding: var(--spacing-l) var(--spacing-l) var(--spacing-l5)
      var(--spacing-l);
    gap: var(--gap-l5);
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
