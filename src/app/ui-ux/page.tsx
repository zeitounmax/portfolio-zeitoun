import React from "react";
import uiuxProjects from "../../data/uiuxProjectsData";
import Image from "next/image";

const UIUX = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projet en UI/UX</h1>
      <p className="mb-6">Voici mes projets en UI/UX</p>

      <div className="flex flex-wrap justify-center gap-4">
        {uiuxProjects.map((project) => (
          <div
            key={project.id}
            className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 mx-2">
            <div className="card-body">
              {project.src && (
                <Image
                  src={project.src}
                  alt={`Logo de ${project.title}`}
                  width={100}
                  height={100}
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

export default UIUX;
