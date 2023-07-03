import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/Logo_Verde_V1.png";
import "../../assets/css/components/InfoResume.css";
function InfoResume() {
  return (
    <>
      <Container className="infoResume justify-content-center p-5" fluid>
        <Row className="justify-content-center align-items-center">
          <Col
            xl={4}
            xxl={4}
            lg={4}
            md={5}
            xs={7}
            className="imgContainer d-flex justify-content-center align-items-center"
          >
            <img src={logo} className="img-fluid" alt="Not Found"/>
          </Col>
          <Col lg={8} xs={12} md={12} className="h-100">
            <Row className="infoContainer mt-0 mb-0 p-5 justify-content-center h-100">
              <Col lg={8} md={8} xs={12} className="h-100">
                <h3 className="infoSubtitle">
                  Especialistas en Energía Electrica
                </h3>
                <h2 className="infoTitle">A3E INGENIEROS</h2>
                <p className="infoDesc" >
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
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    className=" d-flex  justify-content-center "
                  >
                    <img src={logo} width={100} />
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    className=" d-flex justify-content-center"
                  >
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
