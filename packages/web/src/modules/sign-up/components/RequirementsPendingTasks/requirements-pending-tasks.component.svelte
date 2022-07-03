<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { nav } from '$utils';
  import { Path } from '$config';

  import { TitleH3 } from '$components/TitleH3';
  import { WarningDiv } from '$components/WarningDiv';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { LinkButton } from '$components/LinkButton';

  const goTo = (path: string) => {
    nav({ locale: $locale, path });
  };
</script>

<WarningDiv marginBottom="l">
  {@html $LL.signUp.requirements.pendingTaskWarning()}
</WarningDiv>

<TitleH3 strong>{$LL.signUp.requirements.pendingTasks()}</TitleH3>

<List listType="disc">
  <ListItem>
    <LinkButton
      on:click={() => goTo(Path.SIGN_UP_REQUIREMENTS_DATA_CONFIRMATION)}
    >
      {$LL.signUp.requirements.pendingTasksItem.userDataConfirmation()}
    </LinkButton>
  </ListItem>
</List>
