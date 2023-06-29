import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { getAllClients } from "../../utils/getClients";
import SliderComponent from "../shared/Slider";
import "../../assets/css/pages/Clients.css";
import CustomTitle from "../shared/CustomTitle";

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
        <CustomTitle title={"CLIENTES"} subtitle={"CLIENTES"}/>
        <Row className="p-3">
          <SliderComponent images={clientsList} />
        </Row>
      </Col>
    </Container>
  );
}

export default Clients;
