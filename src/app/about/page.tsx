import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Qui je suis ? </h1>
      <div>
        <Image
          src="/me.png"
          alt="Logo du projet Polosport"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <p>
        Je me présente, Thiry Maximilien, j&apos;ai 33 ans et je viens des
        Ardennes. J&apos;ai travaillé dans plusieurs entreprises de restauration
        tout en effectuant des petits boulots. Cependant, pendant la période du
        Covid, j&apos;ai décidé de changer de voie professionnelle et de me
        lancer dans des domaines qui me plaisent, à savoir le design et le
        développement web. En 2022, j&apos;ai suivi une formation de Concepteur
        UI et j&apos;ai obtenu mon diplôme Bac+4 Concepteur UI (RNCP). En
        décembre, j&apos;ai également suivi une formation d&apos;initiation à la
        Wild Code School pour acquérir de nouvelles compétences en développement
        web. Et de fin février et jusqu&apos;en décembre 2023, j&apos;ai fait la
        formation de Développeur Web à la Wild Code School et actuellement, je
        suis à la recherche d&apos;une mission ou d&apos;un poste dans ce
        domaine pour avoir de nouvelle expérience mais aussi me perfectionner.
        Vous pouvez trouver un lien pour télécharger mon CV et je reste
        disponible pour information et aussi, pour un entretien.
      </p>
    </div>
  );
};

export default about;
