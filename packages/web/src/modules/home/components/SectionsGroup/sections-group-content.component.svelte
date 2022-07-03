<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListGroup } from '$components/ListGroup';
  import { ListItem } from '$components/ListItem';
  import { env, ExamplePath, Path } from '$config';
</script>

<ListGroup>
  <List>
    <ListItem>
      <Link href={'/' + $locale + Path.USER_SETTINGS}>
        {$LL.homePage.sections.userSettings()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.POLLS}>
        {$LL.homePage.sections.polls()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.TOPICS}>
        {$LL.homePage.sections.topics()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_USERS}>
        {$LL.homePage.sections.users()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.NEWS}>
        {$LL.homePage.sections.newsReader()}
      </Link>
    </ListItem>

    <!-- <ListItem>
      <Link href={'/' + $locale + ExamplePath.NEWS_EXAMPLE_READER}>
        {env.newsJournalFullName}
      </Link>
    </ListItem> -->
  </List>

  <List>
    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_INVITATIONS}>
        {$LL.homePage.sections.invitations()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_FEEDBACK}>
        {$LL.homePage.sections.feedback()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_SETTINGS}>
        {$LL.homePage.sections.platformSettings()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_ACTIVITIES}>
        {$LL.homePage.sections.activitiesHistory()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.MEMOS}>
        {$LL.homePage.sections.memorandum()}
      </Link>
    </ListItem>
  </List>
</ListGroup>
