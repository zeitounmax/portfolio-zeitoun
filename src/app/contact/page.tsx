"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactPage = () => {
  const email = "maximilien.thiry1@gmail.com";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}>
      <h2>Contactez-Moi</h2>
      <p>N&apos;hésitez pas à me contacter pour toute question ou demande!</p>

      <Link href={`mailto:${email}`} underline="none">
        <Button variant="contained" className="btn btn-active btn-primary">
          Envoyer un Email
        </Button>
      </Link>

      <p>Sinon vous pouvez me retrouver sur LinkedIn</p>
      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <Link href="https://linkedin.com/in/maximilienthiry" target="_blank">
          <LinkedInIcon sx={{ fontSize: 60 }} />
        </Link>
      </Box>
    </Box>
  );
};

export default ContactPage;
