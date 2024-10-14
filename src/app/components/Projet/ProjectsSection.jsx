"use client";
import React, {useState, useRef, useEffect} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio React/NextJS",
    description: "Portfolio BTS SIO SLAM mais vous vous trouvez déja sur ce projet !",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web","Ecole"],
    gitUrl: "https://github.com/BenjaminDev75/PorteFolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Computech",
    description: "Site static de vente d'ordinateur et accessoire gaming",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web","Ecole"],
    gitUrl: "https://github.com/BenjaminDev75/Projet-HTML",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "Doc Installation GLPI sous Linux",
    description: "Fichier PDF d'une documentation pour l'installation de GLPI sous l'environnement Linux avec Ubuntu" +
        "dans une VirtualBox",
    image: "/images/projects/3.jpg",
    tag: ["All", "Ecole"],
    gitUrl: "/images/Projet_GLPI.pdf",
    previewUrl: "/images/Projet_GLPI.pdf",
  },
  {
    id: 4,
    title: "Ricosheep",
    description: "Jeu labyrinthe ou l'objectif est de placer chaques moutons sur les hautes herbes",
    image: "/images/projects/4.jpg",
    tag: ["All", "Jeux","Ecole"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    image: "/images/projects/sui.jpg",
    tag: ["All", "Perso"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Project 6 description",
    image: "/images/projects/sui.jpg",
    tag: ["All", "Pro"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes Projets
      </h2>
      <div className={`text-white flex flex-${isMobile ? 'col' : 'row'} justify-center items-center gap-2 py-6`}>
        <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Ecole"
            isSelected={tag === "Ecole"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Jeux"
            isSelected={tag === "Jeux"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Perso"
            isSelected={tag === "Perso"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Pro"
            isSelected={tag === "Pro"}
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
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
