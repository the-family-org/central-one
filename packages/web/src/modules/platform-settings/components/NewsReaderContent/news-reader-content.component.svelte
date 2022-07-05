<script lang="ts">
  import { LL } from '$lang/i18n-svelte';
  import { env, ExamplePath } from '$config';

  import { Link } from '$components/Link';
  import { NumberInput } from '$components/NumberInput';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
</script>

<div class="content-group">
  <TitleH1 strong marginBottom="s3">
    {$LL.platformSettings.newsReaderSection.title()}
  </TitleH1>

  <Paragraph>
    <span class="item-label">
      {$LL.platformSettings.newsReaderSection.newspaperName()}:
    </span>
    {env.newsJournalFullName}
  </Paragraph>

  <Paragraph>
    <span class="item-label">
      {$LL.platformSettings.newsReaderSection.newspaperLink()}:
    </span>
    <Link
      href={ExamplePath.NEWS_EXAMPLE_READER}
      style="text-transform: lowercase"
    >
      www.{env.newsJournalFullName.replace(/\s/g, '_')}.com
    </Link>
  </Paragraph>
</div>

<div class="content-group">
  <TitleH3 strong>
    {$LL.platformSettings.newsReaderSection.periodicityOfTheNewspaper()}
  </TitleH3>

  <Paragraph>
    {$LL.platformSettings.newsReaderSection.periodicityOfTheNewspaperMessage()}
  </Paragraph>

  <div class="row">
    <NumberInput value={40} min="7" max="365" style="max-width: 80px" />{' '}
    {$LL.platformSettings.newsReaderSection.days()}
  </div>
</div>

<style lang="scss">
  .content-group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: var(--gap-s);
  }

  .item-label {
    padding-right: var(--spacing-s3);
    font-weight: var(--font-weight-bold);
  }
</style>
