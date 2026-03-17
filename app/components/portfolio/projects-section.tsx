import { Box } from "@mui/material";
import { projects } from "@/data/portfolio";
import { SectionTitle } from "./section-title";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <Box mt={14}>
      <SectionTitle>Projetos</SectionTitle>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
        gap={3}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  );
}
