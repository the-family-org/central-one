import type { Translation } from '../i18n-types';

export const homePage: Translation['homePage'] = {
  headerMessageExample: {
    title: 'Qual será o nome da criança?',
    description:
      'Acabo de publicar uma pesquisa na plataforma, onde você poderá sugerir o nome do filho meu e do John. Caso o nome que você sugeriu seja o escolhido, além da honra dessa escolha, você também ganhará um <b>super prêmio surpresa</b>! 🎉',
    author: 'Jane Doe - @jane',
  },
  sections: {
    title: 'Seções da plataforma',
    userSettings: 'Configurações de usuário',
    polls: 'Pesquisas e respostas',
    topics: 'Tópicos do grupo',
    users: 'Usuários da plataforma',
    newsReader: 'Jornal de notícias',
    invitations: 'Gerenciamento de convite',
    feedback: 'Gerenciamento de feedback',
    platformSettings: 'Configurações da plataforma',
    activitiesHistory: 'Histórico de atividades',
    memorandum: 'Memorandos do grupo',
  },
  polls: {
    title: 'Pesquisas publicadas',
  },
  memos: {
    title: 'Memorandos',
  },
  lastNews: {
    title: 'Últimas notícias - {newsReaderName}',
  },
  topics: {
    title: 'Tópicos do grupo',
  },
};
