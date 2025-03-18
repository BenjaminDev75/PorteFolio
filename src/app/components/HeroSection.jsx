"use client";
import React from "react";
import Image from "next/image";
import svglogo from "../../../public/mainIconsdark.svg";
import tete from "../../../public/images/media.jpg"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16" id="home" style= {{backgroundImage: "url(/mainIconsdark.svg)" ,
            backgroundRepeat: 'no-repeat', backgroundPosition:"right", backgroundSize:"750px"}}>
            <div className="grid grid-cols-1 sm:grid-cols-12" >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Bonjour, Je suis{" "}
            </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Benjamin Pereira",
                                2000,
                                "Un Alternant",
                                2000,
                                "Un Apprenti Informatique",
                                2000,
                                "En BTS SIO SLAM",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}

                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Apprenez en plus sur moi grâce à ce portfolio !
                    </p>
                    <div>
                        <Link
                            href="mailto:benjaminpereira.pro75@gmail.com"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                        >
                            Contactez-moi
                        </Link>
                        <Link
                            href="/images/CV_Benjamin_Pereira.pdf"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Télécharger CV
              </span>
                        </Link>
                        <Link
                            href="/images/tableau_synthese_2025.pdf"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 ml-3"
                        >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
               Feuille de Synthèse
              </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0 "
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative" >
                        <Image
                            src="/images/moi.jpg"
                            alt="image profil"
                            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                            width={600}
                            height={600}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;