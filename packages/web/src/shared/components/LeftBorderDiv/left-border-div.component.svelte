<script lang="ts">
  import type { Component } from '$types';
  import type { LeftBorderDivProps } from '@central/ui/src/components/left-border-div/left-border-div.types';
  import styles from '@central/ui/src/components/left-border-div/left-border-div.styles.module.scss';

  type $$Props = Component<HTMLDivElement> & LeftBorderDivProps;

  export let display: LeftBorderDivProps['display'] = 'unset';
  export let flexDirection: LeftBorderDivProps['flexDirection'] = 'unset';
  export let status: LeftBorderDivProps['status'] = 'default';
  export let contentStatus: LeftBorderDivProps['contentStatus'] = true;
  export let marginBottom: LeftBorderDivProps['marginBottom'] = 'unset';
  export let columnGap: LeftBorderDivProps['columnGap'] = 'unset';
  export let rowGap: LeftBorderDivProps['rowGap'] = 'unset';
</script>

<!--
  @component
  ### Div with a left border

  @param display - Prop display. __Default: "unset"__
  @param flexDirection - Prop flex-direction. __Default: "unset"__
  @param status - Status variant. __Default: "default"__
  @param contentStatus - Apply status to content, not just the border. __Default: true__
  @param marginBottom - Prop margin-bottom. __Default: "unset"__
  @param columnGap - Prop column-gap. __Default: "unset"__
  @param rowGap - Prop row-gap. __Default: "unset"__
-->
<div
  class={styles.container}
  data-display={display}
  data-flexDirection={flexDirection}
  data-statusBorder={status}
  data-statusFg={status}
  data-contentStatus={contentStatus}
  data-marginBottom={marginBottom}
  data-columnGap={columnGap}
  data-rowGap={rowGap}
  {...$$restProps}
>
  <slot />
</div>
