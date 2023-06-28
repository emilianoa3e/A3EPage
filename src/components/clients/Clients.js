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
    <Container fluid>
      <Col>
        <Row className="ms-4 mb-3">
          <p className="client-big">
            <span>CLIENTES</span> CLIENTES
          </p>
        </Row>
        <Row className="p-3">
          <SliderComponent images={clientsList} />
        </Row>
      </Col>
    </Container>
  );
}

export default Clients;
