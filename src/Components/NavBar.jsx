import React, { useEffect } from 'react';
import Home from '../Pages/Home.jsx';
import Skills from '../Pages/Skills.jsx';
import Projects from '../Pages/Projects.jsx';
import Hobbies from '../Pages/Hobbies.jsx';
import Contact from '../Pages/Contact.jsx';
import Experience from '../Pages/Experience.jsx';
import '../Styles/NavBar.css';

export default function NavBar() {

    useEffect(() => {
        const handleScroll = function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
        };

        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', handleScroll);
        });

        // Cleanup the event listener on component unmount
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleScroll);
            });
        };
    }, []);

    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#section1">About</a></li>
                    <li><a href="#section2">Skills</a></li>
                    <li><a href="#section3">Projects</a></li>
                    <li><a href="#section4">Experience</a></li>
                    <li><a href="#section5">Hobbies</a></li>
                    <li><a href="#section6">Contact</a></li>
                </ul>
            </nav>

            <section id="section1">
                <Home/>
            </section>

            <section id="section2">
                <Skills/>
            </section>

            <section id="section3">
                <Projects/>
            </section>

            <section id="section4">
                <Experience/>
            </section>

            <section id="section5">
                <Hobbies/>
            </section>

            <section id="section6">
                <Contact/>
            </section>
        </div>
        
    )
}