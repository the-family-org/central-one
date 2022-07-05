<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Surface } from '$components/Surface';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
  import { TitleH3 } from '$components/TitleH3';

  const birthDateToCalc = '1984.6.22';
  const birthDateText = '22.jun.1984';

  function calcAge(dateString: string) {
    const birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / 31557600000);
  }

  const age = calcAge(birthDateToCalc);
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

<PageContent rowGap="l4">
  <div class="group-container">
    <Paragraph>
      <TitleH1 strong marginTop="m" marginBottom="s2">
        John Philip Arthur Doe
      </TitleH1>
    </Paragraph>

    <Paragraph>
      <span class="data-label">{$LL.profiles.birthDate()}:</span>
      {birthDateText}
    </Paragraph>

    <Paragraph>
      <span class="data-label">{$LL.profiles.age()}:</span>
      {age}
      {$LL.profiles.years()}
    </Paragraph>

    <Paragraph>
      <span class="data-label">{$LL.profiles.nickname()}:</span> @john
    </Paragraph>

    <Paragraph>
      <span class="data-label">{$LL.profiles.account()}:</span>
      {$LL.accounts.accountType.fullMember()}
    </Paragraph>
  </div>

  <div class="group-container">
    <TitleH2 strong marginBottom="s3">{$LL.accounts.privileges()}</TitleH2>

    <List>
      <ListItem>
        <div class="row">
          <div><span class="positive">✔</span></div>

          <div>
            <div class="data-label">
              {$LL.accounts.fullMemberAccount()}
            </div>

            <div>
              {$LL.accounts.accountDescription.fullMember()}
            </div>
          </div>
        </div>
      </ListItem>

      <ListItem>
        <div class="row">
          <div><span class="positive">✔</span></div>

          <div>
            <div class="data-label">
              {$LL.accounts.privilegeType.administrator()}
            </div>

            <div>
              {$LL.accounts.privilegeDescription.administrator()}
            </div>
          </div>
        </div>
      </ListItem>

      <ListItem>
        <div class="row">
          <div><span class="positive">✔</span></div>

          <div>
            <div class="data-label">
              {$LL.accounts.privilegeType.matureAge()}
            </div>

            <div>
              {$LL.accounts.privilegeDescription.matureAge()}
            </div>
          </div>
        </div>
      </ListItem>

      <ListItem>
        <div class="row">
          <div><span class="positive">✔</span></div>

          <div>
            <div class="data-label">
              {$LL.accounts.privilegeType.developer()}
            </div>

            <div>
              {$LL.accounts.privilegeDescription.developer()}
            </div>
          </div>
        </div>
      </ListItem>
    </List>
  </div>

  <div class="group-container">
    <TitleH3 strong>{$LL.profiles.usefulLinks()}</TitleH3>

    <List listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.USER_SETTINGS}>
          {$LL.profiles.editUserData()}
        </Link>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.PLATFORM_USERS}>
          {$LL.profiles.goToOtherProfiles()}
        </Link>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.PLATFORM_ACCOUNTS}>
          {$LL.profiles.goToAccountTypes()}
        </Link>
      </ListItem>
    </List>
  </div>
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

    max-width: 650px;
    gap: var(--gap-m);
  }

  .data-label {
    padding-right: var(--spacing-s2);

    font-weight: var(--font-weight-bold);
  }

  .positive {
    color: var(--color-positive);
  }

  .row {
    display: inline-flex;
    flex-direction: row;

    gap: var(--gap-s);
  }
</style>
