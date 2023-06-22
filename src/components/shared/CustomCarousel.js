import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../assets/css/components/Carousel.css";
import bannerDefault from "../../assets/img/banner1.jpg";
import logo from "../../assets/img/Logo_Blanco.png";
import { Container, Row } from "react-bootstrap";
function CustomCarousel({ list, controls, indicators }) {
  if (list.length === 0 || !list) {
    return (
      <Carousel
        slide
        controls={false}
        style={{ margin: 0, padding: 0, overflow: "hidden", height: "300px" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerDefault}
            alt={"Not Found Image"}
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <Row className="justify-content-end ">
              <img className="d-block w-50" src={logo} alt={"Not Found"} />
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <Carousel
      controls={controls}
      indicators={indicators}
      style={{ margin: 0, padding: 0}}
    >
      {list.map((media) => (
        <Carousel.Item key={media._id}>
          <img
            className="d-block w-100 "
            src={media.image}
            alt={media.title}
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-success ">
            <Container fluid className="bg-danger h-100 h-100">
              <h3>{media.title}</h3>
              <p>{media.description}</p>
              <a
                href={media.link}
                target="_blank"
                className="btn ps-4 pe-4"
                style={{
                  backgroundColor: "#00743B",
                  color: "white",
                  borderRadius: "0px 20px 20px 20px",
                }}
              >
                VER MÁS
              </a>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
