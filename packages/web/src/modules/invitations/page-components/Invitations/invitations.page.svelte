<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';

  import { RequestContent } from '../../components/RequestContent';
  import { SentContent } from '../../components/SentContent';
  import { SendContent } from '../../components/SendContent';

  enum Tab {
    RESQUESTS = 'requests',
    CREATE = 'create',
    CREATED = 'created',
  }

  let currentTab: Tab = Tab.RESQUESTS;

  const setTab = (newTab: Tab) => {
    currentTab = newTab;
  };
</script>

<Header sessionTitle={$LL.invitations.invitations()} />
<Line />

<PageContent>
  <div class="tabs-container">
    <div
      class="tab"
      data-current={currentTab === Tab.RESQUESTS}
      on:click={() => setTab(Tab.RESQUESTS)}
    >
      {$LL.invitations.requestsReceived.requests()}
    </div>

    <div
      class="tab"
      data-current={currentTab === Tab.CREATE}
      on:click={() => setTab(Tab.CREATE)}
    >
      {$LL.invitations.sendInvitation.sendInvitation()}
    </div>

    <div
      class="tab"
      data-current={currentTab === Tab.CREATED}
      on:click={() => setTab(Tab.CREATED)}
    >
      {$LL.invitations.invitationsSent.invitationsSent()}
    </div>
  </div>

  {#if currentTab === Tab.RESQUESTS}
    <RequestContent />
  {/if}

  {#if currentTab === Tab.CREATE}
    <SendContent />
  {/if}

  {#if currentTab === Tab.CREATED}
    <SentContent />
  {/if}
</PageContent>

<Footer />

<style lang="scss">
  .tabs-container {
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

  @media (max-width: 610px) {
    .tabs-container {
      flex-direction: column;
    }
  }
</style>
