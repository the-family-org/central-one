<script lang="ts">
  import type { Component } from '$types';
  import type { BannerProps } from '@central/ui/src/components/banner/banner.types';
  import styles from '@central/ui/src/components/banner/banner.styles.module.scss';

  type $$Props = Component<HTMLDivElement> & BannerProps;

  export let status: BannerProps['status'] = 'primary';
  export let marginBottom: BannerProps['marginBottom'] = 'unset';
  export let columnGap: BannerProps['columnGap'] = 'unset';
  export let rowGap: BannerProps['rowGap'] = 'unset';
  export let fontWeight: BannerProps['fontWeight'] = 'bold';
</script>

<!--
  @component
  ### Banner component

  **Example**
  ```jsx
    <Banner>
      <span slot="title">Important</span>
      <span slot="content">Important message</span>
    </Banner>
  ```

  @param status - Status variant. __Default: "default"__
  @param marginBottom - Prop margin-bottom. __Default: "unset"__
  @param columnGap - Prop column-gap. __Default: "unset"__
  @param rowGap - Prop row-gap. __Default: "unset"__
  @param fontWeight - Prop font-weight. __Default: "bold"__
-->
<div class={styles['main-container']} data-marginBottom={marginBottom}>
  <div class={styles['title-container']} data-statusBg={status}>
    <slot name="title" />
  </div>

  <div
    class={styles['content-container']}
    data-statusBorder={status}
    data-columnGap={columnGap}
    data-rowGap={rowGap}
    fata-fontWeight={fontWeight}
    {...$$restProps}
  >
    <slot name="content" />
  </div>
</div>
