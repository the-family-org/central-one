<script lang="ts">
  export let status: 'unset' | 'secondary' | 'primary' = 'unset';
</script>

<div class="icon-container" data-status={status} {...$$restProps}>
  <slot />
</div>

<style lang="scss">
  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 1em;
    min-height: 1em;

    &[data-status='unset'] {
      color: 'unset';
    }

    &[data-status='primary'] {
      color: var(--color-primary);
    }

    &[data-status='secondary'] {
      color: var(--color-foreground-secondary);
    }
  }
</style>
