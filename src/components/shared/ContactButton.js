import React, { useState } from "react";
import { MdCall, MdMessage, MdWhatsapp } from "react-icons/md";
import "../../assets/css/components/ContactButton.css";

function ContactButton() {
  const [mostrarBotones, setMostrarBotones] = useState(false);
  const [active, setActive] = useState(false);
  const toggleBotones = () => {
    setMostrarBotones(!mostrarBotones);
    setActive(!active);
  };

  return (
    <div className="floatContainer">
      {mostrarBotones && (
        <div>
          <a
            className="wppButton"
            href="https://api.whatsapp.com/send?phone=123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdWhatsapp />
          </a>
          <a className="telButton" href="tel:123456789">
            <MdCall />
          </a>
        </div>
      )}
      <a
        onClick={toggleBotones}
        className={active ? "active" : "contactButton"}
      >
        <MdMessage />
      </a>
    </div>
  );
}

export default ContactButton;
