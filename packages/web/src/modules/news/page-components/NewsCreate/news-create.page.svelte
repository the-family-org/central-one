<script lang="ts">
  import { LL, locale } from '$lang/i18n-svelte';
  import { Path } from '$config';
  import { nav } from '$utils';

  import { Button } from '$components/Button';
  import { Checkbox } from '$components/Checkbox';
  import { Footer } from '$components/Footer';
  import { FormUserTypesWithAccess } from '$components/FormUserTypesWithAccess';
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
  import { TitleH2 } from '$components/TitleH2';
  import { UploadInput } from '$components/UploadInput';

  let selectedCategoryType: string;
  let selectedNewsType: string;
  let files: FileList;
  let description: string = '';
  $: descriptionLength = description.length;

  const categories = [
    'sports',
    'memories',
    'books',
    'gastronomy',
    'series',
    'movies',
    'music',
    'food',
    'culture',
    'health',
    'tourism',
    'crime',
    'science',
    'technology',
    'business',
    'economy',
    'politics',
    'humor',
    'meteorology',
  ] as const;

  const feelings = [
    'celebrant',
    'passionate',
    'happy',
    'funny',
    'cool',
    'silly',
    'excited',
    'energized',
    'powerful',
    'peaceful',
    'optimistic',
    'thankful',
    'sensitive',
    'calm',
    'anxious',
    'sad',
    'disappointed',
    'angry',
    'proud',
    'surprised',
    'shocked',
    'confused',
    'scared',
    'bored',
    'sick',
    'seasick',
    'jealous',
    'curious',
    'embarrassed',
    'kind',
    'alert',
    'investigative',
  ] as const;
</script>

<Header sessionTitle={$LL.news.news()} />
<Line />

<PageContent>
  <TitleH1 strong marginTop="s2">{$LL.news.createNews.newsCreation()}</TitleH1>

  <form class="form">
    <div class="step">
      <label for="news-title-input">
        <TitleH2 strong>{$LL.news.createNews.title()}</TitleH2>
      </label>

      <TextInput id="news-title-input" value="" />
    </div>

    <div class="step">
      <label for="image-file">
        <TitleH2 strong>{$LL.news.createNews.image()}</TitleH2>
      </label>

      <UploadInput id="image-file" bind:files />
    </div>

    <div class="step">
      <TitleH2 strong>
        {$LL.news.createNews.mainNewsOfTheEdition.mainNewsOfTheEdition()}
      </TitleH2>

      <Paragraph marginBottom="s3">
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
        <TitleH2 strong>{$LL.news.createNews.category.category()}</TitleH2>
      </label>

      <Select bind:value={selectedCategoryType} id="news-category">
        <option value="others" selected>
          {$LL.news.createNews.category.other()}
        </option>

        {#each categories as category}
          <option value={category + '-category'}>
            {$LL.news.createNews.category[category]()}
          </option>
        {/each}
      </Select>
    </div>

    <div class="step short-size">
      <label for="news-type">
        <TitleH2 strong>{$LL.news.createNews.newsType.newsType()}</TitleH2>
      </label>

      <Paragraph>
        {$LL.news.createNews.newsType.newsTypeMessage()}
      </Paragraph>

      <Select bind:value={selectedNewsType} id="news-type">
        <option value="other-feeling" selected>
          {$LL.news.createNews.feeling.other()}
        </option>

        {#each feelings as feeling}
          <option value={feeling + '-feeling'}>
            {$LL.news.createNews.feeling[feeling]()}
          </option>
        {/each}
      </Select>
    </div>

    <div class="step">
      <TitleH2 strong>
        {$LL.news.createNews.contentCharacteristics.contentCharacteristics()}
      </TitleH2>

      <Paragraph marginBottom="s3">
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
    </div>

    <div class="step">
      <FormUserTypesWithAccess />
    </div>

    <div class="step">
      <TitleH2 strong>
        {$LL.news.createNews.whenWillBePublished.whenWillBePublished()}
      </TitleH2>

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
        <TitleH2 strong>
          {$LL.news.createNews.shortDescription.shortDescription()}
        </TitleH2>
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
        <TitleH2 strong>{$LL.news.createNews.content()}</TitleH2>
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
