<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Surface } from '$components/Surface';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
</script>

<Header sessionTitle={$LL.profiles.userProfile()} />

<Surface
  direction="row"
  wrap="wrap"
  rowGap="m"
  columnGap="l2"
  paddingTop="l2"
  paddingBottom="l2"
>
  <div>
    <img
      src="/images/small-profile.example.svg"
      alt={$LL.profiles.userProfile()}
      width="130"
      height="130"
    />
  </div>

  <div class="user-header-data">
    <TitleH1 fontWeight="extra-bold">John Doe</TitleH1>
    <TitleH2>@john</TitleH2>
  </div>
</Surface>

<PageContent>
  <div class="group-container">
    <Paragraph>
      <span class="data-label">{$LL.profiles.name()}:</span> John Doe
    </Paragraph>

    <Paragraph>
      <span class="data-label">{$LL.profiles.nickname()}:</span> @john
    </Paragraph>

    <Paragraph>
      <span class="data-label">{$LL.profiles.account()}:</span>
      {$LL.account.accountType.privilegedMember()}
    </Paragraph>
  </div>

  <div class="group-container">
    <List listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.USER_SETTINGS}>
          {$LL.profiles.editUserData()}
        </Link>
      </ListItem>
    </List>
  </div>

  <LeftBorderDiv style="max-width: 520px;">
    {$LL.common.warningMessage4()}
  </LeftBorderDiv>
</PageContent>

<Footer />

<style lang="scss">
  .user-header-data {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: var(--gap-s3);
  }

  .group-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .data-label {
    padding-right: var(--spacing-s2);

    font-weight: var(--font-weight-bold);
  }
</style>
