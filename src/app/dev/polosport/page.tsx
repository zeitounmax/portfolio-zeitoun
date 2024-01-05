import React from "react";
import Image from "next/image";
import Link from "next/link";

const Polosport = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Polosport</h1>
      <Image
        src="/polologo.png"
        alt="Logo du projet Polosport"
        width={500}
        height={300}
        layout="responsive"
      />

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Contexte du projet</h2>
        <p className="text-justify mb-4">
          Pour mon projet de fin d&apos;études, j&apos;ai eu l&apos;idée de
          créer une plateforme semblable à YouTube, mais dédiée aux sports.
          Cette plateforme utilise React, Node, Express, ainsi que Argon2 et
          JsonWebToken comme bases de mon projet. Les vidéos sont stockées dans
          une base de données et il est possible d&apos;ajouter des vidéos via
          un CMS interne.
        </p>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold">Comment utiliser le projet</h4>
        <p className="mb-2">Pour utiliser le projet, suivez ces étapes :</p>
        <ol className="list-decimal list-inside">
          <li>Clonez le projet sur votre machine locale.</li>
          <li>
            Installez les modules Node nécessaires en exécutant la commande{" "}
            <code>npm install</code> dans votre terminal.
          </li>
          <li>
            Démarrez le serveur et le client en exécutant la commande{" "}
            <code>npm run dev</code>.
          </li>
        </ol>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">
          Fonctionnalités de la plateforme
        </h2>
        <ul>
          <li>
            <strong>Diversité des Sports :</strong> La plateforme propose des
            vidéos de divers sports, couvrant un large éventail de disciplines,
            permettant aux utilisateurs de trouver des vidéos qui correspondent
            à leurs intérêts personnels.
          </li>
          <li>
            <strong>Facilité d&apos;Utilisation :</strong> La plateforme est
            conçue pour être simple et intuitive. Les utilisateurs peuvent
            facilement naviguer sur le site et trouver les vidéos qu&apos;ils
            souhaitent regarder sans difficulté technique.
          </li>
          <li>
            <strong>Suggestions de Vidéos :</strong> Des suggestions de vidéos
            sont offertes pour aider les utilisateurs à découvrir du contenu
            intéressant, basé sur leurs préférences, les vidéos populaires, ou
            d&apos;autres critères.
          </li>
          <li>
            <strong>Catégories de Vidéos :</strong> Pour faciliter la recherche,
            la plateforme est organisée en catégories thématiques, permettant
            une recherche rapide de vidéos sur des sujets spécifiques.
          </li>
          <li>
            <strong>Onglet de Recherche :</strong> Un onglet de recherche est
            disponible pour permettre aux utilisateurs de trouver des vidéos
            spécifiques en utilisant des mots-clés ou des titres.
          </li>
          <li>
            <strong>Contenu pour Tous :</strong> La plateforme offre des vidéos
            adaptées à différents publics, répondant à un large éventail de
            goûts et de préférences.
          </li>
          <li>
            <strong>Plus de Vidéos en s&apos;Identifiant :</strong> En
            s&apos;identifiant sur la plateforme, les utilisateurs accèdent à un
            choix plus large de vidéos, incluant du contenu exclusif pour les
            membres, des événements en direct, et une plus grande variété de
            contenus.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Lien vers le dépot du projet</h2>
        <Link href="https://github.com/zeitounmax/PoloSport">
          <span
            role="link"
            className="text-blue-600 hover:text-blue-800"
            tabIndex={0}
            style={{ cursor: "pointer" }}>
            Lien vers le dépot du projet Github
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Polosport;
