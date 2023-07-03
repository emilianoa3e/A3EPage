import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Col, Row, Container } from "react-bootstrap";
import { Form, Formik } from "formik";
import { showConfirmDialog } from "../../../plugins/alert";
import * as Yup from "yup";
import MiniMap from "../../../components/shared/MiniMap";
import SaleForm from "./SaleForm";
import CustomButton from "../../../components/shared/CustomButton";
import InfoContact from "../../../components/sale/InfoContact";
import Banner from "../../../components/shared/Banner";
import { saveSale } from "../../../utils/formsFunctions";

function Sale() {
  const [captchaValidate, setCaptchaValidate] = useState(false);
  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario ha pasado el captcha");
      setCaptchaValidate(true);
    }
  };

  const objectSchema = Yup.object().shape({
    fullName: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
    typeService: Yup.string().required("El tipo de servicio es requerido"),
    enterprise: Yup.string().required("La empresa es requerida"),
    address: Yup.string().required("La dirección es requerida"),
  });

  const handleSubmit = (values) => {
    showConfirmDialog(
      "¿Está seguro de enviar la información?",
      "Una vez enviada no podrá ser modificada.",
      "Sí, enviar",
      "Cancelar",
      () => {
        saveSale(values).then(() => {
          captcha.current.reset();
          setCaptchaValidate(false);
        });
      }
    );
  };

  return (
    <>
      <Container fluid className="m-0 p-0">
        <Banner from={"VENTAS"} />
      </Container>
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
          <Col className="mt-5" md={8} lg={8}>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                typeService: "",
                enterprise: "",
                address: "",
                info: "",
              }}
              validationSchema={objectSchema}
              onSubmit={(values, { resetForm }) =>
                handleSubmit(values, resetForm())
              }
            >
              {({ errors, values, touched, isValid, dirty }) => (
                <Form>
                  <Row>
                    <Col>
                      <SaleForm
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sale;
