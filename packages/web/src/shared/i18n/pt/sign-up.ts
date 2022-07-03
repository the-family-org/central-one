import type { Translation } from '../i18n-types';

export const signUp: Translation['signUp'] = {
  requirements: {
    requirements: 'Requisitos',
    signUpRequirements: 'Requisitos de cadastro',
    about: 'Sobre',
    pending: 'Pendente',
    completed: 'Concluído',
    almostDone: 'Falta pouco!',
    aboutMessage:
      'A sua conta atualmente está em situação de <b>pré-cadastro</b>. Ainda se faz necessário concluir alguns pré-requisitos para que você consiga acessar a plataforma. Clique na aba <b>Pendente</b> para visualizar suas tarefas em aberto.',
    pendingTasks: 'Tarefas pendentes',
    pendingTaskWarning: 'Você tem <b>1</b> tarefa pendente.',
    pendingTasksItem: {
      userDataConfirmation: 'Confirmação dos dados cadastrados',
    },
    taskHistory: 'Histórico de tarefas',
    today: 'hoje',
    completedTaskItem: {
      defaultLanguageChanged: 'Idioma padrão alterado.',
      profileImageUploaded: 'Upload de imagem de perfil efetuada.',
      chosenInterfaceVisualTheme: 'Escolhido o tema visual da interface.',
      emailConfirmed: 'E-mail <b>johndoe@email.com</b> foi confirmado.',
      nicknameDefined: 'Definido o nickname: <b>@john</b>',
      passwordChanged: 'Senha de acesso alterada.',
      memberInvitationApproved: 'Convite de membro foi aprovado.',
      memberInvitationRequested:
        'Você solicitou um convite para ser membro da plataforma.',
    },
    dataConfirmation: {
      dataConfirmation: 'Confirmação de dados',
      reviewYourData: 'Revise os seus dados',
      dataConfirmationSectionMessage:
        'Abaixo estão listados os seus dados, preenchidos durante o pré-cadastro, para que você possa revisá-los.',
      fields: {
        name: 'Nome',
        email: 'E-mail',
        nickname: 'Nickname',
        theme: 'Tema',
        language: 'Idioma',
        profileImage: 'Imagem de perfil',
      },
      confirmDataMessage:
        'Clique em <b>Confirmar dados</b> caso todos os dados acima estejam corretos.',
      confirmData: 'Confirmar dados',
    },
  },
  welcome: {
    welcome: 'Seja bem-vindo(a)!',
    youAreTheNewestMember: 'Você é o mais novo membro da plataforma.',
    welcomeMessage:
      'O seu cadastro foi concluído com sucesso e agora você é o mais novo membro da plataforma. Clique no botão abaixo para ser redirecionado à página inicial.',
    goToTheHomePage: 'Ir à página inicial',
  },
};
