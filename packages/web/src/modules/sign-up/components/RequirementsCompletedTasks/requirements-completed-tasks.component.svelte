<script lang="ts">
  import { LL } from '$lang/i18n-svelte';

  import { TitleH3 } from '$components/TitleH3';
  import { List } from '$components/List';
  import { ListItem } from '$components/ListItem';
</script>

<TitleH3 strong>{$LL.signUp.requirements.taskHistory()}</TitleH3>

<List rowGap="l2">
  <ListItem>
    <div class="done-item">
      <div>
        <span class="positive">✔</span>
      </div>

      <div>
        <span class="date">{$LL.signUp.requirements.today()}</span>
        <span>
          {$LL.signUp.requirements.completedTaskItem.defaultLanguageChanged()}
        </span>
      </div>
    </div>
  </ListItem>

  <ListItem>
    <div class="done-item">
      <div>
        <span class="positive">✔</span>
      </div>

      <div>
        <span class="date">{$LL.signUp.requirements.today()}</span>
        <span>
          {$LL.signUp.requirements.completedTaskItem.profileImageUploaded()}
        </span>
      </div>
    </div>
  </ListItem>

  <ListItem>
    <div class="done-item">
      <div>
        <span class="positive">✔</span>
      </div>

      <div>
        <span class="date">{$LL.signUp.requirements.today()}</span>
        <span>
          {$LL.signUp.requirements.completedTaskItem.chosenInterfaceVisualTheme()}
        </span>
      </div>
    </div>
  </ListItem>

  <ListItem>
    <div class="done-item">
      <div>
        <span class="positive">✔</span>
      </div>

      <div>
        <span class="date">{$LL.signUp.requirements.today()}</span>
        <span>
          {@html $LL.signUp.requirements.completedTaskItem.emailConfirmed()}
        </span>
      </div>
    </div>
  </ListItem>

  <ListItem>
    <div class="done-item">
      <div>
        <span class="positive">✔</span>
      </div>

      <div>
        <span class="date">{$LL.signUp.requirements.today()}</span>
        <span>
          {@html $LL.signUp.requirements.completedTaskItem.nicknameDefined()}
        </span>
      </div>
    </div>
  </ListItem>

  <ListItem>
    <div class="done-item">
      <div>
        <span class="positive">✔</span>
      </div>

      <div>
        <span class="date">{$LL.signUp.requirements.today()}</span>
        <span>
          {$LL.signUp.requirements.completedTaskItem.passwordChanged()}
        </span>
      </div>
    </div>
  </ListItem>

  <ListItem>
    <div class="done-item">
      <div>
        <span class="positive">✔</span>
      </div>

      <div>
        <span class="date">27.jun.2022</span>
        <span>
          {$LL.signUp.requirements.completedTaskItem.memberInvitationApproved()}
        </span>
      </div>
    </div>
  </ListItem>

  <ListItem>
    <div class="done-item">
      <div>
        <span class="positive">✔</span>
      </div>

      <div>
        <span class="date">19.jun.2022</span>
        <span>
          {$LL.signUp.requirements.completedTaskItem.memberInvitationRequested()}
        </span>
      </div>
    </div>
  </ListItem>
</List>

<style lang="scss">
  .done-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: var(--gap-s);

    div {
      display: flex;
      flex-direction: row;

      gap: 0 var(--gap-s);
    }
  }

  .positive {
    font-size: var(--font-size-l4);
    color: var(--color-positive);
  }

  .date {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-bold);
    color: var(--color-neutral);
  }

  @media (max-width: 650px) {
    .done-item {
      div {
        flex-direction: column;
      }
    }
  }
</style>
