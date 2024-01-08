import React from "react";
import Link from "next/link";
import Image from "next/image";

const cholula = () => {
  return (
    <div className="p-4 mb-4">
      <h1 className="text-2xl font-bold mb-4">Cholula Restaurant</h1>
      <div className="mb-4 max-w-xs mx-auto">
        <Image
          src="/cholula.png"
          alt="Logo du projet Polosport"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>

      <p className="mb-4 text-justify">
        Exercice qui a était fait pour valider le CCP pour le passage de
        l’examen de Concept design UI en 2022. Les outils utiliser sont Figma et
        la suite Adobe (PhotoShop,Illustrator,After Effects). Vous trouverez en
        plus du lien vers le prototype
      </p>
      <div className="mb-4 max-w-5xl mx-auto ">
        <Image
          src="/cho-prototype.png"
          alt="Prototype de la Maison des Conseils Citoyens "
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Lien vers le prototype</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link href="https://www.figma.com/proto/AF0L4ifgk1r563BF6KLvZZ/Cholula-Restaurant?node-id=2-5">
              <span
                role="link"
                className="text-blue-600 hover:text-blue-800"
                tabIndex={0}
                style={{ cursor: "pointer" }}>
                Lien vers le prototype
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://drive.google.com/drive/folders/1Y5t5N28boYPVu5Lvi5xP4K8mu6j-bFbA?usp=sharing">
              <span
                role="link"
                className="text-blue-600 hover:text-blue-800"
                tabIndex={0}
                style={{ cursor: "pointer" }}>
                Lien vers les fichiers du projet .
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default cholula;
