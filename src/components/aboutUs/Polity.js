import React from "react";
import imagen from "../../assets/img/banner1.jpg";
import '../../assets/css/components/Us/Polity.css'
import { Row, Col, Container } from "react-bootstrap";
function Polity() {
  return (
    <Container
      className="polity justify-content-center mt-5"
      fluid
    >
      <Row className="justify-content-center align-items-center mb-3">
        <Col 
        className="imgContainer d-flex justify-content-center align-items-center mb-2 p-0 pe-1 ps-1" >
          <img src={imagen} className="img-fluid" alt="Not Found"/>
        </Col>

        <Col lg={6} md={6} xs={12}
        className="infoContainer pt-4 pb-4 ms-1 me-1 mb-2 " >
        <h2 className="text-start infoTitle mb-3 mt-2">POLÍTICA DE CALIDAD</h2>
          <p className="infoDesc">
            En A3E Ingenieros Especialistas en Energía Eléctrica S.A. de C.V.
            ofrecemos servicios de estudios eléctricos, de ahorro de energía,
            pruebas eléctricas, suministro e instalaciones eléctricas, además de
            sistemas de monitoreo de energía; orientados a satisfacer los
            requisitos y expectativas de nuestros clientes y los requisitos
            aplicables a través de personal especializado con capacitación
            constante, promoviendo la mejora continua en nuestros procesos.
          </p>
          <h2 className="text-end infoSubtitle">DIRECCIÓN GENERAL</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Polity;
