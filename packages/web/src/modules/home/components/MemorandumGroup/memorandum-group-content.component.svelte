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
  import { Tag } from '$components/Tag';

  let nonExistingMemoExampleStatus = false;

  const handleNonExistingMemoExample = () => {
    nonExistingMemoExampleStatus = !nonExistingMemoExampleStatus;
  };
</script>

<ListGroup>
  <List>
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.MEMO_EXAMPLE}>
        <Tag status="primary" marginRight="s3">
          {$LL.memos.exampleOne.date()}
        </Tag>

        {$LL.memos.exampleOne.title()}
      </Link>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleNonExistingMemoExample}>
        <Tag status="primary" marginRight="s3">
          {$LL.memos.exampleTwo.date()}
        </Tag>

        {$LL.memos.exampleTwo.title()}
      </LinkButton>
    </ListItem>
  </List>
</ListGroup>

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
