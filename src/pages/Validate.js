import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { validateEmail } from "../utils/boletinFunction";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
function Validate() {
  const [verified, setVerified] = useState();
  const { token } = useParams();
  useEffect(() => {
    validateEmail(token);
  }, []);
  return (
    <Container className="p-0 m-0" style={{ height: "100vh" }} fluid>
      <Row className={"align-items-center h-100"}>
        <Col>
          <h2 className="text-center">Pantalla de confirmación de correo</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Validate;
