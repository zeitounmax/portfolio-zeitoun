import React from "react";
import devProjects from "../../data/devProjectsData"; // Mettez à jour le chemin selon l'arborescence de votre projet
import Image from "next/image";


const Dev = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projet en développement:</h1>
      <p className="mb-6">
        Vous trouverez sur cette page, mes projets en développement web
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {devProjects.map((project) => (
          <div
            key={project.id}
            className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-base-100 shadow-xl hover:shadow-halo transition-shadow duration-300 p-4 mx-2">
            <div className="card-body">
              {project.src && (
                <Image
                  src={project.src}
                  alt={`Logo de ${project.title}`}
                  width={80}
                  height={80}
                  layout="responsive"
                />
              )}
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
  );
};

export default Dev;
