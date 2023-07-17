import React, { useState, useEffect } from "react";
import { Col, Row, Form as FormBt } from "react-bootstrap";
import { MdPerson, MdPhone, MdMailOutline, MdWarehouse } from "react-icons/md";
import { TextInput } from "../../../../components/shared/TextInput";
import { SelectInput } from "../../../../components/shared/SelectInput";
import { getAllPositions } from "../../../../utils/getPositions";
import FileDropzone from "../../../../components/vacancie/FileDropzone";

function VacancieForm({
  errors,
  values,
  touched,
  uploadedFile,
  setUploadedFile,
}) {
  const [optionsList, setOptionsList] = useState([]);

  const getPositions = async () => {
    const data = await getAllPositions();
    setOptionsList(data.positions);
  };

  useEffect(() => {
    getPositions();
  }, []);

  const positionsActive = optionsList.filter(
    (position) => position.status === false
  );

  const optionsPositions = positionsActive.map((position) => ({
    value: position.name,
    label: position.name,
  }));

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
              label="Residencia"
              name="residence"
              icon={MdWarehouse}
              placeholder="Ingrese su residencia"
              isInvalid={!!errors.residence && touched.residence}
            />
          </FormBt.Group>
        </Col>
        <Col md={4} lg={4} className="mb-2">
          <FormBt.Group>
            <SelectInput
              label="Educación"
              name="education"
              defaultText="Seleccione un nivel..."
              options={[
                { value: "Educación básica", label: "Educación básica" },
                {
                  value: "Educación media superior",
                  label: "Educación media superior",
                },
                { value: "Educación superior", label: "Educación superior" },
                { value: "Posgrado", label: "Posgrado" },
              ]}
              isInvalid={!!errors.education && touched.education}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={8} lg={8} className="mb-2">
          <FormBt.Group>
            <SelectInput
              label="Posición de interes"
              name="position"
              defaultText="Seleccione una posición..."
              options={optionsPositions}
              isInvalid={!!errors.position && touched.position}
            />
          </FormBt.Group>
        </Col>
        <Col md={4} lg={4} className="mb-2">
          <FormBt.Group>
            <SelectInput
              label="¿Cómo se enteró?"
              name="source"
              defaultText="Seleccione una opción..."
              options={[
                {
                  value: "Feria de reclutamiento",
                  label: "Feria de reclutamiento",
                },
                {
                  value: "Publicación en redes sociales",
                  label: "Publicación en redes sociales",
                },
                { value: "Bolsa de trabajo", label: "Bolsa de trabajo" },
                { value: "Portal del empleo", label: "Portal del empleo" },
                { value: "Recomendación", label: "Recomendación" },
              ]}
              isInvalid={!!errors.source && touched.source}
            />
          </FormBt.Group>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
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
