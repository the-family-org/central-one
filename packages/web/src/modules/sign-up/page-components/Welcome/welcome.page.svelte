<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { nav } from '$utils';
  import { Path } from '$config';
  import { confettiEffect } from '$shared/effects/confettiEffect';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { Line } from '$components/Line';

  const goTo = (path: string) => {
    nav({ locale: $locale, path });
  };

  confettiEffect('school-pride', ['#00ff89', '#73ffbe']);
</script>

<Header brandAndSessionOnly={true} />
<Line />

<PageContent>
  <div>
    <TitleH1 strong fontWeight="extra-bold" marginTop="s" marginBottom="l2">
      {$LL.signUp.welcome.welcome()}
    </TitleH1>

    <TitleH3>{$LL.signUp.welcome.youAreTheNewestMember()}</TitleH3>
  </div>

  <div style="max-width: 600px;">
    <Paragraph>
      {$LL.signUp.welcome.welcomeMessage()}
    </Paragraph>
  </div>

  <div>
    <Button on:click={() => goTo(Path.HOME_PAGE)}>
      {$LL.signUp.welcome.goToTheHomePage()}
    </Button>
  </div>
</PageContent>

<Footer showOnlyLogoAndLanguages />
