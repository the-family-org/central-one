<!--
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************

    WARNING

    This code is a big mess as it was created quickly, and
    in a single file, just to exemplify the idea.
    This page will be deleted and recreated in order to be
    implemented in its own domain and will not use Svelte.

  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
  *********************************************************
-->
<script lang="ts">
  import { page } from '$app/stores';
  import { LL, locale } from '$lang/i18n-svelte';
  import { locales } from '$lang/i18n-util';
  import { switchLocale } from '$lang/switch-locale';

  import { Path, env } from '$config';

  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';

  let warningMessage: boolean | 'transition' = true;
  let intervalCount: number = 9;
  let redirectCount: number = intervalCount - 3;

  const showWarning = () => {
    const handleIntervalCount = () => {
      intervalCount = intervalCount - 1;

      if (redirectCount !== 0) {
        redirectCount = redirectCount - 1;
      }

      if (intervalCount === 3) {
        warningMessage = 'transition';
      }

      if (intervalCount === 0) {
        clearInterval(redirectInterval);
        warningMessage = false;
      }
    };

    const redirectInterval = setInterval(handleIntervalCount, 1000);
  };

  showWarning();

  const handleLocale = (
    newLocale: Locales,
    updateHistoryState: boolean,
    pathname?: string,
  ) => {
    switchLocale(newLocale, $locale, updateHistoryState, pathname);
  };

  // Update locale when navigating via browser back/forward buttons
  const handlePopStateEvent = async ({ state }: PopStateEvent) =>
    handleLocale(state.locale, false);

  // Update locale when page store changes
  $: handleLocale($page.params.lang as Locales, false);
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=League+Gothic&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="warning-message-container" data-show={warningMessage}>
  <div>
    <TitleH1 marginBottom="m">
      {$LL.news.newsReader.warning()}
      <b class="count">{redirectCount}</b>
    </TitleH1>

    <Paragraph marginBottom="l5" fontSize="l">
      {@html $LL.news.newsReader.warningMessage()}
    </Paragraph>
  </div>
</div>

