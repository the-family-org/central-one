import type { Translation } from '../i18n-types';

export const accounts: Translation['accounts'] = {
  account: 'Conta',
  accounts: 'Contas',
  privileges: 'Privilégios',
  accountTypes: 'Tipos de conta',
  aboutPlatformAccounts: 'Sobre as contas da plataforma',
  platformAccountTypes: 'Tipos de conta da plataforma',
  platformAccountTypesMessage:
    'Os usuários podem ter diferentes tipos de contas. Esses tipos de contas existem para facilitar o acesso e gerenciamento da plataforma. Os tipos de contas existentes são os seguintes:',
  extraPrivilegesForFullMembers: 'Privilégios extras dos membros plenos',
  extraPrivilegesForFullMembersMessage:
    'Todas as contas do tipo "<b>Membro pleno</b>" podem ganhar alguns privilégios extras atrelado a elas, sendo os seguintes privilégios:',
  accountType: {
    admin: 'Admin',
    maintainer: 'Mantenedor',
    developer: 'Desenvolvedor',
    fullMember: 'Membro pleno',
    partnerMember: 'Membro parceiro',
    guest: 'Convidado',
  },
  accountDescription: {
    fullMember:
      'Trata-se do tipo de conta com mais privilégios, voltada aos membros vitalícios da plataforma.',
    partnerMember:
      'Essa é um tipo de conta voltada aos usuários que possuem algum tipo de relação com um membro pleno.',
    guest:
      'Conta voltada à um usuário convidado que conhece alguém da plataforma.',
  },
  privilegeType: {
    administrator: 'Administrador',
    matureAge: 'Idade madura',
    developer: 'Desenvolvedor',
  },
  privilegeDescription: {
    administrator:
      'Trata-se de um privilégio que permite o usuário alterar as configurações da plataforma.',
    matureAge:
      'Membro com idade suficiente para ser considerado um usuário maduro e assim lidar com escolhas que exijam mais responsabilidade.',
    developer:
      'Membros que cumpriram os pré-requisitos necessários para alterar o código da plataforma.',
  },
  fullMemberAccount: 'Conta de membro pleno',
  yourAccountType: 'O seu tipo de conta',
  youHaveAnAccountOfTheType: 'Você possui uma conta do tipo',
};
