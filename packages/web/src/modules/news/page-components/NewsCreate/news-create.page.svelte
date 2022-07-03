<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
  import { nav } from '$utils';

  import { Button } from '$components/Button';
  import { Checkbox } from '$components/Checkbox';
  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { LeftBorderDiv } from '$components/LeftBorderDiv';
  import { Line } from '$components/Line';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { Radio } from '$components/Radio';
  import { Select } from '$components/Select';
  import { Textarea } from '$components/Textarea';
  import { TextInput } from '$components/TextInput';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
  import { UploadInput } from '$components/UploadInput';

  let selectedNewsType: string;
  let files: FileList;
  let description: string = '';
  $: descriptionLength = description.length;
</script>

<Header sessionTitle={$LL.news.news()} />
<Line />

<PageContent>
  <TitleH1 strong marginTop="l">{$LL.news.createNews.newsCreation()}</TitleH1>

  <form class="form">
    <div class="step">
      <label for="news-title-input">
        <TitleH3 strong>{$LL.news.createNews.title()}</TitleH3>
      </label>

      <TextInput id="news-title-input" value="" />
    </div>

    <div class="step">
      <label for="image-file">
        <TitleH3 strong>{$LL.news.createNews.image()}</TitleH3>
      </label>

      <UploadInput id="image-file" bind:files />
    </div>

    <div class="step">
      <TitleH3 strong
        >{$LL.news.createNews.mainNewsOfTheEdition.mainNewsOfTheEdition()}</TitleH3
      >

      <Paragraph>
        {@html $LL.news.createNews.mainNewsOfTheEdition.mainNewsOfTheEditionMessage()}
      </Paragraph>

      <label for="no-main-of-edition" class="row">
        <Radio
          id="no-main-of-edition"
          name="main-of-edition"
          value=""
          checked
        />
        {$LL.news.createNews.mainNewsOfTheEdition.notTheMainNews()}
      </label>

      <label for="yes-main-of-edition" class="row">
        <Radio id="yes-main-of-edition" name="main-of-edition" value="" />
        {$LL.news.createNews.mainNewsOfTheEdition.yesTheMainNews()}
      </label>
    </div>

    <div class="step short-size">
      <label for="news-category">
        <TitleH3 strong>{$LL.news.createNews.category.category()}</TitleH3>
      </label>

      <Select bind:value={selectedNewsType} id="news-category">
        <option value="lorem-ipsum-1" selected
          >{$LL.news.createNews.category.sports()}</option
        >
        <option value="lorem-ipsum-2"
          >{$LL.news.createNews.category.politics()}</option
        >
        <option value="lorem-ipsum-3">Lorem ipsum</option>
        <option value="lorem-ipsum-4">Lorem ipsum</option>
        <option value="lorem-ipsum-5">Lorem ipsum</option>
      </Select>
    </div>

    <div class="step short-size">
      <label for="news-type">
        <TitleH3 strong>{$LL.news.createNews.newsType.newsType()}</TitleH3>
      </label>

      <Paragraph>
        {$LL.news.createNews.newsType.newsTypeMessage()}
      </Paragraph>

      <Select bind:value={selectedNewsType} id="news-type">
        <option value="lorem-ipsum-1" selected
          >{$LL.news.createNews.newsType.happiness()}</option
        >
        <option value="lorem-ipsum-2"
          >{$LL.news.createNews.newsType.anger()}</option
        >
        <option value="lorem-ipsum-3"
          >{$LL.news.createNews.newsType.sadness()}</option
        >
        <option value="lorem-ipsum-4">Lorem ipsum</option>
        <option value="lorem-ipsum-5">Lorem ipsum</option>
        <option value="lorem-ipsum-6">Lorem ipsum</option>
      </Select>
    </div>

    <div class="step">
      <TitleH3 strong
        >{$LL.news.createNews.contentCharacteristics.contentCharacteristics()}</TitleH3
      >

      <Paragraph>
        {$LL.news.createNews.contentCharacteristics.contentCharacteristicsMessage()}
      </Paragraph>

      <label for="underage-indecent-content" class="row">
        <Checkbox id="underage-indecent-content" value="" />
        {$LL.news.createNews.contentCharacteristics.inappropriateForUnderage()}
      </label>

      <label for="a-member-of-the-platform-is-mentioned" class="row">
        <Checkbox id="a-member-of-the-platform-is-mentioned" value="" />
        {$LL.news.createNews.contentCharacteristics.aPlatformMemberIsMentioned()}
      </label>

      <label for="group-member-is-protagonist" class="row">
        <Checkbox id="group-member-is-protagonist" value="" />
        {$LL.news.createNews.contentCharacteristics.theProtagonistIsAMemberOfThePlatform()}
      </label>

      <label for="loooooorem-ipsuuuum" class="row">
        <Checkbox id="loooooorem-ipsuuuum" value="" />
        Lorem ipsum dolor sit amet
      </label>
    </div>

    <div class="step">
      <TitleH3 strong
        >{$LL.news.createNews.whenWillBePublished.whenWillBePublished()}</TitleH3
      >

      <label for="draft-publication-date" class="row">
        <Radio
          id="draft-publication-date"
          name="publication-date"
          value=""
          checked
        />
        {$LL.news.createNews.whenWillBePublished.saveToDrafts()}
      </label>

      <label for="next-publication-date" class="row">
        <Radio id="next-publication-date" name="publication-date" value="" />
        {$LL.news.createNews.whenWillBePublished.nextEdition()}
      </label>

      <label for="after-next-publication-date" class="row">
        <Radio
          id="after-next-publication-date"
          name="publication-date"
          value=""
        />
        {$LL.news.createNews.whenWillBePublished.afterNextEdition()}
      </label>
    </div>

    <div class="step">
      <label for="short-description">
        <TitleH3 strong
          >{$LL.news.createNews.shortDescription.shortDescription()}</TitleH3
        >
      </label>

      <Paragraph>
        {$LL.news.createNews.shortDescription.shortDescriptionMessage()}
      </Paragraph>

      <Textarea
        maxlength={300}
        rows={4}
        id="short-description"
        bind:value={description}
      />
      {descriptionLength}
      {$LL.news.createNews.shortDescription.charactersTypedMessage({
        maxNumber: 300,
      })}
    </div>

    <div class="step">
      <label for="news-content">
        <TitleH3 strong>{$LL.news.createNews.content()}</TitleH3>
      </label>

      <Textarea rows={14} id="news-content" value="" />
    </div>

    <div class="column short-size">
      <LeftBorderDiv>
        {$LL.common.warningMessage3()}
      </LeftBorderDiv>

      <Button
        on:click={() => {
          nav({ locale: $locale, path: Path.NEWS_CREATED });
        }}>{$LL.news.createNews.createNews()}</Button
      >
    </div>
  </form>
</PageContent>

<Footer />

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;

    max-width: 690px;
    gap: var(--spacing-l4);
  }

  label {
    max-width: fit-content;
  }

  .step {
    display: flex;
    flex-direction: column;

    gap: var(--spacing-s);
  }

  .short-size {
    display: flex;
    max-width: 470px;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: var(--spacing-s);
  }

  .column {
    display: flex;
    flex-direction: column;

    gap: var(--spacing-s);
  }
</style>
