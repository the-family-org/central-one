<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Line } from '$components/Line';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { TitleH1 } from '$components/TitleH1';
</script>

<div class="group-container">
  <TitleH1>{$LL.invitations.invitationsSent.recentlySentInvitations()}</TitleH1>
</div>

<div class="group-container">
  <List>
    <Line neutral heightSize="s3" pageContentSize={false} />

    <ListItem>
      <div class="invitation-container">
        <div>
          <span class="item-label">
            {$LL.invitations.invitationsSent.sentDate()}:
          </span> 26.jun.2022
        </div>

        <div>
          <span class="item-label">
            {$LL.invitations.invitationsSent.sentBy()}:
          </span> @ane
        </div>

        <div>
          <span class="item-label">
            {$LL.invitations.invitationsSent.sentTo()}:
          </span> Emily Johnson
        </div>

        <div>
          <span class="item-label">
            {$LL.invitations.invitationsSent.message()}:
          </span>{' '}
          {$LL.invitations.invitationsSent.example.message()}
        </div>
      </div>
    </ListItem>

    <Line neutral heightSize="s3" pageContentSize={false} />

    <ListItem>
      <div class="invitation-container">
        <div>
          <span class="item-label">
            {$LL.invitations.invitationsSent.sentDate()}:
          </span> 26.jun.2022
        </div>

        <div>
          <span class="item-label">
            {$LL.invitations.invitationsSent.sentBy()}:
          </span> @ane
        </div>

        <div>
          <span class="item-label">
            {$LL.invitations.invitationsSent.sentTo()}:
          </span> Rosie Johnson
        </div>

        <div>
          <span class="item-label">
            {$LL.invitations.invitationsSent.message()}:
          </span>{' '}
          {$LL.invitations.invitationsSent.example.message()}
        </div>
      </div>
    </ListItem>

    <Line neutral heightSize="s3" pageContentSize={false} />
  </List>
</div>

<style lang="scss">
  .group-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .invitation-container {
    display: flex;
    flex-direction: column;
  }

  .item-label {
    padding-right: var(--spacing-s2);
    font-weight: var(--font-weight-bold);
  }
</style>
