<script lang="ts">
  import type { Component } from '$types';
  import type { PageContentProps } from '@central/ui/src/components/page-content/page-content.types';
  import styles from '@central/ui/src/components/page-content/page-content.styles.module.scss';

  type $$Props = Component<HTMLDivElement> & PageContentProps;

  export let pageSize: PageContentProps['pageSize'] = true;
  export let pageTopPaddingSize: PageContentProps['pageTopPaddingSize'] = true;
  export let direction: PageContentProps['direction'] = 'column';
  export let justify: PageContentProps['justify'] = 'unset';
  export let align: PageContentProps['align'] = 'unset';
  export let wrap: PageContentProps['wrap'] = 'wrap';
  export let columnGap: PageContentProps['columnGap'] = 'l3';
  export let rowGap: PageContentProps['rowGap'] = 'l3';
</script>

<!--
  @component
  ### Component to wrap all page content

  @param pageSize - If true, default page size and spacing are applied. __Default: true__
  @param pageTopPaddingSize - Default page top padding. __Default: true__
  @param direction - Prop flex-direction. __Default: "column"__
  @param justify - Prop justify-content. __Default: "unset"__
  @param align - Prop align-items. __Default: "unset"__
  @param wrap - Prop flex-wrap. __Default: "wrap"__
  @param columnGap - Prop column-gap. __Default: "l3"__
  @param rowGap - Prop row-gap. __Default: "l3"__
-->
<div
  class={styles.container}
  data-pageSize={pageSize}
  data-pageTopPaddingSize={pageTopPaddingSize}
  data-flexDirection={direction}
  data-justifyContent={justify}
  data-alignItems={align}
  data-flexWrap={wrap}
  data-columnGap={columnGap}
  data-rowGap={rowGap}
  {...$$restProps}
>
  <slot />
</div>
