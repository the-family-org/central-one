<script lang="ts">
  import type { Component } from '$types';
  import type { SurfaceProps } from '@central/ui/src/components/surface/surface.types';
  import styles from '@central/ui/src/components/surface/surface.styles.module.scss';

  type $$Props = Component<HTMLDivElement> & SurfaceProps;

  export let show: SurfaceProps['show'] = true;
  export let status: SurfaceProps['status'] = 'primary';
  export let contentSize: SurfaceProps['contentSize'] = 'contained-medium';
  export let direction: SurfaceProps['direction'] = 'column';
  export let justify: SurfaceProps['justify'] = 'unset';
  export let align: SurfaceProps['align'] = 'unset';
  export let wrap: SurfaceProps['wrap'] = 'wrap';
  export let columnGap: SurfaceProps['columnGap'] = 'none';
  export let rowGap: SurfaceProps['rowGap'] = 'none';
  export let paddingTop: SurfaceProps['paddingTop'] = 'm';
  export let paddingBottom: SurfaceProps['paddingBottom'] = 'm';
  export let marginTop: SurfaceProps['marginTop'] = 'unset';
  export let marginBottom: SurfaceProps['marginBottom'] = 'unset';
</script>

<!--
  @component
  ### Surface component

  @param show - Show or hide the component. __Default: true__
  @param status - Surface status. __Default: "primary"__
  @param contentSize - Size of the content. __Default: "contained-medium"__
  @param direction - Prop flex-direction. __Default: "column"__
  @param justify - Prop justify-content. __Default: "unset"__
  @param align - Prop align-items. __Default: "unset"__
  @param wrap - Prop flex-wrap. __Default: "wrap"__
  @param columnGap - Prop column-gap. __Default: "none"__
  @param rowGap - Prop row-gap. __Default: "none"__
  @param paddingTop - Prop padding-top. __Default: "m"__
  @param paddingBottom - Prop padding-bottom. __Default: "m"__
  @param marginTop - Prop margin-top. __Default: "unset"__
  @param marginBottom - Prop margin-bottom. __Default: "unset"__
-->
<div
  class={styles['root-container']}
  data-show={show}
  data-statusBg={status}
  data-marginTop={marginTop}
  data-marginBottom={marginBottom}
>
  <div class={styles['spacing-container']} data-contentSize={contentSize}>
    <div
      class={styles['content-container']}
      data-flexDirection={direction}
      data-justifyContent={justify}
      data-alignItems={align}
      data-flexWrap={wrap}
      data-columnGap={columnGap}
      data-rowGap={rowGap}
      data-paddingTop={paddingTop}
      data-paddingBottom={paddingBottom}
      {...$$restProps}
    >
      <slot />
    </div>
  </div>
</div>
