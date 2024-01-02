import React from "react";
import Link from "next/link";
import Image from "next/image";

const wildeats = () => {
  return (
    <div>
      <h1>WildEats</h1>
      <Image
        src="/wildlogo.png"
        alt="logo du premier projet"
        width={100}
        height={100}
        layout="responsive"
      />
      <p>
        WildEats est un premier projet qui a été réalisé dans le cadre de ma
        formation, comprenant trois projets au total. Ce projet se présente sous
        la forme d’un annuaire des meilleurs restaurants se trouvant dans les
        environs.
      </p>
      <Image
        src="/wildeats.png"
        alt="logo du premier projet"
        width={100}
        height={100}
        layout="responsive"
      />
      <div>
        <h2>Langage de code utilisé </h2>
        <ul>
          <li>HTML/CSS </li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div>
        <h2>Lien du projet et lien du github</h2>
        <ul>
          <li>
            <Link href="https://zeitounmax.github.io/Wildeats-/">
              <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
                Lien vers la page du projet
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/zeitounmax/Wildeats-">
              <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
                Lien vers la page de Github du projet.
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default wildeats;
