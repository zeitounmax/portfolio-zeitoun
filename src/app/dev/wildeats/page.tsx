import React from "react";
import Link from "next/link";
import Image from "next/image";

const wildeats = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">WildEats</h1>
      <Image
        src="/wildlogo.png"
        alt="logo du premier projet"
        width={500}
        height={300}
        layout="responsive"
      />
      <p className="mb-4 text-justify">
        WildEats est un premier projet qui a été réalisé dans le cadre de ma
        formation, comprenant trois projets au total. Ce projet se présente sous
        la forme d’un annuaire des meilleurs restaurants se trouvant dans les
        environs.
      </p>
      <Image
        src="/wildeats.png"
        alt="logo du premier projet"
        width={500}
        height={300}
        layout="responsive"
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Langage de code utilisé </h2>
        <ul className="list-disc list-inside">
          <li>HTML/CSS </li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">
          Lien du projet et lien du github
        </h2>
        <ul className="list-disc list-inside">
          <li>
            <Link href="https://zeitounmax.github.io/Wildeats-/">
              <span
                role="link"
                className="text-blue-600 hover:text-blue-800"
                tabIndex={0}
                style={{ cursor: "pointer" }}>
                Lien vers la page du projet
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/zeitounmax/Wildeats-">
              <span
                role="link"
                className="text-blue-600 hover:text-blue-800"
                tabIndex={0}
                style={{ cursor: "pointer" }}>
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
