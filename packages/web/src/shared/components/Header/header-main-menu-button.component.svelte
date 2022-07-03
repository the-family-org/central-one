<script lang="ts">
  import { LL } from '$lang/i18n-svelte';
  import { LinkButton } from '../LinkButton';

  export let onClick: () => void;
</script>

<div class="container">
  <LinkButton
    on:click={onClick}
    display="inline-flex"
    columnGap="s3"
    linkType="no-color"
    href="/#"
  >
    <span class="menu-icon">☰</span><span class="menu-text">
      {$LL.menu.menu()}</span
    >
  </LinkButton>
</div>

<style lang="scss">
  $minHeight: 50px;
  $gap: var(--gap-s);

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    min-width: 5rem;
    min-height: $minHeight;
    gap: $gap;
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: 920px) {
    .container {
      min-width: 0;

      .menu-text {
        display: none;
      }
    }
  }
</style>
