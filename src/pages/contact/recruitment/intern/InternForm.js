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
      <Row className="mb-2">
        <Col md={8} lg={8} className="mb-2">
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
        <Col md={4} lg={4} className="mb-2">
          <FormBt.Group>
            <SelectInput
              label="Tipo de Estancia"
              name="typePractice"
              defaultText="Seleccione una opción..."
              options={[
                { value: "Estadías", label: "Estadías" },
                { value: "Estancias", label: "Estancias" },
                { value: "Servicio Social", label: "Servicio Social" },
                {
                  value: "Prácticas Profesionales",
                  label: "Prácticas Profesionales",
                },
              ]}
              isInvalid={!!errors.typePractice && touched.typePractice}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={8} lg={8} className="mb-2">
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
        <Col md={4} lg={4} className="mb-2">
          <FormBt.Group>
            <SelectInput
              label="Periodo"
              name="period"
              defaultText="Seleccione un periodo..."
              options={[
                { value: "Bimestral", label: "Bimestral" },
                { value: "Trimestral", label: "Trimestral" },
                { value: "Cuatrimestral", label: "Cuatrimestral" },
                { value: "Semestral", label: "Semestral" },
              ]}
              isInvalid={!!errors.period && touched.period}
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
