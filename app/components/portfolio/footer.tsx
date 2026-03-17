import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box mt={14} textAlign="center">
      <Typography variant="body2" sx={{ color: "#64748b" }}>
        © {new Date().getFullYear()} Rômulo Zirbes
      </Typography>
    </Box>
  );
}
