import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../assets/css/components/Carousel.css";
import bannerDefault from "../../assets/img/NOSOTROS.jpg";

function CustomCarousel({ list, controls, indicators }) {
  
  //Default Carousel
  if (list.length === 0 || !list) {
    return (
      <Carousel
        slide
        controls={false}
        style={{ margin: 0, padding: 0, overflow: "hidden" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerDefault}
            alt={"Not Found"}
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
      className="carousel "
    >
      {list.map((media) => (
        <Carousel.Item key={media._id}>
          <img
            className="d-block w-100 "
            src={media.image}
            alt={'Not Found'}
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <a
              href={media.link}
              target="_blank"
              className="btn "
              style={{
                backgroundColor: "#00743B",
                color: "white",
                borderRadius: "0px 20px 20px 20px",
              }}
            >
              VER MÁS
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
