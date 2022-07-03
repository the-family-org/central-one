<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';

  import { Button } from '$components/Button';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { Link } from '$components/Link';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Textarea } from '$components/Textarea';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
</script>

<Header sessionTitle={$LL.feedback.feedback()} />
<Line />

<PageContent rowGap="none" style="max-width: 950px;">
  <div class="feedback">
    <div class="feedback-data">
      <div class="row">
        <span class="label">{$LL.feedback.author()}:</span> @ame - Amelia Doe
      </div>

      <div class="row">
        <span class="label">{$LL.feedback.publicationDate()}:</span> 30.jun.2022
      </div>

      <div class="row">
        <span class="label">{$LL.feedback.lastInteraction()}:</span> 5.jul.2002
      </div>
    </div>

    <TitleH1 strong>{$LL.feedback.exampleOne.title()}</TitleH1>

    <Paragraph>
      {$LL.feedback.exampleOne.message()}
    </Paragraph>
  </div>

  <Line neutral pageContentSize={false} />

  <div class="messages-container">
    <TitleH2 fontSize="l3" marginBottom="s2">{$LL.feedback.messages()}</TitleH2>

    <div class="message">
      <div>
        <span class="label">5.jul.2002</span> @john - John Doe
      </div>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        laboriosam saepe ipsum magnam culpa laborum molestias enim at
        dignissimos facilis similique repellendus voluptate veritatis, quidem
        perspiciatis corrupti.
      </Paragraph>
    </div>

    <Line neutral heightSize="s3" pageContentSize={false} />

    <div class="message">
      <div>
        <span class="label">2.jul.2022</span> @jane - Jane Doe
      </div>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        laboriosam saepe ipsum magnam culpa laborum molestias enim at
        dignissimos facilis similique repellendus voluptate veritatis, quidem
        perspiciatis corrupti.
      </Paragraph>
    </div>

    <Line neutral heightSize="s3" pageContentSize={false} />

    <div class="message">
      <div>
        <sapn class="label">1.jul.2022</sapn> @geo - George Doe
      </div>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        laboriosam saepe ipsum magnam culpa laborum molestias enim at
        dignissimos facilis similique repellendus voluptate veritatis, quidem
        perspiciatis corrupti.
      </Paragraph>
    </div>
  </div>

  <div>
    <Line neutral pageContentSize={false} />
    <div class="reply-container">
      <span>{$LL.feedback.writeMessage()}</span>

      <Textarea rows={7} value="" />

      <div class="right">
        <Button>{$LL.feedback.answer()}</Button>
      </div>
    </div>
  </div>

  <div class="nav-links">
    <List rowGap="l" listType="disc">
      <ListItem>
        <Link href={'/' + $locale + Path.PLATFORM_FEEDBACK}>
          {$LL.feedback.createNewFeedback()}
        </Link>
      </ListItem>

      <ListItem>
        <Link href={'/' + $locale + Path.HOME_PAGE}>
          {$LL.feedback.goToHomePage()}
        </Link>
      </ListItem>
    </List>
  </div>
</PageContent>

<Footer marginTop={false} />

<style lang="scss">
  $padding: var(--spacing-l);

  .feedback {
    display: flex;
    flex-direction: column;

    padding: var(--spacing-s2) $padding var(--spacing-l) $padding;
    margin-bottom: var(--spacing-l);
    gap: var(--gap-m);
  }

  .feedback-data {
    display: flex;
    flex-direction: column;

    margin-bottom: var(--spacing-m);
  }

  .messages-container {
    display: flex;
    flex-direction: column;

    padding: $padding;
    margin-bottom: var(--spacing-s);
    gap: var(--gap-l);
  }

  .message {
    display: flex;
    flex-direction: column;

    gap: var(--gap-s3);
  }

  .reply-container {
    display: flex;
    flex-direction: column;

    padding: $padding;
    margin-bottom: var(--spacing-s2);

    background: var(--color-background-secondary);
  }

  .label {
    font-weight: var(--font-weight-bold);
    padding-right: var(--spacing-s2);
  }

  .nav-links {
    display: flex;
    flex-direction: column;

    margin-top: var(--spacing-l);
    margin-bottom: var(--spacing-m);
  }

  .right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>
