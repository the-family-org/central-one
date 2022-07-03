<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath } from '$config';

  import { FullscreenModal } from '$components/FullscreenModal';
  import { Link } from '$components/Link';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { Paragraph } from '$components/Paragraph';
  import { Surface } from '$components/Surface';
  import { Tag } from '$components/Tag';
  import { TitleH1 } from '$components/TitleH1';

  let showModal = false;

  const handleShowModal = () => {
    showModal = !showModal;
  };
</script>

<!--
  @component
  ### Header message component
-->
<Surface
  status="primary"
  paddingTop="l2"
  paddingBottom="m"
  contentSize="contained-large"
>
  <LinkButton on:click={handleShowModal} linkType="no-color" href="/#">
    <TitleH1 fontWeight="extra-bold" fontSize="l5" marginBottom="s">
      {$LL.homePage.headerMessageExample.title()}
    </TitleH1>
  </LinkButton>

  <LinkButton on:click={handleShowModal} linkType="no-color" href="/#">
    <Paragraph fontSize="l" adaptiveSize={true}>
      {@html $LL.homePage.headerMessageExample.description()}
    </Paragraph>
  </LinkButton>

  <LinkButton on:click={handleShowModal} linkType="no-color" href="/#">
    <Paragraph textAlign="right" fontSize="m" adaptiveSize={true}>
      <i>{$LL.homePage.headerMessageExample.author()}</i>
    </Paragraph>
  </LinkButton>
</Surface>

<FullscreenModal handleOpenAndClose={handleShowModal} openStatus={showModal}>
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
