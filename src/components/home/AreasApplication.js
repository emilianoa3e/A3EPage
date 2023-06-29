import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/components/AreasApplication.css";
import cuadrado3 from "../../assets/img/cuadrado3.png";
import CustomTitle from "../shared/CustomTitle";

function AreasApplication() {
  const applications = [
    {
      _id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      _id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      _id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      _id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ];

  console.log(applications);

  return (
    <Container className="areasApplication mb-4" fluid>
      <CustomTitle title={"CAMPOS DE APLICACIÓN"} subtitle={"APLICACIÓN"} />
      <Row className="w-100">
        {applications.map((areas, index) => (
          <Col
            key={index}
            md={6}
            lg={3}
            className="d-flex justify-content-center mb-2"
          >
            <div className="image-container ">
              <div className="front w-100">
                <img src={cuadrado3} alt="Image" className="p-0 m-0" />
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
