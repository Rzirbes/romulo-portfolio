import { Card, CardContent, Link as MuiLink, Typography } from "@mui/material";

type CertificationCardProps = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
};

export function CertificationCard({
  title,
  issuer,
  date,
  link,
}: CertificationCardProps) {
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
        <Typography fontWeight={600} sx={{ color: "#f8fafc" }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#94a3b8", mt: 0.5 }}>
          {issuer} • {date}
        </Typography>

        {link && (
          <MuiLink
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              display: "inline-block",
              mt: 1.5,
              color: "#60a5fa",
            }}
          >
            Ver certificado
          </MuiLink>
        )}
      </CardContent>
    </Card>
  );
}
