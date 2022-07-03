import type { BaseTranslation } from '../i18n-types';

import { activities } from './activities';
import { feedback } from './feedback';
import { homePage } from './home-page';
import { invitations } from './invitations';
import { memos } from './memos';
import { news } from './news';
import { platformSettings } from './platform-settings';
import { polls } from './polls';
import { profiles } from './profiles';
import { signIn } from './sign-in';
import { signUp } from './sign-up';
import { topics } from './topics';
import { userSettings } from './user-settings';

const en: BaseTranslation = {
  common: {
    clickHereToUpload: 'Click here to upload',
    user: 'User',
    users: 'Users',
    name: 'Name',
    firstName: 'First name',
    fullName: 'Full name',
    middleName: 'Middle name',
    middleNames: 'Middle names',
    nickname: 'Nickname',
    email: 'Email',
    password: 'Password',
    login: 'Login',
    logout: 'Logout',
    settings: 'Settings',
    sectionName: 'Section name',
    homePage: 'Home page',
    usefulLinks: 'Useful links',
    top: 'Top',
    nonResponsive: 'Non responsive',
    warningMessage: 'This site, for now, is just a layout example.',
    warningMessage2:
      'Note: The site is just a layout example, it is not possible to change the data.',
    warningMessage3:
      'This site, for now, is just an example of a layout under development. No form content will be saved and many functional and visual changes will still be made.',
    warningMessage4:
      'This site, for now, is just an example of a layout in the development stage. Many functional and visual changes are yet to be made.',
    warningMessage5:
      'The final version of this page will be TOTALLY different from this example.',
  },
  language: {
    language: 'Language',
    languages: 'Languages',
    en: 'English',
    pt: 'Portuguese',
    originalName: {
      en: 'English',
      pt: 'Português',
    },
    languageSettings: 'Language settings',
    chooseALanguage: 'Choose a language',
    messageToChooseLanguage:
      'Below are the translation options provided by the platform. Choose your preferred language.',
    confirmLanguageChoice: 'Confirm language choice',
  },
  theme: {
    theme: 'Theme',
    themes: 'Themes',
    themeName: {
      default: 'Default',
      'light-potato': 'Potato',
      'light-reptilian': 'Reptilian',
    },
    themeMessage: {
      default: 'The most beautiful theme in the galaxy',
      'light-potato': 'This theme is delicious',
      'light-reptilian': 'A theme from another planet',
    },
    themeSettings: 'Theme settings',
    themeInUse: 'Theme in use',
    current: 'Current',
    themesAvailable: 'Themes available',
  },
  menu: {
    menu: 'Menu',
    adminSettings: 'Admin settings',
    feedback: 'Feedback',
    activitiesHistory: 'History',
    platformUsers: 'Users',
    topics: 'Topics',
    invitations: 'Invitations',
    userSettings: 'Settings',
    polls: 'Polls',
    memorandum: 'Memorandum',
    logout: 'Logout',
    news: 'News',
  },
  account: {
    account: 'Account',
    accounts: 'Accounts',
    accountType: {
      admin: 'Admin',
      maintainer: 'Maintainer',
      developer: 'Developer',
      normalMember: 'Member ★',
      privilegedMember: 'Member ★',
      guest: 'Guest',
    },
  },
  activities,
  feedback,
  homePage,
  invitations,
  memos,
  news,
  platformSettings,
  polls,
  profiles,
  signIn,
  signUp,
  topics,
  userSettings,
};

export default en;
