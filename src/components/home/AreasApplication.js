import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/components/Home/AreasApplication.css";

import mineria from "../../assets/img/areas/CA_MINERIA.jpg";
import refineria from "../../assets/img/areas/CA_REFINERIA.jpg";
import industria from "../../assets/img/areas/CA_INDUSTRIA.jpg";
import comercial from "../../assets/img/areas/CA_COMERCIAL.jpg";
import CustomTitle from "../shared/CustomTitle";
import { animated, useSpring } from "@react-spring/web";

const RotatingText = ({ area, text, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: hovered ? 0 : 1,
    transform: `rotateY(${hovered ? 180 : 0}deg)`,
    config: { mass: 10, tension: 900, friction: 100 },
  });

  return (
      <div
          className="areasApplication"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
      >
        <animated.div
            className={"animatedDiv"}
            style={{
              ...transform,
            }}
        >
          <div className="containerAnimation">
            <animated.img
                className={"animatedImg"}
                src={imageUrl}
                alt="Image"
                style={{
                  opacity: opacity.to((o) => o - 0.2),
                }}
            />
            <animated.div
                className="areas-label"
                style={{
                  opacity: opacity.to((o) => o - 0.2),
                }}
            >
              {area}
            </animated.div>
            <animated.div
                className={"animatedText"}
                style={{
                  ...transform,
                  opacity: opacity.to((o) => (hovered ? 1 : 0)),
                }}
            >
              <p className="text">{text}</p>
            </animated.div>
          </div>
        </animated.div>
      </div>
  );
  /*
    const { opacity, transform } = useSpring({
    opacity: hovered ? 0 : 1,
    transform: `rotateY(${hovered ? 180 : 0}deg)`,
    config: { mass: 10, tension: 500, friction: 100 },
  });

  return (
    <div
      className="areasApplication"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div
        className={"animatedDiv"}
        style={{
          transform,
        }}
      >
        <div className="containerAnimation">
          <animated.img
            className={"animatedImg"}
            src={imageUrl}
            alt="Image"
            style={{
              opacity,
            }}
          />
          <animated.div
            className="areas-label"
            style={{
              opacity: opacity.to((o) => o - 0.2 ),
            }}
          >
            {area}
          </animated.div>
          <animated.div
            className={"animatedText"}
            style={{
              opacity: opacity.to((o) => 1 - o),
            }}
          >
            <p className="text">{text}</p>
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
  * */
};

function AreasApplication() {
  const applications = [
    {
      _id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "MINERIA",
      img: mineria,
    },
    {
      _id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "INDUSTRIA",
      img: industria,
    },
    {
      _id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "REFINERIA",
      img: refineria,
    },
    {
      _id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "COMERCIAL",
      img: comercial,
    },
  ];

  return (
    <Container className="mg-4 p-0 m-0" fluid>
      <CustomTitle title={"ÁREAS DE APLICACIÓN"} subtitle={"APLICACIÓN"} />
      <Row className="p-0 m-0">
        {applications.map((area, index) => (
          <Col
            key={index}
            md={6}
            lg={3}
            xs={6}
            className="justify-content-center mb-2"
          >
            <RotatingText
              area={area.area}
              text={area.text}
              imageUrl={area.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AreasApplication;
