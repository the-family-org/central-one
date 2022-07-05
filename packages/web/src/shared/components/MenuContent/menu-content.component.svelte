<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath, Path } from '$config';

  import { FullscreenModal } from '../FullscreenModal';
  import { Link } from '../Link';
  import { LinkButton } from '../LinkButton';
  import { List } from '../List';
  import { ListGroup } from '../ListGroup';
  import { ListItem } from '../ListItem';
  import { Paragraph } from '../Paragraph';
  import { Tag } from '../Tag';

  let openExternalLinkStatus = false;

  const handleExternalLink = () => {
    openExternalLinkStatus = !openExternalLinkStatus;
  };
</script>

<slot />

<ListGroup direction="row" columnGap="l">
  <ul class="nav-link-group">
    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_INVITATIONS}>
        {$LL.menu.invitations()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_FEEDBACK}>
        {$LL.menu.feedback()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_ACTIVITIES}>
        {$LL.menu.activitiesHistory()}
      </Link>
    </ListItem>
  </ul>

  <ul class="nav-link-group">
    <ListItem>
      <LinkButton on:click={handleExternalLink}>
        {env.newsJournalFullName}
      </LinkButton>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.TOPICS}>{$LL.menu.topics()}</Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.POLLS}>{$LL.menu.polls()}</Link>
    </ListItem>
  </ul>

  <ul class="nav-link-group">
    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_USERS}>
        {$LL.menu.platformUsers()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_SETTINGS}>
        {$LL.menu.adminSettings()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.USER_SETTINGS}>
        {$LL.menu.userSettings()}
      </Link>
    </ListItem>
  </ul>

  <ul class="nav-link-group">
    <ListItem>
      <Link href={'/' + $locale + Path.NEWS}>{$LL.menu.news()}</Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.MEMOS}>{$LL.menu.memorandum()}</Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.SIGN_IN}>{$LL.menu.logout()}</Link>
    </ListItem>
  </ul>
</ListGroup>

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
  .nav-link-group {
    min-width: 220px;
    padding-left: var(--spacing-s2);
    border-left: 6px solid var(--color-border);
    list-style: none;
  }
</style>
