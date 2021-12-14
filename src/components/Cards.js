import React, { useState, useEffect } from "react";
import "./cards.css";
import CardItem from "./CardItem";

function Cards({ refProp }) {
  class CardObject {
    constructor(src, text, label, path) {
      this.src = src;
      this.text = text;
      this.label = label;
      this.path = path;
    }
  }

  const amazon = new CardObject(
    "images/amazon.png",
    "Amazon Prime Video",
    "React",
    "/projects"
  );
  const form = new CardObject(
    "images/form.png",
    "Beyond Bootcamp Survey Form",
    "React",
    "/projects"
  );
  const dashboard = new CardObject(
    "images/dashboard.png",
    "Beyond Bootcamp Dashboard",
    "React",
    "/projects"
  );
  const weatherApp = new CardObject(
    "images/weatherApp.png",
    "Javascript Weather App",
    "Vanilla JavaScript",
    "/projects"
  );

  const cardArray = [amazon, weatherApp, form, dashboard];
  const [mainImage, setMainImage] = useState(cardArray[0]);
  // const [secondImage, setSecondImage] = useState(cardArray[1]);
  // const [thirdImage, setThirdImage] = useState(cardArray[2]);
  // const [fourthImage, setFourthImage] = useState(cardArray[3]);

  useEffect(() => {
    for (let i = 0; i < cardArray.length; i++) {
      // console.log(i);
      const interval = setInterval(() => {
        if (cardArray[i] === undefined) {
          i = 0;
        }
        setMainImage(cardArray[i++]);
      }, 2500);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="cards" id="card-component" ref={refProp}>
      <h1>Check out these selected projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={mainImage.src}
              text={mainImage.text}
              label={mainImage.label}
              path={mainImage.path}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={cardArray[1].src}
              text={cardArray[1].text}
              label={cardArray[1].label}
              path={cardArray[1].path}
            />
            <CardItem
              src={cardArray[2].src}
              text={cardArray[2].text}
              label={cardArray[2].label}
              path={cardArray[2].path}
            />
            <CardItem
              src={cardArray[3].src}
              text={cardArray[3].text}
              label={cardArray[3].label}
              path={cardArray[3].path}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
