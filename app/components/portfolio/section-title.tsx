import { Typography } from "@mui/material";

type SectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Typography variant="h4" textAlign="center" fontWeight={600} mb={6}>
      {children}
    </Typography>
  );
}
