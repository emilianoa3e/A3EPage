import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  MdWhatsapp,
  MdEmail,
  MdLocalPhone,
  MdFacebook,
  MdLocationOn,
} from "react-icons/md";
import "./InfoContact.css";

function InfoContact({ contactList }) {
  return (
    <Container fluid className="container-card p-4">
      <Col>
        <Row style={{ alignItems: "center" }}>
          <Col className="col-1">
            <MdLocationOn size={30} />
          </Col>
          <Col>
            <p className="pt-3 ms-3">
              Parque Tecnológico, de Monterrey, Campus Cuernavaca, 62790 Mor.
            </p>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col className="col-1">
            <MdLocalPhone size={30} />
          </Col>
          <Col>
            <p className="pt-3 ms-3">TEL: +52 1 (777) 123 4567</p>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col className="col-1">
            <MdWhatsapp size={30} />
          </Col>
          <Col>
            <p className="pt-3 ms-3">+52 1 (777) 123 4567</p>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col className="col-1">
            <MdEmail size={30} />
          </Col>
          <Col>
            <p className="pt-3 ms-3">ejemplo@gmail.com</p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default InfoContact;
