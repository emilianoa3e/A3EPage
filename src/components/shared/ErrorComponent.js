import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MdReportGmailerrorred } from "react-icons/md";
function ErrorComponent() {
  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <h2 className="text-center" style={{color:'gray'}}>
            {" "}
            <MdReportGmailerrorred size={65} />
            ¡Oops! Parece que nuestro servidor está teniendo problemas
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorComponent;
