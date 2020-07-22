import React, { useEffect, useState, useRef } from "react";

import "./Icons.scss";
import whatsapp from "../../Images/Icons/whatsapp.svg";
import message from "../../Images/Icons/message.svg";

import { useShowForm } from "../../Context/ShowForm";

export default function Icons() {
  const { showForm, setShowForm } = useShowForm();

  return (
    <div className="icons-main">
   
      <a className="icon-size" target="_blank" href="https://api.whatsapp.com/send?phone=5531997139306">
        <img src={whatsapp} alt="whatsapp" />
      </a>
{/*       <img  className="icon-size" src={message} onClick={() => setShowForm(true)} alt="message" />
 */}     
    </div>
  );
}
