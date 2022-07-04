import type { Translation } from '../i18n-types';

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

const pt: Translation = {
  common: {
    clickHereToUpload: 'Clique aqui para upload',
    user: 'Usuário',
    users: 'Usuários',
    name: 'Nome',
    firstName: 'Primeiro nome',
    fullName: 'Nome completo',
    middleName: 'Nome do meio',
    middleNames: 'Nomes do meio',
    nickname: 'Nickname',
    email: 'E-mail',
    password: 'Senha',
    login: 'Entrar',
    logout: 'Sair (logout)',
    settings: 'Configurações',
    sectionName: 'Nome da seção',
    homePage: 'Página inicial',
    usefulLinks: 'Links úteis',
    top: 'Topo',
    nonResponsive: 'Não responsivo',
    warningMessage: 'Este site, por hora, é apenas um exemplo de layout.',
    warningMessage2:
      'Obs: O site é apenas um exemplo de layout, não é possível alterar os dados.',
    warningMessage3:
      'Esse site, por hora, é apenas um exemplo de layout em desenvolvimento. Nenhum conteúdo do formulário é salvo e muitas alterações funcionais e visuais ainda serão realizadas.',
    warningMessage4:
      'Este site, por enquanto, é apenas um exemplo de layout em estágio de desenvolvimento. Muitas alterações funcionais e visuais ainda serão realizadas.',
    warningMessage5:
      'A versão final desta página será TOTALMENTE diferente deste exemplo.',
  },
  language: {
    language: 'Idioma',
    languages: 'Idiomas',
    en: 'Inglês',
    pt: 'Português',
    originalName: {
      en: 'English',
      pt: 'Português',
    },
    languageSettings: 'Configurações de idioma',
    chooseALanguage: 'Escolha um idioma',
    messageToChooseLanguage:
      'Abaixo estão as opções de tradução disponibilizadas pela plataforma. Escolha o idioma de sua preferência.',
    confirmLanguageChoice: 'Confirmar escolha de idioma',
  },
  theme: {
    theme: 'Tema',
    themes: 'Temas',
    themeName: {
      default: 'Padrão',
      'light-potato': 'Batata',
      'light-reptilian': 'Reptiliano',
    },
    themeMessage: {
      default: 'O tema mais bonito da galáxia',
      'light-potato': 'Um tema delicioso!',
      'light-reptilian': 'Este tema é de outro planeta',
    },
    themeSettings: 'Configurações do tema',
    themeInUse: 'Tema em uso',
    current: 'Em uso',
    themesAvailable: 'Temas disponíveis',
  },
  menu: {
    menu: 'Menu',
    adminSettings: 'Admin configs',
    feedback: 'Feedback',
    activitiesHistory: 'Histórico',
    platformUsers: 'Usuários',
    topics: 'Tópicos',
    invitations: 'Convites',
    userSettings: 'Configurações',
    polls: 'Pesquisas',
    memorandum: 'Memorandos',
    logout: 'Sair (logout)',
    news: 'Notícias',
  },
  account: {
    account: 'Conta',
    accounts: 'Contas',
    accountType: {
      admin: 'Admin',
      maintainer: 'Mantenedor',
      developer: 'Desenvolvedor',
      normalMember: 'Membro ★',
      privilegedMember: 'Membro ★',
      guest: 'Convidado',
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

export default pt;