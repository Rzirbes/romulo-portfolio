export const projects = [
  {
    title: "Coopersal",
    description:
      "Sistema de gestão de uma cooperativa de reciclagem, em produção: rotas de coleta, frota, motoristas, abastecimentos e produção de materiais. 11 módulos e 63 endpoints.",
    image: "/projects/coopersal.png",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Playwright"],
    links: {
      live: "https://github.com/Rzirbes/coopersal-showcase/blob/main/README.md",
    },
  },
  {
    title: "RenderIA",
    description:
      "SaaS de geração de renders arquitetônicos com IA (Gemini) a partir de sketches, com filas em BullMQ, sistema de créditos e API documentada no Swagger.",
    image: "/projects/renderia.png",
    gif: "/projects/renderia.gif",
    tech: ["Next.js", "NestJS", "BullMQ", "Gemini API"],
    links: {
      backend: "https://github.com/Rzirbes/renderia-api",
      live: "https://github.com/Rzirbes/render-ia",
    },
  },
  {
    title: "TeamZQ Web",
    description:
      "Sistema web e API para gestão de atletas, agenda de treinos, monitoramento de carga (planejado vs. realizado), bem-estar e relatórios, com controle de acesso por perfis.",
    image: "/projects/athlete_management.png",
    gif: "/projects/athlete_management.gif",
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS S3"],
    links: {
      frontend:
        "https://github.com/Rzirbes/training-tracker-system/tree/main/front",
      backend:
        "https://github.com/Rzirbes/training-tracker-system/tree/main/api",
      live: "https://github.com/Rzirbes/training-tracker-system",
    },
  },
  {
    title: "TeamZQ Mobile",
    description:
      "Aplicativo mobile da plataforma TeamZQ, com sessão persistida, refresh token e gráficos de acompanhamento dos atletas.",
    image: "/projects/training-track.jpg",
    gif: "/projects/training-track.gif",
    tech: ["React Native (Expo)", "TypeScript", "NestJS"],
    links: {
      backend:
        "https://github.com/Rzirbes/training-tracker-system/tree/main/api",
      live: "https://github.com/Rzirbes/TeamZQ",
    },
  },
  //   {
  //     title: "Pokédex",
  //     description:
  //       "Aplicação mobile em Flutter consumindo a PokéAPI com listagem e detalhes.",
  //     image: "/projects/pokedex.png",
  //     gif: "/projects/pokedex.gif",
  //     tech: ["Flutter", "Dart", "API REST"],
  //     live: "#",
  //     github: "#",
  //     highlights: ["Consumo de API", "UI mobile", "Navegação entre telas"],
  //   },
];

export const certifications = [
  {
    title: "SQL Server - Manipulando Dados",
    issuer: "DIO",
    date: "2026",
    link: "https://web.dio.me/certificates/xxxx",
  },
  {
    title: "Entity Framework com C#",
    issuer: "DIO",
    date: "2023",
    link: "https://web.dio.me/certificates/xxxx",
  },
];
