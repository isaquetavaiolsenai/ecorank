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
    id: "modulo-1",
    title: "Infraestrutura e Segurança",
    questions: [
      {
        id: "q1",
        text: "Como você avalia a ergonomia e as ferramentas disponíveis no seu posto de trabalho hoje?",
        type: "MULTIPLE",
        options: [
          { label: "Tenho tudo o que preciso e meu posto é ergonomicamente correto.", value: 10, emoji: "✨" },
          { label: "As ferramentas são boas mas sinto desconforto físico ocasionalmente.", value: 5, emoji: "😐" },
          { label: "Trabalho com improvisos e ferramentas desgastadas.", value: 2, emoji: "🛠️" },
          { label: "As condições são precárias e prejudicam diretamente minha saúde.", value: 0, emoji: "⚠️" }
        ]
      },
      {
        id: "q2",
        text: "Como você lida com a organização e limpeza do seu ambiente compartilhado de trabalho?",
        type: "MULTIPLE",
        options: [
          { label: "Mantenho tudo impecável e ajudo a organizar áreas comuns.", value: 10, emoji: "🧼" },
          { label: "Limpo apenas o meu espaço individual de trabalho.", value: 5, emoji: "🧹" },
          { label: "Deixo objetos espalhados e acumulo lixo na mesa durante o dia.", value: 2, emoji: "📦" },
          { label: "Contribuo para a desordem e não zelo pelo patrimônio da empresa.", value: 0, emoji: "🗑️" }
        ]
      },
      {
        id: "q3",
        text: "Qual sua atitude ao identificar um fio exposto ou um piso escorregadio na empresa?",
        type: "MULTIPLE",
        options: [
          { label: "Isolo a área imediatamente e comunico o setor de manutenção.", value: 10, emoji: "🚧" },
          { label: "Aviso algum colega que esteja passando por perto.", value: 5, emoji: "📢" },
          { label: "Penso que alguém da limpeza logo verá e resolverá o problema.", value: 2, emoji: "🤔" },
          { label: "Ignoro totalmente e sigo meu caminho normalmente.", value: 0, emoji: "🚶" }
        ]
      },
      {
        id: "q4",
        text: "Como você reage ao ver um colega realizando uma tarefa sem os equipamentos de proteção?",
        type: "MULTIPLE",
        options: [
          { label: "Interrompo a atividade e explico amigavelmente a importância do EPI.", value: 10, emoji: "🛡️" },
          { label: "Espero ele terminar e depois comento que é perigoso.", value: 5, emoji: "⏳" },
          { label: "Fico em silêncio para não criar um clima chato com o colega.", value: 2, emoji: "🤐" },
          { label: "Acho que cada um sabe de si e não me envolvo no erro alheio.", value: 0, emoji: "🤷" }
        ]
      },
      {
        id: "q5",
        text: "Como você gerencia suas pausas durante uma jornada de trabalho intensa?",
        type: "MULTIPLE",
        options: [
          { label: "Faço pequenas pausas para alongar e descansar a mente conforme orientado.", value: 10, emoji: "🧘" },
          { label: "Só paro quando sinto muita dor ou cansaço extremo.", value: 5, emoji: "😫" },
          { label: "Trabalho direto sem parar para tentar terminar mais rápido.", value: 2, emoji: "🏃" },
          { label: "Não faço pausas e ainda utilizo o horário de almoço para trabalhar.", value: 0, emoji: "🚫" }
        ]
      },
      {
        id: "q6",
        text: "Qual é o seu nível de abertura para participar de programas de ginástica laboral ou meditação da empresa?",
        type: "MULTIPLE",
        options: [
          { label: "Participo sempre e incentivo meus colegas a irem também.", value: 10, emoji: "🤸" },
          { label: "Vou apenas quando não tenho muitas tarefas pendentes.", value: 5, emoji: "📅" },
          { label: "Participo apenas se o meu gestor estiver observando.", value: 2, emoji: "👁️" },
          { label: "Acho perda de tempo e nunca participo das iniciativas.", value: 0, emoji: "🚮" }
        ]
      }
    ]
  },
  {
    id: "modulo-2",
    title: "Desenvolvimento e Clima",
    questions: [
      {
        id: "q7",
        text: "Ao receber um novo procedimento técnico ou norma você busca entender o fundamento da mudança?",
        type: "MULTIPLE",
        options: [
          { label: "Leio tudo com atenção e tiro dúvidas para aplicar com perfeição.", value: 10, emoji: "📖" },
          { label: "Leio rapidamente apenas para dizer que estou ciente.", value: 5, emoji: "📑" },
          { label: "Tento aprender na prática sem ler os manuais ou instruções.", value: 2, emoji: "🛠️" },
          { label: "Ignoro a mudança e continuo fazendo do jeito antigo.", value: 0, emoji: "🔙" }
        ]
      },
      {
        id: "q8",
        text: "Com que frequência você compartilha novos conhecimentos técnicos com sua equipe?",
        type: "MULTIPLE",
        options: [
          { label: "Sempre compartilho dicas e novos aprendizados com o grupo.", value: 10, emoji: "💡" },
          { label: "Compartilho apenas se alguém me perguntar diretamente.", value: 5, emoji: "💬" },
          { label: "Guardo o conhecimento para mim para ser mais indispensável.", value: 2, emoji: "🔒" },
          { label: "Não tenho interesse em aprender nem em ensinar nada novo.", value: 0, emoji: "❌" }
        ]
      },
      {
        id: "q9",
        text: "Como você contribui para um ambiente saudável na empresa?",
        type: "MULTIPLE",
        options: [
          { label: "Incentivo respeito e boa convivência", value: 10, emoji: "🤝" },
          { label: "Tanto manter um bom comportamento", value: 5, emoji: "😐" },
          { label: "Às vezes tenho atitudes negativas", value: 2, emoji: "😒" },
          { label: "Prejudico o ambiente com minhas atitudes", value: 0, emoji: "👎" }
        ]
      },
      {
        id: "q29",
        text: "Como você lida com as normas de segurança da empresa?",
        type: "MULTIPLE",
        options: [
          { label: "Sigo todas corretamente", value: 10, emoji: "✅" },
          { label: "Sigo a maioria", value: 5, emoji: "🆗" },
          { label: "Sigo poucas", value: 2, emoji: "⚠️" },
          { label: "Não sigo", value: 0, emoji: "❌" }
        ]
      },
      {
        id: "q30",
        text: "Ao utilizar equipamentos de proteção individual (EPIs) você:",
        type: "MULTIPLE",
        options: [
          { label: "Sempre utiliza corretamente e verifica se estão em boas condições", value: 10, emoji: "🛡️" },
          { label: "Usa na maioria das vezes, mas às vezes esquece", value: 5, emoji: "⏳" },
          { label: "Usa apenas quando é cobrado", value: 2, emoji: "👁️" },
          { label: "Raramente utiliza", value: 0, emoji: "🚮" }
        ]
      },
      {
        id: "q33",
        text: "Com que frequência você pratica atividade física?",
        type: "MULTIPLE",
        options: [
          { label: "Regularmente (quase todos os dias)", value: 10, emoji: "🏃" },
          { label: "Algumas vezes na semana", value: 5, emoji: "📅" },
          { label: "Raramente", value: 2, emoji: "🐢" },
          { label: "Nunca", value: 0, emoji: "🚫" }
        ]
      }
    ]
  },
  {
    id: "modulo-3",
    title: "Ética e Cidadania",
    questions: [
      {
        id: "q12",
        text: "Ao entrar em um elevador, como você trata as outras pessoas?",
        type: "MULTIPLE",
        options: [
          { label: "Trato todos com a mesma dignidade e contato visual.", value: 10, emoji: "👋" },
          { label: "Cumprimento, mas de forma mecânica e sem olhar nos olhos.", value: 5, emoji: "😐" },
          { label: "Só cumprimento se eles falarem primeiro.", value: 2, emoji: "🤐" },
          { label: "Geralmente ignoro; considero que estão apenas 'cumprindo uma função'.", value: 0, emoji: "🚶" }
        ]
      },
      {
        id: "q13",
        text: "Você já fingiu estar mexendo no celular para não oferecer ajuda a alguém com dificuldade de locomoção?",
        type: "MULTIPLE",
        options: [
          { label: "Nunca. Guardo o celular e ofereço ajuda imediatamente.", value: 10, emoji: "🦾" },
          { label: "Ajudo apenas se ninguém mais estiver por perto para fazer isso.", value: 5, emoji: "🤫" },
          { label: "Finjo que estou ocupado para evitar o incômodo de parar minha rotina.", value: 2, emoji: "📱" },
          { label: "Passo direto e penso que a pessoa deveria ter saído de casa acompanhada.", value: 0, emoji: "🚪" }
        ]
      },
      {
        id: "q14",
        text: "Você defende a liberdade de expressão apenas quando ela concorda com você?",
        type: "MULTIPLE",
        options: [
          { label: "Defendo o direito de fala até de quem discordo totalmente, sem violência.", value: 10, emoji: "⚖️" },
          { label: "Fico em dúvida quando a fala me ofende, mas tento ser tolerante.", value: 5, emoji: "🤔" },
          { label: "Acho que quem pensa o oposto de mim não deveria ter espaço na mídia.", value: 2, emoji: "🚫" },
          { label: "Defendo liberdade total para meu grupo e censura para os 'inimigos'.", value: 0, emoji: "⚔️" }
        ]
      },
      {
        id: "q15",
        text: "Você já desejou a morte ou sofrimento de alguém por divergência ideológica?",
        type: "MULTIPLE",
        options: [
          { label: "Nunca. A vida é o valor supremo acima de qualquer ideia.", value: 10, emoji: "❤️" },
          { label: "Já pensei no calor do momento mas me senti horrível depois.", value: 5, emoji: "🔥" },
          { label: "Desejo que essas pessoas sumam ou sofram para aprenderem a lição.", value: 2, emoji: "😠" },
          { label: "Sim, e manifesto isso abertamente nas redes sociais.", value: 0, emoji: "📢" }
        ]
      },
      {
        id: "q16",
        text: "Você acha que a pobreza é uma escolha individual de quem não quer trabalhar?",
        type: "MULTIPLE",
        options: [
          { label: "Não. Reconheço as barreiras sistêmicas e a falta de oportunidades.", value: 10, emoji: "🧩" },
          { label: "Acho que o esforço conta, mas sei que nem todos partem do mesmo lugar.", value: 5, emoji: "🏃" },
          { label: "Acredito que 90% da pobreza é falta de vontade e foco.", value: 2, emoji: "🙄" },
          { label: "Sim, qualquer um sai da pobreza se parar de se fazer de vítima.", value: 0, emoji: "🛑" }
        ]
      },
      {
        id: "q17",
        text: "Você faz barulho excessivo sabendo que há vizinhos que precisam de descanso?",
        type: "MULTIPLE",
        options: [
          { label: "Extremamente cuidadoso; o silêncio do vizinho é tão importante quanto o meu.", value: 10, emoji: "🤫" },
          { label: "Tento evitar mas às vezes esqueço que moro em coletividade.", value: 5, emoji: "🔊" },
          { label: "Acho que 'dentro da minha casa eu mando' e os outros que usem protetores.", value: 2, emoji: "🏠" },
          { label: "Faço barulho de propósito quando estou em conflito para 'dar o troco'.", value: 0, emoji: "🥊" }
        ]
      }
    ]
  },
  {
    id: "modulo-4",
    title: "Excelência e Respeito",
    questions: [
      {
        id: "q20",
        text: "Quando um cliente idoso tem dificuldade com tecnologia qual é a sua postura real?",
        type: "MULTIPLE",
        options: [
          { label: "Tenho paciência absoluta, explico simples e garanto que ele entendeu.", value: 10, emoji: "👴" },
          { label: "Sou educado, mas sinto cansaço interno e tento terminar logo.", value: 5, emoji: "⏳" },
          { label: "Sou ríspido e deixo claro que ele está 'atrasando' meu fluxo.", value: 2, emoji: "😤" },
          { label: "Aproveito a falta de conhecimento para empurrar serviços desnecessários.", value: 0, emoji: "🤑" }
        ]
      },
      {
        id: "q21",
        text: "Você trata o cliente que reclama com educação apenas porque sabe que está sendo gravado?",
        type: "MULTIPLE",
        options: [
          { label: "Não. Minha educação é um valor pessoal, não depende de monitoramento.", value: 10, emoji: "🌟" },
          { label: "Sim, se não houvesse gravação, eu seria bem mais duro nas respostas.", value: 5, emoji: "📹" },
          { label: "Sou irônico e passivo-agressivo para que a gravação não me incrimine.", value: 2, emoji: "😏" },
          { label: "Ignoro protocolos e sou grosseiro mesmo sabendo da gravação.", value: 0, emoji: "🚫" }
        ]
      },
      {
        id: "q22",
        text: "Ao receber um elogio por um trabalho em grupo como você reage na frente do chefe?",
        type: "MULTIPLE",
        options: [
          { label: "Divido o mérito imediatamente, citando todos que ajudaram.", value: 10, emoji: "🤝" },
          { label: "Agradeço e depois, no privado, comento que o time ajudou.", value: 5, emoji: "🗨️" },
          { label: "Aceito o elogio para mim e fico em silêncio sobre os outros.", value: 2, emoji: "🤐" },
          { label: "Insinuo que só deu certo porque tive que consertar o erro dos colegas.", value: 0, emoji: "🤥" }
        ]
      },
      {
        id: "q28",
        text: "Sobre sua postura no ambiente de trabalho em relação ao assédio:",
        type: "MULTIPLE",
        options: [
          { label: "Sempre mantenho respeito e profissionalismo", value: 10, emoji: "🛡️" },
          { label: "Na maioria das vezes", value: 5, emoji: "🆗" },
          { label: "Às vezes falho nisso", value: 2, emoji: "⚠️" },
          { label: "Frequentemente ajo de forma inadequada", value: 0, emoji: "❌" }
        ]
      },
      {
        id: "q10",
        text: "Como você reage quando está sobrecarregado no trabalho?",
        type: "MULTIPLE",
        options: [
          { label: "Procuro me organizar e, se necessário, peço ajuda", value: 10, emoji: "📋" },
          { label: "Tento resolver sozinho, mesmo com dificuldade", value: 5, emoji: "💪" },
          { label: "Fico estressado e perco o foco", value: 2, emoji: "🌪️" },
          { label: "Não faço as tarefas corretamente", value: 0, emoji: "😵" }
        ]
      },
      {
        id: "q40",
        text: "Como você reage quando o estresse do trabalho afeta suas relações?",
        type: "MULTIPLE",
        options: [
          { label: "Procuro me organizar e, se necessário, peço ajuda", value: 10, emoji: "🧘" },
          { label: "Tento resolver sozinho, mesmo com dificuldade", value: 5, emoji: "🫤" },
          { label: "Fico estressado e perco o foco", value: 2, emoji: "😤" },
          { label: "Não faço as tarefas corretamente", value: 0, emoji: "📉" }
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
