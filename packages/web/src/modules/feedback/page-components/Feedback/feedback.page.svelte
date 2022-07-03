<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';

  import { CreateFeedback } from '../../components/CreateFeedback';
  import { ManageFeedback } from '../../components/ManageFeedback';

  enum Tab {
    CREATE = 'create',
    MANAGE = 'manage',
  }

  let currentTab: Tab = Tab.CREATE;

  const setTab = (newTab: Tab) => {
    currentTab = newTab;
  };
</script>

<Header sessionTitle={$LL.feedback.feedback()} />
<Line />

<PageContent>
  <div class="tabs">
    <div
      class="tab"
      data-current={currentTab === Tab.CREATE}
      on:click={() => setTab(Tab.CREATE)}
    >
      {$LL.feedback.createFeedback()}
    </div>

    <div
      class="tab"
      data-current={currentTab === Tab.MANAGE}
      on:click={() => setTab(Tab.MANAGE)}
    >
      {$LL.feedback.manageFeedback()}
    </div>
  </div>

  {#if currentTab === Tab.CREATE}
    <CreateFeedback />
  {/if}

  {#if currentTab === Tab.MANAGE}
    <ManageFeedback />
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
