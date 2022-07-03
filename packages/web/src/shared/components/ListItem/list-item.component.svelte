<script lang="ts">
  import type { Component } from '$types';

  type $$Props = Component<HTMLLIElement>;
</script>

<!--
  @component
  ### A custom `<li>` tag
-->
<li {...$$restProps}>
  <slot />
</li>
