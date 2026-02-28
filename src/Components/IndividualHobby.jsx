import React from "react";

const IndividualHobby = ({ hobby, description, image }) => {
  const imgSrc = new URL(`../Icons/${image}.png`, import.meta.url).href;
  
  return (
    <div className="hobby-card">
      <div className="hobby-image-container">
        <img className="hobby-image" alt={hobby} src={imgSrc} />
      </div>
      <div className="hobby-content">
        <h3 className="hobby-name">{hobby}</h3>
        <p className="hobby-description">{description}</p>
      </div>
    </div>
  );
};

export default IndividualHobby;