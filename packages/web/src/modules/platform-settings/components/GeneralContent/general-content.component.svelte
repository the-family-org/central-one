<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Paragraph } from '$components/Paragraph';
  import { Radio } from '$components/Radio';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
</script>

<div class="content-group">
  <TitleH1 strong marginBottom="s3">
    {$LL.platformSettings.generalSection.title()}
  </TitleH1>

  <Paragraph>
    {@html $LL.platformSettings.generalSection.message()}
  </Paragraph>
</div>

<div class="content-group">
  <TitleH3 strong>
    {$LL.platformSettings.generalSection.ageOfAMatureMember()}
  </TitleH3>

  <Paragraph>
    {$LL.platformSettings.generalSection.ageOfAMatureMemberMessage()}
  </Paragraph>

  <div class="row">
    <Radio name="lorem-ipsum-1" value={16} />
    <span>16 {$LL.platformSettings.generalSection.years()}</span>
  </div>

  <div class="row">
    <Radio name="lorem-ipsum-1" value={18} />
    <span>18 {$LL.platformSettings.generalSection.years()}</span>
  </div>

  <div class="row">
    <Radio name="lorem-ipsum-1" value={24} checked />
    <span>24 {$LL.platformSettings.generalSection.years()}</span>
  </div>

  <div class="row">
    <Radio name="lorem-ipsum-1" value={30} />
    <span>30 {$LL.platformSettings.generalSection.years()}</span>
  </div>
</div>

<LeftBorderDiv style="max-width: 580px">
  {$LL.common.warningMessage3()}
</LeftBorderDiv>

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
