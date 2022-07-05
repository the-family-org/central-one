<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { nav } from '$utils';
  import { Path } from '$config';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { FormUserTypesWithAccess } from '$components/FormUserTypesWithAccess';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';
  import { Textarea } from '$components/Textarea';
  import { TextInput } from '$components/TextInput';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
</script>

<Header sessionTitle={$LL.memos.memos()} />
<Line />

<PageContent rowGap="l4">
  <div class="group-container">
    <TitleH1 marginTop="m">{$LL.memos.createMemo()}</TitleH1>
  </div>

  <div class="group-container">
    <TitleH2>{$LL.memos.title()}</TitleH2>

    <TextInput value="" />
  </div>

  <div class="group-container">
    <TitleH2>{$LL.memos.message()}</TitleH2>

    <Textarea rows={7} value="" />
  </div>

  <div class="group-container">
    <FormUserTypesWithAccess />
  </div>

  <div class="group-container">
    <LeftBorderDiv style="max-width: 560px; margin-top: 50px;">
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
