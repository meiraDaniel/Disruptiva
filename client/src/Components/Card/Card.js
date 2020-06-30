import React from "react";
import "./Card.scss"

export default function Card({ title, text, icon,currentInd }) {
  return (
    <div className="card-main">
        <div className="card-left-icon">
            <img src={icon} alt="icon"/>
        </div>
      <div className="card-right-text">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="card-ball">
      <span className={currentInd===0? 'color_red':'color_white'}>&#9900;</span>
      <span className={currentInd===1? 'color_red':'color_white'}>&#9900;</span>
      <span className={currentInd===2? 'color_red':'color_white'}>&#9900;</span>
         </div>
         </div>

    </div>
  );
}
