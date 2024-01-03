import React from "react";
import homeData from "@/data/homeData";

const home = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
        <p className="text-lg">
          Développeur web vivant en France, je suis à la recherche de projet, de
          mission ou de proposition. Ayant aussi des expériences en UI/UX, je
          peux aussi proposer mon expertise.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Mes Projets (Sélection de projets)
        </h1>
        {homeData.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 hover:text-blue-800 transition duration-200">
              En savoir plus
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center p-4">
        <h2 className="text-3xl font-bold mb-4">Mes outils favoris</h2>
        <p className="text-lg">
          Voici les langages,frameworks etc...que j&apos;utilise{" "}
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Intéresser pour travailler ensemble ?
        </h1>
        <p className="text-lg">
          Vous trouverez mon CV sur la page de Contact, mes réseaux sociaux mais
          aussi un formulaire de contact pour avoir des informations
        </p>
      </div>
    </div>
  );
};

export default home;
