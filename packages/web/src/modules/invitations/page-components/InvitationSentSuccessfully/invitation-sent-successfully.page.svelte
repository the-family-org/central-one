<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
  import { confettiEffect } from '$shared/effects/confettiEffect';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Surface } from '$components/Surface';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';

  confettiEffect('fireworks');
</script>

<Header sessionTitle={$LL.invitations.invitations()} />
<Line />

<PageContent rowGap="unset">
  <Surface
    status="positive"
    contentSize="full-page-content"
    paddingTop="l4"
    paddingBottom="l4"
    marginBottom="l4"
  >
    <TitleH1 marginBottom="m">
      {$LL.invitations.sendInvitation.invitationSent()}
    </TitleH1>

    <TitleH3>{$LL.invitations.sendInvitation.invitationSentMessage()}</TitleH3>
  </Surface>

  <div class="success-container">
    <Paragraph marginBottom="s">
      <TitleH3 fontSize="l2">
        {$LL.invitations.sendInvitation.whatWouldYouLikeToDoNow()}
      </TitleH3>
    </Paragraph>

    <List listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.PLATFORM_INVITATIONS}>
          {$LL.invitations.sendInvitation.goToInvitationManagement()}
        </Link>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.HOME_PAGE}>
          {$LL.invitations.sendInvitation.goToHomePage()}
        </Link>
      </ListItem>
    </List>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .success-container {
    display: flex;
    flex-direction: column;
  }
</style>
