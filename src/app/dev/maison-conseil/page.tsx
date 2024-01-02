import React from "react";
import Link from "next/link";
import Image from "next/image";

const maisonconseils = () => {
  return (
    <div>
      <h1>La Maison des Conseils Citoyens</h1>
      <p>
        La Maison des Conseils Citoyens est un projet de création d’un site
        internet pour une association, réalisé lors d’un stage de 5 semaines. Le
        site a été développé en utilisant Wordpress, une plateforme de gestion
        de contenu très populaire. Pour personnaliser l’apparence du site, j’ai
        utilisé des notions de CSS que j’ai apprises lors de ma formation de
        Concepteur UI en 2022. Le processus de réalisation du site a suivi les
        étapes suivantes : Wireframe : J’ai créé une représentation visuelle de
        la structure et de la disposition des éléments du site, afin de
        planifier son design et son ergonomie. Prototype : J’ai élaboré un
        prototype interactif du site pour présenter les fonctionnalités, la
        navigation et l’expérience utilisateur attendue. Développement du site :
        À partir du wireframe et du prototype, j’ai mis en place les différentes
        sections du site, en ajoutant le contenu et en appliquant les styles CSS
        pour harmoniser l’apparence visuelle. En utilisant Wordpress, j’ai pu
        bénéficier de ses fonctionnalités prêtes à l’emploi, telles que la
        gestion des pages, des articles, des formulaires de contact, etc. Cela a
        permis de faciliter le processus de création du site.
      </p>
      <div>
        <h2>Le Prototype Figma</h2>
        <div>
          <a
            href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdxSIMWByLT1F3GBR6CYyj8%2Fmaquette-site-La-maison-des-citoyens%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3D1iOu5s1MAPszBMnH-1"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            <Image
              src="/maison-proto.png"
              alt="Capture d'écran du prototype du site"
              width={100}
              height={100}
              layout="responsive"
            />
          </a>
        </div>
      </div>
      <h3>lien vers le site:</h3>
      <li>
        <Link href="https://www.lamaisondesconseilscitoyens.fr/">
          <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
            Lien vers le site web de la maison des conseils citoyens
          </span>
        </Link>
      </li>
    </div>
  );
};

export default maisonconseils;
