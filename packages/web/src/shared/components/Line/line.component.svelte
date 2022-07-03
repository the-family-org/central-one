<script lang="ts">
  export let pageContentSize: boolean = true;
  export let neutral: boolean = false;
  export let heightSize: 's3' | 's2' | 's' | 'm' = 'm';
</script>

<!--
  @component
  ### Line component

  @param pageContentSize - If true, the line will have the default page width and padding. __Default: true__
  @param neutral - Set a neutral color. __Default: false__
  @param heightSize - Height size. __Default: "m"__
-->
<div
  class="container"
  data-heightSize={heightSize}
  data-pageContentSize={pageContentSize}
>
  <div class="content" data-neutral={neutral} />
</div>

<style lang="scss">
  .container {
    $heightM: 10px;
    $heightS: 4px;
    $heightS2: 2px;
    $heightS3: 1px;

    display: flex;

    width: 100%;

    &[data-heightSize='m'] {
      max-height: $heightM;
      min-height: $heightM;
      height: $heightM;
    }

    &[data-heightSize='s'] {
      max-height: $heightS;
      min-height: $heightS;
      height: $heightS;
    }

    &[data-heightSize='s2'] {
      max-height: $heightS2;
      min-height: $heightS2;
      height: $heightS2;
    }

    &[data-heightSize='s3'] {
      max-height: $heightS3;
      min-height: $heightS3;
      height: $heightS3;
    }

    &[data-pageContentSize='true'] {
      max-width: var(--page-max-width);
      margin: 0 auto;
      padding-left: var(--page-left-padding);
      padding-right: var(--page-right-padding);
    }
  }

  .content {
    display: flex;

    flex: 1;

    &[data-neutral='true'] {
      background-color: var(--color-neutral);
    }

    &[data-neutral='false'] {
      background-color: var(--color-primary);
    }
  }
</style>
