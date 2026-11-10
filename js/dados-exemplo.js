/**
 * Banco de dados expandido e altamente categorizado de carreiras vocacionais em Tecnologia, Design e Mídia Digital.
 * Garante que para qualquer área de interesse haja pelo menos 3 carreiras diretamente relacionadas.
 */
const BANCO_CARREIRAS = [
  // --- GRUPO 1: ARTE, DESENHO & DESIGN VISUAL ---
  {
    id: 'digital-artist-concept',
    categoria: 'arte_design',
    titulo: 'Ilustrador(a) Digital & Concept Artist',
    palavrasChave: ['desenhar', 'desenho', 'arte', 'pintura', 'ilustracao', 'art', 'sketch', 'quadrinhos', 'personagens', '2d', 'concept', 'criatividade', 'grafico', 'mesa digitalizadora'],
    resumo: 'Cria artes visuais, ilustrações digitais, cenários e concept art para jogos, animações e publicidade.',
    competencias: ['Photoshop / Procreate', 'Teoria das Cores & Luz', 'Anatomia e Perspectiva', 'Concept Art 2D', 'Ilustração Vetorial'],
    roteiro: [
      'Domine os fundamentos de desenho (luz, sombra, anatomia e perspectiva)',
      'Pratique pintura digital e uso de mesa digitalizadora no Photoshop ou Procreate',
      'Estude criação de personagens e concept art para jogos/mídia',
      'Monte um portfólio profissional no ArtStation e Behance'
    ]
  },
  {
    id: 'animator-2d-3d',
    categoria: 'arte_design',
    titulo: 'Animador(a) 2D/3D & Artista de Efeitos Visuais',
    palavrasChave: ['desenhar', 'desenho', 'arte', 'animacao', 'animar', '3d', 'blender', 'maya', 'quadros', 'movimento', 'personagens', 'rigging', 'vfx'],
    resumo: 'Dá vida a personagens, objetos e efeitos visuais animados para filmes, jogos e mídias digitais.',
    competencias: ['Blender / Maya / After Effects', 'Princípios da Animação', 'Rigging & Skinning', 'Animação de Personagens', 'Edição de Vídeo'],
    roteiro: [
      'Estude os 12 princípios fundamentais da animação tradicional e digital',
      'Aprenda a criar ranzanzinhar e rigg de personagens no Blender ou Maya',
      'Pratique quadros de chave (keyframes) e rotoscopia',
      'Crie um Reel de Animação com seus melhores projetos'
    ]
  },
  {
    id: 'ui-ux-designer',
    categoria: 'arte_design',
    titulo: 'Designer de UX/UI & Produto Digital',
    palavrasChave: ['desenhar', 'desenho', 'arte', 'interface', 'interfaces', 'ux', 'ui', 'figma', 'prototipo', 'layout', 'usabilidade', 'wireframe', 'webdesign', 'experiencia', 'aplicativos'],
    resumo: 'Projeta a experiência fluida, arquitetura da informação e o visual intuitivo de plataformas e aplicativos digitais.',
    competencias: ['Figma / Adobe XD', 'Design System', 'Pesquisa com Usuários (UX)', 'Prototipagem Alta Fidelidade', 'Arquitetura de Informação'],
    roteiro: [
      'Estude princípios de UX e Arquitetura de Informação',
      'Domine o Figma para UI e Prototipagem Interativa',
      'Realize testes de usabilidade com usuários reais',
      'Monte um portfólio no Behance com estudos de caso'
    ]
  },
  {
    id: 'graphic-brand-designer',
    categoria: 'arte_design',
    titulo: 'Designer Gráfico & Identidade Visual',
    palavrasChave: ['desenhar', 'desenho', 'arte', 'grafico', 'branding', 'logo', 'logotipo', 'marcas', 'poster', 'banner', 'tipografia', 'illustrator', 'design'],
    resumo: 'Desenvolve marcas marcantes, peças publicitárias, embalagens e comunicação visual estratégica.',
    competencias: ['Adobe Illustrator & Photoshop', 'Tipografia Avançada', 'Branding & Identidade Visual', 'Design Editorial', 'Teoria Visual'],
    roteiro: [
      'Estude teoria de tipografia, grid e psicologia das cores',
      'Domine a criação de vetores e logotipos no Illustrator',
      'Desenvolva manuais completos de identidade de marca',
      'Publique seus projetos visuais em plataformas de design'
    ]
  },
  {
    id: 'game-artist-3d',
    categoria: 'arte_design',
    titulo: 'Game Artist 3D & Level Environment Designer',
    palavrasChave: ['desenhar', 'desenho', 'arte', 'jogos', 'games', '3d', 'cenario', 'texturizacao', 'substance painter', 'blender', 'assets', 'sprites'],
    resumo: 'Modelador(a) 3D especializado em cenários imersivos, texturas e objetos para ambientes de jogos.',
    competencias: ['Blender / ZBrush', 'Substance Painter', 'Texturização PBR', 'Level Design em Engine', 'Otimização de Polígonos'],
    roteiro: [
      'Aprenda modelagem poligonal 3D e escupida digital em ZBrush ou Blender',
      'Domine criação de materiais e texturas PBR no Substance Painter',
      'Importe e monte cenários iluminados na Unity ou Unreal Engine',
      'Monte um showroom 3D interativo no Sketchfab'
    ]
  },

  // --- GRUPO 2: JOGOS & DIVERSÃO DIGITAL ---
  {
    id: 'game-developer',
    categoria: 'games',
    titulo: 'Desenvolvedor(a) de Jogos (Game Dev)',
    palavrasChave: ['jogar', 'videogame', 'games', 'jogos', '3d', 'animacao', 'historias', 'unity', 'unreal', 'roteiro', 'game', 'gameplay', 'game dev', 'c#'],
    resumo: 'Cria mecânicas, física, sistemas interativos e experiências digitais imersivas para jogos 2D e 3D.',
    competencias: ['C# / C++', 'Unity / Unreal Engine', 'Matemática para 3D', 'Game Design', 'Física de Jogos'],
    roteiro: [
      'Domine programação em C# ou C++',
      'Aprenda a utilizar engines como Unity ou Unreal Engine',
      'Estude física 2D/3D e mecânicas de gameplay',
      'Crie protótipos e participe de Game Jams'
    ]
  },
  {
    id: 'game-designer-narrative',
    categoria: 'games',
    titulo: 'Game Designer & Roteirista de Jogos',
    palavrasChave: ['jogar', 'videogame', 'games', 'jogos', 'historias', 'roteiro', 'livros', 'escrever', 'narrativa', 'personagens', 'regras', 'fases'],
    resumo: 'Elabora regras de jogos, balanceamento de mecânicas, arcos narrativos e diálogos imersivos.',
    competencias: ['Narrative Design', 'Game Balancing', 'Prototipagem em Papel', 'GDD (Game Design Document)', 'Twine / Ink'],
    roteiro: [
      'Estude mecânicas de jogos de tabuleiro e digitais',
      'Escreva documentos formais de Game Design (GDD)',
      'Aprenda ferramentas de ficção interativa como Twine',
      'Prototipe regras e balanceie a dificuldade com jogadores reais'
    ]
  },

  // --- GRUPO 3: PROGRAMAÇÃO, WEB & CÓDIGO ---
  {
    id: 'frontend-developer',
    categoria: 'programacao',
    titulo: 'Desenvolvedor(a) Front-End Web',
    palavrasChave: ['sites', 'web', 'programar', 'codigo', 'html', 'css', 'javascript', 'react', 'frontend', 'desenvolvimento web', 'paginas', 'computador'],
    resumo: 'Focado na criação da interface visual, experiência do usuário e interatividade de aplicações web modernas.',
    competencias: ['HTML5 & CSS3', 'JavaScript / TypeScript', 'React / Vue.js', 'Tailwind CSS', 'Responsividade'],
    roteiro: [
      'Domine HTML, CSS e Lógica de Programação',
      'Explore JavaScript Moderno (ES6+)',
      'Estude um framework moderno como React ou Vue',
      'Construa seu portfólio de projetos web reais'
    ]
  },
  {
    id: 'backend-developer',
    categoria: 'programacao',
    titulo: 'Desenvolvedor(a) Back-End',
    palavrasChave: ['logica', 'banco de dados', 'servidor', 'matematica', 'c#', 'java', 'python', 'sql', 'organizar', 'sistemas', 'backend', 'api', 'codigo', 'programar'],
    resumo: 'Constrói a arquitetura interna, regras de negócio, APIs e o gerenciamento de dados das aplicações.',
    competencias: ['Lógica de Programação', 'C# / Java / Python / Node.js', 'Banco de Dados SQL/NoSQL', 'Arquitetura de APIs', 'Git & GitHub'],
    roteiro: [
      'Estude lógica e estruturas de dados',
      'Escolha uma linguagem principal (ex: C# ou Java)',
      'Domine modelagem de Banco de Dados e SQL',
      'Desenvolva APIs RESTful seguras'
    ]
  },
  {
    id: 'mobile-developer',
    categoria: 'programacao',
    titulo: 'Desenvolvedor(a) de Aplicativos Mobile',
    palavrasChave: ['celular', 'aplicativo', 'app', 'android', 'ios', 'flutter', 'react native', 'mobile', 'programar', 'codigo', 'smartphones'],
    resumo: 'Cria aplicativos para iOS e Android com alto desempenho e integração de serviços nativos.',
    competencias: ['Flutter / React Native', 'Kotlin / Swift', 'APIs RESTful', 'Publicação em Lojas (Play Store / App Store)', 'UX Mobile'],
    roteiro: [
      'Estude linguagens de desenvolvimento mobile modernas (Dart/Flutter ou React Native)',
      'Crie aplicações integrando câmeras, localização e armazenamento',
      'Aprenda a otimizar o consumo de memória em smartphones',
      'Publique seu primeiro aplicativo nas lojas oficiais'
    ]
  },

  // --- GRUPO 4: ÁUDIO, MÚSICA & SOM ---
  {
    id: 'sound-audio-designer',
    categoria: 'audio',
    titulo: 'Sound Designer & Engenheiro(a) de Áudio',
    palavrasChave: ['musica', 'som', 'audio', 'instrumento', 'tocar', 'trilha', 'producao musical', 'efeitos sonoros', 'editar audio', 'dublagem', 'foley', 'ouvir'],
    resumo: 'Produz trilhas sonoras, efeitos de áudio (foley) e mixagem para games, filmes e softwares.',
    competencias: ['DAW (Ableton / Reaper / Pro Tools)', 'Síntese Sonora & Foley', 'Mixagem & Masterização', 'Implementação de Áudio em Games (FMOD / Wwise)'],
    roteiro: [
      'Estude teoria musical e acústica básica',
      'Domine uma DAW como Ableton Live ou Reaper',
      'Aprenda gravação de foley e manipulação de efeitos sonoros',
      'Integre áudios em engines de jogos usando FMOD ou Wwise'
    ]
  },

  // --- GRUPO 5: DADOS, IA & CIÊNCIA ---
  {
    id: 'data-scientist',
    categoria: 'dados',
    titulo: 'Cientista / Analista de Dados & IA',
    palavrasChave: ['dados', 'planilhas', 'excel', 'estatistica', 'graficos', 'curiosidade', 'investigar', 'python', 'bi', 'math', 'analise', 'inteligencia artificial', 'ia', 'numeros'],
    resumo: 'Transforma volumes de dados brutos em insights estratégicos e modelos preditivos para tomada de decisão.',
    competencias: ['Python / R', 'SQL Avançado', 'Power BI / Tableau', 'Estatística & Probabilidade', 'Machine Learning'],
    roteiro: [
      'Aprenda manipulação de dados com SQL e Excel',
      'Estude Python focado em análise (Pandas, NumPy)',
      'Crie dashboards interativos no Power BI',
      'Explore modelos iniciais de Machine Learning'
    ]
  },

  // --- GRUPO 6: SEGURANÇA & REDES ---
  {
    id: 'cyber-security',
    categoria: 'seguranca',
    titulo: 'Especialista em Segurança da Informação & Pentest',
    palavrasChave: ['seguranca', 'hack', 'redes', 'protecao', 'investigar', 'linux', 'hardware', 'privacidade', 'defesa', 'cyber', 'pentest'],
    resumo: 'Garante a integridade de dados e defende infraestruturas contra ameaças e vulnerabilidades digitais.',
    competencias: ['Redes de Computadores', 'Sistemas Operacionais (Linux)', 'Pentest / Ethical Hacking', 'Criptografia', 'Análise de Vulnerabilidades'],
    roteiro: [
      'Entenda a arquitetura de Redes (TCP/IP)',
      'Domine linha de comando no Linux',
      'Estude criptografia e protocolos de segurança',
      'Pratique em laboratórios virtuais como TryHackMe'
    ]
  },

  // --- GRUPO 7: ORGANIZAÇÃO, PROJETOS & NEGÓCIOS ---
  {
    id: 'tech-product-manager',
    categoria: 'gestao',
    titulo: 'Product Manager (PM) & Gestor(a) de Produtos Tech',
    palavrasChave: ['organizar', 'eventos', 'planejamento', 'lideranca', 'projetos', 'negocios', 'produto', 'pessoas', 'comunicacao', 'gestao', 'estrategia'],
    resumo: 'Lidera estratégias de produtos tecnológicos, alinhando equipes de desenvolvedores, designers e clientes.',
    competencias: ['Gestão de Produtos (PM)', 'Metodologias Ágeis (Scrum/Kanban)', 'Métricas de Negócio', 'Pesquisa de Mercado', 'Liderança de Equipes'],
    roteiro: [
      'Aprenda sobre ciclo de vida de produtos de tecnologia (SDLC)',
      'Domine metodologias ágeis como Scrum e Kanban',
      'Estude definição de visão de produto e mapeamento de roadmaps',
      'Conduza reuniões estratégicas e validações de mercado'
    ]
  }
];

