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
  let phone;
  let email;
  let whatsapp;

  contactList.forEach((contact) => {
    if (contact.type === "phone") {
      phone = contact.contact;
    }
    if (contact.type === "email") {
      email = contact.contact;
    }
    if (contact.type === "whatsapp") {
      whatsapp = contact.contact;
    }
  });

  return (
    <Container fluid className="container-card p-2">
      <Col className="m-3">
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
            <p className="pt-3 ms-3">{`+52 ${phone}`}</p>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col className="col-1">
            <MdWhatsapp size={30} />
          </Col>
          <Col>
            <p className="pt-3 ms-3">{`+52 ${whatsapp}`}</p>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col className="col-1">
            <MdEmail size={30} />
          </Col>
          <Col>
            <p className="pt-3 ms-3">{email}</p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default InfoContact;
