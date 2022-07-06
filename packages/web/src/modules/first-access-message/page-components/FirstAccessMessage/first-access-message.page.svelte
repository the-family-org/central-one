<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';

  import { Link } from '$components/Link';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';

  import { LanguageButtons } from '../../components/LanguageButtons';
</script>

<main class="main-container">
  <div class="content-container">
    <div class="right">
      <LanguageButtons />
    </div>

    <TitleH1 strong>
      {$LL.firstAccessMessage.title()}
    </TitleH1>

    <Paragraph>
      {$LL.firstAccessMessage.paragraphOne()}
    </Paragraph>

    <Paragraph>
      {@html $LL.firstAccessMessage.paragraphTwo()}
    </Paragraph>

    <Paragraph>
      {$LL.firstAccessMessage.paragraphThree()}
    </Paragraph>

    <Paragraph>
      {$LL.firstAccessMessage.paragraphFour()}
    </Paragraph>

    <div class="right">
      <Link href={'/' + $locale + Path.SIGN_UP_REQUIREMENTS}>
        {$LL.firstAccessMessage.proceedMessage()}
      </Link>
    </div>
  </div>
</main>

<style lang="scss">
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-container {
    display: flex;
    flex-direction: column;

    max-width: 780px;
    padding: var(--spacing-m);
    gap: var(--gap-l2);
  }

  .right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>
