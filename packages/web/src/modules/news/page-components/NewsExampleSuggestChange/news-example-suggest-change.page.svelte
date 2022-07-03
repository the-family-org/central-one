<script lang="ts">
  import { goto } from '$app/navigation';
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath, Path } from '$config';
  import { confettiEffect } from '$shared/effects/confettiEffect';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Surface } from '$components/Surface';
  import { Textarea } from '$components/Textarea';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';

  let formSuccessfullySent: boolean = false;

  const handleSuggestChange = () => {
    goto('#');
    formSuccessfullySent = true;
    confettiEffect('fireworks');
  };
</script>

<Header sessionTitle={$LL.news.news()} />
<Line />

<PageContent rowGap="unset">
  {#if !formSuccessfullySent}
    <div class="header-container">
      <TitleH1 strong>{$LL.news.suggestChange.suggestNewsChange()}</TitleH1>

      <LeftBorderDiv>
        <TitleH3 fontSize="l2" marginBottom="s">
          {$LL.news.suggestChange.targetNews()}
        </TitleH3>

        <Paragraph>
          <span class="data-name">Título:</span>
          {$LL.news.newsReader.example2B.title()}
        </Paragraph>

        <Paragraph>
          <span class="data-name">{$LL.news.author()}:</span> Jane - @jane
        </Paragraph>
      </LeftBorderDiv>
    </div>

    <div class="form-container">
      <Paragraph>
        {$LL.news.suggestChange.describeMessage()}
      </Paragraph>

      <form class="form" on:submit|preventDefault={handleSuggestChange}>
        <Textarea value="" rows={8} />

        <div class="right-row">
          <Button type="submit">
            {$LL.news.suggestChange.sendSuggestion()}
          </Button>
        </div>
      </form>
    </div>
  {/if}

  {#if formSuccessfullySent}
    <Surface
      status="positive"
      contentSize="full-page-content"
      paddingTop="l4"
      paddingBottom="l4"
      marginBottom="l4"
    >
      <TitleH1 marginBottom="m">
        {$LL.news.suggestChange.suggestionSent()} ✌
      </TitleH1>

      <TitleH3>{$LL.news.suggestChange.suggestionSentMessage()}</TitleH3>
    </Surface>

    <div class="success-container">
      <Paragraph marginBottom="s">
        <TitleH3 fontSize="l2">{$LL.news.whatWouldYouLikeToDoNow()}?</TitleH3>
      </Paragraph>

      <List listType="disc">
        <ListItem>
          <Link href={'/' + $locale + ExamplePath.NEWS_EXAMPLE}>
            {$LL.news.suggestChange.backToPreviousNews()}
          </Link>
        </ListItem>

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
  {/if}
</PageContent>

<Footer />

<style lang="scss">
  .header-container,
  .form-container,
  .form {
    display: flex;
    flex-direction: column;

    max-width: 680px;
    gap: var(--gap-m);
    margin-bottom: var(--spacing-l);
  }

  .success-container {
    display: flex;
    flex-direction: column;
  }

  .data-name {
    font-weight: var(--font-weight-bold);
    padding-right: var(--spacing-s2);
  }

  .right-row {
    display: flex;
    justify-content: flex-end;
  }
</style>
