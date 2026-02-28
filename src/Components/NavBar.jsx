import React, { useEffect } from "react";
import Home from "../Pages/Home.jsx";
import Skills from "../Pages/Skills.jsx";
import Projects from "../Pages/Projects.jsx";
import Hobbies from "../Pages/Hobbies.jsx";
import Experience from "../Pages/Experience.jsx";
import "../Styles/NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="section1" smooth={true} onClick={() => console.log("Link clicked!")} duration={500} offset={-70}>
              About
            </Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500} offset={-70}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={500} offset={-70}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="section4" smooth={true} duration={500} offset={-70}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="section5" smooth={true} duration={500} offset={-70}>
              Hobbies
            </Link>
          </li>
        </ul>
      </nav>

      {/* Ensure your IDs match the "to" prop in the Link components */}
      <section id="section1">
        <Home />
      </section>
      <section id="section2">
        <Skills />
      </section>
      <section id="section3">
        <Projects />
      </section>
      <section id="section4">
        <Experience />
      </section>
      <section id="section5">
        <Hobbies />
      </section>

      {/* ... back to top button ... */}
      <button
        className="button"
        id="scroll-to-top-button"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}
