import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/components/AreasApplication.css";
import cuadrado3 from "../../assets/img/cuadrado3.png";

function AreasApplication() {
  return (
    <Container className="areasApplication mb-4" fluid>
      <Row className="ms-5 me-5">
        <Col>
          <h3>Campos de aplicación</h3>
        </Col>
        <Col>
          <h1>APLICACIÓN</h1>
        </Col>
      </Row>
      <Row className="w-100">
        <Col md={6} lg={3} className="d-flex justify-content-center mb-2">
          <div class="image-container ">
            <div class="front w-100">
              <img src={cuadrado3} alt="Image" className="p-0 m-0" />
            </div>
            <div class="back">
              <span class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </span>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center mb-2">
          <div class="image-container">
            <div class="front w-100">
              <img src={cuadrado3} alt="Image" className="p-0 m-0" />
            </div>
            <div class="back">
              <span class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </span>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center mb-2">
          <div class="image-container">
            <div class="front w-100">
              <img src={cuadrado3} alt="Image" className="p-0 m-0" />
            </div>
            <div class="back">
              <span class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </span>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center mb-2">
          <div class="image-container">
            <div class="front w-100">
              <img src={cuadrado3} alt="Image" className="p-0 m-0" />
            </div>
            <div class="back">
              <span class="text">
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
