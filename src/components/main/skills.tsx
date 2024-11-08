import React from "react";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "../../../constants";
import SkillDataProvider from "../sub/skillDataProvider";
import SkillsText from "../sub/skillsText";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-[5] "
    >
      <SkillsText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 text-center">
        {Skill_data.map((image, index) => (
          
          <SkillDataProvider
          
            key={index}
            index={index}
            src={image.Image}
            height={image.height}
            width={image.width}
          />

        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 text-center ">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            index={index}
            src={image.Image}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 text-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            index={index}
            src={image.Image}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 text-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            index={index}
            src={image.Image}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 text-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            index={index}
            src={image.Image}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            preload="false"
            className="w-full h-auto"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;