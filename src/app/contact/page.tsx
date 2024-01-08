"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactForm from "@/components/common/formcontact"; // Assurez-vous que le chemin d'importation est correct
import Image from "next/image";

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
      <div className="mb-4"></div>
      <ContactForm />
      <div className="mb-4">
        <p>
          Vous pouvez me trouver sur les réseaux sociaux via le lien ci-dessous
          ou alors en scannant le QR-CODE :
        </p>
        <div className="mb-4 max-w-xs mx-auto text-center">
          <Link href="https://linktr.ee/mthiry1">
            <a>
              <Image
                src="/mthiry1.png"
                alt="Maximilien Thiry linktree social network"
                width={100}
                height={100}
                layout="responsive"
              />
            </a>
          </Link>
          <p className="mt-2">
            <Link href="https://linktr.ee/mthiry1">
              <a>Vers mes réseaux sociaux</a>
            </Link>
          </p>
        </div>
      </div>
    </Box>
  );
};

export default ContactPage;
