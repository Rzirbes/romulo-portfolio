import {
  Box,
  Button,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Footer } from "@/app/components/portfolio/footer";
import {
  education,
  experiences,
  ownProjects,
  profile,
  skills,
  summary,
  type ResumeEntry,
} from "@/data/resume";

const colors = {
  title: "#0f172a",
  text: "#475569",
  muted: "#64748b",
  accent: "#1d4ed8",
  border: "#e2e8f0",
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="h2"
      sx={{
        color: colors.title,
        fontSize: "1.5rem",
        fontWeight: 700,
        mb: 3,
        pb: 1.5,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      {children}
    </Typography>
  );
}

function TechChips({ items }: { items: string[] }) {
  return (
    <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          size="small"
          sx={{
            bgcolor: "#f8fafc",
            border: `1px solid ${colors.border}`,
            color: "#334155",
            fontWeight: 500,
          }}
        />
      ))}
    </Stack>
  );
}

function EntryCard({ entry }: { entry: ResumeEntry }) {
  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3 },
        border: `1px solid ${colors.border}`,
        borderRadius: 3,
        bgcolor: "#ffffff",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "baseline" }}
        gap={0.5}
        mb={0.5}
      >
        <Typography
          sx={{ color: colors.title, fontSize: "1.05rem", fontWeight: 700 }}
        >
          {entry.title}
        </Typography>
        <Typography
          sx={{
            color: colors.muted,
            fontSize: "0.9rem",
            whiteSpace: "nowrap",
          }}
        >
          {entry.period}
        </Typography>
      </Stack>

      {entry.company && (
        <Typography sx={{ color: colors.accent, fontWeight: 600, mb: 2 }}>
          {entry.company}
        </Typography>
      )}

      <Box mb={2} mt={entry.company ? 0 : 1.5}>
        <TechChips items={entry.stack} />
      </Box>

      <Box
        component="ul"
        sx={{ m: 0, pl: 2.5, color: colors.text, lineHeight: 1.8 }}
      >
        {entry.items.map((item) => (
          <Box component="li" key={item} sx={{ mb: 0.75 }}>
            {item}
          </Box>
        ))}
      </Box>

      {entry.links && (
        <Stack direction="row" gap={2} mt={2} flexWrap="wrap">
          {entry.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: colors.accent, fontWeight: 600, fontSize: "0.95rem" }}
            >
              {link.label} ↗
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default function AboutPage() {
  return (
    <Box component="main">
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={8}>
          <Box>
            <Typography
              sx={{
                display: "inline-flex",
                px: 2,
                py: 0.7,
                borderRadius: 999,
                border: "1px solid #dbeafe",
                color: colors.accent,
                bgcolor: "#eff6ff",
                fontSize: 13,
                fontWeight: 600,
                mb: 2,
              }}
            >
              Sobre
            </Typography>

            <Typography
              component="h1"
              sx={{
                color: colors.title,
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              {profile.name}
            </Typography>

            <Typography
              sx={{ color: "#334155", fontSize: "1.2rem", fontWeight: 500 }}
            >
              {profile.role}{" "}
              <Box component="span" sx={{ color: colors.muted }}>
                | {profile.headline}
              </Box>
            </Typography>

            <Typography sx={{ color: colors.muted, mt: 1, mb: 3 }}>
              {profile.location} ·{" "}
              <Link
                href={`mailto:${profile.email}`}
                underline="hover"
                sx={{ color: colors.accent }}
              >
                {profile.email}
              </Link>
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: "none",
                  "&:hover": { boxShadow: "none" },
                }}
              >
                GitHub
              </Button>
              <Button
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  color: colors.title,
                  borderColor: "#cbd5e1",
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { borderColor: "#94a3b8", bgcolor: "#f8fafc" },
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>

          <Box>
            <Heading>Resumo profissional</Heading>
            <Stack spacing={2}>
              {summary.map((paragraph) => (
                <Typography
                  key={paragraph}
                  sx={{ color: colors.text, lineHeight: 1.9, fontSize: "1.05rem" }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Heading>Experiência profissional</Heading>
            <Stack spacing={3}>
              {experiences.map((entry) => (
                <EntryCard key={entry.title + entry.company} entry={entry} />
              ))}
            </Stack>
          </Box>

          <Box>
            <Heading>Projetos próprios</Heading>
            <Stack spacing={3}>
              {ownProjects.map((entry) => (
                <EntryCard key={entry.title} entry={entry} />
              ))}
            </Stack>
          </Box>

          <Box>
            <Heading>Formação</Heading>
            <Stack spacing={2.5}>
              {education.map((item) => (
                <Box key={item.course}>
                  <Typography sx={{ color: colors.title, fontWeight: 700 }}>
                    {item.course}
                  </Typography>
                  <Typography sx={{ color: colors.text }}>
                    {item.institution}
                  </Typography>
                  <Typography sx={{ color: colors.muted, fontSize: "0.9rem" }}>
                    {item.status}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box>
            <Heading>Competências técnicas</Heading>
            <Stack spacing={3}>
              {skills.map((group) => (
                <Box key={group.area}>
                  <Typography
                    sx={{ color: colors.title, fontWeight: 600, mb: 1.25 }}
                  >
                    {group.area}
                  </Typography>
                  <TechChips items={group.items} />
                </Box>
              ))}
            </Stack>
          </Box>

          <Footer />
        </Stack>
      </Container>
    </Box>
  );
}
