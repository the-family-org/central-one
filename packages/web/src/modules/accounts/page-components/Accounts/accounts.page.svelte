<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { Footer } from '$components/Footer';
  import { Header } from '$components/Header';
  import { Line } from '$components/Line';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
  import { PageContent } from '$components/PageContent';
  import { Paragraph } from '$components/Paragraph';
  import { TitleH1 } from '$components/TitleH1';
  import { TitleH2 } from '$components/TitleH2';
</script>

<Header sessionTitle={$LL.accounts.accountTypes()} />
<Line />

<PageContent rowGap="l4">
  <div class="page-group-contatiner">
    <TitleH1 marginTop="m" strong>
      {$LL.accounts.aboutPlatformAccounts()}
    </TitleH1>
  </div>

  <div class="page-group-contatiner">
    <TitleH2 strong>
      {$LL.accounts.yourAccountType()}
    </TitleH2>

    <Paragraph>
      {$LL.accounts.youHaveAnAccountOfTheType()}:
      <b>{$LL.accounts.accountType.fullMember()}</b>
    </Paragraph>
  </div>

  <div class="page-group-contatiner">
    <TitleH2 strong>
      {$LL.accounts.platformAccountTypes()}
    </TitleH2>

    <Paragraph marginBottom="s2">
      {$LL.accounts.platformAccountTypesMessage()}
    </Paragraph>

    <List rowGap="l2">
      <ListItem>
        <div class="left-border">
          <div class="data-label">
            {$LL.accounts.accountType.fullMember()}
          </div>

          <div>
            {$LL.accounts.accountDescription.fullMember()}
          </div>
        </div>
      </ListItem>

      <ListItem>
        <div class="left-border">
          <div class="data-label">
            {$LL.accounts.accountType.partnerMember()}
          </div>

          <div>
            {$LL.accounts.accountDescription.partnerMember()}
          </div>
        </div>
      </ListItem>

      <ListItem>
        <div class="left-border">
          <div class="data-label">
            {$LL.accounts.accountType.guest()}
          </div>

          <div>
            {$LL.accounts.accountDescription.guest()}
          </div>
        </div>
      </ListItem>
    </List>
  </div>

  <div class="page-group-contatiner">
    <TitleH2 strong>
      {$LL.accounts.extraPrivilegesForFullMembers()}
    </TitleH2>

    <Paragraph marginBottom="s2">
      {@html $LL.accounts.extraPrivilegesForFullMembersMessage()}
    </Paragraph>

    <List rowGap="l2">
      <ListItem>
        <div class="left-border">
          <div class="data-label">
            {$LL.accounts.privilegeType.administrator()}
          </div>

          <div>
            {$LL.accounts.privilegeDescription.administrator()}
          </div>
        </div>
      </ListItem>

      <ListItem>
        <div class="left-border">
          <div class="data-label">
            {$LL.accounts.privilegeType.matureAge()}
          </div>

          <div>
            {$LL.accounts.privilegeDescription.matureAge()}
          </div>
        </div>
      </ListItem>

      <ListItem>
        <div class="left-border">
          <div class="data-label">
            {$LL.accounts.privilegeType.developer()}
          </div>

          <div>
            {$LL.accounts.privilegeDescription.developer()}
          </div>
        </div>
      </ListItem>
    </List>
  </div>
</PageContent>

<Footer />

<style lang="scss">
  .page-group-contatiner {
    display: flex;
    flex-direction: column;

    max-width: 650px;
    gap: var(--gap-m);
  }

  .left-border {
    padding-left: var(--spacing-s);
    border-left: 8px solid var(--color-strong-border);
  }

  .data-label {
    font-weight: var(--font-weight-bold);
  }
</style>
