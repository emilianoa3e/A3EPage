import React from "react";
import { MdOutlineNotificationsActive, MdArrowCircleDown } from "react-icons/md";

import "../../assets/css/components/SummaryButton.css";
function SummaryButton({ notice, service }) {
  return (
    <div className="SummaryButton d-flex justify-content-center">
      <a
        href="https://www.google.com"
        target="_blank"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "20px",
        }}
        className="mt-2 pe-2"
      >
        {!notice && service && (
          <>
            <strong className="pe-2">Ver PDF</strong>
            <MdArrowCircleDown style={{ fontSize: "30px" }} />
          </>
        )}
        {notice && !service &&(
           <>
           <strong className="pe-2">Suscríbete al boletín</strong>
           <MdOutlineNotificationsActive style={{ fontSize: "30px" }} />
         </> 
        )}
      </a>
    </div>
  );
}

export default SummaryButton;
