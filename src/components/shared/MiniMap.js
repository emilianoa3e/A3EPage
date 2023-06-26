import React from "react";
import { Image } from "react-bootstrap";

function MiniMap() {
  const image =
    "https://res.cloudinary.com/a3e-media/image/upload/v1687562139/del%20home/mapa_vbfubf.png";

  return (
    <>
      <Image
      className="mx-auto"
        style={{ borderRadius: "50%", width: "90%", height: "50%" }}
        src={image}
        alt="../../assets/img/mapa.png"
      />
    </>
  );
}

export default MiniMap;
