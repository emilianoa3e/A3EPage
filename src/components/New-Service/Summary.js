import React, { useState } from "react";
import { Image, Row, Col } from "react-bootstrap";
import {
  MdOutlineNotificationsActive,
  MdArrowCircleDown,
} from "react-icons/md";
import "../../assets/css/components/Summary.css";
import ModalBoletin from "./ModalBoletin";
import { showTimerAlert } from "../../plugins/alert";
import Colors from "../../utils/Colors";
import { Button } from "@mui/material";

function Summary({ notice, service, image, changeState, data, see }) {
  const [show, setShow] = useState(false);

  const handleChange = () => setShow(!show);

  const go = () => {
    if (notice) {
      //lo comentado es para funcionamiento de boletín (inhabilitado hasta nuevo aviso)
      // handleChange();
      showTimerAlert(
        "Proximamente Boletín A3E",
        "Por el momento no se encuentra habilitado 😥",
        null,
        3000,
        true
      );
    }
  };
  return (
    <>
      {/* <ModalBoletin handleChange={handleChange} show={show} /> */}

      <div className="summaryButton d-flex justify-content-center ">
        {!notice && service && (
          <a
            href="https://res.cloudinary.com/a3e-media/image/upload/v1691689223/pdfs/CV_A3E_Original_sli2re.pdf"
            target="_blank"
            className="summaryLink"
          >
            <p style={{ paddingTop: "8px" }}>
              <strong className="pe-1">CV Empresarial</strong>
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
          className="image-summary"
          src={image}
          style={{ objectFit: "cover", objectPosition: "0% 0%" }}
        />
        <div className="text-summary p-1 ">
          <Row className="h-100 p-0 m-0">
            <Col xl={6} lg={6} md={8} sm={10} xs={12}>
              <div dangerouslySetInnerHTML={{ __html: data }}></div>
            </Col>
          </Row>
        </div>
      </div>
      <Row className="justify-content-center m-2 mb-4">
        <Col className="col-12 text-center">
          <Button
            variant={see ? "contained" : "outlined"}
            color={see ? "primary" : "success"}
            sx={{ borderRadius: "30px", padding: "5px 30px" }}
            style={see ? { backgroundColor: Colors.PalleteGreenA3E } : {}}
            onClick={changeState}
          >
            {see ? "Ver menos" : "Ver más"}
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Summary;
