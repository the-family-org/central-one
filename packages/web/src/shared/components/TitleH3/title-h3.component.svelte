<script lang="ts">
  import type { Component } from '$types';
  import type { TitleH3Props } from '@central/ui/src/components/title-h3/title-h3.types';
  import styles from '@central/ui/src/components/title-h3/title-h3.styles.module.scss';

  type $$Props = Component<HTMLTitleElement> & TitleH3Props;

  export let fontSize: TitleH3Props['fontSize'] = 'l3';
  export let fontWeight: TitleH3Props['fontWeight'] = 'bold';
  export let textAlign: TitleH3Props['textAlign'] = 'unset';
  export let marginTop: TitleH3Props['marginTop'] = 'unset';
  export let marginBottom: TitleH3Props['marginBottom'] = 'unset';
  export let adaptiveSize: TitleH3Props['adaptiveSize'] = true;
  export let strong: TitleH3Props['strong'] = false;
</script>

<!--
  @component
  ### A custom `<h3>` tag

  @param fontSize - Font size. __Default: "l3"__
  @param fontWeight - Font weight. __Default: "bold"__
  @param textAlign - Text align. __Default: "unset"__
  @param marginTop - Margin bottom. __Default: "unset"__
  @param marginBottom - Margin bottom. __Default: "unset"__
  @param adaptiveSize - Font size changes based on the screen size. __Default: true__
  @param strong - Set the default strong foregorund color. __Default: false__
-->
<h3
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
</h3>
