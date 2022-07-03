<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';

  import { ThemeContent } from '../../components/ThemeContent';
</script>

<Header sessionTitle={$LL.theme.themeSettings()} />

<ThemeContent />

<Footer />
