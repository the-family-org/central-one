<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { nav } from '$utils';
  import { Path } from '$config';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Radio } from '$components/Radio';
  import { Textarea } from '$components/Textarea';
  import { TextInput } from '$components/TextInput';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
  import { WarningDiv } from '$components/WarningDiv';
</script>

<Header sessionTitle={$LL.polls.polls()} />
<Line />

<PageContent rowGap="l3">
  <div class="page-group-container">
    <WarningDiv marginBottom="m">
      {$LL.common.warningMessage5()}
    </WarningDiv>

    <TitleH1 strong marginTop="m" marginBottom="l">
      {$LL.polls.exampleOne.title()}
    </TitleH1>

    <Paragraph>
      {@html $LL.polls.exampleOne.message()}
    </Paragraph>
  </div>

  <div class="page-group-container">
    <TitleH2>{$LL.polls.nameSuggestion()}</TitleH2>

    <TextInput value="" />
  </div>

  <div class="page-group-container">
    <TitleH2>{$LL.polls.nameMeaning()}</TitleH2>

    <Textarea rows={4} value="" />
  </div>

  <div class="page-group-container">
    <TitleH2>{$LL.polls.nameGender()}</TitleH2>

    <div class="row">
      <div>
        <Radio name="genre" value="" />
      </div>

      <div>{$LL.polls.male()}</div>
    </div>

    <div class="row">
      <div>
        <Radio name="genre" value="" />
      </div>

      <div>{$LL.polls.feminine()}</div>
    </div>

    <div class="row">
      <div>
        <Radio name="genre" value="" />
      </div>

      <div>{$LL.polls.unisex()}</div>
    </div>
  </div>

  <div class="page-group-container">
    <LeftBorderDiv style="max-width: 580px;">
      {$LL.common.warningMessage3()}
    </LeftBorderDiv>

    <Button
      on:click={() => nav({ locale: $locale, path: Path.POLLS_ANSWERED })}
    >
      {$LL.polls.answerPoll()}
    </Button>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .page-group-container {
    display: flex;
    flex-direction: column;

    max-width: 710px;
    gap: var(--gap-m);
  }

  .row {
    display: flex;
    flex-direction: row;

    gap: var(--gap-s2);
  }
</style>
