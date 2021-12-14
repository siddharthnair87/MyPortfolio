import React, { useRef } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  const cardRef = useRef();
  function handleClick() {
    cardRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <HeroSection handleClick={handleClick} />
      <Cards refProp={cardRef} />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
