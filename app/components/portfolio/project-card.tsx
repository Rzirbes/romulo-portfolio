"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  links?: {
    live?: string;
    frontend?: string;
    backend?: string;
  };
  tech: string[];
  gif?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        bgcolor: "#020617",
        border: "1px solid #1e293b",
        borderRadius: 3,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          borderColor: "#3b82f6",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        component="img"
        src={hovered && project.gif ? project.gif : project.image}
        alt={project.title}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {project.title}
        </Typography>

        <Typography variant="body2" color="gray" mb={2}>
          {project.description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {project.tech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                bgcolor: "rgba(59,130,246,0.1)",
                color: "#93c5fd",
              }}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          {project.links?.live && (
            <Button
              size="small"
              variant="contained"
              component="a"
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </Button>
          )}

          {project.links?.frontend && (
            <Button
              size="small"
              variant="outlined"
              component="a"
              href={project.links.frontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </Button>
          )}

          {project.links?.backend && (
            <Button
              size="small"
              variant="outlined"
              component="a"
              href={project.links.backend}
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
