"use client"
import React from 'react'
import { useState } from "react";
import '../../globals.css'
import SkillCard from "./competencecard";
import {SKILLS} from '../../../utils/data'
import SkillsInfoCard from "./competencecardinfo";

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <section id="skills" className="skills-container">
            <h2 className="text-4xl font-bold text-white mb-4 py-5">Compétences</h2>

            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectSkill(item);
                            }}
                        />
                    ))}
                </div>

                <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
