import React from "react";
import "../../assets/css/components/upButton.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";
function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      console.log("scroll");
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <a onClick={scrollToTop} className={"upButton"}>
          <MdKeyboardArrowUp />
        </a>
      )}
    </>
  );
}

export default UpButton;
