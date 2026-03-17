import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { Footer } from "@/app/components/portfolio/footer";
import { SectionTitle } from "@/app/components/portfolio/section-title";
import LinkComponent from "@/app/components/link";

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "React Native",
  "MUI",
  "Tailwind CSS",
];

const highlights = [
  "Desenvolvimento fullstack com foco em produto",
  "Experiência com aplicações web, APIs e mobile",
  "Boas práticas de arquitetura, componentização e organização de código",
  "Integração com autenticação, banco de dados e fluxos completos de negócio",
];

const learning = [
  "Aprofundamento em arquitetura de software e escalabilidade",
  "Evolução contínua em desenvolvimento fullstack com foco em aplicações modernas",
  "Estudo de boas práticas para APIs, performance e experiência do usuário",
];
const experiences = [
  {
    title: "Desenvolvedor Fullstack",
    company: "PaperZero",
    period: "Jun 2025 - Atual",
    description: [
      "Desenvolvimento e manutenção de sistema de gestão documental (GED) com foco em performance e escalabilidade.",
      "Implementação de funcionalidades em frontend com React e Next.js, utilizando boas práticas de componentização e UX.",
      "Criação e evolução de APIs com Node.js/NestJS, incluindo autenticação, regras de negócio e integrações.",
      "Trabalho com bancos de dados relacionais e organização de dados estruturados para sistemas corporativos.",
      "Atuação em fluxo completo de desenvolvimento (feature → PR → revisão → deploy), seguindo boas práticas de versionamento com Git.",
    ],
  },
  {
    title: "Desenvolvedor Fullstack Freelancer",
    company: "Projetos próprios e freelas",
    period: "2024 - 2025",
    description: [
      "Desenvolvimento de aplicações web e mobile com React, Next.js, React Native, Node.js e NestJS.",
      "Criação de APIs com autenticação JWT e integração com bancos de dados SQL e NoSQL.",
      "Construção de sistemas completos, incluindo agendamento, monitoramento e interfaces interativas.",
    ],
  },
];

export default function AboutPage() {
  return (
    <Box component="main">
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Stack spacing={8}>
          <Box>
            <Typography
              sx={{
                display: "inline-flex",
                px: 2,
                py: 0.7,
                borderRadius: 999,
                border: "1px solid #dbeafe",
                color: "#1d4ed8",
                bgcolor: "#eff6ff",
                fontSize: 13,
                fontWeight: 600,
                mb: 2,
              }}
            >
              Sobre
            </Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ color: "#0f172a", mb: 3 }}
            >
              Sobre mim
            </Typography>

            <Typography
              sx={{
                color: "#475569",
                lineHeight: 1.9,
                fontSize: "1.05rem",
                mb: 2,
              }}
            >
              Sou desenvolvedor fullstack com foco em aplicações modernas
              utilizando React, Next.js, Node.js e NestJS. Tenho experiência no
              desenvolvimento de interfaces web, APIs escaláveis, integração com
              bancos de dados SQL e NoSQL, além de aplicações mobile com React
              Native.
            </Typography>

            <Typography
              sx={{
                color: "#475569",
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              Busco construir produtos com boa arquitetura, código limpo e
              interfaces intuitivas, unindo performance, organização e
              experiência do usuário em projetos reais.
            </Typography>
          </Box>

          <Box>
            <SectionTitle>Tecnologias</SectionTitle>

            <Stack direction="row" flexWrap="wrap" gap={1.5} mt={3}>
              {techs.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    bgcolor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    color: "#334155",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <SectionTitle>Diferenciais</SectionTitle>

            <Stack spacing={1.5} mt={3}>
              {highlights.map((item) => (
                <Typography
                  key={item}
                  sx={{ color: "#475569", lineHeight: 1.8 }}
                >
                  • {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <SectionTitle>Experiência profissional</SectionTitle>

            <Stack spacing={3} mt={3}>
              {experiences.map((experience) => (
                <Box
                  key={experience.title + experience.company}
                  sx={{
                    p: 3,
                    border: "1px solid #e2e8f0",
                    borderRadius: 3,
                    bgcolor: "#ffffff",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#0f172a",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      mb: 0.5,
                    }}
                  >
                    {experience.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#1d4ed8",
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {experience.company}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: "0.95rem",
                      mb: 2,
                    }}
                  >
                    {experience.period}
                  </Typography>

                  <Stack spacing={1.2}>
                    {experience.description.map((item) => (
                      <Typography
                        key={item}
                        sx={{ color: "#475569", lineHeight: 1.8 }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box>
            <SectionTitle>Aprendizado contínuo</SectionTitle>

            <Typography
              sx={{ color: "#475569", mt: 2, mb: 3, lineHeight: 1.8 }}
            >
              Estou em constante evolução técnica, aprofundando conhecimentos em
              arquitetura, escalabilidade e desenvolvimento de produtos
              digitais.
            </Typography>

            <Stack spacing={1.5}>
              {learning.map((item) => (
                <Typography
                  key={item}
                  sx={{ color: "#475569", lineHeight: 1.8 }}
                >
                  • {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button
              component={LinkComponent}
              href="https://github.com/Rzirbes"
              target="_blank"
              variant="contained"
              sx={{
                px: 3,
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              GitHub
            </Button>

            <Button
              component={LinkComponent}
              href="https://www.linkedin.com/in/rzirbes"
              target="_blank"
              variant="outlined"
              sx={{
                color: "#0f172a",
                borderColor: "#cbd5e1",
                px: 3,
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "#94a3b8",
                  bgcolor: "#f8fafc",
                },
              }}
            >
              LinkedIn
            </Button>
          </Stack>

          <Footer />
        </Stack>
      </Container>
    </Box>
  );
}
