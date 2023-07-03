import React from "react";
import { Image } from "react-bootstrap";

function MiniMap() {
  const image =
    "https://res.cloudinary.com/a3e-media/image/upload/v1687562139/del%20home/mapa_vbfubf.png";

  return (
    <div
      className="mx-auto"
      style={{ borderRadius: "50%", width: "90%", cursor: "pointer" }}
      title="Ver en Google Maps https://goo.gl/maps/Hh5Cmz5FVFH96C9n7"
    >
      <Image
        roundedCircle
        style={{ width: "100%", height: "100%" }}
        src={image}
        alt="../../assets/img/mapa.png"
        onClick={() => window.open("https://goo.gl/maps/Hh5Cmz5FVFH96C9n7")}
      />
    </div>
  );
}

export default MiniMap;
