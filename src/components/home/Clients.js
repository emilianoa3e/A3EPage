import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SliderComponent from "../shared/Slider";
import "../../assets/css/pages/Clients.css";
import CustomTitle from "../shared/CustomTitle";

function Clients({ clientsList }) {
  return (
    <Container fluid className="mt-5">
      <Col>
        <CustomTitle title={"CLIENTES"} subtitle={"CLIENTES"}/>
        <Row>
          <SliderComponent images={clientsList} />
        </Row>
      </Col>
    </Container>
  );
}

export default Clients;
