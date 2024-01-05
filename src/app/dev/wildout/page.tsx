import React from "react";
import Link from "next/link";
import Image from "next/image";
const wildout = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">WildOut</h1>
      <Image
        src="/wildout-logo.png"
        alt="Logo du projet"
        width={500}
        height={300}
        layout="responsive"
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Wild Out ? </h2>
        <Image
          src="/wildout1.png"
          alt="Capture d'écran du prototype du site"
          width={500}
          height={300}
          layout="responsive"
        />
        <p className="mb-4 text-justify">
          WildOut est un projet réalisé dans le cadre du Project 2 de la Wild
          Code School. Vous ne savez pas quoi faire aujourd’hui ? Et si vous
          regardiez les événements de votre ville en tenant compte de la météo ?
          C’est là que WildOut intervient. Grâce à nos APIs et à un peu de
          logique, nous avons pu mettre en place un système pour que WildOut
          vous montre les bons événements en fonction de la météo.
        </p>
        <h2 className="text-xl font-semibold mb-3">Langage de code ?</h2>
        <ul className="list-disc list-inside">
          <li>ReactJS, ExpressJS et NodeJS pour le développement.</li>
          <li>
            L’API OpenEvent et OpenWeather pour récupérer les données sur les
            événements et la météo.
          </li>
          <li>ReactLeaflet et les données d’OpenStreetMap pour la carte.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Lien vers le Github</h3>
        <Link href="https://github.com/zeitounmax/WildOut">
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

export default wildout;
