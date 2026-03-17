import { Box, Stack } from "@mui/material";
import { certifications } from "@/data/portfolio";
import { SectionTitle } from "./section-title";
import { CertificationCard } from "./certification-card";

export function CertificationsSection() {
  return (
    <Box mt={14} textAlign="center">
      <SectionTitle>Certificações</SectionTitle>

      <Stack spacing={2} maxWidth={700} mx="auto">
        {certifications.map((item) => (
          <CertificationCard key={item.title} {...item} />
        ))}
      </Stack>
    </Box>
  );
}
