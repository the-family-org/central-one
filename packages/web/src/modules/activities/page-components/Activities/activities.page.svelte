<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { ExamplePath } from '$config';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { PageContent } from '$components/PageContent';
  import { TitleH1 } from '$components/TitleH1';

  import { ActivityListItem } from '../../components/ActivityListItem';

  $: activities = [
    {
      day: '30',
      month: 'jun',
      user: 'ame',
      activityName: `${$LL.activities.activityName.createdFeedback()}`,
      linkName: `${$LL.feedback.exampleOne.title()}`,
      linkPath: `${ExamplePath.PLATFORM_FEEDBACK_EXAMPLE}`,
    },
    {
      day: '23',
      month: 'jun',
      user: 'geo',
      activityName: `${$LL.activities.activityName.createdMemo()}`,
      linkName: `${$LL.memos.exampleOne.title()}`,
      linkPath: `${ExamplePath.MEMO_EXAMPLE}`,
    },
    {
      day: '15',
      month: 'jun',
      user: 'jane',
      activityName: `${$LL.activities.activityName.createdNews()}`,
      linkName: `${$LL.news.exampleOne.title()}`,
      linkPath: `${ExamplePath.NEWS_EXAMPLE}`,
    },
    {
      day: '15',
      month: 'jun',
      user: 'jane',
      activityName: `${$LL.activities.activityName.createdPoll()}`,
      linkName: `${$LL.polls.exampleOne.title()}`,
      linkPath: `${ExamplePath.POLLS_EXAMPLE}`,
    },
  ];
</script>

<Header sessionTitle={$LL.activities.activityHistory()} />
<Line />

<PageContent>
  <div class="group-container">
    <TitleH1 strong marginBottom="m">
      {$LL.activities.latestActivitiesOnThePlatform()}
    </TitleH1>

    <List rowGap="s2">
      {#each activities as activity}
        <ActivityListItem>
          <span slot="date">
            <span class="date">
              <b>{activity.day}</b>.{activity.month}
            </span>.2022
          </span>

          <span slot="user">@{activity.user}</span>

          <span slot="activity">{activity.activityName}</span>

          <span slot="extra-data">
            <Link href={'/' + $locale + activity.linkPath}>
              {activity.linkName}
            </Link>
          </span>
        </ActivityListItem>
      {/each}

      <Line neutral heightSize="s3" pageContentSize={false} />
    </List>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .group-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-l2);
  }

  .date {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);

    b {
      font-size: var(--font-size-l2);
    }
  }
</style>
