import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { getAllClients } from "../../utils/getClients";
import SliderComponent from "../shared/Slider";
import "../../assets/css/pages/Clients.css";

function Clients() {
  const [clientsList, setClientsList] = useState([
    {
      _id: "",
      name: "",
      image: "",
    },
  ]);

  const getClients = async () => {
    const data = await getAllClients();
    setClientsList(data.clients);
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Container fluid className="mt-5">
      <Col>
        <Row className="ms-4  align-items-end">
          <Col md={2} lg={2}>
            <h3 className="title mb-2 me-0">CLIENTES</h3>
          </Col>
          <Col md={10} lg={10}>
            <h1 className="title-green ms-0 mb-0 pb-0">CLIENTES</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <SliderComponent images={clientsList} />
        </Row>
      </Col>
    </Container>
  );
}

export default Clients;
