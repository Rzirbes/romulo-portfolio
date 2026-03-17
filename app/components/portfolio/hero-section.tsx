import { Box, Button, Chip, Stack, Typography } from "@mui/material";

export function HeroSection() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={8}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box maxWidth={560}>
        <Chip
          label="Portfólio"
          sx={{
            mb: 3,
            bgcolor: "#eff6ff",
            color: "#1d4ed8",
            border: "1px solid #bfdbfe",
            fontWeight: 500,
          }}
        />

        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            mb: 2,
            color: "#0f172a",
          }}
        >
          Rômulo Zirbes
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#334155",
            mb: 2,
            fontWeight: 500,
          }}
        >
          Fullstack Developer
        </Typography>

        <Typography
          sx={{
            color: "#475569",
            lineHeight: 1.8,
            mb: 4,
            fontSize: "1rem",
          }}
        >
          Desenvolvedor focado em aplicações modernas utilizando React, Next.js,
          Node.js e arquitetura escalável. Experiência com backend em NestJS,
          bancos de dados SQL/NoSQL e aplicações mobile com React Native.
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            href="https://github.com/Rzirbes"
            target="_blank"
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: 2,
              textTransform: "none",
              boxShadow: "none",
              fontWeight: 600,
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            GitHub
          </Button>

          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/romulo-zirbes/"
            target="_blank"
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: 2,
              textTransform: "none",
              color: "#0f172a",
              borderColor: "#cbd5e1",
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
      </Box>

      <Box
        sx={{
          width: 240,
          height: 240,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid #e2e8f0",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
          flexShrink: 0,
          bgcolor: "#fff",
        }}
      >
        <Box
          component="img"
          src="/profile.jpeg"
          alt="Rômulo Zirbes"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Stack>
  );
}
