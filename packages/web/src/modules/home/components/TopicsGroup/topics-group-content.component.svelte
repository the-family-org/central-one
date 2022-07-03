<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { ExamplePath } from '$config';

  import { FullscreenModal } from '$components/FullscreenModal';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Link } from '$components/Link';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListGroup } from '$components/ListGroup';
  import { ListItem } from '$components/ListItem';
  import { Paragraph } from '$components/Paragraph';

  let nonExistingTopicExampleStatus = false;

  const handleNonExistingTopicExample = () => {
    nonExistingTopicExampleStatus = !nonExistingTopicExampleStatus;
  };
</script>

<ListGroup>
  <List>
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.TOPIC_EXAMPLE}>
        {$LL.topics.exampleOne.title()}
      </Link>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleNonExistingTopicExample}>
        {$LL.topics.exampleTwo.title()}
      </LinkButton>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleNonExistingTopicExample}>
        {$LL.topics.exampleThree.title()}
      </LinkButton>
    </ListItem>
  </List>
</ListGroup>

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
