<script lang="ts">
  import type { Component } from '$types';
  import type { TextareaProps } from '@central/ui/src/components/textarea/textarea.types';
  import styles from '@central/ui/src/components/textarea/textarea.styles.module.scss';

  type $$Props = Component<HTMLTextAreaElement> &
    TextareaProps & {
      value: string;
    };

  export let value: string;
</script>

<!--
  @component
  ### A custom `<textarea>` tag

  @param value
-->
<textarea class={styles.container} bind:value {...$$restProps} />
