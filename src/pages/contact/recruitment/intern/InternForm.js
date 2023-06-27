import React from "react";
import { Col, Row, Form as FormBt } from "react-bootstrap";
import {
  MdPerson,
  MdPhone,
  MdMailOutline,
  MdBusinessCenter,
  MdDomain,
  MdInfoOutline,
} from "react-icons/md";
import { TextInput } from "../../../../components/shared/TextInput";
import { SelectInput } from "../../../../components/shared/SelectInput";

function InstanceForm({ errors, values, touched }) {
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
            <TextInput
              max="100"
              min="0"
              type="number"
              label="Edad"
              name="age"
              placeholder="Ingrese su edad"
              isInvalid={!!errors.age && touched.age}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-8">
          <FormBt.Group>
            <TextInput
              maxLength="50"
              label="Institución académica"
              name="institution"
              icon={MdDomain}
              placeholder="Ingrese su institución académica"
              isInvalid={!!errors.institution && touched.institution}
            />
          </FormBt.Group>
        </Col>
        <Col className="col-4">
          <FormBt.Group>
            <SelectInput
              label="Tipo de instancia"
              name="typePractice"
              defaultText="Seleccione una opción..."
              options={[
                {
                  value: "Práctica profesional",
                  label: "Práctica profesional",
                },
                {
                  value: "Práctica pre-profesional",
                  label: "Práctica pre-profesional",
                },
              ]}
              isInvalid={!!errors.typePractice && touched.typePractice}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-8">
          <FormBt.Group>
            <TextInput
              maxLength="50"
              label="Carrera"
              name="degree"
              icon={MdBusinessCenter}
              placeholder="Ingrese su carrera"
              isInvalid={!!errors.degree && touched.degree}
            />
          </FormBt.Group>
        </Col>
        <Col className="col-4">
          <FormBt.Group>
            <SelectInput
              label="Periodo"
              name="period"
              defaultText="Seleccione un periodo..."
              options={[
                { value: "1", label: "Periodo 1" },
                { value: "2", label: "Periodo 2" },
                { value: "3", label: "Periodo 3" },
                { value: "4", label: "Periodo 4" },
                { value: "5", label: "Periodo 5" },
              ]}
              isInvalid={!!errors.period && touched.period}
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
              as="textarea"
              style={{ resize: "none", height: "80px" }}
              name="info"
              icon={MdInfoOutline}
              placeholder="Ingrese información adicional"
              isInvalid={!!errors.info && touched.info}
            />
          </FormBt.Group>
        </Col>
      </Row>
    </>
  );
}

export default InstanceForm;
