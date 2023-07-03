import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../assets/css/components/AreasApplication.css";
import cuadrado3 from "../../assets/img/cuatro-tres.jpg";
import CustomTitle from "../shared/CustomTitle";

function AreasApplication() {
  const applications = [
    {
      _id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "MINERIA",
    },
    {
      _id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "INDUSTRIA",
    },
    {
      _id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "REFINERIA",
    },
    {
      _id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "COMERCIAL",
    },
  ];

  console.log(applications);

  return (
    <Container className="areasApplication mb-4" fluid>
      <CustomTitle title={"CAMPOS DE APLICACIÓN"} subtitle={"APLICACIÓN"} />
      <Row>
        {applications.map((areas, index) => (
          <Col
            key={index}
            md={6}
            lg={3}
            className="d-flex justify-content-center  p-0"
          >
            <div className="image-container ">
              <div className="front">
                <Image src={cuadrado3} alt="Image" className="p-0 m-0 " fluid />
                <div
                 className="area"
                >
                  {areas.area}
                </div>
              </div>
              <div className="back">
                <span className="text">{areas.text}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AreasApplication;
