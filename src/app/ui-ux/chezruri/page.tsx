import React from "react";
import Link from "next/link";
import Image from "next/image";

const chezruri = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Protype Chez Ruri</h1>
      <div className="mb-4 max-w-xs mx-auto">
        <Image
          src="/ruri.png"
          alt="Logo chez Ruri"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
      <p className="mb-4 text-justify">
        Petit exercice de prototypage pour une amie envisageant d&apos;ouvrir
        une boutique en ligne de plantes. Ceci est la première version du
        prototype.
      </p>
      <div className="mb-4 max-w-5xl mx-auto ">
        <Image
          src="/ruri-prototype.png"
          alt="Prototype de chez Ruri "
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
      <p className="mb-4">Ruri est une spitzloup</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Lien vers le prototype</h2>
        <Link href="https://www.figma.com/file/RkGl0wIXOUfYNblWQ6gd5l/Chez-Ruri?type=design&node-id=1-2&mode=design&t=dhqCxkneUU2Rt8cO-0">
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

export default chezruri;
