import React from "react";
import Link from "next/link";
import Image from "next/image";

const antealice = () => {
  return (
    <div>
      <h1>Ante Alice</h1>
      <Image
        src="/antealice.png"
        alt="logo du groupe"
        width={100}
        height={100}
        layout="responsive"
      />
      <div>
        <h2>Contexte et Concept :</h2>
        <p>
          Le groupe toulousain Ante Alice m’a contacté car il souhaitait migrer
          leur site web hors de l’hébergeur Wix et en profiter pour le refondre.
          Je leur ai proposé une solution basée sur WordPress, entièrement
          personnalisée avec l’éditeur Beaver Builder, tout en intégrant des
          éléments sur mesure en HTML, CSS et JavaScript.
        </p>
        <Image
          src="/website.png"
          alt="logo du groupe"
          width={100}
          height={100}
          layout="responsive"
        />
        <p>
          Le thème du site a été créé de toutes pièces, avec des animations et
          des effets visuels conçus manuellement. Les titres et les textes ont
          également été codés directement, garantissant ainsi une
          personnalisation complète. Seul le système de gestion de contenu (CMS)
          a été ajouté pour faciliter la publication et la gestion du contenu
          par le groupe sur leur site.
        </p>
      </div>
      <div>
        <h2>Lien du site web: </h2>
        <Link href="https://www.antealice.com">
          <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
            Lien vers le site web du groupe.
          </span>
        </Link>
      </div>
      <em>
        Je remercie le groupe de me faire confiance et d’avoir pensé à moi pour
        la création de leur site web.
      </em>
    </div>
  );
};

export default antealice;
