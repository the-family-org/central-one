<script lang="ts">
  import { Line } from '../Line';
  import { Surface } from '../Surface';
  import { MenuContent } from '../MenuContent';
  import { TitleH3 } from '../TitleH3';

  import FooterFeedback from './footer-feedback.component.svelte';
  import FooterLanguages from './footer-languages.component.svelte';
  import FooterLogo from './footer-logo.component.svelte';
  import FooterNavLinks from './footer-nav-links.component.svelte';
  import FooterUser from './footer-user.component.svelte';

  interface FooterProps {
    marginTop?: boolean;
    topLine?: boolean;
    showOriginalContent?: boolean;
    showOnlyLogo?: boolean;
    showOnlyLogoAndLanguages?: boolean;
    openMenu?: boolean;
    navLinks?: boolean;
    feedback?: boolean;
    language?: boolean;
    user?: boolean;
    logo?: boolean;
    smallTopBottomPadding?: boolean;
    logoIsHomePageLink?: boolean;
  }

  interface $$Props
    extends Omit<svelte.JSX.HTMLProps<HTMLDivElement> & FooterProps, 'class'> {}

  export let marginTop: FooterProps['marginTop'] = true;
  export let topLine: FooterProps['topLine'] = true;
  export let showOriginalContent: FooterProps['showOriginalContent'] = true;
  export let showOnlyLogo: FooterProps['showOnlyLogo'] = false;
  export let showOnlyLogoAndLanguages: FooterProps['showOnlyLogo'] = false;
  export let openMenu: FooterProps['openMenu'] = false;
  export let navLinks: FooterProps['navLinks'] = true;
  export let feedback: FooterProps['feedback'] = true;
  export let language: FooterProps['language'] = true;
  export let user: FooterProps['user'] = true;
  export let logo: FooterProps['logo'] = true;
  export let smallTopBottomPadding: FooterProps['smallTopBottomPadding'] =
    undefined;
  export let logoIsHomePageLink: FooterProps['logoIsHomePageLink'] = undefined;
</script>

<footer class="footer">
  <div class="top-div" data-marginTop={marginTop} />

  {#if topLine}
    <Line pageContentSize={false} />
  {/if}

  {#if openMenu && !showOnlyLogo}
    <Surface
      status="contrast"
      direction="row"
      contentSize="full-page-content"
      paddingTop="l"
      columnGap="none"
      rowGap="l2"
      show={openMenu}
    >
      <div>
        <TitleH3
          marginBottom="s"
          fontSize="l"
          style="margin-right: var(--gap-l3)">Menu</TitleH3
        >
        <MenuContent />
      </div>
    </Surface>
  {/if}

  {#if $$slots.default}
    <div class="footer-content-wrapper">
      <div
        class="footer-content"
        data-smallTopBottomPadding={smallTopBottomPadding || showOnlyLogo}
        {...$$restProps}
      >
        <slot />
      </div>
    </div>
  {/if}

  {#if showOriginalContent}
    <!--
    @component
    ### Page footer component

    @param marginTop - If true, a margin is added to the top. Default: true
    @param topLine - If true, a line is added to the top. Default: true
    @param showOriginalContent - If true, a predefined footer content is shown. Default: true
    @param showOnlyLogo - If true, show just the logo. Default: false
  -->
    <div class="footer-content-wrapper">
      <div
        class="footer-content"
        data-smallTopBottomPadding={smallTopBottomPadding || showOnlyLogo}
        {...$$restProps}
      >
        {#if feedback && !showOnlyLogo && !showOnlyLogoAndLanguages}
          <div class="group"><FooterFeedback /></div>
        {/if}

        {#if navLinks && !showOnlyLogo && !showOnlyLogoAndLanguages}
          <div class="group">
            <FooterNavLinks
              menuOnClick={() => {
                openMenu = !openMenu;
              }}
            />
          </div>
        {/if}

        {#if language && !showOnlyLogo}
          <div class="group"><FooterLanguages /></div>
        {/if}

        {#if user && !showOnlyLogo && !showOnlyLogoAndLanguages}
          <div class="group"><FooterUser /></div>
        {/if}

        {#if logo}
          <div class="group logo">
            <FooterLogo
              isHomePageLink={logoIsHomePageLink ||
                (!showOnlyLogo && !showOnlyLogoAndLanguages)}
            />
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <span id="end" />
</footer>

<style lang="scss">
  .footer {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: auto;
  }

  .top-div {
    display: flex;

    height: 0;

    &[data-marginTop='true'] {
      margin-top: 80px;
    }

    &[data-marginTop='false'] {
      margin-top: 0;
    }
  }

  .footer-content-wrapper {
    display: flex;
    flex-direction: column;

    background-color: var(--color-background-secondary);
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    flex: 1;
    max-width: var(--page-max-width);
    min-height: 90px;
    width: 100%;
    margin: 0 auto;
    padding-left: var(--page-left-padding);
    padding-right: var(--page-right-padding);

    gap: 30px 50px;
    font-size: var(--font-size-s);

    color: var(--color-foreground);

    &[data-smallTopBottomPadding='false'] {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    &[data-smallTopBottomPadding='true'] {
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }

  .group {
    display: flex;
    flex-direction: column;

    &:last-child {
      margin-left: auto;
    }
  }

  .logo {
    align-self: flex-end;
  }
</style>
