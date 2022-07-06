<script lang="ts">
  import type { Component } from '$types';
  import type { LinkButtonProps } from '@central/ui/src/components/link-button/link-button.types';
  import styles from '@central/ui/src/components/link-button/link-button.styles.module.scss';

  type $$Props = Component<HTMLAnchorElement> & LinkButtonProps;

  export let linkType: LinkButtonProps['linkType'] = 'default';
  export let display: LinkButtonProps['display'] = 'contents';
  export let direction: LinkButtonProps['direction'] = 'unset';
  export let wrap: LinkButtonProps['wrap'] = 'wrap';
  export let justify: LinkButtonProps['justify'] = 'unset';
  export let columnGap: LinkButtonProps['columnGap'] = 'unset';
  export let rowGap: LinkButtonProps['rowGap'] = 'unset';
</script>

<!--
  @component
  ### Button with link style

  @param linkType - Link type. __Default: "default"__
  @param display - Prop display. __Default: "contents"__
  @param direction - Prop flex-direction. __Default: "unset"__
  @param wrap - Prop flex-wrap. __Default: "wrap"__
  @param justify - Prop justify-content. __Default: "unset"__
  @param columnGap - Prop column-gap. __Default: "unset"__
  @param rowGap - Prop row-gap. __Default: "unset"__
-->
<button
  type="button"
  class={styles.container}
  data-linkType={linkType}
  data-display={display}
  data-flexDirection={direction}
  data-flexWrap={wrap}
  data-justifyContent={justify}
  data-columnGap={columnGap}
  data-rowGap={rowGap}
  on:click
  {...$$restProps}
>
  <slot />
</button>
