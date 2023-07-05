import React from "react";
import CustomTitle from "../shared/CustomTitle";
import CustomCarousel from "../shared/CustomCarousel";
import LicencesCarousel from "./LicencesCarousel";

function Certifications() {
  return (
    <>
      <CustomTitle title={"LICENCIAS Y CERTIFICACIONES"} subtitle={"A3E"} />
      <div style={{ maxHeight: "200px" }} className="bg-danger">
        <LicencesCarousel />
      </div>
    </>
  );
}

export default Certifications;
