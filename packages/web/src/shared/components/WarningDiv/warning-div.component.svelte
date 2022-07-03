<script lang="ts">
  import type { Component } from '$types';
  import type { WarningDivProps } from '@central/ui/src/components/warning-div/warning-div.types';
  import styles from '@central/ui/src/components/warning-div/warning-div.styles.module.scss';

  type $$Props = Component<HTMLDivElement> & WarningDivProps;

  export let marginBottom: WarningDivProps['marginBottom'] = 'unset';
</script>

<!--
  @component
  ### Div with a "warning" context style
-->
<div class={styles.container} data-marginBottom={marginBottom} {...$$restProps}>
  <div class={styles.icon}>!</div>

  <div class={styles['slot-container']}>
    <slot />
  </div>
</div>
