import React from "react";
import { logos } from "./logosMap";
import "./Logos.scss";

export default function Logos() {
  return (
    <div className="logos-main">
      {logos.map((logo, i) => (
        <div className="logos" key={i}>
          <img src={logo} alt="logo" />
        </div>
      ))}{" "}
    </div>
  );
}
