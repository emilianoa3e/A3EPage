import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import "../../assets/css/components/Carousel.css";
import bannerDefault from "../../assets/img/NOSOTROS.jpg";

function CustomCarousel({ list, controls, indicators }) {
  //Default Carousel
  if (!list || list.lenght === 0) {
    return (
      <Carousel
        slide
        controls={false}
        style={{ margin: 0, padding: 0, overflow: "hidden" }}
      >
        <Carousel.Item>
          <img
            className="d-block"
            src={bannerDefault}
            alt={"Carousel Not Found"}
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
            className="d-block carousel-image"
            src={media.image}
            alt={" Not Found"}
            style={{ objectFit: "cover"}}
          />
          <>
            {media.link && (
              <Carousel.Caption
                className=" text-start w-100 h-50 "
                style={{ position: "absolute", left: 0 }}
              >
                <Row className="w-100 h-100 p-0 m-0 align-items-center justify-content-left">
                  <Col className="text-center ">
                    <a className="carousel-btn">Ver más</a>
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
