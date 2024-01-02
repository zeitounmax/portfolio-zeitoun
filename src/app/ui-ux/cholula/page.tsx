import React from "react";
import Link from "next/link";
import Image from "next/image";

const cholula = () => {
  return (
    <div>
      <h1>Cholula Restaurant</h1>
      <Image
        src="/cholula.png"
        alt="Logo du projet Polosport"
        width={100}
        height={100}
        layout="responsive"
      />
      <p>
        Exercice qui a était fait pour valider le CCP pour le passage de
        l’examen de Concept design UI en 2022. Les outils utiliser sont Figma et
        la suite Adobe (PhotoShop,Illustrator,After Effects). Vous trouverez en
        plus du lien vers le prototype
      </p>
      <div>
        <h2>Lien vers le prototype</h2>
        <ul>
          <li>
            <Link href="https://www.figma.com/proto/AF0L4ifgk1r563BF6KLvZZ/Cholula-Restaurant?node-id=2-5">
              <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
                Lien vers le prototype
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://drive.google.com/drive/folders/1Y5t5N28boYPVu5Lvi5xP4K8mu6j-bFbA?usp=sharing">
              <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
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
