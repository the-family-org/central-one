<script lang="ts">
  import { locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
  import { Link } from '../Link';

  export let isHomePageLink: boolean = true;
</script>

<div class="container">
  <Link href={isHomePageLink ? `/${$locale + Path.HOME_PAGE}` : '#'}>
    <img
      src="/images/medium-logo.example.svg"
      alt="Brand"
      width="100"
      height="90"
    />
  </Link>
</div>

<style lang="scss">
  .container {
    display: flex;
  }
</style>
