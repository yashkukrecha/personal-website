import React from "react";
import "../Styles/Experience.css";
import IndividualExperience from "../Components/IndividualExperience";

const experiences = [
  {
    company: "Jump Trading",
    description: "Incoming @ Jump Trading",
    techStack: ["C++"],
    dates: "June 2026"
  },
  {
    company: "Cox Automotive",
    description: "Built internal tools improving vehicle metadata search and APIs.",
    techStack: ["Go", ".NET", "Flask", "AWS", "Terraform", "NUnit", "Cake", "React", "Docker"],
    dates: "May 2025 - August 2025",
  },
  {
    company: "Scale AI",
    description: "Evaluated and authored LLM code prompts and datasets.",
    techStack: ["C++", "Rust", "C", "Python"],
    dates: "February 2025 - December 2026",
  },
  {
    company: "Seedling",
    description: "Built full-stack portal for volunteer hour tracking automation.",
    techStack: ["React", "JavaScript", "Node.js", "Express.js", "MySQL", "AWS", "Firebase Authentication"],
    dates: "August 2024 - May 2025",
  },
  {
    company: "Texas Product Engineering Organization",
    description: "Led curriculum, recruitment, and engineering management as engineering director.",
    techStack: ["React + React Native", "JavaScript", "Node.js", "Express.js", "Google Cloud Platform", "Docker", "Vercel", "Git"],
    dates: "September 2023 - Present",
  },
  {
    company: "Longhorn Developers",
    description: "Engineered student-facing registration tools such as UT Registration Plus.",
    techStack: ["React", "TypeScript", "MySQL"],
    dates: "February 2025 - May 2025",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="titles"> Experience </h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <IndividualExperience {...exp} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
