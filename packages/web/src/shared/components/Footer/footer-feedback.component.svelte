<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
  import { Link } from '../Link';
  import { Paragraph } from '../Paragraph';
  import { TitleH3 } from '../TitleH3';
</script>

<TitleH3 marginBottom="s" fontSize="l">
  {$LL.feedback.feedback()}
</TitleH3>

<Paragraph style="max-width: 260px; top: -4px; margin-top: -3px;" fontSize="s">
  {$LL.feedback.description()}{' '}
  <Link href={'/' + $locale + Path.PLATFORM_FEEDBACK}>
    {$LL.feedback.postYourCommentHere()}
  </Link>.
</Paragraph>
