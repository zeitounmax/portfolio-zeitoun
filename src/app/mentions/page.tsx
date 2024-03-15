import React from "react";

const LegalMentions: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Mentions Légales</h1>

      <section>
        <h2 className="text-2xl font-semibold">Éditeur du Site</h2>
        <p className="mt-2">
          <strong>Nom de l&apos;entreprise :</strong> ZeitounCode
          <br />
          <strong>Entrepreneur individuel :</strong> Maximilien Bernard Marc
          Thiry
          <br />
          <strong>Adresse du siège social :</strong> 30 RUE de Cheveujus, 08350
          Cheveuges, FRANCE
          <br />
          <strong>Numéro SIRET :</strong> 98440932600019
          <br />
          <strong>Activité principale :</strong> Programmation informatique
          <br />
          <strong>Adresse électronique (E-Mail) :</strong>{" "}
          <a
            href="mailto:maximilien.thiry1@gmail.com"
            className="text-blue-600 hover:underline"
          >
            maximilien.thiry1@gmail.com
          </a>
          <br />
          <strong>Téléphone :</strong> +33 6 04 52 09 26
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Hébergement du Site</h2>
        <p className="mt-2">
          <strong>Hébergeur :</strong> VERCEL
          <br />
          <strong>Société :</strong> VERCEL Inc
          <br />
          <strong>Adresse web :</strong>{" "}
          <a
            href="https://www.vercel.com"
            className="text-blue-600 hover:underline"
          >
            www.vercel.com
          </a>
          <br />
          <strong>Adresse Postale :</strong> Vercel Inc., 340 S Lemon Ave #4133,
          Walnut, CA 91789, USA
          <br />
          <strong>Téléphone :</strong> (559) 288-7060
          <br />
          <strong>Adresse électronique (E-Mail) :</strong>{" "}
          <a
            href="mailto:privacy@vercel.com"
            className="text-blue-600 hover:underline"
          >
            privacy@vercel.com
          </a>
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">
          Conditions Générales d&apos;Utilisation
        </h2>
        <p className="mt-2">
          Le site est accessible par l’URL [URL du site] et est exploité dans le
          respect de la législation française. L’utilisation de ce site est
          régie par les présentes conditions générales. En utilisant le site,
          vous reconnaissez avoir pris connaissance de ces conditions et les
          avoir acceptées.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Propriété Intellectuelle</h2>
        <p className="mt-2">
          Tous les éléments du site ZeitounCode, y compris les textes,
          présentations, illustrations, photographies, arborescences et mises en
          forme sont, sauf documents publics et précisions supplémentaires, la
          propriété intellectuelle exclusive de ZeitounCode. Toute
          représentation, reproduction, imbrication, diffusion et rediffusion,
          en tout ou partie, du contenu du site ZeitounCode est interdite
          conformément aux dispositions de l&apos;article L.122-4 du Code de la
          Propriété Intellectuelle.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">
          Protection des Données Personnelles
        </h2>
        <p className="mt-2">
          En tant qu&apos;éditeur du site, ZeitounCode s’engage à respecter la
          confidentialité des données personnelles recueillies (nom, adresse,
          numéro de téléphone, adresse e-mail) et à les traiter dans le respect
          de la Loi Informatique et Libertés du 6 janvier 1978. Chaque
          utilisateur dispose d&apos;un droit d&apos;accès, de rectification,
          d’opposition et de suppression de ses données personnelles, en
          adressant une demande écrite et signée, accompagnée d’une copie du
          titre d’identité.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Liens Hypertextes et Cookies</h2>
        <p className="mt-2">
          Le site ZeitounCode contient un certain nombre de liens hypertextes
          vers d’autres sites. Cependant, ZeitounCode n&apos;a pas la
          possibilité de vérifier le contenu de ces sites et n&apos;assumera
          aucune responsabilité de ce fait. La navigation sur le site
          ZeitounCode est susceptible de provoquer l’installation de cookies sur
          l’ordinateur de l’utilisateur. Ces cookies facilitent la navigation
          sur le site et sont également nécessaires pour la mesure d’audience.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">
          Loi Applicable et Attribution de Juridiction
        </h2>
        <p className="mt-2">
          Les présentes conditions du site ZeitounCode sont régies par les lois
          françaises et toute contestation ou litiges qui pourraient naître de
          l&apos;interprétation ou de l&apos;exécution de ces dernières seront
          de la compétence exclusive des tribunaux français.
        </p>
      </section>
    </div>
  );
};

export default LegalMentions;
