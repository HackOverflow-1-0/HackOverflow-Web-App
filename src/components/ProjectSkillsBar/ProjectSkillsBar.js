import React from "react";
import "./ProjectSkillsBar.css";

const ProjectSkillsBar = ({ srcSvg, SkillName, popoverText }) => {
  return (
    <div className="">
      <img
        src={srcSvg}
        alt={SkillName}
        className="ProjectSkills"
        data-popover-target={`popover-${SkillName}`}
      />

      <div
        data-popover
        id={`popover-${SkillName}`}
        role="tooltip"
        className="absolute z-10 invisible inline-block w-auto text-sm transition-opacity duration-300 border rounded-lg shadow-sm opacity-0 text-gray-400 border-gray-600 bg-gray-700"
      >
        <div className="px-3 py-2 border-b rounded-t-lg border-gray-600 bg-gray-700 bg-opacity-100">
          <h3 className="font-semibold text-white">{popoverText}</h3>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
};

export default ProjectSkillsBar;
