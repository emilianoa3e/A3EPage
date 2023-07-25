import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../utils/getServices";
import { Container, Col } from "react-bootstrap";
import imagen from "../assets/img/banner1.jpg";
import Banner from "../components/shared/Banner";
import Loader from "../components/shared/Loader";
import Summary from "../components/New-Service/Summary";
import "../assets/css/components/EditorContent.css";
import ErrorComponent from "../components/shared/ErrorComponent";

function Service() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const targetSectionRef = useRef(null);
  const [service, setService] = useState();
  const [see, setSee] = useState(false);

  //scroll to section
  const scrollToUp = () => {
    targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //change See state
  const changeState = () => {
    if (see) {
      scrollToUp();
    }

    setSee(!see);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getService(id);
        setService(data.service);
      } catch (error) {
        console.log("error services", error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className="m-0 p-0 pt-0 mb-4" fluid>
      <Banner from={"SERVICIOS"} />
      {service ? (
        <>
          {/* Title */}
          <div className="p-2" ref={targetSectionRef}>
            <h1
              className="text-start ms-4 mt-5"
              style={{ color: "#00743B", fontWeight: "bold" }}
            >
              {service.title}
            </h1>
            <h3 style={{ color: "#00743B" }} className="text-center mt-2 mb-4">
              {service.subtitle}
            </h3>
          </div>
          <Summary
            service={true}
            image={imagen}
            see={see}
            changeState={changeState}
            data={service.summary}
          />
          {/* Content */}
          {see && (
            <>
              <div
                className="p-3 pe-3 ps-3 mt-5 content"
                dangerouslySetInnerHTML={{ __html: service.content }}
              ></div>
              <Col className="col-12 text-center">
                <a
                  className="showButton"
                  style={{ borderRadius: "0px 30px 30px 30px" }}
                  onClick={changeState}
                >
                  {see ? "Mostrar menos" : "Mostrar más"}
                </a>
              </Col>
            </>
          )}
        </>
      ) : (
        <ErrorComponent />
      )}
    </Container>
  );
}

export default Service;
