import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MiniMap from "../../../components/shared/MiniMap";
import CustomButton from "../../../components/shared/CustomButton";
import InfoContact from "../../../components/sale/InfoContact";
import InstanceForm from "./intern/InternForm";
import VacancieForm from "./vacancie/VacancieForm";
import "./Recruitment.css";

function Recruitment() {
  const [showForm, setShowForm] = useState("vacancie");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleButtonShowForm = (formName) => {
    setShowForm(formName);
  };

  const objectSchemaVacancie = Yup.object().shape({
    fullName: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
    age: Yup.number()
      .required("La edad es requerida")
      .positive("La edad debe ser positiva"),
    residence: Yup.string().required("La residencia es requerida"),
    education: Yup.string().required("La educación es requerida"),
    position: Yup.string().required("La posición es requerida"),
    source: Yup.string().required("La fuente es requerida"),
  });

  const objectSchemaInstance = Yup.object().shape({
    fullName: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
    age: Yup.number()
      .required("La edad es requerida")
      .positive("La edad debe ser positiva"),
    institution: Yup.string().required("La institución es requerida"),
    typePractice: Yup.string().required("El tipo de práctica es requerido"),
    degree: Yup.string().required("El grado es requerido"),
    period: Yup.string().required("El periodo es requerido"),
  });

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
          <Col md={8} lg={8}>
            <Row className="mb-3">
              <Col className="text-center">
                <a
                  className={`vacancie ${
                    showForm === "vacancie" ? "active" : ""
                  }`}
                  type="button"
                  onClick={() => handleButtonShowForm("vacancie")}
                >
                  Trabaja con nosotros
                </a>
                <a
                  className={`intern ${showForm === "intern" ? "active" : ""}`}
                  type="button"
                  onClick={() => handleButtonShowForm("intern")}
                >
                  Estancia profesional
                </a>
              </Col>
            </Row>
            {showForm === "vacancie" && (
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  phone: "",
                  age: "",
                  residence: "",
                  education: "",
                  position: "",
                  source: "",
                }}
                validationSchema={objectSchemaVacancie}
                onSubmit={(values, { resetForm }) =>
                  console.log(values, uploadedFile, resetForm())
                }
              >
                {({ errors, values, touched, isValid, dirty }) => (
                  <Form>
                    <Row>
                      <Col>
                        <VacancieForm
                          errors={errors}
                          values={values}
                          touched={touched}
                          uploadedFile={uploadedFile}
                          setUploadedFile={setUploadedFile}
                        />
                      </Col>
                    </Row>
                    <Col className="text-end">
                      <CustomButton
                        type="submit"
                        disabled={!(isValid && dirty) || !uploadedFile}
                        text="Enviar"
                      />
                    </Col>
                  </Form>
                )}
              </Formik>
            )}
            {showForm === "intern" && (
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  phone: "",
                  age: "",
                  residence: "",
                  education: "",
                  position: "",
                  source: "",
                  curriculum: "",
                }}
                validationSchema={objectSchemaInstance}
                onSubmit={(values, { resetForm }) =>
                  console.log(values, resetForm())
                }
              >
                {({ errors, values, touched, isValid, dirty }) => (
                  <Form>
                    <Row>
                      <Col>
                        <InstanceForm
                          errors={errors}
                          values={values}
                          touched={touched}
                        />
                      </Col>
                    </Row>
                    <Col className="text-end">
                      <CustomButton
                        type="submit"
                        disabled={!(isValid && dirty)}
                        text="Enviar"
                      />
                    </Col>
                  </Form>
                )}
              </Formik>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Recruitment;
