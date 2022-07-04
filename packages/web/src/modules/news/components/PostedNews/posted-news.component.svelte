<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath, Path } from '$config';

  import { FullscreenModal } from '$components/FullscreenModal';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { Paragraph } from '$components/Paragraph';
  import { Tag } from '$components/Tag';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';

  import { OpenNewsModal } from '../OpenNewsModal';

  let existingNewsStatus = false;
  let nonExistingNewsStatus = false;
  let openExternalLinkStatus = false;

  const handleExistingNews = () => {
    existingNewsStatus = !existingNewsStatus;
  };

  const handleNonExistingNews = () => {
    nonExistingNewsStatus = !nonExistingNewsStatus;
  };

  const handleExternalLink = () => {
    openExternalLinkStatus = !openExternalLinkStatus;
  };
</script>

<div class="main-container">
  <TitleH1 strong marginBottom="s">
    {$LL.news.newsFrom()}
    <LinkButton on:click={handleExternalLink}>
      {env.newsJournalFullName}
    </LinkButton>
  </TitleH1>

  <List marginBottom="l3">
    <ListItem>
      <span class="data-label">{$LL.news.nextEdition()}:</span>
      {@html $LL.news.nextEditionDate()}
    </ListItem>

    <ListItem>
      <span class="data-label">{$LL.news.periodicity()}:</span>
      {$LL.news.periodicityValue()}
    </ListItem>

    <ListItem>{@html $LL.news.noNewsScheduled()}!</ListItem>
  </List>

  <Line neutral heightSize="s3" pageContentSize={false} />

  <div>
    <TitleH3 fontSize="l2" marginBottom="s">
      {$LL.news.edition()}
      <span class="edition-number">2</span>
    </TitleH3>

    <List rowGap="none">
      <li class="list-item">
        <LinkButton on:click={handleExistingNews}>
          <TitleH3 fontWeight="regular" fontSize="l">
            {$LL.news.exampleOne.title()}
          </TitleH3>
        </LinkButton>

        <div class="extra-data-news-row">
          <span class="author">
            @jane <span class="hover">| Jane Doe</span>
          </span>
        </div>
      </li>
    </List>
  </div>

  <Line neutral heightSize="s3" pageContentSize={false} />

  <div>
    <TitleH3 fontSize="l2" marginBottom="s">
      {$LL.news.edition()}
      <span class="edition-number">1</span>
    </TitleH3>

    <List rowGap="none">
      <li class="list-item">
        <LinkButton on:click={handleNonExistingNews}>
          <TitleH3 fontWeight="regular" fontSize="l">
            {$LL.news.exampleTwo.title()}
          </TitleH3>
        </LinkButton>

        <div class="extra-data-news-row">
          <span class="author">
            @ame <span class="hover">| Amelia Doe</span>
          </span>
        </div>
      </li>

      <li class="list-item">
        <LinkButton on:click={handleNonExistingNews}>
          <TitleH3 fontWeight="regular" fontSize="l">
            {$LL.news.exampleThree.title()}
          </TitleH3>
        </LinkButton>

        <div class="extra-data-news-row">
          <span class="author">
            @geo <span class="hover">| George Doe</span>
          </span>
        </div>
      </li>
    </List>
  </div>
</div>

<OpenNewsModal
  existingExampleStatus={existingNewsStatus}
  nonExistingExampleStatus={nonExistingNewsStatus}
  handleExistingExample={handleExistingNews}
  handleNonExistingExample={handleNonExistingNews}
/>

<FullscreenModal
  handleOpenAndClose={handleExternalLink}
  openStatus={openExternalLinkStatus}
>
  <Paragraph fontSize="l" marginBottom="m">
    {$LL.common.openingExternalWebsite()}
  </Paragraph>

  <List rowGap="l2">
    <ListItem>
      <Link
        href={'/' + $locale + ExamplePath.NEWS_EXAMPLE_READER}
        style="padding-right: 4px"
      >
        {$LL.common.openTheWebsite()}
      </Link>

      <Tag status="neutral">{$LL.common.nonResponsive2()}</Tag>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleExternalLink}>
        {$LL.common.doNotOpen()}
      </LinkButton>
    </ListItem>
  </List>
</FullscreenModal>

<style lang="scss">
  .main-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-l);
  }

  .data-label {
    padding-right: 6px;
  }

  .edition-number {
    font-size: var(--font-size-l3);
    font-weight: var(--font-weight-extra-bold);
  }

  .list-item {
    max-width: fit-content;

    &:hover {
      .author {
        display: flex;
      }
    }
  }

  .extra-data-news-row {
    height: 17px;
  }

  .author {
    position: relative;
    display: none;

    top: -6px;
    max-width: fit-content;
    font-size: var(--font-size-s);

    color: var(--color-neutral);
    cursor: default;

    .hover {
      display: none;

      padding-left: 4px;
    }

    &:hover {
      .hover {
        display: unset;
      }
    }
  }
</style>
