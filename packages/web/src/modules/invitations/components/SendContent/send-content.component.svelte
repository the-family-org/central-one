<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { nav } from '$utils';
  import { Path } from '$config';

  import { Button } from '$components/Button';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { TextInput } from '$components/TextInput';
  import { EmailInput } from '$components/EmailInput';
  import { Textarea } from '$components/Textarea';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
</script>

<div class="group-container">
  <TitleH1>{$LL.invitations.sendInvitation.sendInvitation()}</TitleH1>
</div>

<div class="group-container">
  <div class="form-item">
    <label for="form-name">
      <TitleH3>
        {$LL.invitations.sendInvitation.nameOfPersonToBeInvited()}
      </TitleH3>
    </label>

    <TextInput id="form-name" value="" />
  </div>

  <div class="form-item">
    <label for="form-email">
      <TitleH3>
        {$LL.invitations.sendInvitation.emailOfPersonToBeInvited()}
      </TitleH3>
    </label>

    <EmailInput id="form-email" value="" />
  </div>

  <div class="form-item">
    <label for="form-message">
      <TitleH3>
        {$LL.invitations.sendInvitation.message()}
      </TitleH3>
    </label>

    <Textarea id="form-message" rows={4} value="" />
  </div>

  <div class="form-item">
    <LeftBorderDiv style="max-width: 480px;">
      {$LL.common.warningMessage3()}
    </LeftBorderDiv>

    <Button
      on:click={() =>
        nav({ locale: $locale, path: Path.PLATFORM_INVITATIONS_CREATED })}
    >
      {$LL.invitations.sendInvitation.sendInvitation()}
    </Button>
  </div>
</div>

<style lang="scss">
  .group-container {
    display: flex;
    flex-direction: column;

    max-width: 700px;
    gap: var(--gap-m);
  }

  .form-item {
    display: flex;
    flex-direction: column;

    gap: var(--gap-s2);
    margin-bottom: var(--spacing-l);
  }
</style>
