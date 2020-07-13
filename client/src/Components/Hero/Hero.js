import React, { useState } from "react";

import "./Hero.scss";
import useInterval from "react-useinterval";
import { socialYellow } from "../../Helpers/socialMedia";

export default function Hero() {
  const [currentInd, setCurrentInd] = useState(0);

  const words = [
    "comodidade",
    "agilidade",
    "personalização",
    "colaboração",
    "cocriacao",
  ];

  const nextSlide = () => {
    setCurrentInd((state) => (state + 1) % words.length);
  };
  useInterval(nextSlide, 5000);

  return (
    <div className="hero-main">
      <div className="content-left">
        <div className="hero-center-title">
          <h1>AUDIOVISUAL DISRUPTIVO</h1>

          <h2 className="typing">{words[currentInd]}</h2>
        </div>
        <div className="hero-bottom-icons">
          {socialYellow.map(({ href, name, src }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {" "}
              <img src={src} alt={name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