{#if !warningMessage || warningMessage === 'transition'}
  <main class="main-container">
    <div class="newspaper-container">
      <div class="content-container">
        <div class="header">
          <img
            src="/images/doe-prophet-example.svg"
            class="header-title"
            width="100%"
            alt="Newspaper title"
          />

          <div class="row edition-row">
            <div>✶ {$LL.news.newsReader.edition()}: 2</div>

            <div>{$LL.news.newsReader.postDate()}</div>

            <div>
              {#each locales as targetLang, i}
                {#if i !== 0} ❙ {/if}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                  href="#"
                  disabled={targetLang === $locale}
                  on:click={() =>
                    handleLocale(targetLang, true, location.pathname)}
                  >{$LL.language.originalName[targetLang]()}</a
                >{' '}
              {/each}
            </div>

            <div>
              <a href={'/' + $locale + Path.HOME_PAGE}
                >{$LL.news.newsReader.goToPlatform()}</a
              > ✶
            </div>
          </div>

          <div class="newspaper-content-body">
            <div class="main-news-content-container">
              <div class="main-news-top-container">
                <div>
                  <h1 class="main-news-title">
                    {$LL.news.newsReader.example2.title()}
                  </h1>

                  <p class="author">
                    <b class="finger">☞</b>
                    {$LL.news.newsReader.by()}: Jane Doe - @jane
                  </p>

                  <p>
                    {@html $LL.news.newsReader.example2.part1()}
                  </p>
                </div>

                <img
                  class="main-news-image"
                  src="/images/baby-example.gif"
                  alt="Baby"
                  width="327"
                  height="279"
                />
              </div>

              <div class="row">
                <div>
                  <p>
                    {@html $LL.news.newsReader.example2.part2()}
                  </p>

                  <svg
                    version="1.0"
                    width="174"
                    height="30"
                    viewBox="0 0 130.5 22.5"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                      d="M33 1c-3.8 1.4-4.8 2-10.2 7.6a34.3 34.3 0 0 1-8 6.6 40 40 0 0 1-12.4 3.6C.7 18.8-.4 20 0 21.1c.7 1.9 9.5.3 16-3 2.5-1.1 4.6-2.9 8.5-6.7 3-3.2 6.1-5.7 7.7-6.5 2.9-1.5 8.5-2.3 9-1.4.3.3.2.5-.1.5-1.2 0-4.1 2.7-5 4.8-2.5 4.9-1 9.2 3.9 11.7 7.4 3.8 16.6.3 24.8-9.3 4.3-5.1 8-7.4 12.6-8 3.9-.4 4.6.1 2.1 1.7a10 10 0 0 0-4.6 8.8c.3 3.3 1.9 5.3 5.2 7 2.5 1.2 3.3 1.3 6.8 1.2 7-.4 10.4-2.6 20-13 1.7-1.8 3.7-3.4 5.4-4.1 3-1.4 9-2.3 9-1.3 0 .3-.3.5-.6.5-1 0-4.3 3.4-5.1 5.4-2.1 4.5-.5 8.7 4.1 11a9 9 0 0 0 5.4 1.4c2.3-.1 2.5-.2 2.5-1.4 0-1.1-.2-1.4-2.3-1.6-5.4-.8-8.1-3.5-7.1-7.2.9-3.3 4.3-5.5 8.3-5.5 2.6 0 4-1 3.1-2.5-1.2-1.9-4.8-3.3-8.9-3.5-7.4-.5-12.7 2-17.9 8.3-6 7.2-10.8 10.2-16.5 10.2-6 0-9-2.8-8-7.1 1-3.3 4-5.2 9.2-5.5 2.3-.2 3.1-1.6 1.9-3C86.4-.3 76.9-1 71 1.8c-3 1.4-4 2.4-11 9.8-7 7.2-15.4 9.3-20.3 5.1-1.2-1-1.4-1.6-1.4-3.5.1-4.2 3.5-7 8.3-7 2 0 3.7-1 3.7-2 0-.3-.7-1-1.4-1.5C45 0 38-.8 33 1Z"
                      stroke-width=".1"
                    /></svg
                  >

                  <p>
                    {@html $LL.news.newsReader.example2.part3()}
                  </p>
                </div>

                <div class="second-place-news">
                  <h3>
                    {@html $LL.news.newsReader.example2.part4SubTitle()}
                  </h3>

                  <p>
                    {@html $LL.news.newsReader.example2.part4()}
                  </p>

                  <p>
                    {@html $LL.news.newsReader.example2.part5()}
                  </p>
                </div>

                <div class="row-with-small-gap">
                  <div>
                    <p>
                      {@html $LL.news.newsReader.example2.part6()}
                    </p>

                    <p>
                      {@html $LL.news.newsReader.example2.part7()}
                    </p>
                  </div>
                  <h2 class="vertical-rl">
                    {$LL.news.newsReader.example2.verticalTitle()}
                  </h2>
                </div>
              </div>
            </div>

            <hr />

            <div class="row">
              <p>
                {@html $LL.news.newsReader.example1.part1()}
              </p>

              <p>
                {@html $LL.news.newsReader.example1.part2A()}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <b
                  ><a
                    href="https://harrypotter.fandom.com/wiki/Daily_Prophet"
                    target="”_blank”">The Daily Prophet</a
                  ></b
                >
                {$LL.news.newsReader.example1.part2B()}
              </p>

              <p>
                {@html $LL.news.newsReader.example1.part3()}
              </p>
            </div>

            <hr class="small" />

            <div class="row">
              <p>
                {@html $LL.news.newsReader.example1.part4()}
              </p>

              <p>
                {@html $LL.news.newsReader.example1.part5()}
              </p>

              <p>
                {@html $LL.news.newsReader.example1.part6()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
{/if}

<style lang="scss">
  $upColor: #14120df5;
  $titleColor: #0a0906fb;
  $borderColor: #14110beb;
  $firstBg: #342b22;
  $newspaperBg: #d7c8ad;
  $transitionColor: #ffd858;
  $linkColor: #5f1600f2;
  $scrollbarBg: #777058;
  $scrollbarThumb: #b4aa8e;

  .warning-message-container {
    display: none;
    opacity: 0;

    &[data-show='transition'] {
      display: flex;
      animation-name: disappear;
      animation-duration: 3s;

      .count {
        display: none;
      }
    }

    &[data-show='true'] {
      display: flex;
      opacity: 1;
    }

    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    z-index: 99999;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    padding: 20px;

    div {
      display: flex;
      flex-direction: column;
      text-align: justify;

      max-width: 500px;
      margin: 0 auto;
    }

    color: #ffffff;
    background: #020202;

    .count {
      padding-left: 14px;
      color: var(--color-neutral);
      opacity: 0.3;
    }
  }

  @keyframes disappear {
    0% {
      opacity: 1;
    }
    45% {
      opacity: 1;
      color: $transitionColor;
      background: $transitionColor;
    }
    100% {
      opacity: 0;
      color: $transitionColor;
      background: $transitionColor;
    }
  }

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    flex: 1;
    max-height: 100vh;
    height: 100vh;
    overflow: auto;

    font-family: 'Delius Swash Caps', cursive;
    font-size: 1.05rem;
    text-align: justify;

    h1,
    h2,
    h3 {
      color: $titleColor;
      font-family: 'League Gothic', sans-serif;
      letter-spacing: 1px;
    }

    h2 {
      font-size: 2.4rem;
    }

    h3 {
      border-bottom: 4px solid $upColor;
      margin-bottom: 8px;
    }

    p {
      padding-bottom: 12px;
    }

    b {
      font-weight: bold;
    }

    a {
      text-decoration: none;
      color: $linkColor;

      &[disabled='true'] {
        cursor: default;
        color: $upColor;
      }

      &:hover {
        filter: brightness(1.4);
      }
    }

    hr {
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 6px solid $borderColor;
      margin-top: 4px;
      margin-bottom: 24px;

      &.small {
        display: inline-flex;

        margin: 0px 165px 12px 165px;
        border-bottom: 5px solid $borderColor;
      }
    }

    background: $firstBg;

    scrollbar-color: $scrollbarThumb $scrollbarBg;
  }

  .newspaper-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 860px;

    color: $upColor;
    background: $newspaperBg;
    background-image: url('/images/texture-example.png');
    box-shadow: 0px 0px 60px 6px inset #68542f82;
  }

  .content-container {
    display: flex;
    flex-direction: column;

    width: 840px;
    padding: 0 28px;
    margin: 0 auto;
  }

  .header {
    display: flex;
    flex-direction: column;

    margin-bottom: 30px;
  }

  .header-title {
    opacity: 0.94;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 0 24px;
  }

  .row-with-small-gap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 0 6px;
  }

  .vertical-rl {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    word-spacing: 6px;
  }

  .edition-row {
    font-size: 0.9rem;
    font-style: italic;
    font-weight: bold;
  }

  .author {
    font-size: 0.9rem;
  }

  .newspaper-content-body {
    display: flex;
    flex-direction: column;

    flex: 1;

    border: 3px solid $borderColor;
    padding: 14px 20px;
  }

  .main-news-top-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 20px 24px;
  }

  .main-news-title {
    font-family: 'League Gothic', sans-serif;

    padding-bottom: 10px;
    line-height: 78px;
    font-size: 68px;
    letter-spacing: 1px;
  }

  .main-news-content-container {
    display: flex;
    flex-direction: column;

    gap: 0 24px;
  }

  .main-news-image {
    padding-top: 10px;
    filter: grayscale(0.7);
  }

  .second-place-news {
    min-width: 192px;
  }

  .finger {
    font-size: 2.5rem;
    line-height: 0.8rem;
    vertical-align: text-bottom;
    vertical-align: -webkit-baseline-middle;
    padding-right: 4px;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-corner {
    background: $scrollbarBg;
  }

  ::-webkit-scrollbar-thumb {
    background: $scrollbarThumb;
  }
</style>
