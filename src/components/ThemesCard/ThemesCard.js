import React from "react";
import "./ThemesCard.css";
import ProjectSkillsBar from "../ProjectSkillsBar/ProjectSkillsBar";

function ThemesCard({
  image,
  title,
  description,
  gradientColor,
  gradientColorText,
}) {
  return (
    <div className="ProjectCard relative rounded-lg mx-2 py-2">
      <div className="flex flex-col items-center justify-center">
        <div
          className={`ProjectBand absolute top-0 left-0 overflow-hidden h-[10px] w-full ${gradientColor}`}
        />
        <div className="pt-2">
          <img className="p-4 h-40 w-40" src={image} alt="sdg" />
        </div>
      </div>
      <div className="px-4 py-2 flex flex-col flex-grow">
        <h5
          className={`mb-2 text-[1.5rem] font-bold tracking-tight text-center ${gradientColorText}`}
        >
          {title}
        </h5>
        <p className="text-justify font-normal flex-grow">{description}</p>
        <div>
          <hr className="text-[#767676] dark:text-[#767676]" />
        </div>
        <p className="text-justify font-normal flex-grow">
          <strong>Example Projects:</strong>
        </p>
        <div className="flex flex-row items-start gap-2">
          <ProjectSkillsBar
            srcSvg={image}
            SkillName={"API"}
            popoverText={"API"}
          />
        </div>
      </div>
    </div>
  );
}

export default ThemesCard;
