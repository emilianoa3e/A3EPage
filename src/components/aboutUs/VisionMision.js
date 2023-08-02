import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomTitle from "../shared/CustomTitle";
function VisionMision() {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col style={{backgroundColor:'#D6EAF8', borderRadius:'0px 20px 0px 0px'}} 
        className="me-1 pt-3 mb-2 pb-3" lg={6} md={6}>
          <CustomTitle title={"MISIÓN"} subtitle={"MISIÓN"} />
          <p className="ms-4 ps-3" style={{color:'black'}}>
            Realizar servicios de ingeniería eléctrica que le garanticen a
            nuestros clientes contar con sistemas eléctricos confiables, seguros
            y que les permitan hacer uso eficiente de la energía satisfaciendo
            de manera integral sus necesidades.
          </p>
        </Col>
        <Col style={{backgroundColor:'#D6EAF8',borderRadius:'20px 0px 0px 0px'}} 
        className="ms-1 pt-3 mb-2 pb-3" >
          <CustomTitle title={"VISIÓN"} subtitle={"VISIÓN"} />
          <p  className="ms-4 ps-3" style={{color:'black'}}>
            Ser líder en el mercado nacional en la implementación de Sistemas de
            medición eléctrica, que permita a los usuarios conocer cómo y cuánta
            energía consumen, para tomar las mejores decisiones que les permitan
            hacer un uso más eficiente de esta, disminuir sus consumos y el pago
            de su facturación, así como contribuir con el mejoramiento del medio
            ambiente
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default VisionMision;
