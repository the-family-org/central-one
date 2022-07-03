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

  let nonExistingExampleStatus = false;

  const handleNonExistingExample = () => {
    nonExistingExampleStatus = !nonExistingExampleStatus;
  };

  const members: { color: '1' | '2' | '3' | '4'; name: string }[] = [
    { color: '4', name: '@jane - Jane Doe' },
    { color: '4', name: '@geo - George Doe' },
    { color: '2', name: '@oli - Olivia Doe' },
    { color: '3', name: '@ame - Amelia Doe' },
    { color: '4', name: '@isa - Isabella Doe' },
  ];

  const guests: { color: '1' | '2' | '3' | '4'; name: string }[] = [
    { color: '2', name: '@rub - Rubeus Hagrid' },
    { color: '3', name: '@luna - Luna Lovegood' },
  ];
</script>

<Header sessionTitle={$LL.profiles.profiles()} />
<Line />

<PageContent>
  <div class="group-container">
    <TitleH1 marginBottom="m">{$LL.profiles.platformUsers()}</TitleH1>

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

            <span slot="user-data">@john - John Doe</span>

            <Badge slot="user-info" status="primary">
              {$LL.account.accountType.privilegedMember()}
            </Badge>
          </UserAsListItem>
        </Link>
      </ListItem>

      {#each members as member}
        <ListItem>
          <LinkButton on:click={handleNonExistingExample}>
            <UserAsListItem bgColor={member.color}>
              <span slot="user-data">{member.name}</span>

              <Badge slot="user-info" status="primary">
                {$LL.account.accountType.normalMember()}
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
              <span slot="user-data">{guest.name}</span>

              <Badge slot="user-info" status="neutral">
                {$LL.account.accountType.guest()}
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
</style>
