<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { ExamplePath } from '$config';

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

  let nonExistingTopicExampleStatus = false;

  const handleNonExistingTopicExample = () => {
    nonExistingTopicExampleStatus = !nonExistingTopicExampleStatus;
  };
</script>

<Header sessionTitle={$LL.topics.topics()} />
<Line />

<PageContent rowGap="l2">
  <div class="group-container">
    <TitleH1 marginTop="s" marginBottom="s3" strong>
      {$LL.topics.groupTopics()}
    </TitleH1>

    <Paragraph>
      {$LL.topics.groupTopicsMessage()}
    </Paragraph>
  </div>

  <Line neutral pageContentSize={false} />

  <div class="group-container">
    <TitleH3 strong marginBottom="s">
      {$LL.topics.existingTopics()}
    </TitleH3>

    <TitleH3 fontSize="l" marginBottom="s2">
      <Link href={'/' + $locale + ExamplePath.TOPIC_EXAMPLE}>
        {$LL.topics.exampleOne.title()}
      </Link>
    </TitleH3>

    <TitleH3 fontSize="l" marginBottom="s2">
      <LinkButton on:click={handleNonExistingTopicExample}>
        {$LL.topics.exampleTwo.title()}
      </LinkButton>
    </TitleH3>

    <TitleH3 fontSize="l" marginBottom="l3">
      <LinkButton on:click={handleNonExistingTopicExample}>
        {$LL.topics.exampleThree.title()}
      </LinkButton>
    </TitleH3>
  </div>

  <LeftBorderDiv style="max-width: 500px;">
    {$LL.topics.warningMessage.incompleteExample()}
  </LeftBorderDiv>
</PageContent>

<FullscreenModal
  handleOpenAndClose={handleNonExistingTopicExample}
  openStatus={nonExistingTopicExampleStatus}
>
  <Paragraph fontSize="l" marginBottom="s4">
    {$LL.topics.warningMessage.onlyOneExample()}
  </Paragraph>

  <LeftBorderDiv marginBottom="l">
    <Paragraph fontSize="l">
      <b>{$LL.topics.exampleOne.title()}</b>
    </Paragraph>
  </LeftBorderDiv>

  <Paragraph fontSize="l" marginBottom="s">
    {$LL.topics.warningMessage.wouldYouLikeToOpenThisExample()}
  </Paragraph>

  <List rowGap="l">
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.TOPIC_EXAMPLE}>
        {$LL.topics.warningMessage.openTheExample()}
      </Link>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleNonExistingTopicExample}>
        {$LL.topics.warningMessage.doNotOpen()}
      </LinkButton>
    </ListItem>
  </List>
</FullscreenModal>

<Footer />

<style lang="scss">
  .group-container {
    display: flex;
    flex-direction: column;

    max-width: 700px;
    gap: var(--gap-m);
    margin-bottom: var(--spacing-l);
  }
</style>
