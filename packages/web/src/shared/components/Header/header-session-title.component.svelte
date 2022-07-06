<script lang="ts">
  import { TitleH2 } from '../TitleH2';
</script>

<div class="container">
  <div class="title-container">
    <TitleH2 fontSize="l2" style="padding: 6px 0;"><slot /></TitleH2>
  </div>
</div>

<style lang="scss">
  $minHeight: 50px;
  $itemMinMarginRight: 8px;
  $gap: var(--gap-s);

  .container {
    display: inline-block;
    vertical-align: middle;

    color: var(--color-header-foreground);
  }

  .title-container {
    display: flex;
    align-items: center;

    min-height: $minHeight;
    margin-right: $itemMinMarginRight;

    color: var(--color-header-foreground);
    cursor: default;
  }
</style>
