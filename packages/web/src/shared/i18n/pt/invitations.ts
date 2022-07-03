import type { Translation } from '../i18n-types';

export const invitations: Translation['invitations'] = {
  invitations: 'Convites',
  request: {
    invitationRequest: 'Solicitação de convite',
    invitationMessage:
      'Solicite um convite para que você possa se cadastrar na plataforma.',
    name: 'Nome',
    email: 'E-mail',
    message: 'Mensagem',
    return: 'Voltar',
    requestInvitation: 'Solicitar convite',
    congratulations: 'Parabéns!',
    invitationApproved: 'Seu convite foi aprovado',
    pendingIssuesMessage:
      'O convite para você se tornar membro da plataforma foi aprovado. Agora <b>a próxima etapa é resolver as pendências do seu cadastro</b>. Clique no botão abaixo para visualizar as suas pendências.',
    goToRegistrationIssues: 'Ver pendências de cadastro',
  },
  requestsReceived: {
    requests: 'Solicitações',
    recentInviteRequests: 'Pedidos de convite recentes',
    pendingInviteRequests: 'Pedidos de convite pendentes',
    approvedInviteRequests: 'Pedidos de convite aprovados',
    rejectedInviteRequests: 'Pedidos de convite rejeitados',
    requestDate: 'Data da solicitação',
    approvalDate: 'Data da aprovação',
    rejectionDate: 'Data da rejeição',
    name: 'Nome',
    requestMessage: 'Mensagem de solicitação',
    approvedBy: 'Aprovado por',
    rejectedBy: 'Rejeitado por',
    accountTypeGiven: 'Tipo de conta dada',
    justification: 'Justificativa',
    examples: {
      pendingMessageOne: 'Oi família! Aceitem minha solicitação por favor.',
      pendingMessageTwo:
        'Sou amiga da Jane e gostaria de uma conta do tipo "convidado" para que assim eu consiga responder as enquetes da minha amiga. Obrigado! :)',
      approvedMessageOne: 'E ai pessoal! Aceitem minha solicitação.',
      rejectedJustificationOne: 'Não gosto desse cara',
      rejectedMessageOne: 'Oi! Eu gostaria de fazer parte do grupo de vocês.',
    },
  },
  sendInvitation: {
    sendInvitation: 'Enviar convite',
    nameOfPersonToBeInvited: 'Nome da pessoa a ser convidada',
    emailOfPersonToBeInvited: 'E-mail da pessoa a ser convidada',
    message: 'Mensagem',
    invitationSent: 'Convite enviado ✌',
    invitationSentMessage: 'O seu convite foi enviado com sucesso',
    whatWouldYouLikeToDoNow: 'O que você gostaria de fazer agora?',
    goToInvitationManagement: 'Ir ao gerenciamento de convites',
    goToHomePage: 'Ir à página inicial',
  },
  invitationsSent: {
    invitationsSent: 'Convites enviados',
    recentlySentInvitations: 'Convites enviados recentemente',
    sentDate: 'Data do envio',
    sentBy: 'Enviado por',
    sentTo: 'Enviado para',
    message: 'Mensagem',
    example: {
      message: 'Oi amiga! Venha fazer parte da plataforma da minha família.',
    },
  },
};
