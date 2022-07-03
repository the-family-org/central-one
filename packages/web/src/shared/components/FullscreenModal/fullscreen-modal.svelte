<script lang="ts">
  import type { Component } from '$types';
  import LinkButton from '../LinkButton/link-button.component.svelte';
  // import type { FullscreenModalProps } from '@central/ui/src/components/fullscreen-modal/fullscreen-modal.types';
  // import styles from '@central/ui/src/components/fullscreen-modal/fullscreen-modal.styles.module.scss';

  // type $$Props = Component<HTMLDivElement> & FullscreenModalProps;
  type $$Props = Component<HTMLDivElement> & {
    openStatus: boolean;
    handleOpenAndClose: () => void;
    showControls?: boolean;
    defaultPadding?: boolean;
  };

  // export let openStatus: FullscreenModalProps['openStatus'];
  // export let handleOpenAndClose: FullscreenModalProps['handleOpenAndClose'] = false;
  // export let showControls: FullscreenModalProps['showControls'] = false;
  // export let defaultPadding: FullscreenModalProps['defaultPadding'] = true;
  export let openStatus: boolean;
  export let handleOpenAndClose: () => void;
  export let showControls: boolean = false;
  export let defaultPadding: boolean = true;
</script>

<!--
  @component
  ### Fullscreen modal component

  @param openStatus - Show or hide status.
  @param handleOpenAndClose - Function to change the status.
  @param showControls - Show modal controls. __Default: false__
  @param defaultPadding - Show default padding. __Default: true__
-->
<div
  class="main-container"
  data-openStatus={openStatus}
  on:click|self={handleOpenAndClose}
  {...$$restProps}
>
  <div class="modal-container">
    <div class="controls" data-showControls={showControls}>
      <LinkButton on:click={handleOpenAndClose}>X</LinkButton>
    </div>

    <div class="slot-container" data-defaultPadding={defaultPadding}>
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  .main-container {
    position: fixed;

    &[data-openStatus='false'] {
      display: none;
    }

    &[data-openStatus='true'] {
      display: flex;
    }

    justify-content: center;
    align-items: center;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: #1b1b1b9e;
  }

  .modal-container {
    display: flex;
    flex-direction: column;

    overflow: auto;
    max-width: 94vw;
    max-height: 94vh;
    min-width: 40px;
    min-height: 40px;
    margin: 22px;
    /* margin: auto; */
    border: 1px solid var(--color-border);

    background: var(--color-background);
  }

  .controls {
    &[data-showControls='false'] {
      display: none;
    }

    &[data-showControls='true'] {
      display: flex;
    }

    justify-content: flex-end;
    text-align: right;

    padding: 0 8px;
    border-bottom: 1px solid var(--color-border);
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-bold);

    background: var(--color-background-secondary);
  }

  .slot-container {
    display: flex;
    flex-direction: column;

    flex: 1;
    width: 100%;
    height: 100%;

    &[data-defaultPadding='true'] {
      padding: var(--spacing-m);
    }
  }
</style>
