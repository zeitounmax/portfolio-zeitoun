import React from "react";
import Link from "next/link";
import Image from "next/image";

const maisonconseils = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        La Maison des Conseils Citoyens
      </h1>
      <div className="mb-4 max-w-xs mx-auto">
        <Image
          src="/logomaison.png"
          alt="Le site web de la maison conseils citoyens de charleville-mézières"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <p className="mb-4 text-justify">
        <strong className="text-3xl">L</strong>a Maison des Conseils Citoyens
        est un projet de création d’un site internet pour une association,
        réalisé lors d’un stage de 5 semaines. Le site a été développé en
        utilisant Wordpress, une plateforme de gestion de contenu très
        populaire. Pour personnaliser l’apparence du site, j’ai utilisé des
        notions de CSS que j’ai apprises lors de ma formation de Concepteur UI
        en 2022. Le processus de réalisation du site a suivi les étapes
        suivantes : Wireframe : J’ai créé une représentation visuelle de la
        structure et de la disposition des éléments du site, afin de planifier
        son design et son ergonomie. Prototype : J’ai élaboré un prototype
        interactif du site pour présenter les fonctionnalités, la navigation et
        l’expérience utilisateur attendue. Développement du site : À partir du
        wireframe et du prototype, j’ai mis en place les différentes sections du
        site, en ajoutant le contenu et en appliquant les styles CSS pour
        harmoniser l’apparence visuelle.En utilisant Wordpress, j’ai pu
        bénéficier de ses fonctionnalités prêtes à l’emploi, telles que la
        gestion des pages, des articles, des formulaires de contact, etc. Cela a
        permis de faciliter le processus de création du site.
      </p>
      <div className="mb-8">
        <div className="mb-4 max-w-5xl mx-auto">
          <Image
            src="/maison-website.png"
            alt="Le site web de la maison conseils citoyens de charleville-mézières"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold">lien vers le site:</h3>

      <Link href="https://www.lamaisondesconseilscitoyens.fr/">
        <span
          role="link"
          className="text-blue-600 hover:text-blue-800"
          tabIndex={0}
          style={{ cursor: "pointer" }}>
          Lien vers le site web de la maison des conseils citoyens
        </span>
      </Link>
    </div>
  );
};

export default maisonconseils;
