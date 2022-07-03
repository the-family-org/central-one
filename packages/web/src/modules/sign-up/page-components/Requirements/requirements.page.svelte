<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';

  import { PendingTasks } from '../../components/RequirementsPendingTasks';
  import { CompletedTasks } from '../../components/RequirementsCompletedTasks';

  enum Tab {
    ABOUT = 'about',
    PENDING = 'pending',
    COMPLETED = 'completed',
  }

  let currentTab: Tab = Tab.ABOUT;

  const setTab = (newTab: Tab) => {
    currentTab = newTab;
  };
</script>

<Header
  brandAndSessionOnly={true}
  sessionTitle={$LL.signUp.requirements.signUpRequirements()}
/>
<Line />

<PageContent>
  <div class="tabs-container">
    <div
      class="tab"
      data-current={currentTab === Tab.ABOUT}
      on:click={() => setTab(Tab.ABOUT)}
    >
      {$LL.signUp.requirements.about()}
    </div>

    <div
      class="tab"
      data-current={currentTab === Tab.PENDING}
      on:click={() => setTab(Tab.PENDING)}
    >
      {$LL.signUp.requirements.pending()}
    </div>

    <div
      class="tab"
      data-current={currentTab === Tab.COMPLETED}
      on:click={() => setTab(Tab.COMPLETED)}
    >
      {$LL.signUp.requirements.completed()}
    </div>
  </div>

  {#if currentTab === Tab.ABOUT}
    <div class="section-content">
      <TitleH1 strong>{$LL.signUp.requirements.almostDone()}</TitleH1>

      <Paragraph>{@html $LL.signUp.requirements.aboutMessage()}</Paragraph>
    </div>
  {/if}

  {#if currentTab === Tab.PENDING}
    <div class="section-content">
      <PendingTasks />
    </div>
  {/if}

  {#if currentTab === Tab.COMPLETED}
    <div class="section-content">
      <CompletedTasks />
    </div>
  {/if}

  <LeftBorderDiv style="margin-top: 150px;">
    {$LL.common.warningMessage()}
  </LeftBorderDiv>
</PageContent>

<Footer showOnlyLogoAndLanguages />

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

  .section-content {
    display: flex;
    flex-direction: column;

    max-width: 740px;

    gap: var(--gap-l2);
  }

  @media (max-width: 490px) {
    .tabs-container {
      flex-direction: column;
    }
  }
</style>
