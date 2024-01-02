import React from "react";
import Link from "next/link";
import Image from "next/image";

const wildoutv2 = () => {
  return (
    <div>
      <h1>Wild Out V2</h1>
      <em>Le logiciel comment je l&apos;aurais vu </em>
      <Image
        src="/wildout-logo.png"
        alt="Logo du projet"
        width={100}
        height={100}
        layout="responsive"
      />

      <h2>Context</h2>
      <p>
        Voici un prototype que j&apos;ai imaginé pour une éventuelle mise à jour
        du projet. Avec de nouvelles fonctionallités mais aussi, une refonte
        totalement du projet.
      </p>

      <div>
        <h2>Lien vers le prototype </h2>
        <Link href="https://www.figma.com/file/z55vzRxV31oiAKLYZbQj1x/Wild-Out-V2?type=design&node-id=3%3A3&mode=design&t=eJ2VAjoN9jt0vni3-1">
          <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
            Lien vers le prototype
          </span>
        </Link>
      </div>
    </div>
  );
};

export default wildoutv2;
