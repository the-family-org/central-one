<!--
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************

    WARNING

    This code was created quickly, all on a single page,
    just to exemplify the idea. This page will be deleted
    and recreated.

  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
-->
<script lang="ts">
  import { page } from '$app/stores';
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Link } from '$components/Link';
  import { LinkButton } from '$components/LinkButton';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';

  enum Section {
    PAGE_ONE = 'page-one',
    PAGE_TWO = 'page-two',
    PAGE_THREE = 'page-three',
    CHAT_PAGE = 'chat-page',
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

{#if currentSection !== Section.CHAT_PAGE}
  <Header sessionTitle={$LL.topics.topics()} />
{/if}

<main class="main">
  {#if currentSection !== Section.CHAT_PAGE}
    <div class="menu">
      <div class="menu-pages-container">
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
          linkType={currentSection === Section.PAGE_THREE
            ? 'current'
            : 'default'}
          on:click={() => setSection(Section.PAGE_THREE)}
        >
          {$LL.topics.example.page()} 3
        </LinkButton>
      </div>

      <div class="menu-bottom-pages-container">
        <LinkButton on:click={() => setSection(Section.CHAT_PAGE)}>
          Chat
        </LinkButton>
      </div>
    </div>
  {/if}

  {#if currentSection === Section.PAGE_ONE}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">
          {$LL.topics.example.topicTitle()}
        </TitleH1>

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
      </div>

      <div class="row">
        <div>
          <TitleH3 strong marginBottom="s2">
            {$LL.topics.example.traditionalCoatOfArms()}
          </TitleH3>

          <Paragraph marginBottom="s">
            {$LL.topics.example.traditionalCoatOfArmsMessage()}
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
            {$LL.topics.example.funCoatOfArmsMessage()}
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
            {$LL.topics.example.mourningCoatOfArmsMessage()}
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
      <Paragraph>{$LL.topics.example.anotherPageMessage()}</Paragraph>
    </div>
  {/if}

  {#if currentSection === Section.CHAT_PAGE}
    <div class="chat-page">
      <div class="chat-header">
        <div class="chat-back-button">
          <LinkButton on:click={() => setSection(Section.PAGE_ONE)}>
            <b>☚</b> Voltar
          </LinkButton>
        </div>

        <div>
          {$LL.topics.example.topicTitle()}
        </div>
      </div>

      <div class="chat-messages-container">
        <div class="chat-messages">
          <div class="message-author-line">
            <span class="message-author">@jane</span>, {$LL.topics.example.chatMessageDate()}
          </div>
          <div class="message">{$LL.topics.example.chatMessage()}</div>
        </div>
      </div>

      <div class="chat-bottom-container">
        <div class="chat-message-input">
          <Paragraph>{$LL.topics.example.placeToWriteMessages()}</Paragraph>
        </div>

        <div class="chat-button">➤</div>
      </div>
    </div>
  {/if}
</main>

{#if currentSection !== Section.CHAT_PAGE}
  <Footer marginTop={false} />
{/if}

<style lang="scss">
  .main {
    display: flex;
    flex-direction: row;

    flex: 1;
  }

  .menu {
    display: flex;
    flex-direction: column;
    overflow: auto;

    min-width: 220px;

    height: auto;
    padding: var(--spacing-m);
    border-right: 1px solid var(--color-border);
    border-left: none;
    border-top: none;
    border-bottom: none;
  }

  .menu-pages-container {
    display: flex;
    flex-direction: column;
    flex: 1;

    gap: var(--gap-s);
    padding-bottom: var(--spacing-m);
  }

  .menu-bottom-pages-container {
    display: flex;
    flex-direction: column;

    padding-top: var(--spacing-s);
    border-top: 1px solid var(--color-border);
    gap: var(--gap-s);
  }

  .content {
    display: flex;
    flex-direction: column;

    max-width: 700px;
    padding: var(--spacing-l3) var(--spacing-l) var(--spacing-l5)
      var(--spacing-l);
    gap: var(--gap-l5);
  }

  .chat-page {
    position: relative;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
  }

  .chat-header {
    display: flex;
    flex-direction: row;

    width: 100%;
    padding: var(--spacing-s2);
    border-bottom: 1px solid var(--color-border);
    gap: var(--gap-s);
  }

  .chat-back-button {
    padding-right: var(--spacing-s);
    border-right: 1px solid var(--color-border);
  }

  .chat-messages-container {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: auto;

    flex: 1;
    padding: var(--spacing-m);
    gap: var(--gap-m);
  }

  .chat-bottom-container {
    display: flex;
    flex-direction: row;

    max-height: 90px;
    min-height: 90px;
    height: 90px;
    padding: var(--spacing-m);
    gap: var(--gap-m);
    border-top: 1px solid var(--color-border);
  }

  .chat-message-input {
    display: flex;
    flex-direction: row;

    flex: 1;
  }

  .chat-button {
    cursor: pointer;
  }

  .message-author-line {
    font-size: var(--font-size-s);
    color: var(--color-neutral);
  }

  .message-author {
    font-weight: var(--font-weight-bold);
    color: var(--color-secondary);
  }

  .message {
    padding-left: var(--spacing-s);
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
      max-height: 160px;

      padding: var(--spacing-s);
      border-bottom: 1px solid var(--color-border);
      border-right: none;
    }
  }

  @media (max-width: 700px) {
    .row {
      flex-direction: column;
    }
  }
</style>
