import React from "react";
import Link from "next/link";
import Image from "next/image";

const Athena = () => {
  return (
    <div>
      <h1>Athena Annuaire</h1>
      <Image
        src="/athena.png"
        alt="Logo Athena"
        width={120}
        height={120}
        layout="responsive"
      />
      <p>
        Athena Annuaire est un projet d’annuaire regroupant les personnes ayant
        participé à la mini formation sur l’initiation au code à la Wild Code
        School de Reims en décembre 2022. Ce projet a été développé en utilisant
        les langages HTML, CSS et JavaScript. Plus précisément, JavaScript a été
        utilisé pour créer les cartes affichant les noms des personnes ayant
        suivi la formation. L’annuaire Athena permet de visualiser les
        informations relatives aux participants, telles que leurs noms,
        éventuellement leurs spécialités ou compétences, et toute autre
        information pertinente. L’utilisation du HTML et du CSS permet d’assurer
        la structure et le style de l’annuaire, tandis que JavaScript apporte
        l’interactivité nécessaire pour afficher les cartes des participants. Si
        vous souhaitez en savoir plus sur le projet Athena Annuaire ou si vous
        avez d’autres questions à ce sujet, n’hésitez pas à me le faire savoir.
      </p>
      <h2>Liens Utiles</h2>
      <ul>
        <li>
          <Link href="https://zeitounmax.github.io/athena/">
            <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
              Lien vers le site Athena Annuaire
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/zeitounmax/athena">
            <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
              Lien vers la page de Github du projet Athena Annuaire
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Athena;