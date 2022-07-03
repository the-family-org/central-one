<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { ExamplePath } from '$config';

  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListGroup } from '$components/ListGroup';
  import { ListItem } from '$components/ListItem';
</script>

<ListGroup>
  <List>
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.POLLS_EXAMPLE_ANSWER}>
        {$LL.polls.exampleOne.title()}
      </Link>
    </ListItem>

    <ListItem>
      <Link href={'/' + $locale + ExamplePath.POLLS_EXAMPLE_RESULT}>
        {$LL.polls.exampleTwo.title()}
      </Link>
    </ListItem>
  </List>
</ListGroup>
