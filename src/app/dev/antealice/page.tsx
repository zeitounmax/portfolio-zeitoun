import React from "react";
import Link from "next/link";
import Image from "next/image";

const antealice = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ante Alice</h1>
      <Image
        src="/antealice.png"
        alt="logo du groupe"
        width={500}
        height={300}
        layout="responsive"
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Contexte et Concept :</h2>
        <p className="text-justify mb-4">
          Le groupe toulousain Ante Alice m’a contacté car il souhaitait migrer
          leur site web hors de l’hébergeur Wix et en profiter pour le refondre.
          Je leur ai proposé une solution basée sur WordPress, entièrement
          personnalisée avec l’éditeur Beaver Builder, tout en intégrant des
          éléments sur mesure en HTML, CSS et JavaScript.
        </p>
        <Image
          src="/website.png"
          alt="logo du groupe"
          width={500}
          height={300}
          layout="responsive"
        />
        <p className="text-justify mb-4">
          Le thème du site a été créé de toutes pièces, avec des animations et
          des effets visuels conçus manuellement. Les titres et les textes ont
          également été codés directement, garantissant ainsi une
          personnalisation complète. Seul le système de gestion de contenu (CMS)
          a été ajouté pour faciliter la publication et la gestion du contenu
          par le groupe sur leur site.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Lien du site web: </h2>
        <Link href="https://www.antealice.com">
          <span
            role="link"
            className="text-blue-600 hover:text-blue-800"
            tabIndex={0}
            style={{ cursor: "pointer" }}>
            Lien vers le site web du groupe.
          </span>
        </Link>
      </div>
      <em className="mb-4">
        Je remercie le groupe de me faire confiance et d’avoir pensé à moi pour
        la création de leur site web.
      </em>
    </div>
  );
};

export default antealice;
