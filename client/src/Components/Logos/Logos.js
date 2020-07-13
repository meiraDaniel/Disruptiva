import React,{useState} from "react";
import { logos } from "./logosMap";
import "./Logos.scss";
import useInterval from "react-useinterval";

export default function Logos() {
  const [currentInd, setCurrentInd] = useState(0);

  const nextSlide = () => {
    setCurrentInd((state) => (state + 1) % logos.length);
  };
  useInterval(nextSlide, 2000);

  return (
    <div className="logos-main" >
   {logos[currentInd].map((logo, i) => (
        <img key={i} src={logo} alt="logo" className="logos" />
      

          ))}
    </div>
  );
}
