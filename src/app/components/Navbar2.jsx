"use client"
import Image from "next/image";
import React, { useState } from "react";
import github from "/public/github-icon.svg";
import linkedin from "/public/linkedin-icon.svg";
import instagram from "/public/instagram.svg";

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="#home" className="h-auto w-auto flex flex-row items-center">
            <Image
                src="/glaxy.png"
                alt="logo"
                width={70}
                height={70}
                className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Portfolio Benjamin Pereira
          </span>
          </a>

          {/* Burger Menu Icon */}
          <div className="md:hidden">
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="text-gray-200 focus:outline-none"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                {showMenu ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                )}
              </svg>
            </button>
          </div>

          {/* Overlay */}
          <div
              onClick={() => setShowMenu(false)}
              className={`md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 ${showMenu ? '' : 'hidden'}`}
              style={{pointerEvents: "auto"}}
          ></div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex md:flex-row">

            <div className="md:w-[700px] md:h-full flex flex-row items-center justify-between md:mr-20">
              <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                <a href="#home" className="cursor-pointer">
                  Accueil
                </a>
                <a href="#about" className="cursor-pointer">
                  À Propos
                </a>
                <a href="#entreprise" className="cursor-pointer">
                  Entreprise
                </a>
                <a href="#bts" className="cursor-pointer">
                  BTS
                </a>
                <a href="#projects" className="cursor-pointer">
                  Projets
                </a>
                <a href="#projects" className="cursor-pointer">
                  Veille Technologique
                </a>
              </div>
            </div>
            </div>

          <div className="hidden md:flex md:flex-row">
            <div className=" flex flex-row gap-5 mr-7">
              <a href="https://github.com/BenjaminDev75" target="_blank">
                <Image src={github} alt="gitub" />
              </a>
              <a href="https://fr.linkedin.com/in/benjamin-pereira" target="_blank">
                <Image src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
          </div>

          {/* Navigation Links for Mobile */}
          <div className={`md:hidden ${showMenu ? 'flex flex-col' : 'hidden'} flex items-center justify-between w-full 
                   h-auto border border-[#7042f861] bg-[#03002099] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200`}>
            <a href="#home" className="cursor-pointer">
              Accueil
            </a>
            <a href="#about" className="cursor-pointer">
              À Propos
            </a>
            <a href="#entreprise" className="cursor-pointer">
              Entreprise
            </a>
            <a href="#bts" className="cursor-pointer">
              BTS
            </a>
            <a href="#projects" className="cursor-pointer">
              Projets
            </a>
            <a href="#projects" className="cursor-pointer">
              Veille Technologique
            </a>
          </div>
        </div>

  );
};

export default Navbar2;