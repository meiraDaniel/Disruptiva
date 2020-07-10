import React from "react";
import "./Presentation.scss";

export default function Presentation({ title, text, photo, id }) {
  return (
    <div id={id} className="presentation-main">
      
      <div className="presentation-left-title">
        <div className="presentation-top-title">
          <span></span>
          <h1>{title}</h1>
        </div>
        <p>{text}</p>
      </div>
      <div className="presentation-right">
        <img src={photo} alt="team" />
      </div>
    </div>
  );
}
