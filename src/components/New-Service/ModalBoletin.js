import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import { Button } from "@mui/material";
import { Form as FormBt, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { TextInput } from "../../components/shared/TextInput";
import {
  MdAssuredWorkload,
  MdDriveFileRenameOutline,
  MdMailOutline,
  MdSend,
  MdWorkOutline,
} from "react-icons/md";
import { showConfirmDialog } from "../../plugins/alert";
import { saveBoletin } from "../../utils/boletinFunction";

function ModalBoletin({ show, handleChange }) {
  const [tokenRecaptcha, setTokenRecaptcha] = useState("");
  const [captchaValidate, setCaptchaValidate] = useState(false);
  const captcha = useRef(null);

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

  const handleSubmit = (values, tokenRecaptcha) => {
    saveBoletin(values, tokenRecaptcha);
  };
  const objectSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Z áéíóúÁÉÍÓÚüïüëöñÑ@]+$/,
        "El nombre no puede contener caracteres especiales"
      )
      .required("El nombre es requerido"),
      lastname: yup
      .string()
      .matches(
        /^[a-zA-Z áéíóúÁÉÍÓÚüïüëöñÑ@]+$/,
        "El apellido no puede contener caracteres especiales"
      )
      .required("El apellido paterno es requerido"),
      surname: yup
      .string()
      .matches(
        /^[a-zA-Z áéíóúÁÉÍÓÚüïüëöñÑ@]+$/,
        "El apellido no puede contener caracteres especiales"
      )
      .required("El apellido materno es requerido"),
    profession: yup
      .string()
      .matches(
        /^[a-zA-Z áéíóúÁÉÍÓÚüïüëöñÑ@]+$/,
        "El nombre no puede contener caracteres especiales"
      )
      .required("La profesión es requerida"),
    company: yup.string().required("La empresa es requerida"),
    companyEmail: yup
      .string()
      .email("Ingrese un correo válido")
      .required("El correo es requerido"),
  });
  return (
    <Modal
      show={show}
      onHide={handleChange}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registro de solicitud al boletín
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            surname: "",
            profession: "",
            company: "",
            companyEmail: "",
          }}
          validationSchema={objectSchema}
          onSubmit={(values) => handleSubmit(values, tokenRecaptcha)}
        >
          {({ errors, values, touched }) => (
            <Form>
              <Row>
                <Col xl={12} lg={12} xs={12}>
                  <FormBt.Group className="mb-3">
                    <TextInput
                      maxLength="60"
                      label="Nombre"
                      name="name"
                      icon={MdDriveFileRenameOutline}
                      placeholder="Nombre"
                      isInvalid={!!errors.name && touched.name}
                    />
                  </FormBt.Group>
                </Col>
                <Col >
                  <FormBt.Group className="mb-3">
                    <TextInput
                      maxLength="60"
                      label="Apellido paterno"
                      name="lastname"
                      icon={MdDriveFileRenameOutline}
                      placeholder="Nombre paterno"
                      isInvalid={!!errors.lastname && touched.lastname}
                    />
                  </FormBt.Group>
                </Col>
                <Col >
                  <FormBt.Group className="mb-3">
                    <TextInput
                      maxLength="60"
                      label="Apellido materno"
                      name="surname"
                      icon={MdDriveFileRenameOutline}
                      placeholder="Nombre materno"
                      isInvalid={!!errors.surname && touched.surname}
                    />
                  </FormBt.Group>
                </Col>
              </Row>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <FormBt.Group className="mb-3">
                    <TextInput
                      maxLength="60"
                      label="Profesión"
                      name="profession"
                      icon={MdWorkOutline}
                      placeholder="Profesión"
                      isInvalid={!!errors.profession && touched.profession}
                    />
                  </FormBt.Group>
                </Col>
                <Col xl={6} lg={6} xs={12}>
                  <FormBt.Group className="mb-3">
                    <TextInput
                      maxLength="60"
                      label="Empresa donde labora"
                      name="company"
                      icon={MdAssuredWorkload}
                      placeholder="Empresa donde labora"
                      isInvalid={!!errors.company && touched.company}
                    />
                  </FormBt.Group>
                </Col>
              </Row>
              <FormBt.Group className="mb-3">
                <TextInput
                  maxLength="60"
                  label="Correo institucional"
                  name="companyEmail"
                  icon={MdMailOutline}
                  placeholder="Correo institucional"
                  isInvalid={!!errors.companyEmail && touched.companyEmail}
                />
              </FormBt.Group>
              <Col>
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LfjmfAmAAAAAObNPAk5UKAbuUgOwTw1Sl_3SsI3"
                  onChange={onChange}
                />
              </Col>

              <Modal.Footer>
                <Button type="submit" variant="contained" endIcon={<MdSend />}>
                  Enviar
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default ModalBoletin;
