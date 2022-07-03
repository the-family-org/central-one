<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath, Path } from '$config';
  import { confettiEffect } from '$shared/effects/confettiEffect';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Surface } from '$components/Surface';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';

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
        <Link href={'/' + $locale + ExamplePath.NEWS_EXAMPLE_READER}>
          {$LL.news.goTo()}
          {env.newsJournalFullName}
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

<Footer />

<style lang="scss">
  .success-container {
    display: flex;
    flex-direction: column;
  }
</style>
