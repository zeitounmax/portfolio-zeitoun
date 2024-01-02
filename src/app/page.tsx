import React from "react";

const Page = () => {
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

export default Page;
