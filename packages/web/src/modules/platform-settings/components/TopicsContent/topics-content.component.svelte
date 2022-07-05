<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Paragraph } from '$components/Paragraph';
  import { Radio } from '$components/Radio';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH3 } from '$components/TitleH3';
</script>

<div class="content-group">
  <TitleH1 strong marginBottom="s3">
    {$LL.platformSettings.topicsSection.title()}
  </TitleH1>

  <Paragraph>
    {$LL.platformSettings.topicsSection.message()}
  </Paragraph>
</div>

<div class="content-group">
  <TitleH3 strong>
    {$LL.platformSettings.topicsSection.chatRoomsOnTopics()}
  </TitleH3>

  <Paragraph>
    {$LL.platformSettings.topicsSection.chatRoomsOnTopicsMessage()}
  </Paragraph>

  <div class="row">
    <Radio name="guest-topic-chat" value="" checked />
    <span>
      {$LL.platformSettings.topicsSection.enableChatRoomWithinTopics()}
    </span>
  </div>

  <div class="row">
    <Radio name="guest-topic-chat" value="" />
    <span>{$LL.platformSettings.topicsSection.disableChatroomOnTopics()}</span>
  </div>
</div>

<style lang="scss">
  .content-group {
    display: flex;
    flex-direction: column;

    gap: var(--gap-m);
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: var(--gap-s);
  }
</style>
