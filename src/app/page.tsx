import React from "react";
import homeData from "@/data/homeData";
import Image from "next/image";
import logohomedata from "@/data/logoHomeData";

const home = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-center mb-8 w-full">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
        <p className="text-lg">
          Développeur web vivant en France, je suis à la recherche de projet, de
          mission ou de proposition. Ayant aussi des expériences en UI/UX, je
          peux aussi proposer mon expertise.
        </p>
      </div>

      <div className="mb-8 w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Mes Projets (Sélection de projets)
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {homeData.map((project) => (
            <div
              key={project.id}
              className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 mx-2">
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <a href={project.link} className="btn btn-primary">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <h2 className="text-3xl font-bold mb-4">Mes outils favoris</h2>
        <p className="text-lg">
          Voici les langages, frameworks etc... que j&apos;utilise{" "}
        </p>

        <div className="flex flex-wrap justify-center">
          {logohomedata.map((logo) => (
            <div
              key={logo.id}
              className="md:w-1/6 w-1/2 p-2 flex justify-center">
              <Image src={logo.src} alt={logo.alt} width={100} height={100} />
            </div>
          ))}
        </div>
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
