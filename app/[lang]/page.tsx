import { Box, Container } from "@mui/material";
import { HeroSection } from "../components/portfolio/hero-section";
import { ProjectsSection } from "../components/portfolio/projects-section";
import { Footer } from "../components/portfolio/footer";

export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <HeroSection />

        <Box mt={12}>
          <ProjectsSection />
        </Box>

        <Box mt={16}>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
}
