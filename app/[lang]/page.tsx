import { Box, Container } from "@mui/material";
import { HeroSection } from "../components/portfolio/hero-section";
import { ProjectsSection } from "../components/portfolio/projects-section";
import { CertificationsSection } from "../components/portfolio/certifications-section";
import { Footer } from "../components/portfolio/footer";

export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "#020617",
        color: "white",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <HeroSection />
        <ProjectsSection />
        <CertificationsSection />
        <Footer />
      </Container>
    </Box>
  );
}
