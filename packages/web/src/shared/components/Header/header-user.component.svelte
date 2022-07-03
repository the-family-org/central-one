<script lang="ts">
  import { locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
  import { nav } from '$utils';

  import { LinkButton } from '../LinkButton';
</script>

<div class="container">
  <LinkButton
    display="inline-flex"
    linkType="no-color-no-brightness"
    on:click={() => nav({ locale: $locale, path: Path.USER_PROFILE })}
  >
    <img
      class="user-image"
      src="/images/small-profile.example.svg"
      alt="user"
      width="32"
      height="32"
    />
  </LinkButton>
</div>

<style lang="scss">
  $minHeight: 50px;
  $gap: var(--gap-s);

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;

    min-height: $minHeight;
    gap: $gap;

    filter: saturate(0.4);

    &:hover {
      filter: saturate(1);
    }
  }

  .user-image {
    filter: opacity(0.9);

    &:hover {
      filter: opacity(1);
    }
  }
</style>
