import React from "react";
import { Col, Row, Form as FormBt } from "react-bootstrap";
import {
  MdPerson,
  MdPhone,
  MdMailOutline,
  MdLocationOn,
  MdDomain,
  MdInfoOutline,
} from "react-icons/md";
import { TextInput } from "../../../components/shared/TextInput";
import { SelectInput } from "../../../components/shared/SelectInput";

function SaleForm({ errors, values, touched, list }) {
  return (
    <>
      <Row className="mb-2">
        <Col md={8} lg={8} className="mb-2">
          <FormBt.Group>
            <TextInput
              maxLength="50"
              label="Nombre completo"
              name="fullName"
              icon={MdPerson}
              placeholder="Ingrese su nombre completo"
              isInvalid={!!errors.fullName && touched.fullName}
            />
          </FormBt.Group>
        </Col>
        <Col md={4} lg={4} className="mb-2">
          <FormBt.Group>
            <TextInput
              maxLength="10"
              label="Telefono"
              name="phone"
              icon={MdPhone}
              placeholder="Telefono"
              isInvalid={!!errors.phone && touched.phone}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={8} lg={8} className="mb-2">
          <FormBt.Group>
            <TextInput
              maxLength="50"
              label="Email"
              name="email"
              icon={MdMailOutline}
              placeholder="Ingrese su email"
              isInvalid={!!errors.email && touched.email}
            />
          </FormBt.Group>
        </Col>
        <Col md={4} lg={4} className="mb-2">
          <FormBt.Group>
            <SelectInput
              label="Tipo de servicio"
              name="typeService"
              defaultText="Seleccione un tipo..."
              options={list}
              isInvalid={!!errors.typeService && touched.typeService}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="mb-2">
          <FormBt.Group>
            <TextInput
            maxLength="70"
              label="Empresa"
              name="enterprise"
              icon={MdDomain}
              placeholder="Ingrese el nombre de su empresa"
              isInvalid={!!errors.enterprise && touched.enterprise}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="mb-2">
          <FormBt.Group>
            <TextInput
              maxLength="80"
              label="Dirección"
              name="address"
              icon={MdLocationOn}
              placeholder="Ingrese su dirección"
              isInvalid={!!errors.address && touched.address}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="mb-2">
          <FormBt.Group>
            <TextInput
              maxLength="200"
              label="Platicanos más"
              name="info"
              as="textarea"
              style={{ resize: "none", height: "80px" }}
              icon={MdInfoOutline}
              placeholder="Información adicional"
              isInvalid={!!errors.info && touched.info}
            />
          </FormBt.Group>
        </Col>
      </Row>
    </>
  );
}

export default SaleForm;
