import { Box, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", py: 4, textAlign: "center" }}>
      <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
        Escola Bibotalk de Teologia – ©2024 – Todos os Direitos Reservados!
      </Typography>
      <Link
        href="https://www.instagram.com/bibotalk"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white", textDecoration: "none" }}
      >
        Nos siga também no Instagram!
      </Link>
    </Box>
  );
};
