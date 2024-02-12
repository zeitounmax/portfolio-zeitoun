import React from "react";
import homeData from "@/data/homeData";
import Image from "next/image";
import logohomedata from "@/data/logoHomeData";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Bienvenue sur ZeitounCode
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center mb-8">
        <div className="mb-4 md:mb-0 flex justify-center items-end">
          <Image
            src="/header.jpg"
            alt="logo du groupe"
            width={150}
            height={150}
            className="w-24 h-24 md:w-36 md:h-36"
            layout="responsive"
          />
        </div>
      </div>
      <div className="mb-8 text-lg text-center">
        <p>
          Bienvenue sur ZeitounCode ! 👋 Je suis un développeur web passionné
          d&apos;UI/UX en France, au début de mon parcours professionnel. Mon
          objectif ? Gagner en expérience et m&apos;épanouir dans ce domaine
          dynamique. Je recherche des projets stimulants pour affûter mes
          compétences et apporter des idées novatrices. Ouvert à des missions
          propices à l&apos;apprentissage et à la croissance. Contactez-moi pour
          explorer ensemble les opportunités créatives en développement web et
          UI/UX ! 💻✨
        </p>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Mes Projets (Sélection de projets)
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {homeData.map((project) => (
            <div
              key={project.id}
              className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl hover:shadow-halo transition-shadow duration-300 p-4 mx-2"
            >
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
          Voici les langages, frameworks, etc., que j&apos;utilise
        </p>

        <div className="flex flex-wrap justify-center">
          {logohomedata.map((logo) => (
            <div
              key={logo.id}
              className="md:w-1/6 w-1/2 p-2 flex justify-center"
            >
              <Image src={logo.src} alt={logo.alt} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
