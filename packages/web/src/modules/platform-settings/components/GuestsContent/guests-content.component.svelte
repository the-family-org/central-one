<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Checkbox } from '$components/Checkbox';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
</script>

<div class="content-group">
  <TitleH1 strong marginBottom="s3">
    {$LL.platformSettings.guestsSection.title()}
  </TitleH1>

  <Paragraph>
    {$LL.platformSettings.guestsSection.message()}
  </Paragraph>
</div>

<div class="content-group">
  <TitleH3 strong>
    {$LL.platformSettings.guestsSection.featuresEnabled()}
  </TitleH3>

  <div class="row">
    <Checkbox value="" checked />
    <span>{$LL.platformSettings.guestsSection.feedbackSubmission()}</span>
  </div>

  <div class="row">
    <Checkbox value="" checked />
    <span>
      {$LL.platformSettings.guestsSection.pollsWithGuestEnabledContent()}
    </span>
  </div>

  <div class="row">
    <Checkbox value="" checked />
    <span>
      {$LL.platformSettings.guestsSection.topicsWithGuestEnabledContent()}
    </span>
  </div>

  <div class="row">
    <Checkbox value="" checked />
    <span>
      {$LL.platformSettings.guestsSection.newsWithGuestEnabledContent()}
    </span>
  </div>
</div>

<style lang="scss">
  .content-group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: var(--gap-s);
  }
</style>
