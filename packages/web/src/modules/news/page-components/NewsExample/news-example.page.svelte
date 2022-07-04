<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath, Path } from '$config';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { Tag } from '$components/Tag';
  import { FullscreenModal } from '$components/FullscreenModal';
  import { LinkButton } from '$components/LinkButton';

  let openExternalLinkStatus = false;

  const handleExternalLink = () => {
    openExternalLinkStatus = !openExternalLinkStatus;
  };
</script>

<Header sessionTitle={$LL.news.news()} />
<Line />

<PageContent rowGap="unset">
  <div class="news-data-container">
    <TitleH3 fontSize="l2" marginBottom="s">
      {$LL.news.newsData()}
    </TitleH3>

    <Paragraph>
      <span class="data-name">{$LL.news.postedOn()}:</span>
      {$LL.news.newsReader.example2B.date()}
    </Paragraph>

    <Paragraph>
      <span class="data-name">{$LL.news.lastUpdated()}:</span>
      {$LL.news.newsReader.example2B.date()}
    </Paragraph>

    <Paragraph>
      <span class="data-name">{$LL.news.author()}:</span> Jane - @jane
    </Paragraph>
  </div>

  <Line neutral pageContentSize={false} />

  <div class="news-content-container">
    <TitleH1 strong marginBottom="s3">
      {$LL.news.newsReader.example2B.title()}
    </TitleH1>

    <Paragraph textAlign="justify">
      {@html $LL.news.newsReader.example2B.part1()}
    </Paragraph>

    <Paragraph textAlign="justify">
      {@html $LL.news.newsReader.example2B.part2()}
    </Paragraph>

    <Paragraph textAlign="justify">
      {@html $LL.news.newsReader.example2B.part3()}
    </Paragraph>

    <TitleH3 marginTop="l">
      {$LL.news.newsReader.example2B.part4SubTitle()}
    </TitleH3>

    <Paragraph textAlign="justify">
      {@html $LL.news.newsReader.example2B.part4()}
    </Paragraph>

    <Paragraph textAlign="justify">
      {@html $LL.news.newsReader.example2B.part5()}
    </Paragraph>

    <TitleH3 marginTop="l">
      {$LL.news.newsReader.example2B.part6SubTitle()}
    </TitleH3>

    <Paragraph textAlign="justify">
      {@html $LL.news.newsReader.example2B.part6()}
    </Paragraph>

    <Paragraph textAlign="justify">
      {@html $LL.news.newsReader.example2B.part7()}
    </Paragraph>
  </div>

  <Line neutral pageContentSize={false} />

  <div class="nav-links-container">
    <Paragraph marginBottom="s">
      <TitleH3 fontSize="l2">{$LL.news.whatWouldYouLikeToDoNow()}?</TitleH3>
    </Paragraph>

    <List listType="disc">
      <ListItem>
        <LinkButton on:click={handleExternalLink}>
          {$LL.news.readThisNewsAt()}
          {env.newsJournalFullName}
        </LinkButton>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + ExamplePath.NEWS_EXAMPLE_SUGGEST_CHANGE}>
          {$LL.news.suggestChangesToTheNews()}
        </Link>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.NEWS}>
          {$LL.news.goToNewsSection()}
        </Link>
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
  .news-data-container {
    display: flex;
    flex-direction: column;

    max-width: 550px;
    padding-bottom: var(--spacing-l);
  }

  .news-content-container {
    display: flex;
    flex-direction: column;

    max-width: 630px;
    margin-top: var(--spacing-l3);
    margin-bottom: var(--spacing-l4);
    gap: var(--gap-l);
  }

  .data-name {
    font-weight: var(--font-weight-bold);
    padding-right: var(--spacing-s2);
  }

  .nav-links-container {
    margin-top: var(--spacing-l);
  }
</style>
