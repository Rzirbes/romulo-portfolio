"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Button,
  Dialog,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

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
  const [openPreview, setOpenPreview] = useState(false);

  const previewSrc = hovered && project.gif ? project.gif : project.image;
  const expandedSrc = project.gif || project.image;

  return (
    <>
      <Card
        sx={{
          bgcolor: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
          transition: "all 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
            borderColor: "#cbd5e1",
          },
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box
          component="button"
          type="button"
          onClick={() => setOpenPreview(true)}
          sx={{
            width: "100%",
            border: "none",
            padding: 0,
            margin: 0,
            background: "transparent",
            cursor: "zoom-in",
            display: "block",
          }}
        >
          <Box
            component="img"
            src={previewSrc}
            alt={project.title}
            sx={{
              width: "100%",
              height: 220,
              objectFit: "cover",
              borderBottom: "1px solid #e2e8f0",
              display: "block",
            }}
          />
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#0f172a",
              mb: 1,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#475569",
              mb: 2.5,
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={3}>
            {project.tech.slice(0, 3).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: "#f8fafc",
                  color: "#334155",
                  border: "1px solid #e2e8f0",
                  fontWeight: 500,
                }}
              />
            ))}
          </Stack>

          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {project.links?.live && (
              <Button
                size="small"
                variant="contained"
                component="a"
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  boxShadow: "none",
                  fontWeight: 600,
                  "&:hover": {
                    boxShadow: "none",
                  },
                }}
              >
                Ver projeto
              </Button>
            )}

            {project.links?.frontend && (
              <Button
                size="small"
                variant="text"
                component="a"
                href={project.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textTransform: "none",
                  color: "#475569",
                  fontWeight: 600,
                }}
              >
                Frontend
              </Button>
            )}

            {project.links?.backend && (
              <Button
                size="small"
                variant="text"
                component="a"
                href={project.links.backend}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textTransform: "none",
                  color: "#475569",
                  fontWeight: 600,
                }}
              >
                Backend
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>

      <Dialog
        open={openPreview}
        onClose={() => setOpenPreview(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#0f172a",
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ position: "relative", p: 2 }}>
          <IconButton
            onClick={() => setOpenPreview(false)}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 2,
              color: "#fff",
              bgcolor: "rgba(15, 23, 42, 0.6)",
              "&:hover": {
                bgcolor: "rgba(15, 23, 42, 0.85)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={expandedSrc}
            alt={project.title}
            sx={{
              width: "100%",
              maxHeight: "85vh",
              objectFit: "contain",
              display: "block",
              borderRadius: 2,
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}
