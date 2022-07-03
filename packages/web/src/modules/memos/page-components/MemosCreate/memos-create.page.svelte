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
  import { Textarea } from '$components/Textarea';
  import { TextInput } from '$components/TextInput';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { WarningDiv } from '$components/WarningDiv';
</script>

<Header sessionTitle={$LL.memos.memos()} />
<Line />

<PageContent>
  <div class="group-container">
    <TitleH1>{$LL.memos.createMemo()}</TitleH1>

    <WarningDiv>{$LL.common.warningMessage5()}</WarningDiv>
  </div>

  <div class="group-container">
    <TitleH3>{$LL.memos.title()}</TitleH3>

    <TextInput value="" />
  </div>

  <div class="group-container">
    <TitleH3>{$LL.memos.message()}</TitleH3>

    <Textarea rows={7} value="" />
  </div>

  <div class="group-container">
    <LeftBorderDiv style="max-width: 560px;">
      {$LL.common.warningMessage4()}
    </LeftBorderDiv>

    <Button on:click={() => nav({ locale: $locale, path: Path.MEMOS_CREATED })}>
      {$LL.memos.createAndSendMemo()}
    </Button>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .group-container {
    display: flex;
    flex-direction: column;

    max-width: 700px;
    gap: var(--gap-m);
  }
</style>
