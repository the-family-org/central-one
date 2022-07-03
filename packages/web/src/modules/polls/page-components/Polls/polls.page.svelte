<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path, ExamplePath } from '$config';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
  import { TitleH3 } from '$components/TitleH3';
  import { Link } from '$components/Link';
  import { Tag } from '$components/Tag';

  enum Section {
    ACTIVE_POLLS = 'active-polls',
    ALL_POLLS = 'all-polls',
  }

  let currentSection: Section = Section.ACTIVE_POLLS;

  const handlePollView = () => {
    currentSection === Section.ACTIVE_POLLS
      ? (currentSection = Section.ALL_POLLS)
      : (currentSection = Section.ACTIVE_POLLS);
  };
</script>

<Header sessionTitle={$LL.polls.polls()} />
<Line />

<PageContent rowGap="l4">
  <div class="page-group-container">
    <TitleH1 marginTop="s" strong>{$LL.polls.pollManagement()}</TitleH1>

    <Paragraph marginBottom="s">
      {$LL.polls.pollManagementMessage()}
    </Paragraph>

    <List listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.POLLS_CREATE}>
          {$LL.polls.createPoll()}
        </Link>
      </ListItem>

      <ListItem>
        <LinkButton on:click={handlePollView}>
          {currentSection === Section.ACTIVE_POLLS
            ? `${$LL.polls.viewAllPolls()}`
            : `${$LL.polls.viewOnlyActivePolls()}`}
        </LinkButton>
      </ListItem>
    </List>
  </div>

  {#if currentSection === Section.ACTIVE_POLLS}
    <div class="page-group-container">
      <TitleH2 marginBottom="s2" strong>
        {$LL.polls.activePolls()}
      </TitleH2>

      <Link href={'/' + $locale + ExamplePath.POLLS_EXAMPLE_ANSWER}>
        <div class="active-poll-item">
          <span class="active-poll-name">
            {$LL.polls.exampleOne.title()}
          </span>

          <Tag status="neutral" style="height: fit-content; margin: auto 0;">
            {$LL.polls.unanswered()}
          </Tag>
        </div>
      </Link>
    </div>
  {/if}

  {#if currentSection === Section.ALL_POLLS}
    <div class="page-group-container">
      <TitleH2 marginBottom="s2" strong>
        {$LL.polls.allPolls()}
      </TitleH2>

      <Link href={'/' + $locale + ExamplePath.POLLS_EXAMPLE_ANSWER}>
        <div class="active-poll-item">
          <span class="active-poll-name">
            {$LL.polls.exampleOne.title()}
          </span>

          <Tag status="neutral" style="height: fit-content; margin: auto 0;">
            {$LL.polls.unanswered()}
          </Tag>
        </div>
      </Link>

      <Link href={'/' + $locale + ExamplePath.POLLS_EXAMPLE_RESULT}>
        <div class="active-poll-item">
          <span class="active-poll-name">
            {$LL.polls.exampleTwo.title()}
          </span>

          <Tag status="positive" style="height: fit-content; margin: auto 0;">
            {$LL.polls.answered()}
          </Tag>
        </div>
      </Link>
    </div>
  {/if}
</PageContent>

<Footer />

<style lang="scss">
  .page-group-container {
    display: flex;
    flex-direction: column;

    max-width: 860px;
    gap: var(--gap-m);
  }

  .active-poll-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 0 var(--gap-s);
    margin-bottom: var(--spacing-s);
  }

  .active-poll-name {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);
  }
</style>
