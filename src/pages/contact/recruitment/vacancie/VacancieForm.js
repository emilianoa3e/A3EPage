import React from "react";
import { Col, Row, Form as FormBt } from "react-bootstrap";
import {
  MdPerson,
  MdPhone,
  MdMailOutline,
  MdWarehouse,
  MdNaturePeople,
} from "react-icons/md";
import { TextInput } from "../../../../components/shared/TextInput";
import { SelectInput } from "../../../../components/shared/SelectInput";
import FileDropzone from "../../../../components/vacancie/FileDropzone";

function VacancieForm({
  errors,
  values,
  touched,
  uploadedFile,
  setUploadedFile,
}) {
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
              label="Residencia"
              name="residence"
              icon={MdWarehouse}
              placeholder="Ingrese su residencia"
              isInvalid={!!errors.residence && touched.residence}
            />
          </FormBt.Group>
        </Col>
        <Col className="col-4">
          <FormBt.Group>
            <SelectInput
              label="Educación"
              name="education"
              defaultText="Seleccione un nivel..."
              options={[
                { value: "1", label: "Primaria" },
                { value: "2", label: "Secundaria" },
                { value: "3", label: "Preparatoria" },
                { value: "4", label: "Universidad" },
              ]}
              isInvalid={!!errors.education && touched.education}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-8">
          <FormBt.Group>
            <TextInput
              maxLength="50"
              label="Posición de interes"
              name="position"
              icon={MdNaturePeople}
              placeholder="Ingrese la posición de interes"
              isInvalid={!!errors.position && touched.position}
            />
          </FormBt.Group>
        </Col>
        <Col className="col-4">
          <FormBt.Group>
            <SelectInput
              label="¿Cómo se enteró?"
              name="source"
              defaultText="Seleccione una opción..."
              options={[
                { value: "1", label: "Facebook" },
                { value: "2", label: "Instagram" },
                { value: "3", label: "LinkedIn" },
                { value: "4", label: "Twitter" },
                { value: "5", label: "Bolsa de trabajo" },
                { value: "6", label: "Recomendación" },
                { value: "7", label: "Otro..." },
              ]}
              isInvalid={!!errors.source && touched.source}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-12">
          <FormBt.Group>
            <p>Curriculum vitae</p>
            <FileDropzone
              uploadedFile={uploadedFile}
              setUploadedFile={setUploadedFile}
            />
          </FormBt.Group>
        </Col>
      </Row>
    </>
  );
}

export default VacancieForm;
