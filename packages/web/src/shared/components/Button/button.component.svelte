<script lang="ts">
  import type { Component } from '$types';
  import type { ButtonProps } from '@central/ui/src/components/button/button.types';
  import styles from '@central/ui/src/components/button/button.styles.module.scss';

  type $$Props = Component<HTMLButtonElement> & ButtonProps;

  export let status: ButtonProps['status'] = 'default';
  export let fullWidth: ButtonProps['fullWidth'] = false;
</script>

<!--
  @component
  ### Button element

  @param status - Button status. __Default: "default"__
  @param fullWidth - If true, the button size will be full width. __Default: false__
-->
<button
  type="button"
  class={styles.container}
  data-buttonStatus={status}
  data-fullWidth={fullWidth}
  on:click
  {...$$restProps}
>
  <slot />
</button>
