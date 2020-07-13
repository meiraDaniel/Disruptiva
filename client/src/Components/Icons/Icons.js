import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./Icons.scss";
import whatsapp from "../../Images/Icons/whatsapp.svg";
import message from "../../Images/Icons/message.svg";

import ContactForm from "../Forms/ContactForm";

export default function Icons() {
  const [showForm, setShowForm] = useState(false);
  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
  }, []);

  const handleClick = (e) => {
    node.current.contains(e.target) && setShowForm(false);
  };

  return (
    <div className="icons-main">
      <a href="https://api.whatsapp.com/send?phone=5531997139306">
        <img src={whatsapp} alt="whatsapp" />
      </a>
      <img src={message} onClick={() => setShowForm(true)} alt="message" />
      <div
        ref={node}
        className="disableBackground"
        style={showForm ? { display: "block" } : { display: "none" }}
      />
      <CSSTransition
        in={showForm}
        timeout={1000}
        classNames="open-form"
        unmountOnExit
      >
        <ContactForm />
      </CSSTransition>
    </div>
  );
}
