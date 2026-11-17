export type ResumeLink = { label: string; href: string };

export type ResumeEntry = {
  title: string;
  company?: string;
  period: string;
  stack: string[];
  items: string[];
  links?: ResumeLink[];
};

export const profile = {
  name: "Rômulo Anderson da Rocha Zirbes",
  role: "Desenvolvedor Full Stack",
  headline: "Node.js · NestJS · React · TypeScript",
  location: "Arroio do Sal/RS",
  email: "rzirbes5@gmail.com",
  github: "https://github.com/Rzirbes",
  linkedin: "https://www.linkedin.com/in/romulo-zirbes/",
};

export const summary = [
  "Tecnólogo em Análise e Desenvolvimento de Sistemas (ULBRA, jul/2025) e pós-graduando em Arquitetura de Software, Ciência de Dados e Cibersegurança (PUCPR, previsão de conclusão em 08/2027).",
  "Desenvolvedor Full Stack com atuação em produto de Gestão Eletrônica de Documentos (PaperZero) e, como freelancer, no sistema de gestão de uma cooperativa de reciclagem em produção (Coopersal): API REST em NestJS, Next.js, TypeScript, PostgreSQL, autenticação JWT com refresh token, Redis e testes com Jest, Supertest e Playwright.",
  "Também construí o RenderIA, SaaS de geração de renders arquitetônicos com IA (Gemini), filas (BullMQ), sistema de créditos e Swagger, e a plataforma TeamZQ de gestão de atletas (Next.js, NestJS, React Native, PostgreSQL).",
];

export const experiences: ResumeEntry[] = [
  {
    title: "Desenvolvedor Full Stack (Freelance)",
    company: "Coopersal",
    period: "08/2026 – atual",
    stack: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Jest",
      "Playwright",
      "Render",
    ],
    items: [
      "Desenvolvi de ponta a ponta o sistema de gestão de uma cooperativa de reciclagem, em produção, cobrindo rotas de coleta, frota, motoristas, abastecimentos e produção de materiais.",
      "Projetei a API REST em NestJS, Prisma e PostgreSQL com arquitetura em camadas (domínio, casos de uso e infraestrutura) e repositórios desacoplados, documentada no Swagger.",
      "Implementei autenticação JWT com refresh token em cookies HttpOnly, um BFF em Next.js com renovação de sessão coordenada via Redis, e proteção com Helmet e rate limiting; fiz o deploy no Render.",
      "Garanti a qualidade com testes unitários e e2e (Jest, Supertest e Playwright).",
      "Sistema com 11 módulos e 63 endpoints, desenvolvido em 3 meses.",
    ],
    links: [
      {
        label: "Código",
        href: "https://github.com/Rzirbes/coopersal-showcase/blob/main/README.md",
      },
    ],
  },
  {
    title: "Desenvolvedor Front-End",
    company: "PaperZero",
    period: "jun/2025 – jul/2026",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "APIs REST",
      "BFF",
      "TanStack Table",
      "SWR",
      "MUI",
    ],
    items: [
      "Desenvolvi funcionalidades da plataforma de Gestão Eletrônica de Documentos (GED) com Next.js, React e TypeScript, integradas a APIs REST internas e externas.",
      "Construí módulos de gestão documental: tags, permissões, workflows e organização de documentos.",
      "Atuei na camada BFF (Backend for Frontend), tratando, validando e transformando dados entre frontend e backend.",
      "Implementei e otimizei listagens complexas com filtros, busca e paginação (TanStack Table, SWR e MUI) para grandes volumes de dados; participei de code reviews e do fluxo com Git Flow, pull requests e homologação.",
      "213 commits em 4 repositórios, com participação no desenvolvimento de diferentes aplicações do ecossistema PaperZero.",
      "Desenvolvimento e manutenção de funcionalidades nos módulos de documentos, pastas, caixas, prateleiras e upload de arquivos.",
    ],
  },
  {
    title: "Desenvolvedor Full Stack (Freelance)",
    company: "TeamZQ — Plataforma de gestão de atletas, treinos e carga",
    period: "jun/2024 – mar/2026",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "React Native (Expo)",
      "AWS S3",
      "Sentry",
    ],
    items: [
      "Arquitetei e desenvolvi o sistema web e a API para gestão de atletas, agenda de treinos, monitoramento de carga (planejado vs. realizado), bem-estar e relatórios, com controle de acesso por perfis.",
      "Modelei o banco PostgreSQL com Prisma, implementei autenticação JWT e upload de arquivos no AWS S3; a API segue organização em casos de uso, repositórios e entidades, com container Docker e observabilidade via Sentry.",
      "Desenvolvi o aplicativo mobile em React Native (Expo), com sessão persistida, refresh token e gráficos de acompanhamento.",
      "4 colaboradores, com um total de 20 atletas testados.",
    ],
    links: [
      {
        label: "Código",
        href: "https://github.com/Rzirbes/training-tracker-system",
      },
      { label: "App", href: "https://github.com/Rzirbes/TeamZQ" },
    ],
  },
];

export const ownProjects: ResumeEntry[] = [
  {
    title: "RenderIA — SaaS de geração de renders arquitetônicos com IA",
    period: "jan/2026 – mar/2026",
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "BullMQ",
      "Redis",
      "Gemini API",
      "Jest",
      "Swagger",
      "Docker",
    ],
    items: [
      "Defini a arquitetura e desenvolvi o backend em NestJS com autenticação JWT, sistema de créditos, histórico de renders e documentação no Swagger.",
      "Implementei o processamento assíncrono das renderizações em fila (BullMQ e Redis) e a integração com a API do Google Gemini para gerar imagens a partir de sketches.",
      "Escrevi testes unitários e e2e (Jest e Supertest) para autenticação, créditos, usuários e renders; incluí docker-compose para o PostgreSQL.",
      "4 arquitetos usando em fase de testes.",
    ],
    links: [
      { label: "API", href: "https://github.com/Rzirbes/renderia-api" },
      { label: "Frontend", href: "https://github.com/Rzirbes/render-ia" },
    ],
  },
];

export const education = [
  {
    course: "Pós-graduação em Arquitetura de Software, Ciência de Dados e Cibersegurança",
    institution: "Pontifícia Universidade Católica do Paraná (PUCPR)",
    status: "Em andamento, previsão de conclusão 08/2027",
  },
  {
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Luterana do Brasil (ULBRA)",
    status: "Concluído em jul/2025",
  },
];

export const skills = [
  {
    area: "Back-end",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "APIs REST",
      "JWT com refresh token",
      "Arquitetura BFF",
      "Filas e processamento assíncrono (BullMQ)",
      "Swagger/OpenAPI",
    ],
  },
  {
    area: "Front-end",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SWR",
      "TanStack Table",
      "MUI",
      "Context API",
      "Componentes reutilizáveis",
    ],
  },
  { area: "Mobile", items: ["React Native (Expo)"] },
  {
    area: "Banco de dados e cache",
    items: ["PostgreSQL", "Prisma ORM", "SQL", "Modelagem de dados", "Redis"],
  },
  {
    area: "IA e integrações",
    items: ["Google Gemini (geração de imagens)", "AWS S3"],
  },
  {
    area: "Qualidade e entrega",
    items: [
      "Jest",
      "Supertest",
      "Playwright",
      "Postman",
      "Git",
      "Git Flow",
      "Docker",
      "Render",
      "Vercel",
      "Sentry",
    ],
  },
  {
    area: "Também estudado",
    items: ["C# / .NET", "Python", "Flutter"],
  },
];
