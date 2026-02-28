import React from "react";
import "../Styles/Experience.css";

const IndividualExperience = ({
  company,
  description,
  techStack = [],
  dates,
}) => {
  return (
    <div className="experience">
      <p className="experience-dates">{dates}</p>
      <h2 className="experience-name">{company}</h2>
      <p className="experience-description">{description}</p>
      <ul className="experience-techstack">
        {techStack.map((tech, index) => (
          <li key={index} className="tech-pill-exp">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualExperience;
