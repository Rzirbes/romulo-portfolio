import { Box } from "@mui/material";
import { Header } from "@/app/components/portfolio/header";

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      <Header />

      {children}
    </Box>
  );
}
