import React, { useEffect, useState, useRef } from "react";

import "./Icons.scss";
import whatsapp from "../../Images/Icons/whatsapp.svg";
import message from "../../Images/Icons/message.svg";

import { useShowForm } from "../../Context/ShowForm";

export default function Icons() {
  const { showForm, setShowForm } = useShowForm();

  return (
    <div className="icons-main">
      <a href="https://api.whatsapp.com/send?phone=5531997139306">
        <img src={whatsapp} alt="whatsapp" />
      </a>
      <img src={message} onClick={() => setShowForm(true)} alt="message" />
    </div>
  );
}
