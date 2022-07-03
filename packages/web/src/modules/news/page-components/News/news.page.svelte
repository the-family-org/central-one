<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';

  import { PostedNews } from '../../components/PostedNews';
  import { DraftNews } from '../../components/DraftNews';
  import { ScheduledNews } from '../../components/ScheduledNews';

  enum Tab {
    POSTED = 'posted',
    DRAFTS = 'drafts',
    SCHEDULES = 'schedules',
  }

  let currentTab: Tab = Tab.POSTED;

  const setTab = (newTab: Tab) => {
    currentTab = newTab;
  };
</script>

<Header sessionTitle={$LL.news.news()} />
<Line />

<PageContent>
  <div class="tabs">
    <div
      class="tab"
      data-current={currentTab === Tab.POSTED}
      on:click={() => setTab(Tab.POSTED)}
    >
      {$LL.news.posted()}
    </div>

    <div
      class="tab"
      data-current={currentTab === Tab.DRAFTS}
      on:click={() => setTab(Tab.DRAFTS)}
    >
      {$LL.news.newAndDrafts()}
    </div>

    <div
      class="tab"
      data-current={currentTab === Tab.SCHEDULES}
      on:click={() => setTab(Tab.SCHEDULES)}
    >
      {$LL.news.scheduled()}
    </div>
  </div>

  {#if currentTab === Tab.POSTED}
    <PostedNews />
  {/if}

  {#if currentTab === Tab.DRAFTS}
    <DraftNews />
  {/if}

  {#if currentTab === Tab.SCHEDULES}
    <ScheduledNews />
  {/if}
</PageContent>

<Footer />

<style lang="scss">
  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    gap: var(--gap-s);

    .tab {
      display: flex;
      justify-content: center;

      width: 100%;
      padding: var(--spacing-s3);

      color: var(--color-foreground);
      background: var(--color-background-secondary);
      cursor: pointer;

      &:hover {
        filter: brightness(0.95);
      }

      &[data-current='true'] {
        color: var(--color-foreground-contrast);
        background: var(--color-primary);

        &:hover {
          filter: none;
          cursor: default;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .tabs {
      flex-direction: column;
    }
  }
</style>
