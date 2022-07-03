<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
  import { TitleH3 } from '$components/TitleH3';
  import { Link } from '$components/Link';
  import { Badge } from '$components/Badge';
  import { Path } from '$shared/config';
</script>

<Header sessionTitle={$LL.polls.polls()} />
<Line />

<PageContent>
  <div class="page-group-container">
    <TitleH1 strong marginTop="m">
      {$LL.polls.exampleTwo.title()}
    </TitleH1>

    <div>
      <Badge>{$LL.polls.pollClosed()}</Badge>
    </div>

    <Paragraph>
      {$LL.polls.exampleTwo.message()}
    </Paragraph>
  </div>

  <div class="page-group-container">
    <TitleH2>{$LL.polls.answers()}</TitleH2>

    <div class="graph">
      <div class="girl bar">
        <span>{$LL.polls.girl()}</span> <span><b>75%</b></span>
      </div>

      <div class="boy bar">
        <span>{$LL.polls.boy()}</span> <span><b>25%</b></span>
      </div>
    </div>
  </div>

  <div class="page-group-container">
    <Line neutral heightSize="s3" pageContentSize={false} />

    <TitleH3>
      {$LL.polls.peopleWhoResponded()}: <b>{$LL.polls.girl()}</b>
    </TitleH3>

    <List>
      <ListItem>@isa - Isabella Doe</ListItem>

      <ListItem>@luna - Luna Lovegood</ListItem>

      <ListItem>@john - John Doe</ListItem>
    </List>
  </div>

  <div class="page-group-container">
    <Line neutral heightSize="s3" pageContentSize={false} />

    <TitleH3>
      {$LL.polls.peopleWhoResponded()}: <b>{$LL.polls.boy()}</b>
    </TitleH3>

    <List>
      <ListItem>@ame - Amelia Doe</ListItem>
    </List>
  </div>

  <div class="page-group-container bottom-nav-links">
    <Line neutral pageContentSize={false} />

    <TitleH3 fontSize="m">{$LL.polls.whatDoYouWantToDoNow()}</TitleH3>

    <List listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.POLLS}>{$LL.polls.goToPolls()}</Link>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.HOME_PAGE}>
          {$LL.polls.goToHomePage()}
        </Link>
      </ListItem>
    </List>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .page-group-container {
    display: flex;
    flex-direction: column;

    max-width: 650px;
    gap: var(--gap-m);
  }

  .graph {
    display: flex;
    flex-direction: column;

    gap: var(--gap-s);
    padding: var(--spacing-s) 0;
  }

  .bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    height: 56px;
    padding: 0 var(--spacing-s);
    gap: 0 var(--gap-s3);

    color: var(--color-foreground-contrast);

    span {
      display: flex;
      align-items: center;

      max-height: 24px;
    }
  }

  .girl {
    min-width: 150px;
    width: 75%;

    background: var(--color-positive);
  }

  .boy {
    min-width: 100px;
    width: 25%;

    background: var(--color-secondary);
  }

  .bottom-nav-links {
    margin-top: var(--spacing-l4);
  }
</style>
