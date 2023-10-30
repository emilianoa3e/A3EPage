import React, {lazy} from "react";
import { Col, Row, Container } from "react-bootstrap";

import "../../assets/css/pages/Clients.css";
import CustomTitle from "../shared/CustomTitle";
const ErrorComponent = lazy(()=> import("../shared/ErrorComponent"));
const SliderComponent = lazy(()=> import("../home/Slider"));
function Clients({ clientsList }) {
  return (
    <>
      {clientsList ? (
        <Container fluid className="mt-5">
          <Col>
            <CustomTitle title={"CLIENTES"} subtitle={"CLIENTES"} />

            <Row>
              <SliderComponent images={clientsList} />
            </Row>
          </Col>
        </Container>
      ) : (
        <>
          <CustomTitle title={"CLIENTES"} subtitle={"CLIENTES"} />
          <ErrorComponent />
        </>
      )}
    </>
  );
}

export default Clients;
