<script lang="ts">
  import { page } from '$app/stores';
  import { LL } from '$lang/i18n-svelte';

  import { DateInput } from '$components/DateInput';
  import { EmailInput } from '$components/EmailInput';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { LinkButton } from '$components/LinkButton';
  import { Paragraph } from '$components/Paragraph';
  import { PasswordInput } from '$components/PasswordInput';
  import { TextInput } from '$components/TextInput';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { UploadInput } from '$components/UploadInput';

  import { ThemeContent } from '$modules/theme/components/ThemeContent';

  enum Section {
    GENERAL = 'general',
    PROFILE_IMAGE = 'profile-image',
    THEME = 'theme',
  }

  let currentSection: Section = Section.GENERAL;

  const setSection = (section: Section) => {
    currentSection = section;
  };

  const urlSection = $page.url.searchParams.get('section');
  const sectionValues = Object.values(Section);

  if (urlSection && sectionValues.includes(urlSection as unknown as Section)) {
    currentSection = urlSection as Section;
  }

  let files: FileList;
</script>

<Header sessionTitle={$LL.userSettings.userSettings()} />

<main class="main">
  <div class="menu">
    <div>
      <LinkButton
        linkType={currentSection === Section.GENERAL ? 'current' : 'default'}
        on:click={() => setSection(Section.GENERAL)}
      >
        {$LL.userSettings.menu.general()}
      </LinkButton>
    </div>

    <div>
      <LinkButton
        linkType={currentSection === Section.PROFILE_IMAGE
          ? 'current'
          : 'default'}
        on:click={() => setSection(Section.PROFILE_IMAGE)}
      >
        {$LL.userSettings.menu.profileImage()}
      </LinkButton>
    </div>

    <div>
      <LinkButton
        linkType={currentSection === Section.THEME ? 'current' : 'default'}
        on:click={() => setSection(Section.THEME)}
      >
        {$LL.userSettings.menu.theme()}
      </LinkButton>
    </div>
  </div>

  {#if currentSection === Section.GENERAL}
    <div class="content">
      <div>
        <TitleH1 strong marginBottom="s">
          {$LL.userSettings.generalSettings()}
        </TitleH1>

        <Paragraph>{$LL.userSettings.generalSettingsMessage()}</Paragraph>
      </div>

      <div class="content-group">
        <div class="form-item">
          <label for="nickname" class="label-item">
            <TitleH3 strong>Nickname</TitleH3>
          </label>

          <TextInput id="nickname" value="@john" style="max-width: 140px;" />
        </div>
      </div>

      <div class="content-group">
        <div class="form-item">
          <label for="full-name" class="label-item">
            <TitleH3 strong>{$LL.userSettings.fullName()}</TitleH3>
          </label>

          <TextInput id="full-name" value="John Philip Arthur Doe" />
        </div>
      </div>

      <div class="content-group">
        <div class="form-item">
          <label for="email" class="label-item">
            <TitleH3 strong>{$LL.userSettings.email()}</TitleH3>
          </label>

          <EmailInput id="email" value="johndoe@email.com" />
        </div>
      </div>

      <div class="content-group">
        <div class="form-item">
          <label for="password" class="label-item">
            <TitleH3 strong>Password</TitleH3>
          </label>

          <PasswordInput id="password" value="12345678" />
        </div>
      </div>

      <div class="content-group">
        <div class="form-item">
          <label for="birth-date" class="label-item">
            <TitleH3 strong>{$LL.userSettings.birthDate()}</TitleH3>
          </label>

          <DateInput
            id="birth-date"
            value="1984-06-22"
            style="max-width: 200px;"
          />
        </div>
      </div>

      <LeftBorderDiv style="max-width: 580px; margin-top: 40px;">
        {$LL.common.warningMessage3()}
      </LeftBorderDiv>
    </div>
  {/if}

  {#if currentSection === Section.PROFILE_IMAGE}
    <div class="content">
      <div class="content-group">
        <TitleH1>{$LL.userSettings.profileImage()}</TitleH1>

        <Paragraph>
          {$LL.userSettings.profileImageMessage()}
        </Paragraph>
      </div>

      <div class="content-group">
        <UploadInput bind:files />
      </div>

      <div class="content-group">
        <img
          src="/images/small-profile.example.svg"
          alt="User Profile"
          width="300"
          height="300"
        />
      </div>

      <LeftBorderDiv style="max-width: 580px; margin-top: 40px;">
        {$LL.common.warningMessage3()}
      </LeftBorderDiv>
    </div>
  {/if}

  {#if currentSection === Section.THEME}
    <div class="theme-content">
      <ThemeContent />
    </div>
  {/if}
</main>

<Footer marginTop={false} />

<style lang="scss">
  .main {
    display: flex;
    flex-direction: row;

    flex: 1;
  }

  .menu {
    display: flex;
    flex-direction: column;

    min-width: 220px;
    height: auto;
    padding: var(--spacing-m);
    gap: var(--gap-s);
    border-right: 1px solid var(--color-border);
    border-left: none;
    border-top: none;
    border-bottom: none;
  }

  .theme-content {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding-bottom: var(--spacing-l4);
  }

  .content {
    display: flex;
    flex-direction: column;

    max-width: 700px;
    width: 100%;
    padding: var(--spacing-l) var(--spacing-l) var(--spacing-l5)
      var(--spacing-l);
    gap: var(--gap-l3);
  }

  .content-group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .form-item {
    display: flex;
    flex-direction: column;
  }

  .label-item {
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: 860px) {
    .main {
      flex-direction: column;
    }

    .menu {
      border-bottom: 1px solid var(--color-border);
      border-left: none;
    }
  }
</style>
