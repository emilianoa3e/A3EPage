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

function SaleForm({ errors, values, touched }) {
  return (
    <>
      <Row className="mb-3">
        <Col className="col-8">
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
        <Col className="col-4">
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
      <Row className="mb-3">
        <Col className="col-8">
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
        <Col className="col-4">
          <FormBt.Group>
            <SelectInput
              label="Tipo de servicio"
              name="typeService"
              defaultText="Seleccione un tipo..."
              options={[
                { value: "1", label: "Servicio 1" },
                { value: "2", label: "Servicio 2" },
                { value: "3", label: "Servicio 3" },
              ]}
              isInvalid={!!errors.typeService && touched.typeService}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-12">
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
        <Col className="col-12">
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
      <Row className="mb-3">
        <Col className="col-12">
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
