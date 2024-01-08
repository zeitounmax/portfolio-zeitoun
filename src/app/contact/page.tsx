"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactForm from "@/components/common/formcontact"; // Assurez-vous que le chemin d'importation est correct

const ContactPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}>
      <h2 className="text-2xl font-bold">Contactez-Moi</h2>
      <p>N&apos;hésitez pas à me contacter pour toute question ou demande!</p>
      <div className="mb-4">
        {" "}
        <ContactForm />
      </div>

      <p>
        Vous pouvez également me contacter directement par email ou me trouver
        sur LinkedIn :
      </p>
      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <Link href="https://linkedin.com/in/maximilienthiry" target="_blank">
          <LinkedInIcon sx={{ fontSize: 60 }} />
        </Link>
      </Box>
    </Box>
  );
};

export default ContactPage;
