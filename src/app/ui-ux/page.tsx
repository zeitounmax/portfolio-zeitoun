import React from "react";
import uiuxProjects from "../../data/uiuxProjectsData";

const UIUX = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projet en UI/UX</h1>
      <p className="mb-6">Voici mes projets en UI/UX</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {uiuxProjects.map((project) => (
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
    </div>
  );
};

export default UIUX;
