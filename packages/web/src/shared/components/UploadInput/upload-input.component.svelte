<script lang="ts">
  import type { Component } from '$types';

  import { LL } from '$lang/i18n-svelte';
  import Paragraph from '../Paragraph/paragraph.component.svelte';
  // import type { InputFileProps } from '@central/ui/src/components/input-file/input-file.types';
  // import styles from '@central/ui/src/components/input-file/input-file.styles.module.scss';

  type $$Props = Component<HTMLInputElement> & {
    files: FileList;
  };

  let files: FileList;
</script>

<!--
  @component
  ### A custom `<input type="file">` tag

  @param files
-->
<div class="main-container">
  <div class="content-container">
    <div class="upload-button" data-positive={!!files}>
      {#if files}
        ✔
      {:else}
        Upload
      {/if}
    </div>

    <div class="files-container">
      {#if !files}
        <Paragraph>{$LL.common.clickHereToUpload()}</Paragraph>
      {/if}

      {#if files}
        {#each Array.from(files) as file}
          <Paragraph wrap="wrap">{file.name}</Paragraph>
        {/each}
      {/if}
    </div>
  </div>

  <input
    type="file"
    class="input"
    data-rightSpacing={!!files}
    bind:files
    {...$$restProps}
  />
</div>

<style lang="scss">
  .main-container {
    position: relative;
    display: flex;
    flex-direction: column;

    min-height: 110px;
    border: 3px dashed var(--color-strong-border);
  }

  .content-container {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100%;
    padding: 8px;
  }

  .files-container {
    display: flex;
    flex-direction: column;
    overflow: auto;

    width: 100%;
    max-height: 200px;
    padding-left: 8px;
    gap: var(--gap-l);
    border-left: 3px dashed var(--color-strong-border);
  }

  .upload-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    min-width: max-content;

    gap: var(--gap-s2);
    margin-right: 8px;
    padding: 4px 8px;
    font-size: var(--font-size-m);
    font-family: var(--font-family-base);
    font-weight: var(--font-weight-regular);

    color: var(--color-foreground-contrast);

    &[data-positive='true'] {
      height: auto;

      background: var(--color-positive);
    }

    &[data-positive='false'] {
      height: min-content;

      background: var(--color-neutral);
    }
  }

  .input {
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    opacity: 0;
    outline: none;
    appearance: none;
    cursor: pointer;

    &[data-rightSpacing='true'] {
      width: calc(100% - 28px);
    }
  }
</style>
