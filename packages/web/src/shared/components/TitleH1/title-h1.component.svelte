<script lang="ts">
  import type { Component } from '$types';
  import type { TitleH1Props } from '@central/ui/src/components/title-h1/title-h1.types';
  import styles from '@central/ui/src/components/title-h1/title-h1.styles.module.scss';

  type $$Props = Component<HTMLTitleElement> & TitleH1Props;

  export let fontSize: TitleH1Props['fontSize'] = 'l5';
  export let fontWeight: TitleH1Props['fontWeight'] = 'bold';
  export let textAlign: TitleH1Props['textAlign'] = 'unset';
  export let marginTop: TitleH1Props['marginTop'] = 'unset';
  export let marginBottom: TitleH1Props['marginBottom'] = 'unset';
  export let adaptiveSize: TitleH1Props['adaptiveSize'] = true;
  export let strong: TitleH1Props['strong'] = false;
</script>

<!--
  @component
  ### A custom `<h1>` tag

  @param fontSize - Font size. __Default: "l5"__
  @param fontWeight - Font weight. __Default: "bold"__
  @param textAlign - Text align. __Default: "unset"__
  @param marginTop - Margin bottom. __Default: "unset"__
  @param marginBottom - Margin bottom. __Default: "unset"__
  @param adaptiveSize - Font size changes based on the screen size. __Default: true__
  @param strong - Set the default strong foregorund color. __Default: false__
-->
<h1
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
</h1>
