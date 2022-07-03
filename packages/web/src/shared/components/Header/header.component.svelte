<script lang="ts">
  import HeaderLogo from './header-logo.component.svelte';
  import HeaderMainMenuButton from './header-main-menu-button.component.svelte';
  import HeaderSessionTitle from './header-session-title.component.svelte';
  import HeaderTitle from './header-title.component.svelte';
  import HeaderUser from './header-user.component.svelte';
  import { Surface } from '../Surface';
  import { MenuContent } from '../MenuContent';

  interface HeaderProps {
    logo?: boolean;
    brandTitle?: boolean;
    sessionTitle?: string | false;
    mainMenu?: boolean;
    user?: boolean;
    openMenu?: boolean;
    brandAndSessionOnly?: boolean;
    brandIsHomePageLink?: boolean;
  }

  export let logo: HeaderProps['logo'] = true;
  export let brandTitle: HeaderProps['brandTitle'] = true;
  export let sessionTitle: HeaderProps['sessionTitle'] = false;
  export let mainMenu: HeaderProps['mainMenu'] = true;
  export let user: HeaderProps['user'] = true;
  export let openMenu: HeaderProps['openMenu'] = false;
  export let brandAndSessionOnly: HeaderProps['brandAndSessionOnly'] = false;
  export let brandIsHomePageLink: HeaderProps['brandIsHomePageLink'] =
    undefined;

  interface $$Props
    extends Omit<svelte.JSX.HTMLProps<HTMLDivElement> & HeaderProps, 'class'> {}
</script>

<!--
  @component
  ### Page main header

  @param logo - Show logo. Default: true
  @param brandTitle - Show brand title. Default: true
  @param sessionTitle - Specify session title. Default: false
  @param mainMenu - Show main menu. Default: true
  @param user - Show user. Default: true
  @param brandAndSessionOnly - Show only the site brand and the session name. Default: false
-->
<header class="header-container">
  <div class="header-content" {...$$restProps}>
    <div>
      <div class="brand-container inline-block">
        {#if logo}
          <HeaderLogo
            isHomePageLink={brandIsHomePageLink || !brandAndSessionOnly}
          />
        {/if}

        {#if brandTitle}
          <HeaderTitle
            isHomePageLink={brandIsHomePageLink || !brandAndSessionOnly}
          />
        {/if}
      </div>

      {#if sessionTitle}
        <HeaderSessionTitle>{sessionTitle}</HeaderSessionTitle>
      {/if}

      {#if $$slots.default}
        <div class="slot-container inline-block">
          <div class="slot-content">
            <slot />
          </div>
        </div>
      {/if}
    </div>

    {#if !brandAndSessionOnly}
      <div class="last-itens-container">
        {#if mainMenu}
          <HeaderMainMenuButton
            onClick={() => {
              openMenu = !openMenu;
            }}
          />
        {/if}

        {#if user}
          <HeaderUser />
        {/if}
      </div>
    {/if}
  </div>
</header>

<Surface
  status="contrast"
  direction="row"
  justify="flex-end"
  contentSize="full-page-content"
  paddingTop="l"
  columnGap="none"
  rowGap="l2"
  show={openMenu}
>
  <MenuContent />
</Surface>

<style lang="scss">
  $minHeight: 50px;
  $itemMinMarginRight: 8px;
  $gap: var(--gap-s);

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-header-background);
  }

  .header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    flex: 1;
    max-width: var(--page-max-width);
    min-height: $minHeight;
    margin: 0 auto;
    padding: 0 var(--page-left-padding) 0 var(--page-right-padding);
    gap: $gap;

    color: var(--color-header-foreground);

    .inline-block {
      display: inline-block;
      vertical-align: middle;

      min-height: $minHeight;
    }
  }

  .brand-container {
    margin-right: $itemMinMarginRight;
  }

  .slot-container .slot-content {
    display: flex;
    flex-direction: row;
    align-items: center;

    min-height: $minHeight;
  }

  .last-itens-container {
    display: flex;
    flex-direction: row;

    gap: $gap;
  }

  @media (max-width: 420px) {
    .last-itens-container {
      flex-direction: column-reverse;
      gap: 0;
    }
  }
</style>
