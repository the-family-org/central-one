<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath } from '$config';

  import { FullscreenModal } from '$components/FullscreenModal';
  import { LeftBorderDiv } from '$shared/components/LeftBorderDiv';
  import { Link } from '$components/Link';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { Paragraph } from '$components/Paragraph';
  import { Tag } from '$components/Tag';

  export let existingExampleStatus = false;
  export let nonExistingExampleStatus = false;
  export let handleExistingExample: () => void;
  export let handleNonExistingExample: () => void;
</script>

<FullscreenModal
  handleOpenAndClose={handleExistingExample}
  openStatus={existingExampleStatus}
>
  <Paragraph fontSize="l" marginBottom="m">
    {$LL.news.whereOpenNewsMessage()}
  </Paragraph>

  <List rowGap="l2">
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.NEWS_EXAMPLE}>
        {$LL.news.onThisPlatform()}
      </Link>
    </ListItem>

    <ListItem>
      <Link
        href={'/' + $locale + ExamplePath.NEWS_EXAMPLE_READER}
        style="padding-right: 4px"
      >
        {env.newsJournalFullName}
      </Link>

      <Tag status="neutral">{$LL.common.nonResponsive()}</Tag>
    </ListItem>
  </List>
</FullscreenModal>

<FullscreenModal
  handleOpenAndClose={handleNonExistingExample}
  openStatus={nonExistingExampleStatus}
>
  <Paragraph fontSize="l" marginBottom="s4">
    {$LL.news.thereIsOnlyOneExample()}
  </Paragraph>

  <LeftBorderDiv marginBottom="l">
    <Paragraph fontSize="l">
      <b>{$LL.news.exampleOne.title()}</b>
    </Paragraph>
  </LeftBorderDiv>

  <Paragraph fontSize="l" marginBottom="s">
    {$LL.news.wouldYouLikeToOpen()}
  </Paragraph>

  <List rowGap="l">
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.NEWS_EXAMPLE}>
        {$LL.news.openOnThisPlatform()}
      </Link>
    </ListItem>

    <ListItem>
      <Link
        href={'/' + $locale + ExamplePath.NEWS_EXAMPLE_READER}
        style="padding-right: 4px"
      >
        {env.newsJournalFullName}
      </Link>

      <Tag status="neutral">{$LL.common.nonResponsive()}</Tag>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleNonExistingExample}>
        {$LL.news.doNotOpen()}
      </LinkButton>
    </ListItem>
  </List>
</FullscreenModal>
