<script lang="ts">
  import type { Component } from '$types';
  import type { BadgeProps } from '@central/ui/src/components/badge/badge.types';
  import styles from '@central/ui/src/components/badge/badge.styles.module.scss';

  type $$Props = Component<HTMLSpanElement> & BadgeProps;

  export let status: BadgeProps['status'] = 'info';
  export let marginLeft: BadgeProps['marginLeft'] = 'unset';
  export let marginRight: BadgeProps['marginRight'] = 'unset';
</script>

<!--
  @component
  ### Badge component

  @param status - Badge status. __Default: "info"__
  @param marginLeft - Prop margin-left. __Default: "unset"__
  @param marginRight - Prop margin-right. __Default: "unset"__
-->
<span
  class={styles.container}
  data-statusFgShadow={status}
  data-marginLeft={marginLeft}
  data-marginRight={marginRight}
  {...$$restProps}
>
  <slot />
</span>
