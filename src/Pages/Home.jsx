import "../Styles/App.css";
import "../Styles/Home.css";
import Contact from "../Components/Contact";
import profileImage from "../Icons/linkedin.jpg";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  const list = [
    { 
      method: "Email", 
      link: "mailto:ykukrecha@gmail.com", 
      display: "ykukrecha@gmail.com",
      icon: <FaEnvelope /> 
    },
    {
      method: "LinkedIn",
      link: "https://www.linkedin.com/in/yash-kukrecha-676a23279/",
      display: "LinkedIn",
      icon: <FaLinkedin />
    },
    { 
      method: "GitHub", 
      link: "https://github.com/yashkukrecha", 
      display: "GitHub",
      icon: <FaGithub /> 
    },
  ];

  return (
    <div className="row-container" id="grey">
      <img id="pfp" alt="profile" src={profileImage} />
      <div className="column-container">
        <h1 className="header" id="name">
          {" "}🤘 Yash Kukrecha 🤘{" "}
        </h1>
        <h3 className="desc" id="bio">
          Hi, my name is Yash Kukrecha! I'm a junior studying computer science
          with a minor in statistics and data science at the University of Texas
          at Austin with an expected graduation date in 2027. I'm interested in
          systems, infrastructure, and backend development, and I have
          experience in full-stack development. Feel free to contact me to chat!
        </h3>
        <div className="row-container" id="contact-container">
          {list.map((element) => (
            <Contact
              key={element.method}
              method={element.method}
              link={element.link}
              display={element.display}
              icon={element.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}