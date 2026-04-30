export interface Question {
  id: string;
  text: string;
  type: "SCALE" | "MULTIPLE" | "BOOLEAN" | "OPEN";
  options?: { label: string; value: number; emoji?: string }[];
}

export interface Category {
  id: string;
  title: string;
  questions: Question[];
}

export const CATEGORIES: Category[] = [
  {
    id: "clima",
    title: "Clima Organizacional",
    questions: [
      { 
        id: "clima-1", 
        text: "Dois colegas começam a discutir aos gritos no meio do escritório por causa de uma tarefa mal executada enquanto você está ao lado. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Procuro acalmar os dois e sugiro que conversem em particular para resolver o problema", value: 10, emoji: "🤝" },
          { label: "Continuo focado no meu trabalho e finjo que não estou a ouvir nada", value: 5, emoji: "😐" },
          { label: "Tomo partido daquele que eu acho que tem razão na discussão", value: 2, emoji: "⚖️" },
          { label: "Faço comentários com outros colegas próximos sobre o \"show\" que eles estão a dar", value: 0, emoji: "🍿" }
        ]
      },
      { 
        id: "clima-2", 
        text: "Um colega que antes era produtivo passou a entregar relatórios com dados errados e perdeu os últimos dois prazos sobrecarregando-o. Como age?", 
        type: "MULTIPLE",
        options: [
          { label: "Tento conversar de forma privada para entender se ele precisa de ajuda ou se algo se passa", value: 10, emoji: "💬" },
          { label: "Não digo nada mas começo a ficar ressentido pelo trabalho extra que estou a ter", value: 5, emoji: "😒" },
          { label: "Reclamo da queda de rendimento dele com o nosso gestor na primeira oportunidade", value: 2, emoji: "📢" },
          { label: "Crio um grupo de mensagens sem ele para comentar como ele está a prejudicar a equipa", value: 0, emoji: "🤫" }
        ]
      },
      { 
        id: "clima-3", 
        text: "A equipa tem de entregar um projeto em 24h mas o servidor falhou e todos terão de refazer parte do trabalho. Qual sua postura?", 
        type: "MULTIPLE",
        options: [
          { label: "Incentivo o grupo e ajudo quem está mais atrasado para terminarmos juntos", value: 10, emoji: "🤝" },
          { label: "Fico calado e faço apenas a minha parte o mais rápido possível", value: 5, emoji: "🏃" },
          { label: "Reclamo constantemente sobre a incompetência do TI enquanto trabalho", value: 2, emoji: "😤" },
          { label: "Digo que não vou refazer nada porque o erro não foi meu e vou embora no horário", value: 0, emoji: "🚪" }
        ]
      },
      { 
        id: "clima-4", 
        text: "A empresa mudou o software de gestão e os seus colegas estão a reclamar que é muito difícil e lento. Como se posiciona?", 
        type: "MULTIPLE",
        options: [
          { label: "Estudo o novo sistema e partilho dicas com os colegas para facilitar a adaptação", value: 10, emoji: "💡" },
          { label: "Uso o sistema apenas no mínimo necessário sem reclamar mas também sem ajudar", value: 5, emoji: "😐" },
          { label: "Concordo com as críticas e reforço que o sistema antigo era muito melhor", value: 2, emoji: "🔙" },
          { label: "Recuso-me a usar o novo sistema e continuo a registar as coisas em planilhas paralelas", value: 0, emoji: "🛑" }
        ]
      },
      { 
        id: "clima-5", 
        text: "Um colega dá-lhe um feedback de que a sua forma de falar em reuniões parece \"agressiva\" e desmotivadora. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Agradeço o alerta e peço exemplos específicos para poder policiar a minha comunicação", value: 10, emoji: "🧠" },
          { label: "Digo que entendi mas não pretendo mudar o meu estilo", value: 5, emoji: "🗿" },
          { label: "Fico defensivo e digo que ele é que é \"sensível demais\"", value: 2, emoji: "🛡️" },
          { label: "Passo a ignorar esse colega nas reuniões seguintes como retaliação", value: 0, emoji: "🚫" }
        ]
      },
      { 
        id: "clima-6", 
        text: "Nota que um grupo de colegas sai sempre para almoçar e exclui propositadamente dois novos estagiários. Qual sua ação?", 
        type: "MULTIPLE",
        options: [
          { label: "Convido os estagiários para se juntarem ao grupo ou almoço com eles para os integrar", value: 10, emoji: "🖇️" },
          { label: "Vou almoçar com o grupo habitual e não toco no assunto", value: 5, emoji: "🍽️" },
          { label: "Acho que os estagiários têm de se esforçar mais para serem aceites pelo grupo", value: 2, emoji: "🏋️" },
          { label: "Faço piadas internas com o grupo sobre o \"isolamento\" dos estagiários", value: 0, emoji: "🤡" }
        ]
      }
    ]
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    questions: [
      { 
        id: "com-1", 
        text: "Ao rever uma apresentação minutos antes de um cliente chegar nota que o seu colega inseriu o logotipo do concorrente por erro. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Corrijo o erro imediatamente e aviso o colega com discrição para ele estar atento", value: 10, emoji: "✨" },
          { label: "Corrijo o erro mas não aviso o colega deixando-o passar pela situação sem saber", value: 5, emoji: "🙊" },
          { label: "Deixo o erro passar para que o colega aprenda a ser mais atento da próxima vez", value: 2, emoji: "👨‍🏫" },
          { label: "Aponto o erro na frente do cliente para mostrar que eu sou mais atento que o colega", value: 0, emoji: "👉" }
        ]
      },
      { 
        id: "com-2", 
        text: "Numa reunião de planeamento o seu colega apresenta uma ideia que você sabe que não vai funcionar devido a um custo que ele esqueceu. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Peço a palavra e apresento os dados do custo de forma respeitosa para discutirmos soluções", value: 10, emoji: "🤔" },
          { label: "Não digo nada e deixo a ideia seguir mesmo sabendo que vai falhar", value: 5, emoji: "🤫" },
          { label: "Interrompo-o a meio da frase para dizer que a ideia é péssima e inviável", value: 2, emoji: "🚫" },
          { label: "Desqualifico a competência dele por ter esquecido um detalhe tão básico", value: 0, emoji: "❌" }
        ]
      },
      { 
        id: "com-3", 
        text: "O seu gestor enviou um email com instruções tão confusas que ninguém na equipa sabe o que fazer primeiro. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Respondo ao email pedindo uma breve reunião de 5 min para clarificar os pontos e prioridades", value: 10, emoji: "🔍" },
          { label: "Fico à espera que algum colega tome a iniciativa de perguntar", value: 5, emoji: "⏳" },
          { label: "Tento adivinhar o que ele queria e faço o trabalho baseado em suposições", value: 2, emoji: "🎲" },
          { label: "Reclamo com a equipa sobre como o gestor é confuso e não começo a tarefa", value: 0, emoji: "🗣️" }
        ]
      },
      { 
        id: "com-4", 
        text: "Um boato sobre mudanças na empresa começa a circular. Como você reage?", 
        type: "MULTIPLE",
        options: [
          { label: "Sugiro à equipa que perguntemos formalmente ao RH ou à gerência sobre a veracidade", value: 10, emoji: "⚖️" },
          { label: "Ignoro o assunto e continuo a trabalhar como se não tivesse ouvido", value: 5, emoji: "🎧" },
          { label: "Passo a informação adiante para os meus amigos mais próximos como um \"aviso\"", value: 2, emoji: "📢" },
          { label: "Publico uma indireta nas redes sociais sobre instabilidade no trabalho", value: 0, emoji: "🌪️" }
        ]
      },
      { 
        id: "com-5", 
        text: "Está a explicar uma tarefa complexa a um colega novo e percebe que ele está com um olhar confuso. Como age?", 
        type: "MULTIPLE",
        options: [
          { label: "Paro a explicação e peço-lhe para explicar o que entendeu até agora para eu ajustar a fala", value: 10, emoji: "✅" },
          { label: "Continuo a falar até ao fim e pergunto apenas \"Entendeu tudo?\"", value: 5, emoji: "❓" },
          { label: "Digo que a tarefa é fácil e que ele só precisa de prestar mais atenção", value: 2, emoji: "🙄" },
          { label: "Termino a explicação e digo a outros que o novo colega é \"um pouco lento\"", value: 0, emoji: "👎" }
        ]
      },
      { 
        id: "com-6", 
        text: "Você presencia uma falha de comunicação que gerou um retrabalho. Qual sua atitude?", 
        type: "MULTIPLE",
        options: [
          { label: "Sugiro uma forma de melhorar o fluxo para que não ocorra novamente", value: 10, emoji: "📈" },
          { label: "Apenas ajudo a refazer o trabalho", value: 5, emoji: "🛠️" },
          { label: "Digo que \"eu já sabia que isso ia acontecer\"", value: 2, emoji: "😒" },
          { label: "Culpo publicamente quem enviou a mensagem errada", value: 0, emoji: "👉" }
        ]
      }
    ]
  },
  {
    id: "diversidade",
    title: "Diversidade",
    questions: [
      { 
        id: "div-1", 
        text: "Um novo colega trans juntou-se à equipa e alguns colegas continuam a usar o pronome errado de propósito. Como reage?", 
        type: "MULTIPLE",
        options: [
          { label: "Corrijo os colegas educadamente sempre que o erro acontece e uso o pronome correto", value: 10, emoji: "🌈" },
          { label: "Uso o pronome correto mas não confronto os colegas que erram", value: 5, emoji: "👋" },
          { label: "Fico em silêncio para evitar conflitos com os colegas mais antigos", value: 2, emoji: "🤐" },
          { label: "Também uso o pronome errado para me sentir parte do grupo dominante", value: 0, emoji: "🚫" }
        ]
      },
      { 
        id: "div-2", 
        text: "Um colega de uma cultura diferente sugere um método de trabalho que parece estranho mas que funciona no país dele. Qual sua atitude?", 
        type: "MULTIPLE",
        options: [
          { label: "Ouço com curiosidade e proponho um teste piloto para ver se se adapta à nossa realidade", value: 10, emoji: "🔓" },
          { label: "Escuto por educação mas não tenho intenção de mudar o meu modo de fazer", value: 5, emoji: "🧐" },
          { label: "Digo logo que \"aqui as coisas funcionam de outra maneira\" e recuso", value: 2, emoji: "🙅" },
          { label: "Ridicularizo a sugestão nas costas do colega comparando com o nosso método", value: 0, emoji: "🗑️" }
        ]
      },
      { 
        id: "div-3", 
        text: "Durante a escolha de quem vai representar a equipa num evento nota que só escolhem homens há 3 anos. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Questiono o critério de escolha e sugiro o nome de colegas mulheres qualificadas", value: 10, emoji: "📣" },
          { label: "Não digo nada pois não quero parecer \"militante\"", value: 5, emoji: "🤐" },
          { label: "Acho que os homens escolhidos devem ser realmente os melhores e aceito", value: 2, emoji: "🤨" },
          { label: "Digo que mulheres não se interessam por esses eventos por isso não são escolhidas", value: 0, emoji: "🙊" }
        ]
      },
      { 
        id: "div-4", 
        text: "Um colega faz uma piada sobre a idade de um funcionário mais velho dizendo que ele é \"peça de museu\". Qual sua reação?", 
        type: "MULTIPLE",
        options: [
          { label: "Digo que o colega tem uma experiência valiosa que todos devíamos respeitar", value: 10, emoji: "🛡️" },
          { label: "Não me rio da piada mas também não digo nada", value: 5, emoji: "😶" },
          { label: "Dou uma risada discreta para não criar um clima pesado", value: 2, emoji: "😬" },
          { label: "Incentivo a piada e começo a chamar o colega de \"avô\" também", value: 0, emoji: "🚫" }
        ]
      },
      { 
        id: "div-5", 
        text: "Tem de formar uma dupla para um projeto criativo. Quem escolhe?", 
        type: "MULTIPLE",
        options: [
          { label: "Escolho o colega que tem o background e a formação mais diferente da minha", value: 10, emoji: "🧩" },
          { label: "Escolho alguém neutro que apenas aceite as minhas ideias", value: 5, emoji: "😐" },
          { label: "Escolho o meu melhor amigo da empresa para ser mais divertido", value: 2, emoji: "👫" },
          { label: "Escolho alguém que pensa exatamente como eu para não termos discussões", value: 0, emoji: "👯" }
        ]
      },
      { 
        id: "div-6", 
        text: "A empresa oferece um curso opcional de LGP (Língua Gestual Portuguesa) para comunicar com um novo funcionário surdo. Como participa?", 
        type: "MULTIPLE",
        options: [
          { label: "Inscrevo-me no curso e tento praticar os sinais básicos com o novo colega", value: 10, emoji: "🎓" },
          { label: "Não me inscrevo mas digo que acho uma \"boa iniciativa\"", value: 5, emoji: "✍️" },
          { label: "Digo que o funcionário é que devia ter um intérprete e não eu aprender", value: 2, emoji: "📱" },
          { label: "Reclamo que a empresa está a gastar dinheiro com \"bobagens\"", value: 0, emoji: "🤡" }
        ]
      }
    ]
  },
  {
    id: "igualdade",
    title: "Igualdade",
    questions: [
      { 
        id: "igua-1", 
        text: "Um colega estagiário comete um erro de formatação num documento que você domina perfeitamente. Como reage?", 
        type: "MULTIPLE",
        options: [
          { label: "Sento-me com ele e ensino-lhe os truques de formatação para ele aprender a fazer sozinho", value: 10, emoji: "🎓" },
          { label: "Corrijo o erro eu mesmo sem lhe dizer nada para ser mais rápido", value: 5, emoji: "🛠️" },
          { label: "Reclamo com o supervisor que o estagiário não sabe fazer coisas básicas", value: 2, emoji: "😒" },
          { label: "Aponto o erro no grupo de WhatsApp da equipa como um exemplo do que não fazer", value: 0, emoji: "📢" }
        ]
      },
      { 
        id: "igua-2", 
        text: "Surgiu uma vaga para um projeto internacional que todos desejam mas o líder só convidou os seus \"amigos de futebol\". O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Sugiro ao líder que abra um processo de candidatura para que todos possam mostrar interesse", value: 10, emoji: "⚖️" },
          { label: "Não digo nada para não perder a amizade com o líder", value: 5, emoji: "🙋" },
          { label: "Tento entrar no \"grupo de futebol\" para ser convidado na próxima vez", value: 2, emoji: "👯" },
          { label: "Fico revoltado e começo a trabalhar pior como forma de protesto silencioso", value: 0, emoji: "🚫" }
        ]
      },
      { 
        id: "igua-3", 
        text: "Percebe que uma colega que faz exatamente o mesmo trabalho que você ganha menos por ser \"contratada externa\". O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Apoio-a a falar com o RH e ofereço-me para confirmar que as nossas funções são idênticas", value: 10, emoji: "📋" },
          { label: "Acho injusto mas prefiro não me envolver em assuntos de salários alheios", value: 5, emoji: "🤷" },
          { label: "Acho que ela aceitou o contrato porque quis e não tenho nada a ver com isso", value: 2, emoji: "🤨" },
          { label: "Digo-lhe que ela deve ser menos qualificada que eu por isso ganha menos", value: 0, emoji: "😤" }
        ]
      },
      { 
        id: "igua-4", 
        text: "Há apenas dois computadores novos e potentes na equipa de dez pessoas. Como lida com o uso deles?", 
        type: "MULTIPLE",
        options: [
          { label: "Proponho um sistema de escala baseado na necessidade técnica das tarefas do dia", value: 10, emoji: "🔋" },
          { label: "Tento chegar mais cedo para garantir que um dos computadores seja sempre meu", value: 5, emoji: "📅" },
          { label: "Acho que quem tem mais tempo de casa é que deve ter o direito de usar", value: 2, emoji: "👥" },
          { label: "Escondo os cabos do computador quando saio para ninguém o usar no meu lugar", value: 0, emoji: "🤫" }
        ]
      },
      { 
        id: "igua-5", 
        text: "Ao avaliar um colega no feedback 360 ele deu-lhe uma nota baixa mas que você sabe que tem fundamento. Como avalia?", 
        type: "MULTIPLE",
        options: [
          { label: "Avalio-o com nota alta baseando-me apenas nos resultados técnicos dele", value: 10, emoji: "📊" },
          { label: "Dou-lhe uma nota média para não o beneficiar nem o prejudicar muito", value: 5, emoji: "📈" },
          { label: "Dou-lhe uma nota baixa também como forma de \"vingança\"", value: 2, emoji: "💢" },
          { label: "Invento falhas de comportamento na avaliação dele para justificar a nota baixa", value: 0, emoji: "👯" }
        ]
      },
      { 
        id: "igua-6", 
        text: "Nota que o seu gestor interrompe sempre a mesma colega mal ela começa a falar nas reuniões. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Digo: \"Espera um momento gestor gostaria de ouvir o resto do raciocínio da Maria\"", value: 10, emoji: "🗣️" },
          { label: "Fico desconfortável mas espero que ela própria se defenda", value: 5, emoji: "✋" },
          { label: "Abaixo a cabeça e finjo que estou a tirar notas", value: 2, emoji: "🤐" },
          { label: "Aproveito a interrupção para introduzir o meu próprio assunto", value: 0, emoji: "🏃" }
        ]
      }
    ]
  },
  {
    id: "assedio",
    title: "Assédio",
    questions: [
      { 
        id: "ass-1", 
        text: "Um grupo de colegas começa a partilhar \"memes\" com conotação sexual sobre uma funcionária no grupo da equipa. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Digo claramente que o conteúdo é desrespeitoso e impróprio para um ambiente de trabalho", value: 10, emoji: "🚫" },
          { label: "Saio do grupo ou silencio as notificações sem dizer nada", value: 5, emoji: "🤐" },
          { label: "Leio e dou um \"like\" apenas para não parecer o chato do grupo", value: 2, emoji: "😐" },
          { label: "Respondo com outro meme semelhante para manter a \"descontração\"", value: 0, emoji: "🤡" }
        ]
      },
      { 
        id: "ass-2", 
        text: "O seu superior faz um comentário sobre como a sua roupa \"valoriza o seu corpo\" na frente de outros. Como reage?", 
        type: "MULTIPLE",
        options: [
          { label: "Respondo de forma séria que prefiro que os comentários se limitem ao meu trabalho", value: 10, emoji: "🛑" },
          { label: "Dou um sorriso sem graça e mudo de assunto rapidamente", value: 5, emoji: "😕" },
          { label: "Acho que foi um elogio e agradeço timidamente", value: 2, emoji: "🙂" },
          { label: "Incentivo este tipo de comentários para ganhar favores do chefe", value: 0, emoji: "👎" }
        ]
      },
      { 
        id: "ass-3", 
        text: "Recebe uma mensagem de um colega às 22h de um sábado com um convite insistente para sair após você já ter dito não. Como age?", 
        type: "MULTIPLE",
        options: [
          { label: "Reitero que não tenho interesse e que prefiro manter a relação estritamente profissional", value: 10, emoji: "👮" },
          { label: "Visualizo e não respondo esperando que ele perceba o silêncio", value: 5, emoji: "🗑️" },
          { label: "Respondo de forma \"fofinha\" para não o magoar nem criar clima no escritório", value: 2, emoji: "😕" },
          { label: "Mando uma foto minha a sair com outros amigos para o deixar com ciúmes", value: 0, emoji: "💬" }
        ]
      },
      { 
        id: "ass-4", 
        text: "Presencia um colega a ser \"gelado\" (ninguém fala com ele) por ter denunciado um erro ao RH. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Incluo o colega nas conversas e tarefas e denuncio a retaliação se necessário", value: 10, emoji: "🤝" },
          { label: "Falo com ele apenas quando ninguém está a ver para não ser isolado também", value: 5, emoji: "🤫" },
          { label: "Afasto-me também para não pensarem que estou do lado de quem \"faz queixas\"", value: 2, emoji: "😟" },
          { label: "Ajudo a espalhar que ele é um \"bufo\" e não merece confiança", value: 0, emoji: "👥" }
        ]
      },
      { 
        id: "ass-5", 
        text: "Um colega de trabalho insiste em tocar-lhe no ombro ou nas mãos enquanto fala consigo mesmo sabendo que não gosta. O que faz?", 
        type: "MULTIPLE",
        options: [
          { label: "Afasto-me fisicamente e digo claramente: \"Não gosto que me toques por favor\"", value: 10, emoji: "🛑" },
          { label: "Suporto o desconforto para não causar um conflito na equipa", value: 5, emoji: "🤐" },
          { label: "Faço uma piada para ver se ele percebe o meu desconforto sem ser direto", value: 2, emoji: "🤥" },
          { label: "Começo a tocar nele de volta de forma agressiva para ele ver como é mau", value: 0, emoji: "🤡" }
        ]
      },
      { 
        id: "ass-6", 
        text: "O gestor ameaça \"cortar o bónus\" de quem não ficar a trabalhar até às 21h todos os dias nesta semana. Como age?", 
        type: "MULTIPLE",
        options: [
          { label: "Sugiro à equipa que falemos com os Recursos Humanos sobre estas ameaças de coação", value: 10, emoji: "🚨" },
          { label: "Fico a trabalhar até às 21h com medo de perder o dinheiro", value: 5, emoji: "🧱" },
          { label: "Fico a trabalhar mas faço o trabalho de forma lenta e mal feita", value: 2, emoji: "🐢" },
          { label: "Digo aos colegas que quem não ficar é traidor da equipa", value: 0, emoji: "🗯️" }
        ]
      }
    ]
  }
];

export const SCALE_OPTIONS = [
  { label: "Discordo Totalmente / Destrutivo", value: -1.5, emoji: "💀" },
  { label: "Discordo / Desgastante", value: -0.5, emoji: "☹️" },
  { label: "Neutro / Sustentável", value: 0, emoji: "😐" },
  { label: "Concordo / Positivo", value: 0.2, emoji: "🙂" },
  { label: "Concordo Totalmente / Regenerativo", value: 0.4, emoji: "✨" }
];
