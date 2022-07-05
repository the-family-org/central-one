<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { ExamplePath } from '$config';

  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { TitleH1 } from '$components/TitleH1';
  import { Paragraph } from '$components/Paragraph';
  import { FullscreenModal } from '$components/FullscreenModal';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { LinkButton } from '$components/LinkButton';

  let nonExistingExampleModalStatus = false;

  const handleNonExistingExampleModal = () => {
    nonExistingExampleModalStatus = !nonExistingExampleModalStatus;
  };
</script>

<div class="container">
  <div class="column">
    <TitleH1 strong marginBottom="m">
      {$LL.feedback.feedbackManagement()}
    </TitleH1>
  </div>

  <div class="posted-feedback">
    <div class="row feedback-title">
      <Link href={'/' + $locale + ExamplePath.PLATFORM_FEEDBACK_EXAMPLE}>
        {$LL.feedback.exampleOne.title()}
      </Link>
    </div>

    <div class="row">{$LL.feedback.by()}: Amelia Doe - @ame</div>

    <div class="row">
      {$LL.feedback.lastInteraction()}:
      <span class="highlighted-data"> 30.jun.2022 </span>
    </div>
  </div>

  <Line neutral heightSize="s3" pageContentSize={false} />

  <div class="posted-feedback">
    <div class="row feedback-title">
      <LinkButton on:click={handleNonExistingExampleModal}>
        {$LL.feedback.exampleTwo.title()}
      </LinkButton>
    </div>

    <div class="row">{$LL.feedback.by()}: Olivia Doe - @oli</div>

    <div class="row">
      {$LL.feedback.lastInteraction()}:
      <span class="highlighted-data"> 19.jun.2022 </span>
    </div>
  </div>

  <Line neutral heightSize="s3" pageContentSize={false} />

  <div class="posted-feedback">
    <div class="row feedback-title">
      <LinkButton on:click={handleNonExistingExampleModal}>
        {$LL.feedback.exampleThree.title()}
      </LinkButton>
    </div>

    <div class="row">{$LL.feedback.by()}: Isabella Doe - @isa</div>

    <div class="row">
      {$LL.feedback.lastInteraction()}:
      <span class="highlighted-data"> 15.jun.2022 </span>
    </div>
  </div>

  <Line neutral heightSize="s3" pageContentSize={false} />

  <div class="posted-feedback">
    <div class="row feedback-title">
      <LinkButton on:click={handleNonExistingExampleModal}>
        {$LL.feedback.exampleFour.title()}
      </LinkButton>
    </div>

    <div class="row">{$LL.feedback.by()}: George Doe - @geo</div>

    <div class="row">
      {$LL.feedback.lastInteraction()}:
      <span class="highlighted-data"> 11.jun.2022 </span>
    </div>
  </div>
</div>

<FullscreenModal
  handleOpenAndClose={handleNonExistingExampleModal}
  openStatus={nonExistingExampleModalStatus}
>
  <Paragraph fontSize="l" marginBottom="s4">
    {$LL.feedback.justOneExample()}
  </Paragraph>

  <LeftBorderDiv marginBottom="l">
    <Paragraph fontSize="l">
      <b>{$LL.feedback.exampleOne.title()}</b>
    </Paragraph>
  </LeftBorderDiv>

  <Paragraph fontSize="l" marginBottom="s">
    {$LL.feedback.wouldYouLikeToOpenThisExample()}
  </Paragraph>

  <List rowGap="l">
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.PLATFORM_FEEDBACK_EXAMPLE}>
        {$LL.feedback.openTheExample()}
      </Link>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleNonExistingExampleModal}>
        {$LL.feedback.doNotOpenTheExample()}
      </LinkButton>
    </ListItem>
  </List>
</FullscreenModal>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .column {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .row {
    display: flex;
    flex-direction: row;

    gap: var(--gap-s2);
  }

  .posted-feedback {
    display: flex;
    flex-direction: column;
  }

  .feedback-title {
    font-size: var(--font-size-l);
  }

  .highlighted-data {
    font-weight: var(--font-weight-bold);
  }
</style>
