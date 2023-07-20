import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
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

      <a onClick={go} target="_blank" className="summaryLink">
        <div className="summaryButton d-flex justify-content-center">
          {!notice && service && (
            <>
              <p style={{ paddingTop: "8px" }}>
                Ver <strong className="pe-1">PDF</strong>
                <MdArrowCircleDown className="pe-1" />
              </p>
            </>
          )}
          {notice && !service && (
            <>
              <p style={{ paddingTop: "8px" }}>
                Suscríbete al <strong className="pe-1">boletín</strong>
                <MdOutlineNotificationsActive className="pe-1" />
              </p>
            </>
          )}
        </div>
      </a>
      <div className="summary">
        <Image
          src={image}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
        <div className="text-summary ">
          <p>{data}</p>0129
          
          <Button
            className="btn btn-success"
            style={{ borderRadius: "0px 30px 30px 30px" }}
            onClick={changeState}
          >
            {see ? "Mostrar menos" : "Mostrar más"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Summary;