const DADOS_EXEMPLO = {
  user_name: "Aline Santos",
  career_identity_statement: "Seu perfil combina um forte senso estético com a paixão pela resolução de problemas visuais, tornando você extremamente vocacionado(a) para criação artística e design digital.",
  recommended_careers: [
    {
      id: "digital-artist-concept",
      title: "Ilustrador(a) Digital & Concept Artist",
      match_score: 96,
      summary: "Cria artes visuais, ilustrações digitais, cenários e concept art para jogos, animações e publicidade.",
      key_skills: ["Photoshop / Procreate", "Teoria das Cores", "Concept Art 2D", "Desenho de Personagens"],
      learning_path: [
        "Domine os fundamentos de desenho (luz, sombra, anatomia e perspectiva).",
        "Pratique pintura digital e uso de mesa digitalizadora no Photoshop.",
        "Monte um portfólio profissional no ArtStation e Behance."
      ]
    },
    {
      id: "animator-2d-3d",
      title: "Animador(a) 2D/3D & Artista de Efeitos Visuais",
      match_score: 91,
      summary: "Dá vida a personagens, objetos e efeitos visuais animados para filmes, jogos e mídias digitais.",
      key_skills: ["Blender / Maya", "Princípios da Animação", "Rigging", "Animação de Personagens"],
      learning_path: [
        "Estudie os 12 princípios fundamentais da animação tradicional e digital.",
        "Aprenda a criar rigging de personagens no Blender ou Maya.",
        "Crie um Reel de Animação com seus melhores projetos."
      ]
    },
    {
      id: "ui-ux-designer",
      title: "Designer de UX/UI & Produto Digital",
      match_score: 86,
      summary: "Projeta a experiência fluida, arquitetura da informação e o visual intuitivo de plataformas digitais.",
      key_skills: ["Figma", "Pesquisa de Usuário", "Prototipagem", "Design Systems"],
      learning_path: [
        "Estudar princípios de UX e Arquitetura de Informação.",
        "Dominar o Figma para UI e Prototipagem.",
        "Realizar testes de usabilidade e montar portfólio."
      ]
    }
  ]
};
