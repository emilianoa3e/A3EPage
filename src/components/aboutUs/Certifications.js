import React from "react";
import CustomTitle from "../shared/CustomTitle";
import CustomCarousel from "../shared/CustomCarousel";
import LicencesCarousel from "./LicencesCarousel";
import { Container } from "react-bootstrap";

function Certifications() {
  return (
    <Container fluid>
      <CustomTitle title={"LICENCIAS Y CERTIFICACIONES"} subtitle={"A3E"} />
      <div >
        <LicencesCarousel />
      </div>
    </Container>
  );
}

export default Certifications;
