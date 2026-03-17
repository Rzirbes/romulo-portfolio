import { Box, Button, Chip, Stack, Typography } from "@mui/material";

export function HeroSection() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={6}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box maxWidth={520}>
        <Chip
          label="Portfólio"
          sx={{
            mb: 3,
            bgcolor: "rgba(37, 99, 235, 0.12)",
            color: "#93c5fd",
            border: "1px solid rgba(59, 130, 246, 0.3)",
          }}
        />

        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            mb: 2,
            background: "linear-gradient(to right, #fff, #dbeafe, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Rômulo Zirbes
        </Typography>

        <Typography variant="h5" sx={{ color: "#bfdbfe", mb: 2 }}>
          Fullstack Developer
        </Typography>

        <Typography
          sx={{
            color: "#94a3b8",
            lineHeight: 1.9,
            mb: 4,
          }}
        >
          Desenvolvedor focado em aplicações modernas utilizando React, Next.js,
          Node.js e arquitetura escalável. Experiência com backend em NestJS,
          bancos de dados SQL/NoSQL e aplicações mobile com React Native.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            href="https://github.com/Rzirbes"
            target="_blank"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
            }}
          >
            GitHub
          </Button>

          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/romulo-zirbes/"
            target="_blank"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              color: "white",
              borderColor: "#334155",
            }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          width: 260,
          height: 260,
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid rgba(59,130,246,0.4)",
          boxShadow: "0 10px 40px rgba(59,130,246,0.25)",
          flexShrink: 0,
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
