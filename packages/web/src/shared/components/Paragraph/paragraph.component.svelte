<script lang="ts">
  import type { Component } from '$types';
  import type { ParagraphProps } from '@central/ui/src/components/paragraph/paragraph.types';
  import styles from '@central/ui/src/components/paragraph/paragraph.styles.module.scss';

  type $$Props = Component<HTMLParagraphElement> & ParagraphProps;

  export let fontSize: ParagraphProps['fontSize'] = 'm';
  export let fontWeight: ParagraphProps['fontWeight'] = 'unset';
  export let textAlign: ParagraphProps['textAlign'] = 'unset';
  export let marginBottom: ParagraphProps['marginBottom'] = 'unset';
  export let adaptiveSize: ParagraphProps['adaptiveSize'] = true;
</script>

<!--
  @component
  ### A custom `<p>` tag

  @param fontSize - Font size. __Default: "m"__
  @param fontWeight - Font weight. __Default: "unset"__
  @param textAlign - Text align. __Default: "unset"__
  @param marginBottom - Margin bottom. __Default: "unset"__
  @param adaptiveSize - Font size changes based on the screen size. __Default: true__
-->
<p
  class={styles.container}
  data-fontSize={fontSize}
  data-fontWeight={fontWeight}
  data-textAlign={textAlign}
  data-marginBottom={marginBottom}
  data-adaptiveSize={adaptiveSize}
  {...$$restProps}
>
  <slot />
</p>
