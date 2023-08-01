import React from "react";
import "./Buttons.css";
import { Col, Row } from "react-bootstrap";
function Buttons() {
  return (
    <div className="m-5">
      <Row>
        <Col>
          <a className="test1">boton</a>
        </Col>
        <Col>
          <a className="test2">boton</a>
        </Col>
        <Col>
          <a className="test3">boton</a>
        </Col>
      </Row>
      <Row className="m-5">
        <Col>
          <a className="test4">boton</a>
        </Col>
        <Col>
          <a className="test5">boton</a>
        </Col>
        
      </Row>
    </div>
  );
}

export default Buttons;
