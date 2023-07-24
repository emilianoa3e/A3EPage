import React, { useState } from "react";
import { Image, Button, Row, Col } from "react-bootstrap";
import {
  MdOutlineNotificationsActive,
  MdArrowCircleDown,
} from "react-icons/md";
import "../../assets/css/components/Summary.css";
import ModalBoletin from "./ModalBoletin";
import pdf from "../../assets/archives/service_pdf.pdf";

function Summary({ notice, service, image, changeState, data, see }) {
  const [show, setShow] = useState(false);

  const handleChange = () => setShow(!show);

  const go = () => {
    if (notice) {
      handleChange();
    }

    if (service) {
      window.open(pdf, "_blank");
    }
  };
  return (
    <>
      <ModalBoletin handleChange={handleChange} show={show} />

      <div className="summaryButton d-flex justify-content-center ">
        {!notice && service && (
          <a onClick={go} target="_blank" className="summaryLink">
            <p style={{ paddingTop: "8px" }}>
              Ver <strong className="pe-1">PDF</strong>
              <MdArrowCircleDown className="pe-1" />
            </p>
          </a>
        )}
        {notice && !service && (
          <a onClick={go} target="_blank" className="summaryLink">
            <p style={{ paddingTop: "8px" }}>
              Suscríbete al <strong className="pe-1">boletín</strong>
              <MdOutlineNotificationsActive className="pe-1" />
            </p>
          </a>
        )}
      </div>

      <div className="summary">
        <Image
          src={image}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <div className="text-summary p-0">
          <Row className="h-100 p-0 m-0">
            <Col className="col-12">
              <p>{data}</p>
            </Col>
          </Row>
        </div>
      </div>
      <Row className="justify-content-center m-2 mb-4">
        <Col className="col-12 text-center">
          <a
            className="showButton"
            style={{ borderRadius: "0px 30px 30px 30px" }}
            onClick={changeState}
          >
            {see ? "Mostrar menos" : "Mostrar más"}
          </a>
        </Col>
      </Row>
    </>
  );
}

export default Summary;
