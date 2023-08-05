import React, {useState} from "react";
import { Container, Row, Col} from "react-bootstrap";
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
    config: { mass: 10, tension: 500, friction: 100 },
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
          transform,
        }}
      >
        <div
        className="containerAnimation"
        >
          <animated.img
          className={"animatedImg"}
            src={imageUrl}
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
      "id": 1,
      "name": "Empatia",
      "description": "Capacidad de ponerse en el lugar del otro y comprender sus sentimientos y emociones.",
      "img": empatia
    },
    {
      "id": 2,
      "name": "Equidad",
      "description": "Tratar a todas las personas con justicia e imparcialidad, sin discriminar ni favorecer a nadie.",
      "img": equidad
    },
    {
      "id": 3,
      "name": "Equipo",
      "description": "Trabajar en colaboración y armonía con otros para alcanzar un objetivo común.",
      "img": equipo
    },
    {
      "id": 4,
      "name": "Generosidad",
      "description": "Dar y compartir sin esperar nada a cambio, ayudando a los demás desinteresadamente.",
      "img": generosidad
    },
    {
      "id": 5,
      "name": "Honestidad",
      "description": "Ser veraz y sincero en todas las acciones y comunicaciones.",
      "img": honestidad
    },
    {
      "id": 6,
      "name": "Humildad",
      "description": "Reconocer las propias limitaciones y errores, sin vanagloriarse de los logros.",
      "img": humildad
    },
    {
      "id": 7,
      "name": "Integridad",
      "description": "Actuar con coherencia entre lo que se piensa, se dice y se hace.",
      "img": integridad
    },
    {
      "id": 8,
      "name": "Legalidad",
      "description": "Acatar y respetar las leyes y normativas vigentes.",
      "img": legalidad
    },
    {
      "id": 9,
      "name": "Pasion",
      "description": "Sentir una profunda dedicación y entusiasmo por lo que se hace.",
      "img": pasion
    },
    {
      "id": 10,
      "name": "Respeto",
      "description": "Tratar a todas las personas con consideración, cortesía y valorar sus derechos y opiniones.",
      "img": respeto
    },
    {
      "id": 11,
      "name": "Responsabilidad",
      "description": "Cumplir con los deberes y asumir las consecuencias de las propias acciones.",
      "img": responsabilidad
    },
    {
      "id": 12,
      "name": "Servicio",
      "description": "Brindar apoyo y ayuda a los demás, contribuyendo al bienestar de la comunidad.",
      "img": servicio
    }
  ]
  
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
