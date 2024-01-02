import React from "react";
import Link from "next/link";
import Image from "next/image";
const wildout = () => {
  return (
    <div>
      <h1>WildOut</h1>
      <Image
        src="/wildout-logo.png"
        alt="Logo du projet"
        width={100}
        height={100}
        layout="responsive"
      />
      <div>
        <h2>Wild Out ? </h2>
        <Image
          src="/wildout1.png"
          alt="Capture d'écran du prototype du site"
          width={100}
          height={100}
          layout="responsive"
        />
        <p>
          WildOut est un projet réalisé dans le cadre du Project 2 de la Wild
          Code School. Vous ne savez pas quoi faire aujourd’hui ? Et si vous
          regardiez les événements de votre ville en tenant compte de la météo ?
          C’est là que WildOut intervient. Grâce à nos APIs et à un peu de
          logique, nous avons pu mettre en place un système pour que WildOut
          vous montre les bons événements en fonction de la météo.
        </p>
        <h2>Langage de code ?</h2>
        <ul>
          <li>ReactJS, ExpressJS et NodeJS pour le développement.</li>
          <li>
            L’API OpenEvent et OpenWeather pour récupérer les données sur les
            événements et la météo.
          </li>
          <li>ReactLeaflet et les données d’OpenStreetMap pour la carte.</li>
        </ul>
      </div>
      <div>
        <h3>Lien vers le Github</h3>
        <Link href="https://github.com/zeitounmax/WildOut">
          <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
            Lien vers le dépot du projet Github
          </span>
        </Link>
      </div>
    </div>
  );
};

export default wildout;
