import React, { useState, useEffect, useRef } from "react";
import { MdCall, MdMessage, MdWhatsapp } from "react-icons/md";
import { animated, useSpring } from "@react-spring/web";
import { getAllContacts } from "../../utils/getContacts";
import "../../assets/css/components/ContactButton.css";


function ContactButton() {
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);
  const [contactsList, setContactsList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {        
        const contacts = await getAllContacts();
        setContactsList(contacts.contacts);
      } catch (error) {
        console.log("Error getting info footer");
      }
    };
    getData();
  }, []);

  
  const filteredContactsList = contactsList && contactsList.length > 0
  ? contactsList.filter((contact) => contact.destiny === "general")
  : [];
  let whatsapp;
  let phone;
  filteredContactsList.forEach(element => {
    if(element.type==="whatsapp"){
       whatsapp = element.contact
    }
    if(element.type==="phone"){
       phone = element.contact
    }
    
  });
  console.log(whatsapp, phone);

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
            href={`https://wa.me/${whatsapp?whatsapp:`5217772604715`}`}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonAnimation}
          >
            <MdWhatsapp />
          </animated.a>
          <animated.a
            className="telButton"
            href={`tel:${phone ? phone:`7773617946`}`}
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
