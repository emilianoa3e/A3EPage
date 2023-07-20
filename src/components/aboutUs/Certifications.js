import React from "react";
import CustomTitle from "../shared/CustomTitle";
import { Carousel, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { getCertifications } from "../../utils/getCertifications";
import { useState } from "react";
import "../../assets/css/components/LinkButton.css";
import "../../assets/css/components/Us/Certifications.css";
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

  console.log(filteredList);
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
              style={{ objectFit: "cover", minHeight:'250px' }}
            />
            <Carousel.Caption style={{ top: 0, right: 0 }}>
              <div
                className="contentCaption h-100"
                style={{ position: "absolute", right: 0 }}
              >
                <Row className="justify-content-center  w-100">
                  <Col className="col-12">
                    <h1>{certification.title}</h1>
                  </Col>
                  <Col lg={12} md={12} xs={8}>
                    <p>{certification.description}</p>
                  </Col>
                  <Col lg={12} md={12} xs={4} className=" text-center ">
                    <a
                      href={certification.link}
                      className="linkButton"                      
                    >
                      Ver más
                    </a>
                  </Col>
                </Row>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Certifications;
