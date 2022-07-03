<script lang="ts">
  // import { operationStore, mutation } from '@urql/svelte';

  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
  import { nav } from '$utils';

  import { Button } from '$components/Button';
  import { EmailInput } from '$components/EmailInput';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { LinkButton } from '$components/LinkButton';
  import { Paragraph } from '$components/Paragraph';
  import { PasswordInput } from '$components/PasswordInput';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { WarningDiv } from '$components/WarningDiv';
  import { LanguageButtons } from '../../components/LanguageButtons';

  // TODO

  // const SIGN_IN_MUTATION = `
  // 	mutation SignIn ($email: String!, $password: String!) {
  // 		signIn(
  // 			input: {
  // 				email: $email,
  // 				password: $password
  // 			}
  // 		) {
  // 			access_token
  // 		}
  // 	}
  // `;

  // // const signIn = operationStore(SIGN_IN_MUTATION);

  // const signIn = mutation({ query: SIGN_IN_MUTATION });

  let email = '';
  let password = '';

  // async function handleSubmit() {
  //   signIn({ email, password }).then((result) => {
  //     console.log(result.data, result.error);
  //   });
  // }

  const fakeSignIn = () => {
    nav({ locale: $locale, path: Path.HOME_PAGE });
  };

  const goToInvitationRequest = () => {
    nav({ locale: $locale, path: Path.PLATFORM_INVITATIONS_REQUEST });
  };
</script>

<main class="page-container">
  <form class="content" on:submit|preventDefault={fakeSignIn}>
    <div class="item-row-right">
      <Paragraph fontSize="s" textAlign="right">
        <LanguageButtons />
      </Paragraph>
    </div>

    <div class="item">
      <TitleH1 strong fontSize="l5" adaptiveSize={false}>
        <b>{$LL.signIn.signIn().toLocaleUpperCase()}</b>
      </TitleH1>
    </div>

    <div class="item">
      <label class="label" for="email">
        <TitleH3 strong fontSize="l2">
          {$LL.signIn.nicknameOrEmail()}
        </TitleH3>

        <EmailInput id="email" bind:value={email} />
      </label>
    </div>

    <div class="item">
      <label class="label" for="password">
        <TitleH3 strong fontSize="l2">
          {$LL.signIn.password()}
        </TitleH3>

        <PasswordInput id="password" bind:value={password} />
      </label>
    </div>

    <div class="item-row-right">
      <Button type="submit">{$LL.signIn.signIn()}</Button>
    </div>

    <div class="item">
      <LeftBorderDiv>
        {$LL.signIn.invitationPart1()}
        <LinkButton on:click={goToInvitationRequest}>
          {$LL.signIn.invitationPart2()}
        </LinkButton>.
      </LeftBorderDiv>
    </div>

    <div class="item">
      <WarningDiv>{$LL.common.warningMessage()}</WarningDiv>
    </div>
  </form>
</main>

<style lang="scss">
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

    max-width: 520px;
    width: 520px;
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
  }

  @media (max-width: 540px) {
    .content {
      width: unset;
    }
  }
</style>
