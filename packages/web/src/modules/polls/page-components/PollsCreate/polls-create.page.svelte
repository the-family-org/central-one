<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { nav } from '$utils';
  import { Path } from '$config';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
  import { WarningDiv } from '$components/WarningDiv';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { TextInput } from '$components/TextInput';
</script>

<Header sessionTitle={$LL.polls.polls()} />
<Line />

<PageContent rowGap="l3">
  <div class="page-group-container">
    <TitleH1 strong marginTop="m" marginBottom="l">
      {$LL.polls.createPoll()}
    </TitleH1>

    <WarningDiv marginBottom="m">
      {$LL.common.warningMessage5()}
    </WarningDiv>
  </div>

  <div class="page-group-container">
    <TitleH2>{$LL.polls.pollTitle()}</TitleH2>

    <TextInput value="" />
  </div>

  <div class="page-group-container">
    <TitleH2>{$LL.polls.question()}</TitleH2>

    <TextInput value="" />
  </div>

  <div class="page-group-container">
    <LeftBorderDiv style="max-width: 580px;">
      {$LL.common.warningMessage3()}
    </LeftBorderDiv>

    <Button on:click={() => nav({ locale: $locale, path: Path.POLLS_CREATED })}>
      {$LL.polls.createPoll()}
    </Button>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .page-group-container {
    display: flex;
    flex-direction: column;

    max-width: 800px;
    gap: var(--gap-m);
  }
</style>
