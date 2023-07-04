import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CustomTitle from "../shared/CustomTitle";
import image from '../../assets/img/cinco-tres.jpg'
import '../../assets/css/components/Filosofy.css'
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
    <Container className="filosofy mb-4 m-1" fluid>
      <CustomTitle title={"FILOSOFÍA"} subtitle={"VALORES"} />
      <Row className="collage-row ps-3 w-100 ">
        {ethicsValues.map((values, index) => (
          <Col key={index} className="collage-col p-0 m-0">
            <div className="image-container">
              <div className="front">
                <Image src={image} alt="Image" fluid />
                <div className="area">{values.name}</div>
              </div>
              <div className="back h-100">
                <p className="text " >{values.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Filosofy;
