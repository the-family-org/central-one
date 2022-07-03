<script lang="ts">
  import type { Component } from '$types';
  import type { SelectProps } from '@central/ui/src/components/select/select.types';
  import styles from '@central/ui/src/components/select/select.styles.module.scss';

  type $$Props = Component<HTMLSelectElement> &
    SelectProps & {
      value: any;
    };

  export let value: any;
</script>

<!--
  @component
  ### A custom `<select>` tag

  @param value
-->
<select class={styles.container} bind:value {...$$restProps}>
  <slot />
</select>
