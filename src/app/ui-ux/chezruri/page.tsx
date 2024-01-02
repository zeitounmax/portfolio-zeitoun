import React from "react";
import Link from "next/link";
import Image from "next/image";

const chezruri = () => {
  return (
    <div>
      <h1>Protype Chez Ruri</h1>
      <Image
        src="/ruri.png"
        alt="Logo chez Ruri"
        width={120}
        height={120}
        layout="responsive"
      />
      <p>
        Petit exercice de prototypage pour une amie envisageant d&apos;ouvrir
        une boutique en ligne de plantes. Ceci est la première version du
        prototype.
      </p>
      <p>Ruri est une spitzloup</p>
      <div>
        <h2>Lien vers le prototype</h2>
        <Link href="https://www.figma.com/file/RkGl0wIXOUfYNblWQ6gd5l/Chez-Ruri?type=design&node-id=1-2&mode=design&t=dhqCxkneUU2Rt8cO-0">
          <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
            Lien vers le prototype
          </span>
        </Link>
      </div>
    </div>
  );
};

export default chezruri;
