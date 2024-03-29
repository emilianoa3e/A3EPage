import React, { useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Col, Row, Container } from "react-bootstrap";
import { Form, Formik } from "formik";
import { saveIntern, saveVacancie } from "../../../utils/formsFunctions";
import { showConfirmDialog, showAcceptDialog } from "../../../plugins/alert";
import * as Yup from "yup";
import Banner from "../../../components/shared/Banner";
import MiniMap from "../../../components/shared/MiniMap";
import CustomButton from "../../../components/shared/CustomButton";
import InfoContact from "../../../components/contact/InfoContact";
import InstanceForm from "./intern/InternForm";
import VacancieForm from "./vacancie/VacancieForm";
import "../../../assets/css/components/contact/Recruitment.css";
import { getAllContacts } from "../../../utils/getContacts";

function Recruitment() {
  const [showForm, setShowForm] = useState("vacancie");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [tokenRecaptcha, setTokenRecaptcha] = useState("");
  const [captchaValidate, setCaptchaValidate] = useState(false);
  const captcha = useRef(null);
  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const contacts = await getAllContacts();
        setContactsList(contacts.contacts);
      } catch (error) {
        console.log("Error getting contacts at recruitment");
      }
    };
    getData();
    document.title = "A3E Reclutamiento";
  }, []);

  const filteredContactsList = contactsList && contactsList.length > 0
  ? contactsList.filter((contact) => contact.destiny === "reclutamiento")
  : [];

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario ha pasado el captcha");
      setTokenRecaptcha(captcha.current.getValue());
      setCaptchaValidate(true);
    } else {
      console.log("La validación de ReCAPTCHA ha expirado");
      setTokenRecaptcha("");
      setCaptchaValidate(false);
    }
  };

  const handleButtonShowForm = (formName) => {
    setShowForm(formName);
  };

  const objectSchemaVacancie = Yup.object().shape({
    fullName: Yup.string()
      .matches(
        /^[a-zA-ZáéíóúÁÉÍÓÚüïüëöñÑ ]+$/,
        "No puede contener caracteres especiales"
      )
      .required("El nombre es requerido"),
    phone: Yup.string().matches(/^[0-9]+$/, "Solo se permiten números"),
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
    fullName: Yup.string()
      .matches(
        /^[a-zA-ZáéíóúÁÉÍÓÚüïüëöñÑ ]+$/,
        "No puede contener caracteres especiales"
      )
      .required("El nombre es requerido"),
    phone: Yup.string().matches(/^[0-9]+$/, "Solo se permiten números"),
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

  const handleSubmit = (values, tokenRecaptcha, resetForm, uploadedFile) => {
    showAcceptDialog(
      "Aviso de privacidad",
      "https://res.cloudinary.com/a3e-media/image/upload/v1691689222/pdfs/proteccion_datos_ygxo2n.pdf",
      "He leído y acepto el aviso de privacidad",
      "Continuar",
      "Debe aceptar el aviso de privacidad para continuar",
      () => {
        showConfirmDialog(
          "¿Está seguro de enviar la información?",
          "Una vez enviada no podrá ser modificada.",
          "Sí, enviar",
          "Cancelar",
          () => {
            if (showForm === "vacancie") {
              saveVacancie(values, uploadedFile, tokenRecaptcha).then(() => {
                resetForm();
                captcha.current.reset();
                setTokenRecaptcha("");
                setCaptchaValidate(false);
                setUploadedFile(null);
              });
            } else if (showForm === "intern") {
              saveIntern(values, tokenRecaptcha).then(() => {
                resetForm();
                captcha.current.reset();
                setTokenRecaptcha("");
                setCaptchaValidate(false);
              });
            }
          }
        );
      }
    );
  };

  return (
    <>
      <Container fluid className="m-0 p-0">
        <Banner from={"RECLUTAMIENTO"} />
      </Container>
      <Container className="mt-4">
        <Row >
          <Col md={8} lg={8} >
            <Row className="mb-3">
              <Col className="text-center">
                <a
                  className={`vacancie ${
                    showForm === "vacancie" ? "active" : ""
                  }`}
                  type="button"
                  onClick={() => handleButtonShowForm("vacancie")}
                  // esling-disable-next-line
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
                  handleSubmit(values, tokenRecaptcha, resetForm, uploadedFile)
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
                    <Row className="mb-2">
                      <Col>
                        <ReCAPTCHA
                          ref={captcha}
                          sitekey="6LfjmfAmAAAAAObNPAk5UKAbuUgOwTw1Sl_3SsI3"
                          onChange={onChange}
                        />
                      </Col>
                      <Col className="text-end">
                        <CustomButton
                          type="submit"
                          text="Enviar"
                          color="primary"
                          size="medium"
                          disabled={
                            !isValid ||
                            !dirty ||
                            !uploadedFile ||
                            !captchaValidate
                          }
                          className="mt-3"
                        />
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            )}
            {showForm === "intern" && (
              <Formik
                initialValues={{
                  fullName: "",
                  phone: "",
                  email: "",
                  age: "",
                  institution: "",
                  typePractice: "",
                  degree: "",
                  period: "",
                  info: "",
                }}
                validationSchema={objectSchemaInstance}
                onSubmit={(values, { resetForm }) =>
                  handleSubmit(values, tokenRecaptcha, resetForm)
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
                    <Row className="mb-2">
                      <Col>
                        <ReCAPTCHA
                          ref={captcha}
                          sitekey="6LfjmfAmAAAAAObNPAk5UKAbuUgOwTw1Sl_3SsI3"
                          onChange={onChange}
                        />
                      </Col>
                      <Col className="text-end">
                        <CustomButton
                          type="submit"
                          text="Enviar"
                          color="primary"
                          size="medium"
                          disabled={!isValid || !dirty || !captchaValidate}
                          className="mt-3"
                        />
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            )}
          </Col>
          <Col md={4} lg={4}>
            <Row>
              <MiniMap />
            </Row>
            <Row className="mt-3 ms-2 me-2">
              <InfoContact contactList={filteredContactsList} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Recruitment;
