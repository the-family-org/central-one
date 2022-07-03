<script lang="ts">
  import type { Component } from '$types';
  import type { ListGroupProps } from '@central/ui/src/components/list-group/list-group.types';
  import styles from '@central/ui/src/components/list-group/list-group.styles.module.scss';

  type $$Props = Component<HTMLUListElement> & ListGroupProps;

  export let direction: ListGroupProps['direction'] = 'row';
  export let justify: ListGroupProps['justify'] = 'unset';
  export let wrap: ListGroupProps['wrap'] = 'wrap';
  export let columnGap: ListGroupProps['columnGap'] = 'l';
  export let rowGap: ListGroupProps['rowGap'] = 'none';
</script>

<!--
  @component
  ### Wrapper component for lists

  @param direction - Prop flex-direction. __Default: "row"__
  @param justify - Prop justify-content. __Default: "unset"__
  @param wrap - Prop flex-wrap. __Default: "wrap"__
  @param columnGap - Prop column-gap. __Default: "l"__
  @param rowGap - Prop row-gap. __Default: "none"__
-->
<div
  class={styles.container}
  data-flexDirection={direction}
  data-justifyContent={justify}
  data-flexWrap={wrap}
  data-columnGap={columnGap}
  data-rowGap={rowGap}
  {...$$restProps}
>
  <slot />
</div>
