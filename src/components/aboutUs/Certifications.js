import React from "react";
import CustomTitle from "../shared/CustomTitle";
import { Carousel } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { getCertifications } from "../../utils/getCertifications";
import { useState } from "react";

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const getAllCertifications = async () => {
      try {
        const data = await getCertifications();
        setCertifications(data.certifications);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCertifications();
  }, []);

  let filteredList;
  try {
    filteredList = certifications.filter(
      (certification) => certification.status === false
    );
  } catch (error) {
    console.log("Error filtering certifications");
  }
  return (
    <Container fluid className="p-0 m-0 ">
      <CustomTitle title={"LICENCIAS Y CERTIFICACIONES"} subtitle={"A3E"} />

      <Carousel controls={false}>
        {filteredList.map((certification) => (
          <Carousel.Item key={certification._id}>
            <img
              className="d-block w-100"
              src={certification.image}
              alt={"Not Found"}
              style={{ objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Certifications;
