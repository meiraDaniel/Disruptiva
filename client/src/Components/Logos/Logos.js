import React, { useState } from "react";
import { logos } from "./logosMap";
import "./Logos.scss";
import useInterval from "react-useinterval";

import Zoom from "@material-ui/core/Zoom";

export default function Logos() {
  const [currentInd, setCurrentInd] = useState(0);
  const [checked, setChecked] = useState(true);

  const nextSlide = async () => {
    setChecked(true);

    if  (checked) {
      setCurrentInd((state) => (state + 1) % logos.length);
      await setChecked(false)
    }
  };
  useInterval(nextSlide, 3000);
 

  return (
    <div className="logos-main">
      {logos[currentInd].map((logo, i) => (
        <Zoom in={checked}>
          <img src={logo} alt="logo" className="logos" />
        </Zoom>
      ))}
    </div>
  );
}
