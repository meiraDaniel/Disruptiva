import React from "react";
import "./Presentation.scss";

export default function PresentationSecond({ title, text, photo, id }) {
  return (
    <div id={id} className="presentation-main">
      <div className="presentation-right">
        <img src={photo} alt="team" />
      </div>
      <div className="presentation-second-left-title">
      <div className="presentation-second-top-title">
          <h1>{title}</h1>
        </div>
        <p>{text}</p>
      
      </div>
    </div>
  );
}
