import React from "react";
import Image from "next/image";
import Link from "next/link";
import ResumeData from "@/data/resumeData"; // Assurez-vous que le chemin d'importation est correct

const About = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="mb-4 max-w-xs mx-auto">
          <Image
            src="/me.png"
            alt="Maximilien Thiry"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">Qui je suis ?</h1>
      <p className="mb-4 text-md text-justify">
        <strong className="text-3xl">J</strong>e me présente, Thiry Maximilien,
        j&apos;ai 34 ans et je viens des Ardennes. J&apos;ai travaillé dans
        plusieurs entreprises de restauration tout en effectuant des petits
        boulots. Cependant, pendant la période du Covid, j&apos;ai décidé de
        changer de voie professionnelle et de me lancer dans des domaines qui me
        plaisent, à savoir le design et le développement web. En 2022, j&apos;ai
        suivi une formation de Concepteur UI et j&apos;ai obtenu mon diplôme
        Bac+4 Concepteur UI (RNCP). En décembre, j&apos;ai également suivi une
        formation d&apos;initiation à la Wild Code School pour acquérir de
        nouvelles compétences en développement web. Et de fin février et
        jusqu&apos;en décembre 2023, j&apos;ai fait la formation de Développeur
        Web à la Wild Code School et actuellement, je suis à la recherche
        d&apos;une mission ou d&apos;un poste dans ce domaine pour avoir de
        nouvelle expérience mais aussi me perfectionner.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Mon parcours</h2>
        <ul className="flex flex-col gap-4">
          {ResumeData.map((item) => (
            <li key={item.id} className="flex flex-col items-start">
              <div className="text-xs font-medium uppercase text-gray-500">
                {item.year}
              </div>
              <div className="mt-1">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xl text-justify">
          Pour plus d&apos;informations, n&apos;hésitez pas à consulter mon CV
          ou ma page Linkedin.
        </p>
        <div className="mt-4">
          <Link href="https://drive.google.com/file/d/1mnKYRWYXLlhqt1ICDyUhBjCZZGhobYqV/view?usp=sharing">
            <span className="btn btn-primary">Mon CV</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
