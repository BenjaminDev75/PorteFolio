"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "react-multi-carousel/lib/styles.css";

const TAB_DATA = [
  {
    title: "SLAM",
    id: "slam",
    content: (
      <ul className="list-disc pl-2">
        <li>SLAM (Solutions Logicielles et Applications Métiers) :</li>
        <ol><br/>L&apos;option SLAM se concentre sur le développement et la maintenance des applications informatiques.
          Les étudiants acquièrent des compétences approfondies en programmation, en conception logicielle, ainsi
          qu&apos;en gestion de bases de données. Ils apprennent à créer des solutions informatiques sur mesure pour
          répondre aux besoins spécifiques des différents secteurs d&apos;activité des entreprises, contribuant ainsi à
          leur efficacité opérationnelle.
        </ol>
      </ul>
    )
  },
  {
    title: "SISR",
    id: "sisr",
    content: (
        <ul className="list-disc pl-2">
          <li>SISR (Solutions d&apos;Infrastructure, Systèmes et Réseaux) : </li>
            <p><br/>L&apos;option SISR met l&apos;accent sur l&apos;administration et la gestion des systèmes informatiques
              et des réseaux. Les étudiants sont formés à installer, configurer, sécuriser et maintenir les
              infrastructures informatiques, comprenant les serveurs, les réseaux, les systèmes d&apos;exploitation,
              ainsi que les services associés. Ils acquièrent également des compétences en gestion de la sécurité des
              données et en supervision des performances des systèmes, assurant ainsi la continuité et la fiabilité des
              services informatiques au sein des organisations.
            </p>
        </ul>
    )
  },
];

const BTS = () => {
  const [tab, setTab] = useState("slam");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
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
        items: 1,
        Image : 10
      }
    };

  return (
      <section className="text-white" id="bts">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold text-white mb-4">Présentation du BTS</h2>
              <p className="text-base lg:text-lg">
                Le BTS SIO est un diplôme de l&apos;enseignement supérieur français spécialisé dans les technologies de
                l&apos;information et de la communication. Il représente une porte d&apos;entrée privilégiée vers le
                monde professionnel de l&apos;informatique en formant des techniciens polyvalents capables de répondre
                aux besoins numériques des entreprises et des organisations.
              </p>
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                    selectTab={() => handleTabChange("slam")}
                    active={tab === "slam"}
                >
                  {" "}
                  SLAM{" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabChange("sisr")}
                    active={tab === "sisr"}
                >
                  {" "}
                  SISR{" "}
                </TabButton>
              </div>
              <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
                <Image src="/images/BTS.png" alt="img" width={500} height={500} />
          </div>
      </section>
  )
}
export default BTS;