<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { ExamplePath } from '$config';

  import { Badge } from '$components/Badge';
  import { Footer } from '$components/Footer';
  import { FullscreenModal } from '$components/FullscreenModal';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';

  import { UserAsListItem } from '../../components/UserAsListItem';

  interface UserType {
    color: '1' | '2' | '3' | '4';
    nickname: string;
    name: string;
  }

  let nonExistingExampleStatus = false;

  const handleNonExistingExample = () => {
    nonExistingExampleStatus = !nonExistingExampleStatus;
  };

  const members: UserType[] = [
    { color: '4', nickname: 'jane', name: 'Jane Doe' },
    { color: '4', nickname: 'geo', name: 'George Doe' },
    { color: '2', nickname: 'oli', name: 'Olivia Doe' },
    { color: '3', nickname: 'ame', name: 'Amelia Doe' },
    { color: '4', nickname: 'isa', name: 'Isabella Doe' },
  ];

  const guests: UserType[] = [
    { color: '2', nickname: 'rub', name: 'Rubeus Hagrid' },
    { color: '3', nickname: 'luna', name: 'Luna Lovegood' },
  ];
</script>

<Header sessionTitle={$LL.profiles.profiles()} />
<Line />

<PageContent>
  <div class="group-container">
    <TitleH1 marginTop="s" marginBottom="l">
      {$LL.profiles.platformUsers()}
    </TitleH1>

    <List rowGap="l2">
      <ListItem>
        <Link
          style="display: flex; max-width: fit-content;"
          href={'/' + $locale + ExamplePath.USER_EXAMPLE_PROFILE}
        >
          <UserAsListItem bgColor="1">
            <img
              slot="user-image"
              src="/images/small-profile.example.svg"
              alt="User Profile"
              width="68"
              height="68"
            />

            <div slot="user-data" class="user-data">
              John Doe - <b>@john</b>
            </div>

            <Badge slot="user-info" status="primary">
              {$LL.accounts.accountType.fullMember()}
            </Badge>
          </UserAsListItem>
        </Link>
      </ListItem>

      {#each members as member}
        <ListItem>
          <LinkButton on:click={handleNonExistingExample}>
            <UserAsListItem bgColor={member.color}>
              <div slot="user-data" class="user-data">
                {member.name} - <b>@{member.nickname}</b>
              </div>

              <Badge slot="user-info" status="primary">
                {$LL.accounts.accountType.fullMember()}
              </Badge>
            </UserAsListItem>
          </LinkButton>
        </ListItem>
      {/each}

      <Line neutral heightSize="s3" pageContentSize={false} />

      {#each guests as guest}
        <ListItem>
          <LinkButton on:click={handleNonExistingExample}>
            <UserAsListItem bgColor={guest.color}>
              <div slot="user-data" class="user-data">
                {guest.name} - <b>@{guest.nickname}</b>
              </div>

              <Badge slot="user-info" status="neutral">
                {$LL.accounts.accountType.guest()}
              </Badge>
            </UserAsListItem>
          </LinkButton>
        </ListItem>
      {/each}
    </List>
  </div>
</PageContent>

<FullscreenModal
  handleOpenAndClose={handleNonExistingExample}
  openStatus={nonExistingExampleStatus}
>
  <Paragraph fontSize="l" marginBottom="s4">
    {$LL.profiles.warning.onlyOneExemple()}
  </Paragraph>

  <LeftBorderDiv marginBottom="l">
    <Paragraph fontSize="l">
      <b>@john - John Doe</b>
    </Paragraph>
  </LeftBorderDiv>

  <Paragraph fontSize="l" marginBottom="s">
    {$LL.profiles.warning.wouldYouLikeToOpenThisExample()}
  </Paragraph>

  <List rowGap="l">
    <ListItem>
      <Link href={'/' + $locale + ExamplePath.USER_EXAMPLE_PROFILE}>
        {$LL.profiles.warning.openTheExample()}
      </Link>
    </ListItem>

    <ListItem>
      <LinkButton on:click={handleNonExistingExample}>
        {$LL.profiles.warning.doNotOpen()}
      </LinkButton>
    </ListItem>
  </List>
</FullscreenModal>

<Footer />

<style lang="scss">
  .group-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .user-data {
    margin-bottom: var(--spacing-s3);
  }
</style>
