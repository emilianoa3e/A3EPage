import React from "react";
import { Image, Button } from "react-bootstrap";
import '../../assets/css/components/Summary.css'
function Summary({image,changeState, data, see}) {
  return (
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
  );
}

export default Summary;
