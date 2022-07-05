<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { NumberInput } from '$components/NumberInput';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
</script>

<div class="content-group">
  <TitleH1 strong marginBottom="s3">
    {$LL.platformSettings.pollsSection.title()}
  </TitleH1>

  <Paragraph>
    {$LL.platformSettings.pollsSection.message()}
  </Paragraph>
</div>

<div class="content-group">
  <TitleH3 strong>
    {$LL.platformSettings.pollsSection.maximumNumberOfPolls()}
  </TitleH3>

  <Paragraph>
    {$LL.platformSettings.pollsSection.maximumNumberOfPollsMessage()}
  </Paragraph>

  <NumberInput value={4} min="0" max="10" style="max-width: 90px" />
</div>

<style lang="scss">
  .content-group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }
</style>
