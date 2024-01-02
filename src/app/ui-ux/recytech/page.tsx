import React from "react";
import Link from "next/link";
import Image from "next/image";

const recytech = () => {
  return (
    <div>
      <h1>RecyTech</h1>
      <Image
        src="/recylogo.png"
        alt="Logo chez Ruri"
        width={120}
        height={120}
        layout="responsive"
      />
      <p>
        Prototype réalisé sous Figma. J’avais fait le Wireframe pour le
        Hackathon 2 organisé par la Wild Code School et Emmaüs Connect . Je
        voulais pas rester en si bon chemin, j’ai décidé pendant la pause du
        midi au premier jour et à mon retour de, à titre personnel le prototype
        de ce dernier .
      </p>
      <div>
        <h2>Lien vers le prototype</h2>
        <Link href="https://www.figma.com/file/sNC2xDDHDAynn4UUt8xXz3/hackathon2_Prototype?type=design&node-id=0-1&mode=design&t=1PcUcdGM9Aqa56fE-0">
          <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
            Lien vers le prototype
          </span>
        </Link>
      </div>
    </div>
  );
};

export default recytech;
