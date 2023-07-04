import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../assets/css/components/AreasApplication.css";
import mineria from "../../assets/img/Minería.jpg";
import refineria from "../../assets/img/Refinería.jpg";
import industria from "../../assets/img/Industria.jpg";
import comercial from "../../assets/img/Comercial.jpg";
import CustomTitle from "../shared/CustomTitle";

function AreasApplication() {
  const applications = [
    {
      _id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "MINERIA",
      img:mineria
    },
    {
      _id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "INDUSTRIA",
      img:industria
    },
    {
      _id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "REFINERIA",
      img:refineria
    },
    {
      _id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "COMERCIAL",
      img:comercial
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
                <Image src={areas.img} alt="Image" className="p-0 m-0 " fluid />
                <div
                 className="area"
                >
                  {areas.area}
                </div>
              </div>
              <div className="back h-100">
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
