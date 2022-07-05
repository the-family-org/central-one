<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';

  import { LinkButton } from '../LinkButton';
  import { Link } from '../Link';
  import { List } from '../List';
  import { ListGroup } from '../ListGroup';
  import { ListItem } from '../ListItem';
  import { TitleH3 } from '../TitleH3';

  export let menuOnClick: () => void;
</script>

<TitleH3 marginBottom="s" fontSize="l">{$LL.common.usefulLinks()}</TitleH3>

<ListGroup>
  <List fontSize="s">
    <ListItem>
      <Link href={'/' + $locale + Path.HOME_PAGE}>{$LL.common.homePage()}</Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_FEEDBACK}>
        {$LL.feedback.feedback()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.PLATFORM_ACTIVITIES}>
        {$LL.common.history()}
      </Link>
    </ListItem>
  </List>

  <List fontSize="s">
    <ListItem>
      <LinkButton on:click={menuOnClick}>{$LL.menu.menu()}</LinkButton>
    </ListItem>

    <ListItem>
      <Link href="#">{$LL.common.top()} ↥</Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + Path.SIGN_IN}>{$LL.common.logout()}</Link>
    </ListItem>
  </List>
</ListGroup>
