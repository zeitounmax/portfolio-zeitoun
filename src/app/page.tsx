import React from "react";
import homeData from "@/data/homeData";
import Image from "next/image";
import logohomedata from "@/data/logoHomeData";

const home = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon portfolio</h1>

      <div className="mb-8 w-full flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center mb-4 md:mb-0">
          <Image
            src="/avatar.png"
            alt="logo du groupe"
            width={150}
            height={150}
            className="rounded-full w-24 h-24 md:w-36 md:h-36"
            layout="responsive"
          />
        </div>
        <p className="text-lg text-center md:text-left p-4  rounded shadow-sm max-w-md mx-auto md:mx-0">
          Développeur web et passionné de UI/UX en France, je suis au début de
          mon parcours professionnel. Mon objectif ? Gagner en expérience et
          m&apos;épanouir dans ce domaine dynamique. Je recherche des projets
          stimulants pour aiguiser mes compétences et apporter mon énergie et
          mes idées novatrices. Je suis ouvert à des missions qui me permettront
          d&apos;apprendre et de grandir. Si vous avez besoin d&apos;un jeune
          développeur enthousiaste, prêt à relever de nouveaux défis, je suis
          votre candidat idéal. Contactez-moi pour explorer ensemble les
          possibilités créatives en développement web et UI/UX !
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
              className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl hover:shadow-halo transition-shadow duration-300 p-4 mx-2">
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
    </div>
  );
};

export default home;
