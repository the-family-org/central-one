<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';

  let showHeaderAndFooter = false;

  const goToEnd = () => {
    window.location = '#end' as unknown as Location;
  };
</script>

<div class="header-container" data-show={showHeaderAndFooter}>
  <Header sessionTitle={$LL.memos.memos()} />
</div>

<div class="hide-show-button">
  <div
    on:click={() => (showHeaderAndFooter = !showHeaderAndFooter)}
    class="content-button header-content-button"
  >
    {#if showHeaderAndFooter}
      ⤒
    {:else}
      ⤓
    {/if}
  </div>
</div>

<main class="page-container">
  <div class="page-content">
    <div class="memo-header">
      <img
        src="/images/medium-logo-black.example.svg"
        alt="Brand"
        width="76"
        height="70"
      />

      <TitleH1 strong fontSize="l3">{$LL.memos.memorandum()}</TitleH1>
    </div>

    <div class="memo-body">
      <div class="memo-date">{$LL.memos.exampleOne.publishedOn()}</div>

      <TitleH1 strong marginBottom="m">{$LL.memos.exampleOne.title()}</TitleH1>

      <Paragraph>{$LL.memos.exampleOne.dearFamily()},</Paragraph>

      <Paragraph>{$LL.memos.exampleOne.paragraphOne()}</Paragraph>

      <Paragraph marginBottom="m">
        {$LL.memos.exampleOne.paragraphTwo()}
      </Paragraph>

      <Paragraph marginBottom="s">
        {$LL.memos.exampleOne.kindRegards()},
        <br />
        <b>Jane Doe</b>
      </Paragraph>

      <Paragraph>
        <i>
          {$LL.memos.exampleOne.note()}
        </i>
      </Paragraph>
    </div>
  </div>

  <div class="nav-links">
    <List>
      <ListItem>
        <Link href={'/' + $locale + Path.MEMOS}>
          {$LL.memos.goToMemos()}
        </Link>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.HOME_PAGE}>
          {$LL.memos.goToHomePage()}
        </Link>
      </ListItem>
    </List>
  </div>
</main>

<div class="hide-show-button">
  <div
    on:click={() => {
      showHeaderAndFooter = !showHeaderAndFooter;
      goToEnd();
    }}
    class="content-button footer-content-button"
  >
    {#if showHeaderAndFooter}
      ⤓
    {:else}
      ⤒
    {/if}
  </div>
</div>

<div class="footer-container" data-show={showHeaderAndFooter}>
  <Footer marginTop={false} />
</div>

<style lang="scss">
  $contentMaxWidth: 780px;
  $contentMaxHeight: 780px;

  .hide-show-button {
    display: flex;
    justify-content: center;
    align-content: center;

    background: var(--color-background-secondary);

    .content-button {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;

      width: 80px;
      font-size: var(--font-size-s);
      font-weight: var(--font-weight-bold);
      border: 1px solid var(--color-border);

      color: var(--color-discreet);
      background: var(--color-background);
      cursor: pointer;

      &.header-content-button {
        border-top: none;
        border-radius: 0 0 50% 50%;
      }

      &.footer-content-button {
        border-bottom: none;
        border-radius: 50% 50% 0 0;
      }

      &:hover {
        filter: brightness(0.93);
      }
    }
  }

  .header-container,
  .footer-container {
    display: none;

    &[data-show='true'] {
      display: unset;
    }
  }

  .page-container {
    display: flex;
    flex-direction: column;

    flex: 1;
    padding: var(--spacing-s2) var(--spacing-m) 0 var(--spacing-m);

    background: var(--color-background-secondary);
  }

  .page-content {
    display: flex;
    flex-direction: column;

    max-width: $contentMaxWidth;
    min-height: $contentMaxHeight;
    margin: 0 auto;
    padding: var(--spacing-l4) var(--spacing-l3);
    gap: var(--gap-m);
    border: 1px solid var(--color-border);

    background: var(--color-background);
  }

  .memo-header {
    display: flex;
    flex-direction: column;

    border-left: 4px solid var(--color-foreground);
    padding: var(--spacing-s3) var(--spacing-s3) 0 var(--spacing-s);
    gap: var(--gap-s3);
  }

  .memo-body {
    display: flex;
    flex-direction: column;

    padding: var(--spacing-s3) 0 var(--spacing-l2) 0;
    gap: var(--gap-l);
  }

  .memo-date {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-bottom: var(--spacing-s);
    font-weight: var(--font-weight-bold);
  }

  .nav-links {
    max-width: $contentMaxWidth;
    width: -moz-fill-available;
    width: -webkit-fill-available;
    width: fill-available;
    margin: 0 auto;
    padding: 16px 20px 0 20px;
  }

  @media (max-width: 580px) {
    .page-container {
      padding: 0;
    }

    .page-content {
      width: 100%;
      padding: var(--spacing-l2) var(--spacing-m);
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
      border-left: none;
      border-right: none;
    }

    .hide-show-button {
      .content-button {
        &.header-content-button {
          border-bottom: 0;
          border-radius: 0;
        }

        &.footer-content-button {
          border-radius: 0;
        }
      }
    }
  }
</style>
