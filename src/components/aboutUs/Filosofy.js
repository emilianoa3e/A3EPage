import React, {useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CustomTitle from "../shared/CustomTitle";
import { animated, useSpring } from "@react-spring/web";
import "../../assets/css/components/Us/Filosofy.css";
import image from "../../assets/img/Minería.jpg"
const RotatingText = ({ values, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

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
        <div
        className="containerAnimation"
        >
          <animated.img
          className={"animatedImg"}
            src={image}
            alt="Image"
            style={{
              opacity,
            }}
          />
          <animated.div
          className={"animatedText"}
            style={{
              opacity: opacity.to(o => 1 - o),
            }}
          >
            <p className="text">{values}</p>
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
};

function Filosofy() {
  const ethicsValues = [
    {
      _id: 1,
      name: "Respeto",
      description: "Tratar a los demás con cortesía, consideración y dignidad.",
      img: "",
    },
    {
      _id: 2,
      name: "Honestidad",
      description:
        "Ser veraz y transparente en todas las acciones y comunicaciones.",
      img: "",
    },
    {
      _id: 3,
      name: "Responsabilidad",
      description:
        "Asumir las consecuencias de tus actos y cumplir tus compromisos.",
      img: "",
    },
    {
      _id: 4,
      name: "Justicia",
      description:
        "Tratar a todas las personas de manera equitativa y imparcial.",
      img: "",
    },
    {
      _id: 5,
      name: "Solidaridad",
      description: "Apoyar y ayudar a los demás en momentos de necesidad.",
      img: "",
    },
    {
      _id: 6,
      name: "Tolerancia",
      description:
        "Respetar las diferencias y aceptar las opiniones y creencias de los demás.",
      img: "",
    },
    {
      _id: 7,
      name: "Empatía",
      description: "Comprender y compartir los sentimientos de los demás.",
      img: "",
    },
    {
      _id: 8,
      name: "Integridad",
      description:
        "Actuar de acuerdo con tus principios y valores, incluso en situaciones difíciles.",
      img: "",
    },
    {
      _id: 9,
      name: "Sostenibilidad",
      description:
        "Promover el cuidado del medio ambiente y el uso responsable de los recursos.",
      img: "",
    },
    {
      _id: 10,
      name: "Paz",
      description: "Buscar la armonía y la resolución pacífica de conflictos.",
      img: "",
    },
    {
      _id: 11,
      name: "Gratitud",
      description:
        "Agradecer y reconocer lo que recibimos de los demás y del entorno.",
      img: "",
    },
    {
      _id: 12,
      name: "Generosidad",
      description: "Compartir tiempo, recursos y conocimientos con los demás.",
      img: "",
    },
  ];
  return (
    <Container className="mg-4 p-0 m-0" fluid>
      <CustomTitle title={"FILOSOFÍA"} subtitle={"VALORES"} />
      <Row className="collage-row p-0 m-0">
        {ethicsValues.map((value, index) => (
          <Col
            key={index}
            md={3}
            sm={3}
            lg={2}
            xs={6}
            className="justify-content-center mb-2"
          >
            <RotatingText values={value.description} imageUrl={value.img} />
          </Col>
        ))}
      </Row>
    </Container>
    // <Container className="filosofy mb-4" fluid>
    //   <CustomTitle title={"FILOSOFÍA"} subtitle={"VALORES"} />
    //   <Row className="collage-row ps-1">
    //     {ethicsValues.map((values, index) => (
    //       <Col key={index} className=" p-0 m-0" lg>
    //         <div className="image-container">
    //           <div className="front">
    //             <Image src={image} alt="Image" fluid />
    //             <div className="area">{values.name}</div>
    //           </div>
    //           <div className="back h-100">
    //             <p className="text " >{values.description}</p>
    //           </div>
    //         </div>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
}

export default Filosofy;
