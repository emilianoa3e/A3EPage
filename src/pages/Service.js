import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../utils/getServices";
import { Container, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import Colors from "../utils/Colors";

import Banner from "../components/shared/Banner";
import Loader from "../components/shared/Loader";
import Summary from "../components/New-Service/Summary";
import "../assets/css/components/EditorContent.css";
import ErrorComponent from "../components/shared/ErrorComponent";

import image_1 from "../assets/img/default/Secundario_SERVICIOS.jpg";
import image_2 from "../assets/img/default/Secundario_SERVICIOS_02.jpg";
import image_3 from "../assets/img/default/Secundario_SERVICIOS_03.jpg";
function Service() {
  const images = [image_1, image_2, image_3];
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const targetSectionRef = useRef(null);
  const [service, setService] = useState();
  const [see, setSee] = useState(false);
  const [image, setImage] = useState("");

  // Función para obtener una imagen aleatoria del arreglo
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

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
        setImage(getRandomImage());
      } catch (error) {
        console.log("error services", error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    document.title = "A3E Servicios";
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
            image={image}
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
                <Button
                  variant={see ? "contained" : "outlined"}
                  color={see ? "primary" : "success"}
                  sx={{ borderRadius: "30px", padding: "5px 30px" }}
                  style={see ? { backgroundColor: Colors.PalleteGreenA3E } : {}}
                  onClick={changeState}
                >
                  {see ? "Ver menos" : "Ver más"}
                </Button>
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
