import "../Styles/App.css";
import "../Styles/Home.css";
import Info from "../Components/Info";

import profileImage from "../Icons/linkedin.jpg";

export default function Home() {
  const list = [
    { method: "Email", link: "ykukrecha@gmail.com" },
    {
      method: "LinkedIn",
      link: "https://www.linkedin.com/in/yash-kukrecha-676a23279/",
    },
    { method: "GitHub", link: "https://github.com/yashkukrecha" },
  ];
  return (
    <div className="row-container" id="grey">
      <img id="pfp" alt="profile" src={profileImage}></img>
      <div className="column-container">
        <h1 className="header" id="name">
          {" "}
          🤘 Yash Kukrecha 🤘{" "}
        </h1>
        <h3 className="desc" id="bio">
          Hi, my name is Yash Kukrecha! I'm a junior studying computer science
          with a minor in statistics and data science at the University of Texas
          at Austin with an expected graduation date in 2027. I'm interested in
          systems, infrastructure, and backend development, and I have
          experience in full-stack development. Feel free to contact me to chat!
        </h3>
        <div className="row-container" id="contact-container">
          {list.map((element, index) => (
            <Info index={index} method={element.method} link={element.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
