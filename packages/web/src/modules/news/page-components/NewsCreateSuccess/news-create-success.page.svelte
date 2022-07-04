<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath, Path } from '$config';
  import { confettiEffect } from '$shared/effects/confettiEffect';

  import { Footer } from '$components/Footer';
  import { FullscreenModal } from '$components/FullscreenModal';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Surface } from '$components/Surface';
  import { Tag } from '$components/Tag';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';

  let openExternalLinkStatus = false;

  const handleExternalLink = () => {
    openExternalLinkStatus = !openExternalLinkStatus;
  };

  confettiEffect('fireworks');
</script>

<Header sessionTitle={$LL.news.news()} />
<Line />

<PageContent rowGap="unset">
  <Surface
    status="positive"
    contentSize="full-page-content"
    paddingTop="l4"
    paddingBottom="l4"
    marginBottom="l4"
  >
    <TitleH1 marginBottom="m">
      {$LL.news.createNews.newsCreated()} ✌
    </TitleH1>

    <TitleH3>{$LL.news.createNews.newsCreatedMessage()}</TitleH3>
  </Surface>

  <div class="success-container">
    <Paragraph marginBottom="s">
      <TitleH3 fontSize="l2">{$LL.news.whatWouldYouLikeToDoNow()}?</TitleH3>
    </Paragraph>

    <List listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.NEWS}>
          {$LL.news.goToNewsSection()}
        </Link>
      </ListItem>

      <ListItem>
        <LinkButton on:click={handleExternalLink}>
          {$LL.news.goTo()}
          {env.newsJournalFullName}
        </LinkButton>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.HOME_PAGE}>
          {$LL.news.goToHomePage()}
        </Link>
      </ListItem>
    </List>
  </div>
</PageContent>

<FullscreenModal
  handleOpenAndClose={handleExternalLink}
  openStatus={openExternalLinkStatus}
>
  <Paragraph fontSize="l" marginBottom="m">
    {$LL.common.openingExternalWebsite()}
  </Paragraph>

  <List rowGap="l2">
    <ListItem>
      <Link
        href={'/' + $locale + ExamplePath.NEWS_EXAMPLE_READER}
        style="padding-right: 4px"
      >
        {$LL.common.openTheWebsite()}
      </Link>

      <Tag status="neutral">{$LL.common.nonResponsive2()}</Tag>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleExternalLink}>
        {$LL.common.doNotOpen()}
      </LinkButton>
    </ListItem>
  </List>
</FullscreenModal>

<Footer />

<style lang="scss">
  .success-container {
    display: flex;
    flex-direction: column;
  }
</style>
