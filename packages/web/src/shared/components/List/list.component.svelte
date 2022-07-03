<script lang="ts">
  import type { Component } from '$types';
  import type { ListProps } from '@central/ui/src/components/list/list.types';
  import styles from '@central/ui/src/components/list/list.styles.module.scss';

  type $$Props = Component<HTMLUListElement> & ListProps;

  export let fontSize: ListProps['fontSize'] = 'm';
  export let marginBottom: ListProps['marginBottom'] = 's';
  export let columnGap: ListProps['columnGap'] = 'm';
  export let rowGap: ListProps['rowGap'] = 'm';
  export let textAlign: ListProps['textAlign'] = 'unset';
  export let listType: ListProps['listType'] = 'none';
  export let adaptiveSize: ListProps['adaptiveSize'] = true;
</script>

<!--
  @component
  ### A custom `<ul>` tag

  @param marginBottom - Prop margin-bottom. __Default: "s"__
  @param columnGap - Prop column-gap. __Default: "m"__
  @param rowGap - Prop row-gap. __Default: "m"__
  @param fontSize - Prop font-size. __Default: "m"__
  @param textAlign - Prop text-align. __Default: "unset"__
  @param listType - Prop list-style-type. __Default: "none"__
  @param adaptiveSize - Font size changes based on the screen size. __Default: true__
-->
<ul
  class={styles.container}
  data-marginBottom={marginBottom}
  data-columnGap={columnGap}
  data-rowGap={rowGap}
  data-fontSize={fontSize}
  data-textAlign={textAlign}
  data-listType={listType}
  data-adaptiveSize={adaptiveSize}
  {...$$restProps}
>
  <slot />
</ul>
