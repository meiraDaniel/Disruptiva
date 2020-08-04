import React, { useState } from "react";

import "./Hero.scss";
import useInterval from "react-useinterval";
import { socialYellow } from "../../Helpers/socialMedia";

export default function Hero() {
  const [currentInd, setCurrentInd] = useState(0);
  const [deleting, setDelete] = useState(false);
  const [txt, setTxt] = useState("");
  const [typeSpeed, setTypeSpeed] = useState(180);

  const words = [
    "disruptiva",
    "simples",
    "intuitiva",
   
  ];

  const type = () => {
    let current = currentInd % words.length;
    const fullTxt = words[current];
    if (deleting) {
      setTypeSpeed(typeSpeed / 2);

      setTxt(fullTxt.substring(0, txt.length - 1));
    }
    if (!deleting) {
      setTxt(fullTxt.substring(0, txt.length + 1));
    }

    if (!deleting && txt === fullTxt) {
      setTypeSpeed(400);
      setDelete(true);
    }
    if (deleting && txt === "") {
      setCurrentInd(currentInd + 1);
      setDelete(false);
      setTypeSpeed(180);
    }
  };
  useInterval(type, typeSpeed);

  return (
    <div className="hero-main">
      <div className="content-left">
        <div className="hero-center-title">
          <h1>Produção audiovisual</h1>

          <h2 className="typing">
            <span className="txt">{txt}</span>
          </h2>
        </div>
        <div className="hero-bottom-icons">
          {socialYellow.map(({ href, name, src }, i) => (
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
