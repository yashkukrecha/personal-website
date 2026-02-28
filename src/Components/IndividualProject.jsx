import "../Styles/IndividualProject.css";
import "../Styles/App.css";

export default function IndividualProject({ project }) {
  return (
    <div className="project-card-content">
      <h2 id="project-title">{project.title}</h2>
      <h4 className="desc">{project.description}</h4>
      
      <div className="tech-stack-container">
        {project.stack.map((tech, idx) => (
          <span key={idx} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}