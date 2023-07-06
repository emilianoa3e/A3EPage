import React from "react";
import "../../assets/css/components/upButton.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

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

  const buttonAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(200px)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <>
      {isVisible && (
        <animated.a
          onClick={scrollToTop}
          style={buttonAnimation}
          className={"upButton"}
        >
          <MdKeyboardArrowUp />
        </animated.a>
      )}
    </>
  );
}

export default UpButton;
