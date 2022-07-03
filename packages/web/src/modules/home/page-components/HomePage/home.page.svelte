<script lang="ts">
  import { env } from '$config';
  import { LL } from '$lang/i18n-svelte';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { TitleH2 } from '$components/TitleH2';
  import { PageContent } from '$components/PageContent';

  import { HeaderMessage } from '../../components/HeaderMessage';
  import { MemorandumGroupContent } from '../../components/MemorandumGroup';
  import { NewsGroupContent } from '../../components/NewsGroup';
  import { PollsGroupContent } from '../../components/PollsGroup';
  import { SectionsGroupContent } from '../../components/SectionsGroup';
  import { TopicsGroupContent } from '../../components/TopicsGroup';
</script>

<Header sessionTitle={$LL.common.homePage()} />

<HeaderMessage />

<PageContent direction="row" justify="space-between">
  <div class="group">
    <TitleH2>{$LL.homePage.sections.title()}</TitleH2>

    <div class="content-group">
      <SectionsGroupContent />
    </div>
  </div>

  <div class="group">
    <TitleH2>{$LL.homePage.polls.title()}</TitleH2>

    <div class="content-group">
      <PollsGroupContent />
    </div>
  </div>

  <div class="group">
    <TitleH2>{$LL.homePage.memos.title()}</TitleH2>

    <div class="content-group">
      <MemorandumGroupContent />
    </div>
  </div>

  <div class="group">
    <TitleH2>
      {$LL.homePage.lastNews.title({ newsReaderName: env.newsJournalFullName })}
    </TitleH2>

    <div class="content-group">
      <NewsGroupContent />
    </div>
  </div>

  <div class="group">
    <TitleH2>{$LL.homePage.topics.title()}</TitleH2>

    <div class="content-group">
      <TopicsGroupContent />
    </div>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  @media (max-width: 760px) {
    .content-group {
      flex-direction: column;
    }
  }
</style>
