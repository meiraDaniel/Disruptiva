import React from "react";
import { logos } from "./logosMap";
import "./Logos.scss";
import Slider from "../Slider/Slider";

export default function Logos() {


  return (
    <div >
      <Slider slides={logos} autoPlay={5} />
    </div>
  );
}
