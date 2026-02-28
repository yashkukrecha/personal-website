import "../Styles/IndividualProject.css";
import "../Styles/App.css";

export default function IndividualProject(props) {
  const img = props.project.title.toLowerCase();
  const imgSrc = new URL(`../Icons/${img}.png`, import.meta.url).href;

  return (
    <div>
      <img id="project-icon" alt="project-icon" src={imgSrc}></img>
      <h2 id="project-title"> {props.project.title} </h2>
      <h4 className="desc"> {props.project.description} </h4>
    </div>
  );
}
