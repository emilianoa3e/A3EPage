import React from "react";
import CustomTitle from "../shared/CustomTitle";
import { Carousel, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { getCertifications } from "../../utils/getCertifications";
import { useState } from "react";
import "../../assets/css/components/LinkButton.css";
import "../../assets/css/components/Us/Certifications.css";
import ErrorComponent from "../shared/ErrorComponent";
import NotRegisters from "../shared/NotRegisters";
function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const getAllCertifications = async () => {
      try {
        const data = await getCertifications();
        setCertifications(data.certifications);
      } catch (error) {
        console.log(error);
        setCertifications(null);
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
      {certifications ? (
        <>
          {filteredList.length > 0 ? (
            <>
              <Carousel controls={false}>
                {filteredList.map((certification) => (
                  <Carousel.Item key={certification._id}>
                    <img
                      className="d-block w-100 image-info"
                      src={certification.image}
                      alt={"Not Found"}
                      style={{                      
                        minHeight: "215px",                      
                      }}
                    />
                    <Carousel.Caption className="h-100" style={{position:'absolute', right:0}}>
                      <div className="container-info">
                        <Row className="justify-content-center w-100 m-0 p-0">
                          <Col className="col-12">
                            <h2>{certification.title}</h2>
                          </Col>
                          <Col
                            className="col-12 text-certification"
                            dangerouslySetInnerHTML={{
                              __html: certification.description,
                            }}
                          ></Col>
                          <Col className="col-12 text-center">
                            <a
                              href={certification.link}
                              target="_blank"
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
            </>
          ) : (
            <NotRegisters icon={true} text={true} />
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
    </Container>
  );
}

export default Certifications;
