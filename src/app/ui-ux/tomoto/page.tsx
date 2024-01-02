import React from "react";
import Image from "next/image";
import Link from "next/link";

const tomoto = () => {
  return (
    <div>
      <h1>Tomoto Times</h1>
      <Image
        src="/tomato.png"
        alt="Logo tomato times"
        width={120}
        height={120}
        layout="responsive"
      />
      <p>
        Dossier de présentation d’un projet de fin de formation pour l’obtention
        du titre Concepteur UI . Je suis parti sur un projet de méthode pomodoro
        et de développement personnel. Les logiciels utilisés étaient
        Figma,Wordpress,mamp,Adobe suite … (Update: Révision du prototype qui
        est passé dans sa Version3)
      </p>
      <div>
        <h2>C&apos;est quoi la méthode Pomodoro?</h2>
        <p>
          La méthode Pomodoro est une technique de gestion du temps développée
          par Francesco Cirillo à la fin des années 1980. Le concept est simple
          mais efficace : il s&apos;agit de diviser le travail en périodes de
          concentration intenses, appelées &quot;Pomodoros&quot;, séparées par
          de courtes pauses. Voici comment elle fonctionne : Détermination de la
          Tâche : Choisissez une tâche ou un projet sur lequel vous devez
          travailler. Minuteur de 25 Minutes : Réglez un minuteur sur 25
          minutes. Cette période de 25 minutes est votre &quot;Pomodoro&quot;.
          Travail Concentré : Travaillez sur la tâche sans interruption
          jusqu&apos;à ce que le minuteur sonne. Pause de 5 Minutes : Une fois
          le Pomodoro terminé, faites une courte pause de 5 minutes. Cela permet
          à votre esprit de se reposer et de se régénérer pour le prochain
          Pomodoro. Répétition : Répétez ce processus. Après quatre Pomodoros,
          prenez une pause plus longue, généralement de 15 à 30 minutes. La
          méthode Pomodoro est conçue pour maximiser la concentration et la
          productivité en minimisant les distractions et la fatigue mentale. En
          se concentrant pendant de courtes périodes et en prenant des pauses
          régulières, les utilisateurs peuvent maintenir un haut niveau de
          concentration sans s&apos;épuiser.
        </p>
      </div>
      <div>
        <h2>Lien vers le prototype</h2>
        <ul>
          <li>
            <Link href="https://www.figma.com/file/wSWUG56JLzj2S3FejJJEun/Tomoto-Times-V3?type=design&node-id=0-1&mode=design">
              <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
                Lien vers le prototype.
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://drive.google.com/drive/folders/1sbMhmRSKkVIvhh9jfACnmIpWv0IIyzXN?usp=sharing">
              <span role="link" tabIndex={0} style={{ cursor: "pointer" }}>
                Lien vers les éléments du projet{" "}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default tomoto;
