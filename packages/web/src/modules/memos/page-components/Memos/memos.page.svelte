<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { ExamplePath, Path } from '$config';

  import { Footer } from '$components/Footer';
  import { FullscreenModal } from '$components/FullscreenModal';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';

  let nonExistingMemoExampleStatus = false;

  const handleNonExistingMemoExample = () => {
    nonExistingMemoExampleStatus = !nonExistingMemoExampleStatus;
  };

  enum Section {
    RECENT_MEMOS = 'recent-memos',
    ALL_MEMOS = 'all-memos',
  }

  let currentSection: Section = Section.RECENT_MEMOS;

  const handleMemosSection = () => {
    currentSection === Section.RECENT_MEMOS
      ? (currentSection = Section.ALL_MEMOS)
      : (currentSection = Section.RECENT_MEMOS);
  };
</script>

<Header sessionTitle={$LL.memos.memos()} />
<Line />

<PageContent>
  <div class="page-group-container">
    <TitleH1>{$LL.memos.memoManagement()}</TitleH1>

    <Paragraph>
      {$LL.memos.memoManagementMessage()}
    </Paragraph>
  </div>

  <div class="page-group-container">
    <List listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.MEMOS_CREATE}>
          {$LL.memos.createMemo()}
        </Link>
      </ListItem>

      <ListItem>
        <LinkButton on:click={handleMemosSection}>
          {currentSection === Section.RECENT_MEMOS
            ? `${$LL.memos.showAllMemos()}`
            : `${$LL.memos.showRecentMemos()}`}
        </LinkButton>
      </ListItem>
    </List>
  </div>

  <div class="page-group-container">
    <TitleH3 marginBottom="s">
      {currentSection === Section.RECENT_MEMOS
        ? `${$LL.memos.recentMemos()}`
        : `${$LL.memos.allMemos()}`}
    </TitleH3>

    <List>
      <ListItem>
        <Link href={'/' + $locale + ExamplePath.MEMO_EXAMPLE}>
          <span class="date">{$LL.memos.exampleOne.date()}</span>
          {$LL.memos.exampleOne.title()}
        </Link>
      </ListItem>

      {#if currentSection === Section.ALL_MEMOS}
        <ListItem>
          <LinkButton on:click={handleNonExistingMemoExample}>
            <span class="date">{$LL.memos.exampleTwo.date()}</span>
            {$LL.memos.exampleTwo.title()}
          </LinkButton>
        </ListItem>
      {/if}
    </List>
  </div>
</PageContent>

<FullscreenModal
  handleOpenAndClose={handleNonExistingMemoExample}
  openStatus={nonExistingMemoExampleStatus}
>
  <Paragraph fontSize="l" marginBottom="s4">
    {$LL.memos.warningMessage.onlyOneExample()}
  </Paragraph>

  <LeftBorderDiv marginBottom="l">
    <Paragraph fontSize="l">
      <b>{$LL.memos.exampleOne.title()}</b>
    </Paragraph>
  </LeftBorderDiv>

  <Paragraph fontSize="l" marginBottom="s">
    {$LL.memos.warningMessage.wouldYouLikeToOpenThisExample()}
  </Paragraph>

  <List rowGap="l">
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.MEMO_EXAMPLE}>
        {$LL.memos.warningMessage.openTheExample()}
      </Link>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleNonExistingMemoExample}>
        {$LL.memos.warningMessage.doNotOpen()}
      </LinkButton>
    </ListItem>
  </List>
</FullscreenModal>

<Footer />

<style lang="scss">
  .page-group-container {
    display: flex;
    flex-direction: column;

    max-width: 740px;
    gap: var(--gap-m);
  }

  .date {
    padding-right: var(--spacing-s2);
    font-weight: var(--font-weight-bold);
  }
</style>
