<script lang="ts">
  import type { Component } from '$types';
  import type { LinkProps } from '@central/ui/src/components/link/link.types';
  import styles from '@central/ui/src/components/link/link.styles.module.scss';

  type $$Props = Component<HTMLAnchorElement> & LinkProps & { href: string };

  export let linkType: LinkProps['linkType'] = 'default';
  export let href: string;
</script>

<!--
  @component
  ### The `<a>` html tag with custom props

  @param linkType - Link type. __Default: "default"__
-->
<a {href} class={styles.container} data-linkType={linkType} {...$$restProps}>
  <slot />
</a>
