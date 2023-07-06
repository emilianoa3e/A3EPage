import React, { useState, useEffect, useRef } from "react";
import { MdCall, MdMessage, MdWhatsapp } from "react-icons/md";
import "../../assets/css/components/ContactButton.css";
import { animated, useSpring } from "@react-spring/web";

function ContactButton() {
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleBotones = () => {
    setActive(!active);
  };
  const buttonAnimation = useSpring({
    opacity: active ? 1 : 0,
    transform: active
      ? "translateY(0px) rotate(360deg)"
      : "translateY(200px) rotate(0deg)",
    config: { tension: 300, friction: 20 },
  });
  return (
    <div className="floatContainer">
      {active && (
        <div>
          <animated.a
            className="wppButton"
            href="https://api.whatsapp.com/send?phone=123456789"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonAnimation}
          >
            <MdWhatsapp />
          </animated.a>
          <animated.a
            className="telButton"
            href="tel:123456789"
            style={buttonAnimation}
          >
            <MdCall />
          </animated.a>
        </div>
      )}
      <a
        onClick={toggleBotones} ref={buttonRef}
        className={active ? "active" : "contactButton"}
      >
        <MdMessage />
      </a>
    </div>
  );
}

export default ContactButton;
