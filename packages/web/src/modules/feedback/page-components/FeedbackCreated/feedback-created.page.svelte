<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
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

<Header sessionTitle={$LL.feedback.feedback()} />
<Line />

<PageContent rowGap="unset">
  <Surface
    status="positive"
    contentSize="full-page-content"
    paddingTop="l4"
    paddingBottom="l4"
    marginBottom="l4"
  >
    <TitleH1 marginBottom="m">{$LL.feedback.feedbackCreated()}</TitleH1>

    <TitleH3>{$LL.feedback.feedbackCreatedMessage()}</TitleH3>
  </Surface>

  <div class="success-container">
    <Paragraph marginBottom="s">
      <TitleH3 fontSize="l2">{$LL.feedback.whatWouldYouLikeToDoNow()}</TitleH3>
    </Paragraph>

    <List listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.PLATFORM_FEEDBACK}>
          {$LL.feedback.createNewFeedback()}
        </Link>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.HOME_PAGE}>
          {$LL.feedback.goToHomePage()}
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
