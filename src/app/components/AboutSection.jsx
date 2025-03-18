"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Comp from './Competence/competence'
import TabButton from "./TabButton";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BTS SIO option SLAM, Iris, Paris</li>
        <li>Baccalauréat Générale spécialité Mathématique et Numérique Science Informatique <br/>
            Mention Assez-bien, Lycée International Honoré de Balzac, Paris
        </li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
        <ul className="list-disc pl-2">
          <li>Spécialisation Angular 17, Coursera
            <Link
                href="/images/Spécialisation_Angular_17_Coursera.pdf"
                className="ml-10 px-5 mb-4 inline-block py-1 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Voir la certification
            </Link>
          </li>
          <li>Se préparer au métier de développeur/développeuse par Microsoft et LinkedIn, Microsoft
            <Link
                href="/images/CertificatDaccomplissement_Se%20preparer%20au%20metier%20de%20developpeur%20developpeuse%20par%20Microsoft%20et%20LinkedIn.pdf"
                className="ml-10 px-5 mb-4 inline-block py-1 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Voir la certification
            </Link>
          </li>
          <li>Certification SQL, OpenClassroom
            <Link
                href="/images/Certification_SQL_OpenClassroom.pdf"
                className="ml-12 px-5 mb-4 inline-block py-1 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Voir la certification
            </Link>
          </li>

          <li>Sens Cyber, Cybermalveillance.gouv
            <Link
                href="/images/Attestation%20Sens%20Cyber.pdf"
                className="ml-12 px-5 mb-4 inline-block py-1 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Voir la certification
            </Link>
          </li>
          <li>L&apos;atelier RGPD, CNIL
            <Link
                href="/images/Certification_LAtelier_RGPD.pdf"
                className="ml-12 px-5 mb-4 inline-block py-1 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Voir la certification
            </Link>
          </li>
          <li>MOOC SecNumacadémie, ANSSI
            <Link
                href="/images/Certification_SecNumacadémie.pdf"
                className="ml-10 px-5 mb-4 inline-block py-1 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Voir la certification
            </Link>
          </li>
          <li>Certification Pix, Pix
            <Link
                href="/images/attestation-pix.pdf"
                className="ml-10 px-5 mb-4 inline-block py-1 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Voir la certification
            </Link>
          </li>

        </ul>
    )
  },

  {
    title: "Projet entreprise",
    id: "Projet_entreprise",
    content: (
        <ul className="list-disc pl-2">
          <li>Programme de visualisation de facture client avec le logiciel de programmation Magic XPA</li>
          <li>Application web d'un Planning pour la gestion de tournées de chauffeur avec Magic XPA et Angular 17</li>
          <li>Application web pour de la recherche de document de facturation avec Magic XPA et Angular 17</li>
        </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [tab2, setTab2] = useState("Projet_entreprise");
  const [isPending, startTransition] = useTransition();



  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const handleTabChange2 = (id) => {
    startTransition(() => {
      setTab2(id);
    });
  };

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

  return (
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about-image.png"  alt="img" width={500} height={500}/>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">A propos de moi</h2>
            <p className="text-base lg:text-lg">
              👋 Bonjour ! Je suis Benjamin Pereira, un apprenti informatique passionné par les nouvelles technologies.
              Après avoir entamé une licence en Mathématiques et Informatique, j&apos;ai réorienté mon parcours vers une
              alternance en tant que développeur back-end. Actuellement, je suis étudiant
              en alternance  BTS SIO (Services Informatiques aux Organisations)
              option SLAM (Solutions Logicielles et Applications Métiers) à l&apos;école Iris Paris.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>

        <Comp></Comp>

        <section className="text-white" id="entreprise">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/logopap.png"  alt="img" width={500} height={500}/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold text-white mb-4">Présentation de l&apos;entreprise</h2>
              <p className="text-base lg:text-lg">
                Paprec Group est un leader français de la gestion et du recyclage des déchets. Fondé en 1995 par
                Jean-Luc Petithuguenin,Paprec est l&apos;un des principaux acteurs européens dans le domaine de la
                gestion des déchets. Avec plus de 10 000 collaborateurs répartis sur plus de 250 sites en France et à
                l&apos;international. Le groupe traite chaque année plusieurs millions de tonnes de déchets.
                Ses activités couvrent une large gamme de secteurs, notamment le papier, le plastique, le verre,
                les métaux, les déchets industriels et commerciaux, ainsi que les déchets dangereux. Son engagement
                envers la responsabilité sociale et environnementale en fait une référence dans son secteur, et son
                histoire témoigne d&apos;une évolution constante vers des pratiques plus durables et respectueuses de
                l&apos;environnement.
              </p>
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                    selectTab={() => handleTabChange2("Projet_entreprise")}
                    active={tab2 === "Projet_entreprise"}
                >
                  {" "}
                  Projet entreprise{" "}
                </TabButton>
              </div>
              <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab2).content}
              </div>
            </div>
          </div>
        </section>

      </section>
  )
}
export default AboutSection;