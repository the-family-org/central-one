<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
  import { nav } from '$utils';

  import { Button } from '$components/Button';
  import { EmailInput } from '$components/EmailInput';
  import { LinkButton } from '$components/LinkButton';
  import { Paragraph } from '$components/Paragraph';
  import { Surface } from '$components/Surface';
  import { Textarea } from '$components/Textarea';
  import { TextInput } from '$components/TextInput';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
  import { TitleH3 } from '$components/TitleH3';
  import { WarningDiv } from '$components/WarningDiv';

  import { LanguageButtons } from '../../components/LanguageButtons';

  let name: string;
  let email: string;
  let message: string;
  let isInvitationReceived: boolean = false;

  const goTo = (path: string) => {
    nav({ locale: $locale, path });
  };

  const handleInvitation = () => {
    isInvitationReceived = true;
  };
</script>

<main class="page-container">
  <div class="item-row-right">
    <Paragraph fontSize="s" textAlign="right">
      <LanguageButtons />
    </Paragraph>
  </div>

  {#if isInvitationReceived}
    <div class="content">
      <Surface contentSize="full-page" style="padding: 30px;">
        <TitleH1 marginBottom="l2"
          >{$LL.invitations.request.congratulations()}</TitleH1
        >

        <TitleH2>{$LL.invitations.request.invitationApproved()}</TitleH2>
      </Surface>

      <Paragraph>
        {@html $LL.invitations.request.pendingIssuesMessage()}
      </Paragraph>

      <Button on:click={() => goTo(Path.SIGN_UP_REQUIREMENTS)}>
        {$LL.invitations.request.goToRegistrationIssues()}
      </Button>
    </div>
  {/if}

  {#if !isInvitationReceived}
    <form class="content" on:submit|preventDefault={handleInvitation}>
      <div class="item">
        <TitleH1 strong marginBottom="m" adaptiveSize={false}>
          {$LL.invitations.request.invitationRequest()}
        </TitleH1>

        <Paragraph>
          {$LL.invitations.request.invitationMessage()}
        </Paragraph>
      </div>

      <div class="item">
        <label class="label" for="name">
          <TitleH3 strong fontSize="l2"
            >{$LL.invitations.request.name()}</TitleH3
          >

          <TextInput id="name" bind:value={name} />
        </label>
      </div>

      <div class="item">
        <label class="label" for="email">
          <TitleH3 strong fontSize="l2"
            >{$LL.invitations.request.email()}</TitleH3
          >

          <EmailInput id="email" bind:value={email} />
        </label>
      </div>

      <div class="item">
        <label class="label" for="message">
          <TitleH3 strong fontSize="l2"
            >{$LL.invitations.request.message()}</TitleH3
          >

          <Textarea id="message" bind:value={message} />
        </label>
      </div>

      <div class="item-row-right">
        <LinkButton on:click={() => goTo(Path.SIGN_IN)}
          >{$LL.invitations.request.return()}</LinkButton
        >
        <Button type="submit"
          >{$LL.invitations.request.requestInvitation()}</Button
        >
      </div>

      <div class="item">
        <WarningDiv>{$LL.common.warningMessage()}</WarningDiv>
      </div>
    </form>
  {/if}
</main>

<style lang="scss">
  $maxWidth: 645px;

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    flex: 1;
    padding: 15px 20px;
  }

  .content {
    display: flex;
    flex-direction: column;

    max-width: $maxWidth;
    width: $maxWidth;
    padding-top: 40px;
    padding-bottom: 40px;
    gap: var(--gap-l2);
  }

  .item,
  .label {
    display: flex;
    flex-direction: column;
  }

  .item-row-right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    max-width: $maxWidth;
    width: $maxWidth;
    gap: var(--gap-l2);
  }

  @media (max-width: 760px) {
    .content,
    .item-row-right {
      width: 100%;
    }
  }
</style>
