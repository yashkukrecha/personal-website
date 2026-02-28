import React from "react";
import "../Styles/Experience.css";

const IndividualExperience = ({
  company,
  image,
  description,
  techStack = [],
  dates,
}) => {
  const imgSrc = new URL(`../Icons/${image}.png`, import.meta.url).href;
  return (
    <div className="experience">
      <h2 className="experience-name">{company}</h2>
      <p className="experience-dates">{dates}</p>
      <div className="experience-header">
        <img id="image" alt={`${company} logo`} src={imgSrc} />
        <div className="experience-info">
          <p className="experience-description">{description}</p>
          <ul className="experience-techstack">
            {techStack.map((tech, index) => (
              <li key={index} className="tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndividualExperience;
