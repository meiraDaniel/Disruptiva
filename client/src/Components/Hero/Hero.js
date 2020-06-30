import React, { useState } from "react";
import linkedin from "../../Images/Icons/linkedin.svg";
import instagram from "../../Images/Icons/instagram.svg";
import youtube from "../../Images/Icons/youtube.svg";
import facebook from "../../Images/Icons/facebook.svg";
import "./Hero.scss";
import useInterval from "react-useinterval";

export default function Hero() {
  const [currentInd, setCurrentInd] = useState(0);

  const words = ["comodidade", "agilidade", "personalização", "colaboração","cocriacao"];

  const nextSlide = () => {
    setCurrentInd((state) => (state + 1) % words.length);
  };
  useInterval(nextSlide, 5000);

  return (
    <div className="hero-main">
      <div className="content-left">
        <div className="hero-center-title">
          <h1>Audiovisual disruptivo</h1>

          <h2>{words[currentInd]}</h2>
        </div>
        <div className="hero-bottom-icons">
          <a
            href="http://www.linkedin.com/company/disruptiva-audiovisual"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="http://www.instagram.com/disruptivaaudiovisual"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="http://www.youtube.com/channel/UCevh_khIWxGnjhL1CMbdi7A?view_as=subscriber  "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
          <a
            href="http://www.facebook.com/disruptivaaudiovisual"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}
