import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MiniMap from "../../../components/shared/MiniMap";
import SaleForm from "./SaleForm";
import CustomButton from "../../../components/shared/CustomButton";
import InfoContact from "../../../components/sale/InfoContact";

function Recruitment() {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md={4} lg={4}>
            <Row>
              <MiniMap />
            </Row>
            <Row className="mt-3 ms-2 me-2">
              <InfoContact />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Recruitment;
