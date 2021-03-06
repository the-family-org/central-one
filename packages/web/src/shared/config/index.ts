export const env = {
  apiUrl: import.meta.env.VITE_API_URL,
  webNewsReaderUrl: import.meta.env.VITE_WEB_NEWS_READER_URL,
  groupName: import.meta.env.VITE_GROUP_NAME,
  newsJournalFullName: import.meta.env.VITE_NEWS_JOURNAL_FULL_NAME,
  newsJournalShortName: import.meta.env.VITE_NEWS_JOURNAL_SHORT_NAME,
};

export enum ThemeKey {
  DEFAULT_THEME = 'default',
  LIGHT_POTATO_THEME = 'light-potato',
  LIGHT_REPTILIAN_THEME = 'light-reptilian',
}

export enum LocaleCodes {
  ENGLISH = 'en',
  PORTUGUESE = 'pt',
}

export enum Path {
  HOME_PAGE = '/dashboard',
  MEMOS = '/memos',
  MEMOS_CREATE = '/memos/create',
  MEMOS_CREATED = '/memos/created',
  NEWS = '/news',
  NEWS_CREATE = '/news/create',
  NEWS_CREATED = '/news/created',
  PLATFORM_USERS = '/platform/users',
  PLATFORM_ACCOUNTS = '/platform/accounts',
  PLATFORM_ACTIVITIES = '/platform/activities',
  PLATFORM_SETTINGS = '/platform/settings',
  PLATFORM_FEEDBACK = '/platform/feedback',
  PLATFORM_FEEDBACK_CREATED = '/platform/feedback/created',
  PLATFORM_INVITATIONS = '/platform/invitations',
  PLATFORM_INVITATIONS_CREATE = '/platform/invitations/create',
  PLATFORM_INVITATIONS_CREATED = '/platform/invitations/created',
  PLATFORM_INVITATIONS_REQUEST = '/platform/invitations/request',
  POLLS = '/polls',
  POLLS_CREATE = '/polls/create',
  POLLS_CREATED = '/polls/created',
  POLLS_ANSWERED = '/polls/answered',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  SIGN_UP_WELCOME = '/sign-up/welcome',
  SIGN_UP_REQUIREMENTS = '/sign-up/requirements',
  SIGN_UP_REQUIREMENTS_DATA_CONFIRMATION = '/sign-up/requirements/data-confirmation',
  SIGN_UP_REQUIREMENTS_LANGUAGE = '/sign-up/requirements/language',
  SIGN_UP_REQUIREMENTS_REVISION = '/sign-up/requirements/revision',
  TOPICS = '/topics',
  TOPICS_CREATE = '/topics/create',
  USER_PROFILE = '/user',
  USER_SETTINGS = '/user/settings',
  USER_SETTINGS_THEME = '/user/settings?section=theme',
}

export enum ExamplePath {
  FIRST_ACCESS_MESSAGE = '/first-access-message',
  MEMO_EXAMPLE = '/memos/example',
  NEWS_EXAMPLE = '/news/example',
  NEWS_EXAMPLE_READER = '/news/example/reader',
  NEWS_EXAMPLE_SUGGEST_CHANGE = '/news/example/suggest-change',
  PLATFORM_FEEDBACK_EXAMPLE = '/platform/feedback/example',
  POLLS_EXAMPLE = '/polls/example',
  POLLS_EXAMPLE_ANSWER = '/polls/example/answer',
  POLLS_EXAMPLE_RESULT = '/polls/example/result',
  TOPIC_EXAMPLE = '/topics/example',
  USER_EXAMPLE_PROFILE = '/platform/users/example',
}
