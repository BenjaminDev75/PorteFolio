import {
  Backend_skill,
  Frontend_skill,
  Backend_skill2,
  Other_skill,
  Skill_data,
} from "../../../constants";
import React from "react";
import SkillDataProvider from "./LangageDataProvider.tsx";
import SkillText from "./LangageText";

const Skills = () => {
  return (
      <section
          id="skills"
          className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden  py-20"
          style={{transform: "scale(0.9"}}
      >
        <SkillText/>


        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Other_skill.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill2.map((image, index) => (
              <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
              />
          ))}
        </div>
      </section>
  );
};

export default Skills;
