import React, { useEffect } from "react";
import Slider from "../Components/Slider/Slider";

import meridiano from "../Images/logo/3602.png";
import hangar from "../Images/logo/hangar.png";
import kimtara from "../Images/logo/kimtara.png";
import edicao from "../Images/logo/20edição.png";
import wtres from "../Images/logo/wtres.png";
import urbaville from "../Images/logo/urbaville.png";
import ufmg from "../Images/logo/ufmg.png";
import patricia from "../Images/logo/Patricia.png";
import psi from "../Images/logo/PSI.png";
import rehagro2 from "../Images/logo/rehagro2.png";
import saude from "../Images/logo/saude.png";
import wellerson from "../Images/logo/WELLERSON.png";

function App() {
  const images = [
    [meridiano, hangar, kimtara],
    [edicao, wtres, urbaville],
    [ufmg, patricia, psi],
    [rehagro2, saude, wellerson],
  ];

  return <Slider slides={images} autoPlay={5} />;
}

export default App;
