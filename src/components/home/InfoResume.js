import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/Logo_Verde_V1.png";
import { Router } from "react-router-dom";

function InfoResume() {
  return (
    <>
      <Container className=" justify-content-center p-5" fluid>
        <Row className="justify-content-center">
          <Col lg={4} xs={12} md={4} className=" d-flex justify-content-center">
            <img src={logo} width={"100%"} />
          </Col>
          <Col>
            <Row
              style={{
                backgroundColor: "#D4E6F1",
                borderRadius: "0px 30px 30px 30px",
              }}
              className="mt-0 mb-0 p-5 justify-content-center"
            >
              <Col lg={8} md={8} xs={12}>
                <h3 style={{ color: "#00743b", fontSize: "18px" }}>
                  Especialistas en Energía Electrica
                </h3>
                <h2
                  style={{
                    color: "#00743b",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  A3E INGENIEROS
                </h2>
                <p style={{ fontSize: "15px", color: "gray" }}>
                  Somos una empresa 100% mexicana que tiene la visión de brindar
                  soluciones integrales en sistemas eléctricos y proyectos de
                  ahorro de energía, mediante la implementación de tecnologías
                  que les permita a nuestros clientes obtener confiabilidad en
                  la operación de sus instalaciones eléctricas y hacer un uso
                  eficiente de la energía eléctrica.
                </p>
              </Col>

              <Col>
                <Row className="align-items-center justify-content-center h-100 ">
                  <Col className="col-6 d-flex  justify-content-center ">
                    <img src={logo} width={100}  />
                  </Col>
                  <Col className="col-6 d-flex justify-content-center">
                    <img src={logo} width={100} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InfoResume;
