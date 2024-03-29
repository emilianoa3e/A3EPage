import React, { useRef, useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Form, Formik } from "formik";
import { showConfirmDialog, showAcceptDialog } from "../../../plugins/alert";
import { saveSale } from "../../../utils/formsFunctions";
import { getAllContacts } from "../../../utils/getContacts";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import MiniMap from "../../../components/shared/MiniMap";
import SaleForm from "./SaleForm";
import CustomButton from "../../../components/shared/CustomButton";
import InfoContact from "../../../components/contact/InfoContact";
import Banner from "../../../components/shared/Banner";
import { getServices } from "../../../utils/getServices";

function Sale() {
  const [captchaValidate, setCaptchaValidate] = useState(false);
  const [tokenRecaptcha, setTokenRecaptcha] = useState("");
  const captcha = useRef(null);
  const [contactsList, setContactsList] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [selectList, setSelectList] = useState([
    {
      value: "",
      label: ""
    }
  ])
  useEffect(() => {
    const getData = async () => {
      try {
        const services = await getServices();
        const contacts = await getAllContacts();
        setContactsList(contacts.contacts);
        setServicesList(services.services);
        const newSelectList = services.services.map(service => {
          return {
            value: service.title, 
            label: service.title 
          };
        });
  
        setSelectList(newSelectList);
      } catch (error) {
        console.log("Error getting contacts at recruitment");
      }
    };
    getData();
    document.title = "A3E Ventas";
  }, []);

  const filteredContactsList =
    contactsList && contactsList.length > 0
      ? contactsList.filter((contact) => contact.destiny === "ventas")
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

  const objectSchema = Yup.object().shape({
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
    typeService: Yup.string().required("El tipo de servicio es requerido"),
    enterprise: Yup.string().required("La empresa es requerida"),
    address: Yup.string().required("La dirección es requerida"),
  });

  const handleSubmit = (values, tokenRecaptcha, resetForm) => {
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
            saveSale(values, tokenRecaptcha).then(() => {
              resetForm();
              captcha.current.reset();
              setTokenRecaptcha("");
              setCaptchaValidate(false);
            });
          }
        );
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
                handleSubmit(values, tokenRecaptcha, resetForm)
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
                        list={selectList}
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

export default Sale;
