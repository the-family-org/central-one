<script lang="ts">
  import type { Component } from '$types';
  import type { InputRadioProps } from '@central/ui/src/components/input-radio/input-radio.types';
  import styles from '@central/ui/src/components/input-radio/input-radio.styles.module.scss';

  type $$Props = Component<HTMLInputElement> &
    InputRadioProps & { value: string };

  export let value: string;
  export let marginLeft: InputRadioProps['marginLeft'] = 'unset';
  export let marginRight: InputRadioProps['marginRight'] = 'unset';
</script>

<!--
  @component
  ### A custom `<input type="radio">` tag

  @param value
  @param marginLeft
  @param marginRight
-->
<input
  class={styles.container}
  type="radio"
  data-marginLeft={marginLeft}
  data-marginRight={marginRight}
  bind:value
  {...$$restProps}
/>
