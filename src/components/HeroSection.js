import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./hersosection.css";

function HeroSection({ handleClick }) {
  // const card = document.querySelector("#card-component");

  // const handleClick = () => {
  //   if (card != null) {
  //     card.scrollIntoView({ behavior: "smooth" });
  //   }
  //   console.log(card);
  // };

  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>MY PORTFOLIO</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          handleClick={handleClick}
        >
          SHOW PROJECTS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
