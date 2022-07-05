<script lang="ts">
  import { Line } from '$components/Line';
  import { ListItem } from '$components/ListItem';
</script>

<!--
  @component
  ### activity list item component

  **Example**
  ```ts
  <List>
    <ActivityListItem>
      <span slot="date">20.jun.2025</span>
      <span slot="user">@user</span>
      <span slot="activity">Created a post</span>
      <span slot="extra-data"><a href="#">Link</a></span>
    </ActivityListItem>
  </List>
  ```

  @param date - slot
  @param user - slot
  @param activity - slot
  @param extra-data - slot
-->
<ListItem>
  <Line neutral heightSize="s3" pageContentSize={false} />

  <div class="activity-header">
    <slot name="date" />, <slot name="user" /> -
    <span class="activity"><slot name="activity" /></span>
  </div>

  <div class="activity-extra-data">
    <slot name="extra-data" />
  </div>
</ListItem>

<style lang="scss">
  .activity-header {
    margin-top: var(--spacing-s2);
  }

  .activity {
    font-weight: var(--font-weight-bold);
  }

  .activity-extra-data {
    margin-left: 2px;
    padding-left: var(--spacing-s);
    border-left: 8px solid var(--color-border);
    font-size: var(--font-size-m);
  }
</style>
