<script lang="ts">
  import type { Component } from '$types';
  import type { InputCheckboxProps } from '@central/ui/src/components/input-checkbox/input-checkbox.types';
  import styles from '@central/ui/src/components/input-checkbox/input-checkbox.styles.module.scss';

  type $$Props = Component<HTMLInputElement> &
    InputCheckboxProps & { value: string };

  export let value: string;
  export let marginLeft: InputCheckboxProps['marginLeft'] = 'unset';
  export let marginRight: InputCheckboxProps['marginRight'] = 'unset';
</script>

<!--
  @component
  ### A custom `<input type="checkbox">` tag

  @param value
  @param marginLeft
  @param marginRight
-->
<input
  class={styles.container}
  type="checkbox"
  data-marginLeft={marginLeft}
  data-marginRight={marginRight}
  bind:value
  {...$$restProps}
/>
