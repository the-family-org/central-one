<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { env, ExamplePath, Path } from '$config';

  import { Link } from '../Link';
  import { ListGroup } from '../ListGroup';
  import { List } from '../List';
  import { ListItem } from '../ListItem';
</script>

<slot />

<ListGroup direction="row">
  <List style="min-width: 180px;">
    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_SETTINGS}>
        {$LL.menu.adminSettings()}
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
  </List>

  <List style="min-width: 180px;">
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.NEWS_EXAMPLE_READER}>
        {env.newsJournalFullName}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_USERS}>
        {$LL.menu.platformUsers()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.TOPICS}>{$LL.menu.topics()}</Link>
    </ListItem>
  </List>

  <List style="min-width: 180px;">
    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_INVITATIONS}>
        {$LL.menu.invitations()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.USER_SETTINGS}>
        {$LL.menu.userSettings()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.POLLS}>{$LL.menu.polls()}</Link>
    </ListItem>
  </List>

  <List style="min-width: 180px;">
    <ListItem>
      <Link href={'/' + $locale + Path.NEWS}>{$LL.menu.news()}</Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.MEMOS}>{$LL.menu.memorandum()}</Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.SIGN_IN}>{$LL.menu.logout()}</Link>
    </ListItem>
  </List>
</ListGroup>
