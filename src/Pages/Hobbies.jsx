import React from "react";
import "../Styles/Hobbies.css";
import "../Styles/App.css";
import IndividualHobby from "../Components/IndividualHobby";

const list = [
  {
    hobby: "Jazz",
    description: "Jazz trombone has been a passion of mine for the past 4 years. I enjoy the creativity and impromptu spirit of jazz, performing with my combo and the UT Austin big band.",
    image: "jazz",
  },
  {
    hobby: "Basketball",
    description: "If I'm on campus, you'll find me at Greg playing IM games. Whenever I'm back home, I'm at the recreation center and hooping with my friends.",
    image: "basketball",
  },
  {
    hobby: "Exploring Austin",
    description: "There's so much to explore! I enjoy walking around the city, finding live music, and looking at the holiday decorations in Austin!",
    image: "austin",
  },
  {
    hobby: "Food",
    description: "I love trying new foods and restaurants. Follow me on Beli @yash_kukrecha",
    image: "food",
  },
  {
    hobby: "Baking",
    description: "I've made apple pie, brownies, chocolate chip cookies, cinnamon rolls, tiramisu, and banana bread so far!",
    image: "baking",
  },
];

const Hobbies = () => {
  return (
    <div className="column-container" id="grey">
      <h2 className="titles"> Hobbies </h2>
      <div className="hobbies-grid">
        {list.map((item, idx) => (
          <IndividualHobby key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;