<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { LinkButton } from '$components/LinkButton';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
  import { TitleH3 } from '$components/TitleH3';
</script>

<Header sessionTitle="##################" />
<Line />

<PageContent>
  <div class="group-container">
    <TitleH1>Lorem ipsum</TitleH1>

    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
      obcaecati, velit a cumque nam, quae tempora aperiam error ex commodi nisi
      totam voluptatem magnam recusandae aut modi aliquid delectus ipsam.
    </Paragraph>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .group-container {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }
</style>
