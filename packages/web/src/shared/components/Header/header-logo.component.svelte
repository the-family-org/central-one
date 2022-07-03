<script lang="ts">
  import { locale } from '$lang/i18n-svelte';
  import { Path } from '$config';

  import { Link } from '../Link';

  export let isHomePageLink: boolean = true;
</script>

<div class="brand-logo-container">
  <Link
    linkType="no-color"
    href={isHomePageLink ? `/${$locale + Path.HOME_PAGE}` : '#'}
  >
    <span class="logo">
      <img
        src="/images/small-logo.example.svg"
        alt="logo"
        width="32"
        height="32"
      />
    </span>
  </Link>
</div>

<style lang="scss">
  $minHeight: 50px;

  .brand-logo-container {
    display: inline-block;
    vertical-align: middle;

    min-height: $minHeight;

    color: var(--color-header-foreground);

    .logo {
      display: flex;
      align-items: center;

      height: $minHeight;
      margin-right: 4px;
    }
  }
</style>
