import React from "react";
import Link from "next/link";
import Image from "next/image";

const recytech = () => {
  return (
    <div className="p-4 mb-4">
      <h1 className="text-2xl font-bold mb-4">RecyTech</h1>
      <div className="mb-4 max-w-xs mx-auto">
        <Image
          src="/recylogo.png"
          alt="Logo chez Ruri"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
      <p className="mb-4 text-justify">
        Prototype réalisé sous Figma. J’avais fait le Wireframe pour le
        Hackathon 2 organisé par la Wild Code School et Emmaüs Connect . Je
        voulais pas rester en si bon chemin, j’ai décidé pendant la pause du
        midi au premier jour et à mon retour de, à titre personnel le prototype
        de ce dernier .
      </p>
      <div className="mb-4 max-w-5xl mx-auto ">
        <Image
          src="/recy-prototype.png"
          alt="Prototype de la Maison des Conseils Citoyens "
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Lien vers le prototype</h2>
        <Link href="https://www.figma.com/file/sNC2xDDHDAynn4UUt8xXz3/hackathon2_Prototype?type=design&node-id=0-1&mode=design&t=1PcUcdGM9Aqa56fE-0">
          <span
            role="link"
            className="text-blue-600 hover:text-blue-800"
            tabIndex={0}
            style={{ cursor: "pointer" }}>
            Lien vers le prototype
          </span>
        </Link>
      </div>
    </div>
  );
};

export default recytech;
