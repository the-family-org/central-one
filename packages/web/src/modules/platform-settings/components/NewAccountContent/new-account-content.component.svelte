<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Paragraph } from '$components/Paragraph';
  import { Radio } from '$components/Radio';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
</script>

<div class="content-group">
  <TitleH1 strong marginBottom="s3">
    {$LL.platformSettings.newAccountSection.title()}
  </TitleH1>

  <Paragraph>
    {$LL.platformSettings.newAccountSection.message()}
  </Paragraph>
</div>

<div class="content-group">
  <TitleH3 strong>
    {$LL.platformSettings.newAccountSection.howAreNewUserAccountsCreated()}
  </TitleH3>

  <div class="row">
    <Radio name="registration-of-new-users" value="" checked />
    <span>
      {$LL.platformSettings.newAccountSection.byMemberInvitationOnly()}
    </span>
  </div>

  <div class="row">
    <Radio name="registration-of-new-users" value="" />
    <span>
      {$LL.platformSettings.newAccountSection.publicRegistrationPage()}
    </span>
  </div>

  <div class="row">
    <Radio name="registration-of-new-users" value="" />
    <span>
      {$LL.platformSettings.newAccountSection.newRegistrationsDisabled()}
    </span>
  </div>
</div>

<div class="content-group">
  <TitleH3 strong>
    {$LL.platformSettings.newAccountSection.whoCanSendInvitationsToNewMemberAccounts()}
  </TitleH3>

  <div class="row">
    <Radio name="permission-to-send-member-invitation" value="" checked />
    <span>
      {$LL.platformSettings.newAccountSection.adminMembersOfMatureAge()}
    </span>
  </div>

  <div class="row">
    <Radio name="permission-to-send-member-invitation" value="" />
    <span>
      {$LL.platformSettings.newAccountSection.adminMembers()}
    </span>
  </div>
</div>

<div class="content-group">
  <TitleH3 strong>
    {$LL.platformSettings.newAccountSection.whoCanSendInvitationsToNewGuestAccounts()}
  </TitleH3>

  <div class="row">
    <Radio name="permission-to-send-guest-invitation" value="" />
    <span>
      {$LL.platformSettings.newAccountSection.adminMembersOfMatureAge()}
    </span>
  </div>

  <div class="row">
    <Radio name="permission-to-send-guest-invitation" value="" checked />
    <span>
      {$LL.platformSettings.newAccountSection.adminMembers()}
    </span>
  </div>
</div>

<style lang="scss">
  .content-group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: var(--gap-s);
  }
</style>
