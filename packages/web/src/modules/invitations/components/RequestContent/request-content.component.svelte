<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Line } from '$components/Line';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
</script>

<div class="group-container">
  <TitleH1>{$LL.invitations.requestsReceived.recentInviteRequests()}</TitleH1>
</div>

<div class="group-container">
  <Line neutral pageContentSize={false} />

  <TitleH3>{$LL.invitations.requestsReceived.pendingInviteRequests()}</TitleH3>

  <List>
    <Line neutral heightSize="s3" pageContentSize={false} />

    <ListItem>
      <div class="request-container">
        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.requestDate()}:
          </span> 03.jul.2022
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.name()}:
          </span> Jessica Doe
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.requestMessage()}:
          </span>{' '}
          {$LL.invitations.requestsReceived.examples.pendingMessageOne()}
        </div>
      </div>
    </ListItem>

    <Line neutral heightSize="s3" pageContentSize={false} />

    <ListItem>
      <div class="request-container">
        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.requestDate()}:
          </span> 01.jul.2022
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.name()}:
          </span> Matilda Smith
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.requestMessage()}:
          </span>{' '}
          {$LL.invitations.requestsReceived.examples.pendingMessageTwo()}
        </div>
      </div>
    </ListItem>
  </List>
</div>

<div class="group-container">
  <Line neutral pageContentSize={false} />

  <TitleH3>{$LL.invitations.requestsReceived.approvedInviteRequests()}</TitleH3>

  <List>
    <Line neutral heightSize="s3" pageContentSize={false} />

    <ListItem>
      <div class="request-container">
        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.requestDate()}:
          </span> 19.jun.2022
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.approvalDate()}:
          </span> 27.jun.2022
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.approvedBy()}:
          </span> @jane
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.accountTypeGiven()}:
          </span> Membro
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.name()}:
          </span> John Doe
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.requestMessage()}:
          </span>{' '}
          {$LL.invitations.requestsReceived.examples.approvedMessageOne()}
        </div>
      </div>
    </ListItem>
  </List>
</div>

<div class="group-container">
  <Line neutral pageContentSize={false} />

  <TitleH3>{$LL.invitations.requestsReceived.rejectedInviteRequests()}</TitleH3>

  <List>
    <Line neutral heightSize="s3" pageContentSize={false} />

    <ListItem>
      <div class="request-container">
        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.requestDate()}:
          </span> 10.jun.2022
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.rejectionDate()}:
          </span> 11.jun.2022
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.rejectedBy()}:
          </span> @ame
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.justification()}:
          </span>{' '}
          {$LL.invitations.requestsReceived.examples.rejectedJustificationOne()}
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.name()}:
          </span> Tom Riddle
        </div>

        <div>
          <span class="request-label">
            {$LL.invitations.requestsReceived.requestMessage()}:
          </span>{' '}
          {$LL.invitations.requestsReceived.examples.rejectedMessageOne()}
        </div>
      </div>
    </ListItem>
  </List>
</div>

<style lang="scss">
  .group-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .request-container {
    display: flex;
    flex-direction: column;
  }

  .request-label {
    padding-right: var(--spacing-s2);
    font-weight: var(--font-weight-bold);
  }
</style>
