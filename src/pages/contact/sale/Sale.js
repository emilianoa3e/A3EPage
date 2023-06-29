import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MiniMap from "../../../components/shared/MiniMap";
import SaleForm from "./SaleForm";
import CustomButton from "../../../components/shared/CustomButton";
import InfoContact from "../../../components/sale/InfoContact";
import Banner from "../../../components/shared/Banner";

function Sale() {
  const objectSchema = Yup.object().shape({
    fullName: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
    typeService: Yup.string().required("El tipo de servicio es requerido"),
    enterprise: Yup.string().required("La empresa es requerida"),
    address: Yup.string().required("La dirección es requerida"),
  });

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
                console.log(values, resetForm())
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
                  <Col className="text-end">
                    <CustomButton
                      type="submit"
                      text="Enviar"
                      color="primary"
                      size="medium"
                      disabled={!isValid || !dirty}
                    />
                  </Col>
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
