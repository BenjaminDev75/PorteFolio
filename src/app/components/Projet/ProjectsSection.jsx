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
    description: "Site static de vente d'ordinateur et accessoire gaming développé en HTML/CSS dans le cadre d'un projet scolaire en 1ère année de BTS",
    image: "/images/projects/7.jpg",
    tag: ["All", "Web","Ecole"],
    gitUrl: "https://github.com/BenjaminDev75/Projet-HTML",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "Doc Installation GLPI sous Linux",
    description: "Fichier PDF d'une documentation pour l'installation de GLPI sous l'environnement Linux avec Ubuntu avec VirtualBox",
    image: "/images/projects/6.jpg",
    tag: ["All", "Ecole"],
    gitUrl: "/images/Projet_GLPI.pdf",
    previewUrl: "/images/Projet_GLPI.pdf",
  },
  {
    id: 4,
    title: "Ricosheep",
    description: "Projet de jeu labyrinthe ou l'objectif est de placer chaques moutons sur les hautes herbes avec un système de niveau, du niveau le plus simple au plus compliqué. Il est aussi possible d'avoir la solution si"
                  +" on ne trouve pas la solution et aussi de pouvoir reset la partie en cours. Ce projet étais un projet de groupe réalisé pour le second semestre de la 1ère année de ma Licence Mathématiques-Informatique",
    image: "/images/projects/5.jpg",
    tag: ["All", "Jeux","Ecole"],
    gitUrl: "https://github.com/BenjaminDev75/Ricosheep",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Jeu Snake",
    description: "Projet de programmation du jeu Snake en language C, dont le but étais de modifier les règles du jeu à partir d'un code trouvé sur internet : mettre en place un système de vitesses, "+
                    "faire en sorte d'afficher 3 fruits à la fois, et de faire manger 3 fruits au serpent pour le faire grandir d'une taille",
    image: "/images/projects/8.jpg",
    tag: ["All", "Jeux","Ecole"],
    gitUrl: "https://github.com/BenjaminDev75/Snake-C",
    previewUrl: "/images/Projet_Snake.pdf",
  },
  {
    id: 6,
    title: "Cosmétté",
    description: "Site de vente de produits de beauté naturels et bio, fait avec Shopify avec un systeme de paiement Paypal ainsi que la gestion d'avis pour chaque produit du site. Inclue la recherche"+
                    " de produit par catégorie. Site créé dans le cadre d'un projet scolaire fait lors de ma 2ème année de BTS.",
    image: "/images/projects/9.png",
    tag: ["All", "Ecole","Web"],
    gitUrl: "/images/Shopify.pdf",
    previewUrl: "/images/Projet_Shopify.mp4",
  },
  {
    id: 7,
    title: "Gestion d'une Association",
    description: "Site web développé avec PHP/Bootstrap, dont le but étais d'utilisé l'IA pour la création du code ainsi que des images avec une gestion de droit et de connexion au site par email et mot de passe"
                    +" pour la suppréssion l'ajout ou la modification d'un personnel, d'un projet, d'un don, et d'un pays. Chat-GPT, Blackbox, Microsoft-Copilot et GitHub-Copilot on été les IA utilisé lors de ce projet",
    image: "/images/projects/10.png",
    tag: ["All", "Ecole","Web"],
    gitUrl: "/images/Shopify.pdf",
    previewUrl: "/images/Gestion_Asso.pdf",
  },
  {
    id:8,
    title: "Developpement d'un planning",
    description: "Planning destiner au chargé de planning pour la gestion des tournées pour chaque chauffeur, avec une vu sur les tournées de la semaine, "+
                    "pour chaque chauffeur, avec la possibilité de modifier les tournées, de les supprimer d'un jour, de les ajouter et de les déplacer avec un drag and drop"+
                      "le tout developper avec Logiciel Magic XPA et AngularJS",
    image: "/images/projects/11.png",
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
