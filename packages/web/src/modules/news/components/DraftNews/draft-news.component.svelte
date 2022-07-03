<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath, Path } from '$config';

  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH2 } from '$components/TitleH2';
  import { TitleH3 } from '$components/TitleH3';
</script>

<div class="main-container">
  <Paragraph style="margin-top: var(--spacing-m)" marginBottom="l3">
    <TitleH3 fontSize="l2">
      <span class="icon">✚</span>
      <Link href={'/' + $locale + Path.NEWS_CREATE}>
        {$LL.news.createNewDraft()}
      </Link>
    </TitleH3>
  </Paragraph>

  <Line neutral heightSize="s3" pageContentSize={false} />

  <TitleH2 strong>{$LL.news.drafts()}</TitleH2>

  <Paragraph marginBottom="l3">{$LL.news.noDrafts()}.</Paragraph>
</div>

<style lang="scss">
  .main-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-l);
  }

  .icon {
    padding-right: var(--spacing-s2);
  }
</style>
