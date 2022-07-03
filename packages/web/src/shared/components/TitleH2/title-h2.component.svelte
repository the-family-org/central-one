<script lang="ts">
  import type { Component } from '$types';
  import type { TitleH2Props } from '@central/ui/src/components/title-h2/title-h2.types';
  import styles from '@central/ui/src/components/title-h2/title-h2.styles.module.scss';

  type $$Props = Component<HTMLTitleElement> & TitleH2Props;

  export let fontSize: TitleH2Props['fontSize'] = 'l4';
  export let fontWeight: TitleH2Props['fontWeight'] = 'bold';
  export let textAlign: TitleH2Props['textAlign'] = 'unset';
  export let marginTop: TitleH2Props['marginTop'] = 'unset';
  export let marginBottom: TitleH2Props['marginBottom'] = 'unset';
  export let adaptiveSize: TitleH2Props['adaptiveSize'] = true;
  export let strong: TitleH2Props['strong'] = false;
</script>

<!--
  @component
  ### A custom `<h2>` tag

  @param fontSize - Font size. __Default: "l4"__
  @param fontWeight - Font weight. __Default: "bold"__
  @param textAlign - Text align. __Default: "unset"__
  @param marginTop - Margin bottom. __Default: "unset"__
  @param marginBottom - Margin bottom. __Default: "unset"__
  @param adaptiveSize - Font size changes based on the screen size. __Default: true__
  @param strong - Set the default strong foregorund color. __Default: false__
-->
<h2
  class={styles.container}
  data-fontSize={fontSize}
  data-fontWeight={fontWeight}
  data-textAlign={textAlign}
  data-marginTop={marginTop}
  data-marginBottom={marginBottom}
  data-adaptiveSize={adaptiveSize}
  data-strong={strong}
  {...$$restProps}
>
  <slot />
</h2>
