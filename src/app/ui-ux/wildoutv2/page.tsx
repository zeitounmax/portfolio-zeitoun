import React from "react";
import Link from "next/link";
import Image from "next/image";

const wildoutv2 = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wild Out V2</h1>
      <em>Le logiciel comment je l&apos;aurais vu </em>
      <div className="mb-4 max-w-xs mx-auto">
        <Image
          src="/wildout-logo.png"
          alt="Logo du projet"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>

      <h2 className="text-xl font-semibold mb-3">Context</h2>
      <p className="text-justify mb-4">
        Voici un prototype que j&apos;ai imaginé pour une éventuelle mise à jour
        du projet. Avec de nouvelles fonctionallités mais aussi, une refonte
        totalement du projet.
      </p>
      <div className="mb-4 max-w-5xl mx-auto ">
        <Image
          src="/wo-prototype.png"
          alt="Prototype version 2 de WildOut "
          width={500}
          height={300}
          layout="responsive"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Lien vers le prototype </h2>
        <Link href="https://www.figma.com/file/z55vzRxV31oiAKLYZbQj1x/Wild-Out-V2?type=design&node-id=3%3A3&mode=design&t=eJ2VAjoN9jt0vni3-1">
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

export default wildoutv2;
