import React from "react";
import Link from "next/link";
import Image from "next/image";

const maisonconseils = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        La Maison des Conseils Citoyens
      </h1>
      <div className="mb-4 max-w-xs mx-auto">
        <Image
          src="/logomaison.png"
          alt="Logo Maison conseils citoyens"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
      <p className="mb-4 text-justify">
        Voici le prototype que j&apos;ai réalisé avec Figma lors de mon stage en
        Juillet 2022 à la maison des conseils citoyens à Charleville Mézières ,
        dans le cadre de ma formation de conception UI/UX .
      </p>
      <div>
        {" "}
        <div className="mb-4 max-w-5xl mx-auto ">
          <Image
            src="/maison-proto.png"
            alt="Prototype de la Maison des Conseils Citoyens "
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Lien vers le prototype</h2>
        <Link href="https://www.figma.com/file/dxSIMWByLT1F3GBR6CYyj8/maquette-site-La-maison-des-citoyens?type=design&node-id=0-1&mode=design&t=cGpv7RB0VMatqnjX-0">
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

export default maisonconseils;
