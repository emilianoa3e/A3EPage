import React from "react";
import { Image, Button } from "react-bootstrap";
import {
  MdOutlineNotificationsActive,
  MdArrowCircleDown,
} from "react-icons/md";
import "../../assets/css/components/Summary.css";
import { useNavigate, useNavigation } from "react-router-dom";

function Summary({ notice, service, image, changeState, data, see }) {
  const navigate = useNavigate();
  const go = () => {
    navigate("/https://www.google.com");
  };
  return (
    <>
      <a href="https://www.google.com" target="_blank" className="summaryLink">
        <div className="summaryButton d-flex justify-content-center">
          {!notice && service && (
            <>
              <p style={{paddingTop:'8px'}}>
                Ver <strong className="pe-1">PDF</strong>
                <MdArrowCircleDown className="pe-1" />
              </p>
            </>
          )}
          {notice && !service && (
            <>
              <p style={{paddingTop:'8px'}}>
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
          <p>{data}</p>
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
