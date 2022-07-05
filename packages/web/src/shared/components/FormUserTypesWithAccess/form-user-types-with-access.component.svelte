<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Checkbox } from '../Checkbox';
  import { Paragraph } from '../Paragraph';
  import { TitleH2 } from '../TitleH2';

  // TODO
</script>

<!--
  @component
  ### "FormUserTypesWithAccess" component
-->

<TitleH2 strong>
  {$LL.forms.userTypesWithAccess.title()}
</TitleH2>

<Paragraph marginBottom="s3">
  {$LL.forms.userTypesWithAccess.message({
    mainAccountType: $LL.accounts.accountType.fullMember(),
  })}
</Paragraph>

<div class="row">
  <div><Checkbox value="" /></div>
  <div>{$LL.accounts.accountType.partnerMember()}</div>
</div>

<div class="row">
  <div><Checkbox value="" /></div>
  <div>{$LL.accounts.accountType.guest()}</div>
</div>

<style lang="scss">
  .row {
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    gap: var(--spacing-s);
  }
</style>
