<script lang="ts">
  import { LL } from '$lang/i18n-svelte';
  import { env } from '$config';

  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
</script>

<div class="main-container">
  <TitleH1 strong>{$LL.news.scheduledNews()}</TitleH1>

  <LeftBorderDiv
    style="max-width: 470px;"
    marginBottom="l2"
    status="negative"
    contentStatus={false}
  >
    {$LL.news.noNewsScheduledMessage()}
    {env.newsJournalFullName}.
  </LeftBorderDiv>

  <Paragraph>
    {$LL.news.toCreateANewNewsGoToTheTab()}
    {$LL.news.newAndDrafts()}.
  </Paragraph>
</div>

<style lang="scss">
  .main-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-l);
  }
</style>
