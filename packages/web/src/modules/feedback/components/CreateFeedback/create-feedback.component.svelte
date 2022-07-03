<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { nav } from '$utils';
  import { Path } from '$config';

  import { Button } from '$components/Button';
  import { Paragraph } from '$components/Paragraph';
  import { Textarea } from '$components/Textarea';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { TextInput } from '$components/TextInput';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
</script>

<div class="container">
  <div class="column">
    <TitleH1 strong marginBottom="s">
      {$LL.feedback.createFeedbackAboutThePlatform()}
    </TitleH1>

    <Paragraph>
      {$LL.feedback.createFeedbackAboutThePlatformMessage()}
    </Paragraph>
  </div>

  <div class="column">
    <label for="feedback-title">
      <TitleH3 strong>{$LL.feedback.titleOfYourFeedback()}</TitleH3>
    </label>

    <TextInput id="feedback-title" value="" />
  </div>

  <div class="column">
    <label for="feedback-message">
      <TitleH3 strong marginBottom="s">{$LL.feedback.message()}</TitleH3>

      <Paragraph>
        {$LL.feedback.messageMessage()}
      </Paragraph>
    </label>

    <Textarea rows={8} id="feedback-message" value="" />
  </div>

  <div class="column short-size">
    <LeftBorderDiv>
      {$LL.common.warningMessage3()}
    </LeftBorderDiv>

    <Button
      on:click={() =>
        nav({ locale: $locale, path: Path.PLATFORM_FEEDBACK_CREATED })}
    >
      {$LL.feedback.sendFeedback()}
    </Button>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;

    max-width: 760px;
    gap: var(--gap-l4);
  }

  .column {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .short-size {
    display: flex;
    max-width: 470px;
  }
</style>
