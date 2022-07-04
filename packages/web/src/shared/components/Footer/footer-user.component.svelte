<script lang="ts">
  import type { ThemeNamesType } from '$types';

  import { LL, locale } from '$lang/i18n-svelte';
  import { currentTheme } from '$stores';

  import { Link } from '../Link';
  import { List } from '../List';
  import { ListGroup } from '../ListGroup';
  import { TitleH3 } from '../TitleH3';
  import { Path } from '$config';

  let currentThemeKey: ThemeNamesType;

  currentTheme.subscribe((themeKey) => {
    currentThemeKey = themeKey;
  });
</script>

<div>
  <TitleH3 marginBottom="s" fontSize="l">John Doe</TitleH3>

  <Link href={'/' + $locale + Path.USER_PROFILE}>
    <img
      src="/images/small-profile.example.svg"
      alt="User Profile"
      width="32"
      height="32"
    />
  </Link>
</div>

<ListGroup>
  <List fontSize="s">
    <li>
      {$LL.common.user()}: <Link href={'/' + $locale + Path.USER_PROFILE}
        >@john</Link
      >
    </li>

    <li>
      {$LL.account.account()}: <Link
        href={'/' + $locale + Path.USER_SETTINGS + '?section=account'}
        >{$LL.account.accountType.normalMember()}</Link
      >
    </li>

    <li>
      {$LL.theme.theme()}: <Link href={'/' + $locale + Path.USER_SETTINGS_THEME}
        >{$LL.theme.themeName[currentThemeKey]()}</Link
      >
    </li>
  </List>
</ListGroup>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;

    gap: 20px;
  }
</style>
