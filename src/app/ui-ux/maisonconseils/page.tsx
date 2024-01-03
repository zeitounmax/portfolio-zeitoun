import React from "react";
import Link from "next/link";
import Image from "next/image";

const maisonconseils = () => {
  return (
    <div>
      <h1>La Maison des Conseils Citoyens</h1>
      <Image
        src="/logomaison.png"
        alt="Logo chez Ruri"
        width={120}
        height={120}
        layout="responsive"
      />
      <p>
        Voici le prototype que j&apos;ai réalisé avec Figma lors de mon stage en
        Juillet 2022 à la maison des conseils citoyens à Charleville Mézières ,
        dans le cadre de ma formation de conception UI/UX .
      </p>
      <div>
        <h2>Lien vers le prototype</h2>
        <Link href="https://www.figma.com/file/dxSIMWByLT1F3GBR6CYyj8/maquette-site-La-maison-des-citoyens?type=design&node-id=0-1&mode=design&t=cGpv7RB0VMatqnjX-0">
          <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
            Lien vers le prototype
          </span>
        </Link>
      </div>
    </div>
  );
};

export default maisonconseils;
