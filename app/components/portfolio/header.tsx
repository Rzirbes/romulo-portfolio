"use client";

import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useParams, usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const params = useParams();
  const lang = params.lang as string;

  const navItems = [
    { label: "Home", href: `/${lang}` },
    { label: "About", href: `/${lang}/about` },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(2, 6, 23, 0.75)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: "0 !important", minHeight: 72 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              component={Link}
              href={`/${lang}`}
              sx={{
                textDecoration: "none",
                color: "#f8fafc",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: 0.3,
              }}
            >
              Rômulo Zirbes
            </Typography>

            <Stack direction="row" spacing={1}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: isActive ? "#f8fafc" : "#94a3b8",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: isActive ? 600 : 500,
                      bgcolor: isActive
                        ? "rgba(59,130,246,0.12)"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(59,130,246,0.35)"
                        : "1px solid transparent",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.04)",
                        color: "#f8fafc",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
