import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomTitle from "../shared/CustomTitle";
import { animated, useSpring } from "@react-spring/web";
import "../../assets/css/components/Us/Filosofy.css";

import empatia from "../../assets/img/values/Empatia.jpg";
import equidad from "../../assets/img/values/Equidad.jpg";
import equipo from "../../assets/img/values/Equipo.jpg";
import generosidad from "../../assets/img/values/Generosidad.jpg";
import honestidad from "../../assets/img/values/Honestidad.jpg";
import humildad from "../../assets/img/values/Humildad.jpg";
import integridad from "../../assets/img/values/Integridad.jpg";
import legalidad from "../../assets/img/values/Legalidad.jpg";
import pasion from "../../assets/img/values/Pasion.jpg";
import respeto from "../../assets/img/values/Respeto.jpg";
import responsabilidad from "../../assets/img/values/Responsabilidad.jpg";
import servicio from "../../assets/img/values/Servicio.jpg";

const RotatingText = ({ values, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: hovered ? 0 : 1,
    transform: `rotateY(${hovered ? 180 : 0}deg)`,
    config: { mass: 10, tension: 900, friction: 100 },
  });

  return (
    <div
      className="filosofy"
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
              opacity: opacity.to((o) => o - 0),
            }}
          />
          <animated.div
            className={"animatedText"}
            style={{
              ...transform,
              opacity: opacity.to((o) => (hovered ? 1 : 0)),
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
      id: 1,
      name: "Servicio",
      description:
        "Priorizamos la satisfacción del cliente, brindando soluciones eléctricas de calidad y atención personalizada.",
      img: servicio,
    },
    {
      id: 2,
      name: "Honestidad",
      description:
        "Actuamos con transparencia e integridad, manteniendo la confianza en todas nuestras interacciones.",
      img: honestidad,
    },
    {
      id: 7,
      name: "Respeto",
      description:
        "Valoramos y honramos la diversidad, tratando a todos con cortesía y consideración.",
      img: respeto,
    },
    {
      id: 8,
      name: "Responsabilidad",
      description:
        "Asumimos el compromiso de cumplir con nuestros deberes y obligaciones de manera puntual y efectiva.",
      img: responsabilidad,
    },
    {
      id: 3,
      name: "Trabajo en equipo",
      description:
        "Fomentamos la colaboración entre nuestros miembros para abordar desafíos y lograr objetivos conjuntos.",
      img: equipo,
    },
    {
      id: 5,
      name: "Equidad",
      description:
        "Garantizamos un trato justo e imparcial hacia nuestros empleados y clientes, promoviendo la igualdad de oportunidades.",
      img: equidad,
    },
    {
      id: 4,
      name: "Legalidad",
      description:
        "Cumplimos con las leyes y regulaciones aplicables en todas nuestras operaciones y proyectos.",
      img: legalidad,
    },
    {
      id: 6,
      name: "Humildad",
      description:
        "Reconocemos nuestras fortalezas y debilidades, buscando siempre aprender y mejorar en nuestra labor.",
      img: humildad,
    },
    {
      id: 9,
      name: "Empatia",
      description:
        "Comprendemos las necesidades y perspectivas de los demás, mostrando comprensión y apoyo.",
      img: empatia,
    },
    {
      id: 10,
      name: "Integridad",
      description:
        "Actuamos de manera ética y coherente con sus principios, manteniendo altos estándares morales.",
      img: integridad,
    },
    {
      id: 11,
      name: "Pasion",
      description:
        "Demostramos entusiasmo y dedicación en nuestro trabajo, buscando la excelencia en cada proyecto.",
      img: pasion,
    },
    {
      id: 12,
      name: "Generosidad",
      description:
        "Compartimos nuestros conocimientos y recursos para contribuir positivamente a la comunidad y el entorno de desarrollo.",
      img: generosidad,
    },
  ];
  
  

  return (
    <Container className="mb-4 p-0 m-0" fluid>
      <CustomTitle title={"FILOSOFÍA"} subtitle={"VALORES"} />
      <Row className="collage-row p-0 m-0">
        {ethicsValues.map((value, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            lg={3}
            xl={2}
            className="justify-content-center mb-2 "
          >
            <RotatingText values={value.description} imageUrl={value.img} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Filosofy;
