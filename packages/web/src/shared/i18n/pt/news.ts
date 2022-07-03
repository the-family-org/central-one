import type { Translation } from '../i18n-types';

export const news: Translation['news'] = {
  exampleOne: {
    title: 'Qual será o nome da criança?',
  },
  exampleTwo: {
    title: 'Alicia tem um novo crush! 😱',
  },
  exampleThree: {
    title: 'David ganhou medalha de ouro na natação',
  },
  news: 'Notícias',
  thereIsOnlyOneExample:
    'Só existe um exemplo de notícia na plataforma, o seguinte:',
  wouldYouLikeToOpen: 'Você gostaria de abrir esse exemplo?',
  whereOpenNewsMessage: 'Onde você gostaria de abrir essa notícia?',
  openOnThisPlatform: 'Abrir aqui na plataforma',
  onThisPlatform: 'Nesta plataforma',
  doNotOpen: 'Não abrir',
  newsData: 'Dados da notícia',
  postedOn: 'Postada em',
  lastUpdated: 'Última atualização',
  goTo: 'Ir ao',
  goToNewsSection: 'Ir à seção de notícias',
  goToHomePage: 'Ir à página inicial',
  suggestChangesToTheNews: 'Sugerir alterações para a notícia',
  readThisNewsAt: 'Ler essa notícia no',
  author: 'Autor(a)',
  whatWouldYouLikeToDoNow: 'O que você gostaria de fazer agora',
  suggestChange: {
    suggestNewsChange: 'Sugerir alteração de notícia',
    targetNews: 'Notícia alvo',
    title: 'Título',
    describeMessage: 'Descreva abaixo em detalhes a sua proposta de alteração.',
    sendSuggestion: 'Enviar sugestão',
    suggestionSent: 'Sugestão enviada',
    suggestionSentMessage: 'Sua sugestão foi enviada ao autor da notícia.',
    backToPreviousNews: 'Voltar à notícia',
  },
  posted: 'Publicadas',
  newAndDrafts: 'Novas/rascunhos',
  scheduled: 'Agendadas',
  newsFrom: 'Notícias do',
  nextEdition: 'Próxima edição',
  nextEditionDate: '<b>5 de julho</b> de 2022',
  periodicity: 'Periodicidade',
  periodicityValue: 'A cada 40 days',
  noNewsScheduled: 'Você <b>não</b> possui notícia agendada',
  edition: 'Edição',
  createNewDraft: 'Criar nova notícia/rascunho',
  drafts: 'Rascunhos',
  noDrafts: 'Você não tem rascunhos',
  scheduledNews: 'Notícias agendadas',
  noNewsScheduledMessage:
    'Você ainda não possui notícia agendada para a próxima edição do',
  toCreateANewNewsGoToTheTab: 'Para criar uma nova notícia vá para a aba',
  createNews: {
    newsCreation: 'Criação de notícia',
    title: 'Title',
    image: 'Imagem',
    mainNewsOfTheEdition: {
      mainNewsOfTheEdition: 'Principal notícia da edição',
      mainNewsOfTheEditionMessage:
        'O algorítimo da plataforma escolherá apenas uma notícia para ser o maior destaque da capa do jornal. Responda "<b>Sim</b>", caso a sua notícia seja uma "<b>Breaking News</b>" e você quer que o algorítimo leve-a em consideração na escolha da notícia de maior destaque.',
      notTheMainNews: 'Não! Essa notícia não será a principal',
      yesTheMainNews: 'Sim! Leve essa notícia em consideração',
    },
    category: {
      category: 'Categoria',
      sports: 'Esporte',
      politics: 'Política',
    },
    newsType: {
      newsType: 'Sentimento/Tipo',
      newsTypeMessage:
        'Escolha o sentimento que o conteúdo dessa notícia transmite à quem lê-la, ou o tipo ao qual a notícia se enquadra.',
      happiness: 'Felicidade',
      anger: 'Raiva',
      sadness: 'Tristeza',
    },
    contentCharacteristics: {
      contentCharacteristics: 'Características do conteúdo',
      contentCharacteristicsMessage:
        'Marque todas as opções que caracterizam o conteúdo da notícia.',
      inappropriateForUnderage: 'Impróprio para menores de idade',
      aPlatformMemberIsMentioned: 'É mencionado algum membro da plataforma',
      theProtagonistIsAMemberOfThePlatform:
        'O protagonista é um membro da plataforma',
    },
    whenWillBePublished: {
      whenWillBePublished: 'Quando a notícia será publicada?',
      saveToDrafts: 'Salver nos rascunhos e não publicar',
      nextEdition: 'Edição do dia 5 de julho de 2022 (próxima)',
      afterNextEdition: 'Edição do dia 14 de agosto de 2022',
    },
    shortDescription: {
      shortDescription: 'Descrição curta',
      shortDescriptionMessage:
        'Essa descrição poderá aparecer na capa do jornal com o título da sua notícia.',
      charactersTypedMessage: 'caracteres digitados de {maxNumber} permitidos',
    },
    content: 'Conteúdo',
    createNews: 'Criar notícia',
    newsCreated: 'Notícia criada',
    newsCreatedMessage: 'Sua notícia foi criada com sucesso',
  },
  newsReader: {
    warning: 'AVISO',
    warningMessage:
      'O site de notícias ao qual você está sendo redirecionado costuma apresentar material <b>SENSACIONALISTA</b> e a faltar com a verdade, portanto <b>NÃO DEVERIA SER VISTO</b> por ninguém.',
    edition: 'Edição',
    redirectingIn: 'Redirecionando em',
    postDate: 'Publicado em 15 de junho de 2022',
    goToPlatform: 'Ir à plataforma',
    by: 'Por',
    example1: {
      part1:
        '<b>E</b>ssa página é <b>apenas um exemplo para ilustrar a ideia</b>, porém o app final não utilizará as tecnologias empregadas aqui, nem terá o mesmo visual.',
      part2A:
        '<b>A</b> ideia dessa página é a de criar um site com um visual semelhante ao',
      part2B: 'da saga Harry Potter.',
      part3:
        '<b>O</b> site tem um intuito de ser utilizado em um <b>painel digital</b> pendurado na parede, e emoldurado como em uma pintura.',
      part4:
        '<b>A</b> versão atual não é mobile friendly, pois foi criada de maneira rápida só para exemplificar a ideia, mas a versão final poderá ser.',
      part5:
        '<b>O</b> site contará com diversas features de formatação e efeitos visuais que poderão ser configurados pelos autores das notícias.',
      part6:
        '<b>A</b> página será hospedada em um domínio próprio, mas compartilhará o mesmo backend da plataforma principal.',
    },
    example2: {
      title: 'QUAL SERÁ O NOME DA CRIANÇA?',
      part1:
        '<b>A</b>cabo de publicar uma pesquisa na plataforma, onde você poderá sugerir o nome do filho meu e do John. Caso o nome que você sugeriu seja o escolhido, além da honra dessa escolha, você também ganhará um <b>super prêmio surpresa</b>!',
      part2:
        '<b>D</b>ica de ouro! Pesquise a origem do nome antes de publicar a sua sugestão. O significado do nome é muito importante para os pais.',
      part3:
        '<b>N</b>omes cujo significado estão <b>relacionados ao mar</b> serão muito bem vistos, pois os pais são surfistas, meio hippies, que amam o mar e a natureza.',
      part4SubTitle: 'O 2º COLOCADO',
      part4:
        '<b>A</b> pessoa que sugerir o segundo nome o qual os pais mais gostarem, também será premiada!',
      part5:
        '<b>O</b> prêmio do segundo lugar consistirá em uma <b>viagem de duas semanas às Ilhas Maldivas</b>.',
      part6:
        '<b>T</b>odos aqueles que responderem a pesquisa da plataforma, e acertarem o sexo do nosso bebê, também ganharão um prêmio bacana.',
      part7:
        '<b>E</b>sse prêmio em questão será simples, surpresa, mas MUITO útil!',
      verticalTitle: 'MENINO OU MENINA?',
    },
    example2B: {
      date: '15 de junho de 2022',
      title: 'Qual será o nome da criança?',
      part1:
        'Acabo de publicar uma pesquisa na plataforma, onde você poderá sugerir o nome do filho meu e do John. Caso o nome que você sugeriu seja o escolhido, além da honra dessa escolha, você também ganhará um <b>super prêmio surpresa</b>!',
      part2:
        'Dica de ouro! Pesquise a origem do nome antes de publicar a sua sugestão. O significado do nome é muito importante para os pais.',
      part3:
        'Nomes cujo significado estão <b>relacionados ao mar</b> serão muito bem vistos, pois os pais são surfistas, meio hippies, que amam o mar e a natureza.',
      part4SubTitle: 'O 2º colocado',
      part4:
        'A pessoa que sugerir o segundo nome o qual os pais mais gostarem, também será premiada!',
      part5:
        'O prêmio do segundo lugar consistirá em uma <b>viagem de duas semanas às Ilhas Maldivas</b>.',
      part6SubTitle: 'Menino ou menina?',
      part6:
        'Todos os que responderem a pesquisa da plataforma, e acertarem o sexo do nosso bebê, também ganharão um prêmio bacana.',
      part7: 'Esse prêmio em questão será simples, surpresa, mas MUITO útil!',
    },
  },
};
