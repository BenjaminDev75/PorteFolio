"use client";
import React, {useState, useRef, useEffect} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    name: "Low-Code",
    description: "Most businesses now see low-code as the future",
    language: "Low-Code",
    image: "/images/projects/Veille1.jpg",
    tag: ["Low-Code","All"],
    link: "https://www.msn.com/en-us/money/smallbusiness/most-businesses-now-see-low-code-as-the-future/ar-AA1s12I6?ocid=BingNewsVerp"
  },
  {
    id: 2,
    name: "Low-Code",
    description: "Low-code is everywhere and almost every company is using it",
    language: "Low-Code",
    image: "/images/projects/Veille2.jpg",
    tag: ["Low-Code","All"],
    link: "https://www.techzine.eu/news/devops/125112/low-code-is-everywhere-and-almost-every-company-is-using-it/"
  },
  {
    id: 3,
    name: "C, C++",
    description: "Programmation : Le début de la fin a-t-il sonné pour les langages C et C++ ?",
    language: "C, C++, Rust, et autres",
    image: "/images/projects/Veille4.jpg",
    tag: ["C, C++","All"],
    link: "https://www.zdnet.fr/actualites/programmation-le-debut-de-la-fin-a-t-il-sonne-pour-les-langages-c-et-c-39947568.htm"
  },
  {
    id: 4,
    name: "Swift",
    description: "Will There Be a New Dominant Programming Language by 2030?",
    language: "Swift",
    image: "/images/projects/Veille3.jpg",
    tag: ["Swift","All"],
    link: "https://www.analyticsinsight.net/programming/will-there-be-a-new-dominant-programming-language-by-2030"
  },
  {
    id: 5,
    name: "Magic Sofware",
    description: "King Jouet industrialise ses flux de données avec Magic Software",
    language: "Autres",
    image: "/images/projects/Veille5.jpg",
    tag: ["Autres","Low-Code","All"],
    link: "https://infodsi.com/articles/197224/king-jouet-industrialise-ses-flux-de-donnees-avec-magic-software.html"
  },
  {
    id: 6,
    name: "Magic Sofware",
    description: "Maîtrise des données et Système IT agile chez Facnor / Sparcraft avec Magic Software",
    language: "Autres",
    image: "/images/projects/Veille6.jpg",
    tag: ["Autres","Low-Code","All"],
    link: "https://www.magicsoftware.com/fr/press-release/maitrise-des-donnees-et-systeme-it-agile-chez-facnor-sparcraft-avec-magic-software/"
  },
];

const VeilleTechno = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="veille" style={{ marginTop: '100px' }}>
      
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Ma veille Technologique
      </h2>

      <h2 className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
      Émergence du Low-Code et Évolution des Langages de Programmation
      </h2>
      <p>
      Cette veille technologique met en lumière les tendances et innovations récentes dans le 
      monde du développement logiciel, avec une attention particulière portée à l'essor du Low-Code et à l'évolution des langages traditionnels tels que C et C++.
      </p>
      <br></br>
      <p>
      Le Low-Code est en train de transformer le paysage du développement logiciel, permettant aux entreprises de créer rapidement des applications grâce à des environnements 
      de développement simplifiés. Des rapports indiquent que de plus en plus d'entreprises adoptent cette approche, considérée comme le futur du développement d'applications. 
      De nombreux secteurs, y compris des leaders industriels, intègrent le Low-Code dans leurs stratégies de digitalisation pour accélérer leurs processus et optimiser leurs 
      flux de données, comme le montre l'exemple de Magic Software chez King Jouet et Facnor / Sparcraft.
      </p>
      <br></br>
      <p>
      En parallèle, cette veille s'intéresse à la pérennité des langages de programmation traditionnels comme C et C++, qui, bien que toujours utilisés dans des secteurs spécifiques
       tels que l'embarqué, voient leur avenir remis en question face à l'émergence de nouvelles alternatives comme Rust, un langage plus sécurisé et performant. L'impact de Rust et 
       son adoption croissante démontrent une volonté du marché de privilégier des solutions plus modernes et robustes.
      </p>

      

      <div className={`text-white flex flex-${isMobile ? 'col' : 'row'} justify-center items-center gap-2 py-6`}>
        <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Low-Code"
            isSelected={tag === "Low-Code"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="C, C++"
            isSelected={tag === "C, C++"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Swift"
            isSelected={tag === "Swift"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Autres"
            isSelected={tag === "Autres"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.link}
              previewUrl={project.link}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default VeilleTechno;
