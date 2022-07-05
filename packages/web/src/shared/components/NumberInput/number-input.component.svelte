<script lang="ts">
  import type { Component } from '$types';
  import type { InputProps } from '@central/ui/src/components/input/input.types';
  import styles from '@central/ui/src/components/input/input.styles.module.scss';

  type $$Props = Component<HTMLInputElement> &
    InputProps & {
      value: string;
    };

  export let value: string;
</script>

<!--
  @component
  ### A custom `<input type="number">` tag

  @param value
-->
<input class={styles.container} type="number" bind:value {...$$restProps} />
