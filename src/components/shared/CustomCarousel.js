import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import "../../assets/css/components/Carousel.css";
import bannerError from "../../assets/img/default/ERROR_01.jpg";
import bannerDefault from "../../assets/img/default/Secundario_SERVICIOS.jpg";
function CustomCarousel({ list, controls, indicators }) {
  //Error
  if (!list) {
    return (
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            loading="lazy"
            className="d-block carousel-image "
            src={bannerError}
            alt={"DEfault Not Found"}
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  if (list.length === 0) {
    return (
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            loading="lazy"
            className="d-block carousel-image "
            src={bannerDefault}
            alt={"DEfault Not Found"}
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <Carousel
      controls={controls}
      indicators={indicators}
      style={{ margin: 0, padding: 0 }}
      className="carousel"
    >
      {list.map((media) => (
        <Carousel.Item key={media._id}>
          <img
            loading="lazy"
            className="d-block carousel-image"
            src={media.image}
            alt={" Not Found"}
            style={{ objectFit: "cover" }}
          />
          <>
            {media.link && (
              <Carousel.Caption
                className=" text-start w-100 h-50 "
                style={{ position: "absolute", left: 0 }}
              >
                <Row className="w-100 h-100 p-0 m-0 align-items-center justify-content-left">
                  <Col className="text-center ">
                    <a
                      href={media.link}
                      target="_blank"
                      className="carousel-btn"
                    >
                      Ver más
                    </a>
                  </Col>
                </Row>
              </Carousel.Caption>
            )}
          </>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
