<script lang="ts">
  import { env, Path } from '$config';
  import { locale } from '$lang/i18n-svelte';
  import { Link } from '../Link';

  export let isHomePageLink: boolean = true;
</script>

<div class="brand-title-container">
  <h1 class="brand-title">
    <Link
      linkType="no-color"
      href={isHomePageLink ? `/${$locale + Path.HOME_PAGE}` : '#'}
      >{env.groupName}</Link
    >
  </h1>
</div>

<style lang="scss">
  $minHeight: 50px;

  .brand-title-container {
    display: inline-block;
    vertical-align: middle;

    color: var(--color-header-foreground);
  }

  .brand-title {
    display: flex;
    align-items: center;

    min-height: $minHeight;
    margin: 0 5vw 0 0;
    font-size: var(--brand-title-size);

    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-header-foreground);
  }
</style>
