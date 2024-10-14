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
    image: "/images/projects/7.jpg",
    tag: ["All", "Web","Ecole"],
    gitUrl: "https://github.com/BenjaminDev75/Projet-HTML",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "Doc Installation GLPI sous Linux",
    description: "Fichier PDF d'une documentation pour l'installation de GLPI sous l'environnement Linux avec Ubuntu" +
        "dans une VirtualBox",
    image: "/images/projects/6.jpg",
    tag: ["All", "Ecole"],
    gitUrl: "/images/Projet_GLPI.pdf",
    previewUrl: "/images/Projet_GLPI.pdf",
  },
  {
    id: 4,
    title: "Ricosheep",
    description: "Projet de jeu labyrinthe ou l'objectif est de placer chaques moutons sur les hautes herbes, ce projet étais un projet de groupe réaliser pour le second semestre de Licence Maths-Informatique",
    image: "/images/projects/5.jpg",
    tag: ["All", "Jeux","Ecole"],
    gitUrl: "https://github.com/BenjaminDev75/Ricosheep",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Jeu Snake",
    description: "Projet de jeu Snake en C dans le but etais de modifier les regles du jeu en modifant les règles du jeu : mettre en place un système de vitesses, "+
                    "faire en sorte d'afficher 3 fruit à la fois, et de faire manger 3 fruit au serpent pour grandir d'un taille",
    image: "/images/projects/8.jpg",
    tag: ["All", "Jeux","Ecole"],
    gitUrl: "https://github.com/BenjaminDev75/Snake-C",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Developpement d'une application web d'un Planning",
    description: "Planning destiner au chargé de planning pour la gestion des tournées pour chaque chauffeur, avec une vu sur les tournées de la semaine, "+
    "pour chaque chauffeur, avec la possibilité de modifier les tournées, de les supprimer d'un jour, de les ajouter et de les déplacer avec un drag and drop"+
    "le tout developper avec Logiciel Magic XPA et AngularJS",
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
