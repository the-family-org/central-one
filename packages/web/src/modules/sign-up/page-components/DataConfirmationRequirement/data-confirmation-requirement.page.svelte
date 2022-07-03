<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { nav } from '$utils';
  import { getThemeFromClient } from '$utils/theme';
  import { Path, ThemeKey } from '$config';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';

  const goTo = (path: string) => {
    nav({ locale: $locale, path });
  };
  let theme = getThemeFromClient() as ThemeKey;
</script>

<Header brandAndSessionOnly={true}
  >{$LL.signUp.requirements.dataConfirmation.dataConfirmation()}</Header
>
<Line />

<PageContent>
  <div class="intro-container">
    <TitleH1 strong marginBottom="s"
      >{$LL.signUp.requirements.dataConfirmation.reviewYourData()}</TitleH1
    >

    <Paragraph>
      {$LL.signUp.requirements.dataConfirmation.dataConfirmationSectionMessage()}
    </Paragraph>
  </div>

  <div class="user-data-container">
    <div class="data-section">
      <table>
        <tr
          ><td>{$LL.signUp.requirements.dataConfirmation.fields.name()}:</td>
          <td class="td-data">John Doe</td></tr
        >
        <tr
          ><td>{$LL.signUp.requirements.dataConfirmation.fields.email()}:</td>
          <td class="td-data">johndoe@email.com</td></tr
        >
        <tr
          ><td>{$LL.signUp.requirements.dataConfirmation.fields.nickname()}:</td
          > <td class="td-data">@john</td></tr
        >
        <tr
          ><td>{$LL.signUp.requirements.dataConfirmation.fields.theme()}:</td>
          <td class="td-data">{$LL.theme.themeName[theme]()}</td></tr
        >
        <tr
          ><td>{$LL.signUp.requirements.dataConfirmation.fields.language()}:</td
          > <td class="td-data">{$LL.language[$locale]()}</td></tr
        >
      </table>
    </div>

    <div class="data-section">
      <div>
        {$LL.signUp.requirements.dataConfirmation.fields.profileImage()}
      </div>

      <div>
        <img
          src="/images/small-profile.example.svg"
          alt="User Profile"
          width="152"
          height="152"
        />
      </div>
    </div>
  </div>

  <div class="confirmation-container">
    <Paragraph>
      {@html $LL.signUp.requirements.dataConfirmation.confirmDataMessage()}
    </Paragraph>

    <LeftBorderDiv style="max-width: 400px">
      {$LL.common.warningMessage2()}
    </LeftBorderDiv>

    <Button on:click={() => goTo(Path.SIGN_UP_WELCOME)}
      >{$LL.signUp.requirements.dataConfirmation.confirmData()}</Button
    >
  </div>
</PageContent>

<Footer showOnlyLogoAndLanguages />

<style lang="scss">
  $commonMaxWidth: 700px;
  $commonGap: var(--gap-m);

  .intro-container {
    display: flex;
    flex-direction: column;

    max-width: $commonMaxWidth;
    gap: $commonGap;
  }

  .user-data-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-l3);

    .data-section {
      display: flex;
      flex-direction: column;

      gap: $commonGap;
    }

    table {
      width: fit-content;

      .td-data {
        padding-left: 16px;
        font-weight: var(--font-weight-bold);
      }
    }
  }

  .confirmation-container {
    display: flex;
    flex-direction: column;

    max-width: $commonMaxWidth;
    gap: $commonGap;
    margin-bottom: 60px;
  }
</style>
