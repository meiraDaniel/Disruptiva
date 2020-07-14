import React, { useState, useEffect } from "react";

import "./Hero.scss";
import useInterval from "react-useinterval";
import { socialYellow } from "../../Helpers/socialMedia";
import Grow from '@material-ui/core/Grow';

export default function Hero() {
  const [currentInd, setCurrentInd] = useState(0);
  const [deleting, setDelete] = useState(false);
  const [txt, setTxt] = useState("");
  const [typeSpeed, setTypeSpeed] = useState(200);

  const words = [
    "comodidade",
    "agilidade",
    "personalização",
    "colaboração",
    "cocriacao",
  ];

  const type = () => {
 
    let current = currentInd % words.length;
    const fullTxt = words[current];
    if (deleting) {
      setTypeSpeed(typeSpeed / 2);

      setTxt(fullTxt.substring(0, txt.length - 1));
    } 
    if(!deleting){
      setTxt(fullTxt.substring(0, txt.length + 1));
    }

    if (!deleting && txt === fullTxt) {

      setTypeSpeed(600);
      setDelete(true);
    }
    if(deleting && txt === ""){
      setCurrentInd(currentInd+1)
      setDelete(false);
      setTypeSpeed(200);
    }
  };
  useInterval(type, typeSpeed);

  return (
    <div className="hero-main">
      <div className="content-left">
        <div className="hero-center-title">
          <h1>AUDIOVISUAL DISRUPTIVO</h1>

          <h2 className="typing"><span className="txt">{txt}</span></h2>
        </div>
        <div className="hero-bottom-icons">
          {socialYellow.map(({ href, name, src }, i ) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {" "}
              <img src={src} alt={name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
