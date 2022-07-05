import type { Translation } from '../i18n-types';

export const platformSettings: Translation['platformSettings'] = {
  platformSettings: 'Configurações da plataforma',
  generalSection: {
    menu: 'Geral',
    title: 'Configurações da plataforma',
    message:
      'Este painel de configurações somente é visível às contas de membros <b>administradores</b> os quais possuam a <b>idade de uma pessoa madura</b>.',
    ageOfAMatureMember: 'Idade de um membro maduro',
    ageOfAMatureMemberMessage:
      'Membros com idade suficiente para serem considerados pessoas maduras, possuem privilégios dentro da plataforma. Defina abaixo qual a idade mínima para que um membro seja considerado uma pessoa madura.',
    years: 'anos',
  },
  newAccountSection: {
    menu: 'Novas contas',
    title: 'Novas contas',
    message:
      'Configure tudo relacionado ao cadastro de novas contas de membros e convidados.',
    howAreNewUserAccountsCreated: 'Como novas contas de usuários são criadas?',
    byMemberInvitationOnly: 'Somente por convite de membros',
    publicRegistrationPage: 'Página pública de cadastro',
    newRegistrationsDisabled: 'Novos cadastros desabilitados',
    whoCanSendInvitationsToNewMemberAccounts:
      'Quem pode enviar convite para novas contas de membro?',
    adminMembersOfMatureAge: 'Membros administradores com idade madura',
    adminMembers: 'Membros administradores',
    whoCanSendInvitationsToNewGuestAccounts:
      'Quem pode enviar convite para novas contas de convidados?',
  },
  guestsSection: {
    menu: 'Convidados',
    title: 'Convidados',
    message: 'Gerencie aqui os privilégios das contas de usuários convidados.',
    featuresEnabled: 'Funcionalidades habilitadas para contas de convidados',
    feedbackSubmission: 'Envio de feedback',
    pollsWithGuestEnabledContent:
      'Pesquisas cujo conteúdo foi liberado aos convidados',
    topicsWithGuestEnabledContent:
      'Tópicos cujo conteúdo foi liberado aos convidados',
    newsWithGuestEnabledContent:
      'Notícias cujo conteúdo foi liberado aos convidados',
  },
  feedbackSection: {
    menu: 'Feedback',
    title: 'Feedback',
    message: '',
  },
  pollsSection: {
    menu: 'Pesquisas',
    title: 'Pesquisas',
    message: 'Configure tudo relacionado às pesquisas da plataforma.',
    maximumNumberOfPolls: 'Quantidade máxima de pesquisas por mês',
    maximumNumberOfPollsMessage:
      'Defina a quantidade máxima de pesquisas que podem ser criadas por mês na plataforma. A quantidade deve ser o valor total pesquisas de cada usuário somadas, ou seja, o valor total de pesquisas quem podem ser criadas na plataforma como um todo.',
  },
  topicsSection: {
    menu: 'Tópicos',
    title: 'Tópicos',
    message: 'Configure aqui tudo relacionado aos tópicos da plataforma.',
    chatRoomsOnTopics: 'Salas de bate-papo nos tópicos',
    chatRoomsOnTopicsMessage:
      'Configure se dentro de cada tópico haverá uma sala de bate-papo relacionada ao mesmo tema do tópico em questão.',
    enableChatRoomWithinTopics:
      'Habilitar sala de bate-papo dentro dos tópicos',
    disableChatroomOnTopics: 'Desabilitar sala de bate-papo dentro dos tópicos',
  },
  newsReaderSection: {
    menu: 'Jornal',
    title: 'Jornal do grupo',
    message: '',
    newspaperName: 'Nome do jornal',
    newspaperLink: 'Link do jornal',
    periodicityOfTheNewspaper: 'Periodicidade do jornal',
    periodicityOfTheNewspaperMessage:
      'Configure quantos dias levam para uma nova edição do jornal ser publicada.',
    days: 'dias',
  },
};
