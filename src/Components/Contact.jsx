import React from "react";
import "../Styles/Home.css";

export default function Contact({ link, display, icon }) {
  return (
    <a 
      href={link} 
      className="contact-item" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <span className="contact-icon">{icon}</span>
      <span className="contact-text">{display}</span>
    </a>
  );
}