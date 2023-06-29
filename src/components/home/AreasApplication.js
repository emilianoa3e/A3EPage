import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/components/AreasApplication.css";
import cuadrado3 from "../../assets/img/cuadrado3.png";

function AreasApplication() {
  return (
    <Container className="areasApplication mb-4" fluid>
      <Row className="ms-4  align-items-end">
        <Col lg={3} md={6}>
          <h3 className={'title mb-2 me-0'}>Campos de aplicación</h3>
        </Col>
        <Col  lg={3} md={6}>
          <h1 className="title-green ms-0 mb-0 pb-0">APLICACIÓN</h1>
        </Col>
      </Row>
      <Row className="w-100">
        <Col md={6} lg={3} className="d-flex justify-content-center mb-2">
          <div className="image-container ">
            <div className="front w-100">
              <img src={cuadrado3} alt="Image" className="p-0 m-0" />
            </div>
            <div className="back">
              <span className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </span>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center mb-2">
          <div className="image-container">
            <div className="front w-100">
              <img src={cuadrado3} alt="Image" className="p-0 m-0" />
            </div>
            <div className="back">
              <span className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </span>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center mb-2">
          <div className="image-container">
            <div className="front w-100">
              <img src={cuadrado3} alt="Image" className="p-0 m-0" />
            </div>
            <div className="back">
              <span className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </span>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center mb-2">
          <div className="image-container">
            <div className="front w-100">
              <img src={cuadrado3} alt="Image" className="p-0 m-0" />
            </div>
            <div className="back">
              <span className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AreasApplication;
