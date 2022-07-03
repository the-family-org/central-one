<script lang="ts">
  import type { InputProps } from '@central/ui/src/components/input/input.types';
  import styles from '@central/ui/src/components/input/input.styles.module.scss';

  interface $$Props
    extends Omit<svelte.JSX.HTMLProps<HTMLInputElement> & InputProps, 'class'> {
    value: string;
  }

  export let value: string;
</script>

<!--
  @component
  ### `<input type="email">` html tag with custom props

  @param value
-->
<input class={styles.container} type="email" bind:value {...$$restProps} />
