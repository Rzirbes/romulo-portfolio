import { Card, CardContent, Typography } from "@mui/material";

type CertificationCardProps = {
  title: string;
};

export function CertificationCard({ title }: CertificationCardProps) {
  return (
    <Card
      sx={{
        bgcolor: "rgba(255,255,255,0.03)",
        border: "1px solid #1e293b",
        borderRadius: 3,
        color: "#cbd5e1",
      }}
    >
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
}
