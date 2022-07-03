<script lang="ts">
  import type { Component } from '$types';
  import type { TagProps } from '@central/ui/src/components/tag/tag.types';
  import styles from '@central/ui/src/components/tag/tag.styles.module.scss';

  type $$Props = Component<HTMLSpanElement> & TagProps;

  export let status: TagProps['status'] = 'info';
  export let marginLeft: TagProps['marginLeft'] = 'unset';
  export let marginRight: TagProps['marginRight'] = 'unset';
</script>

<!--
  @component
  ### Tag component

  @param status - Tag status. __Default: "info"__
  @param marginLeft - Prop margin-left. __Default: "unset"__
  @param marginRight - Prop margin_right. __Default: "unset"__
-->
<span
  class={styles.container}
  data-statusFgBg={status}
  data-marginLeft={marginLeft}
  data-marginRight={marginRight}
  {...$$restProps}
>
  <slot />
</span>
