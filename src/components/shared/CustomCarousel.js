import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../assets/css/components/Carousel.css";
import img from "../../assets/img/banner-prov.jpg";
import logo from "../../assets/img/Logo_Blanco.png";
import { Col, Row } from "react-bootstrap";
function CustomCarousel({ msg, list, controls, indicators }) {
  if (list.length === 0 || !list) {
    return (
      <Carousel
        controls={false}
        indicators={indicators}
        style={{ margin: 0, padding: 0 }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt={"Not Found Image"} />
          <Carousel.Caption>
            <Row className="align-items-center p-0 m-0 ">
              <Col>
                <h2
                style={{color:'white', fontSize: '20px'}}
                >
                  {msg}
                </h2>
              </Col>
              <Col >
                <Row className="justify-content-end ">
                  <img className="d-block w-50" src={logo} alt={"Not Found"} />
                </Row>
                <Row>
                  <h1
                    className={"text-end  pe-4"}
                    style={{
                      color: "transparent",
                      fontWeight: 900,
                      WebkitTextStroke: "1px white",
                      fontSize: "30px",
                    }}
                  >
                    Hola
                  </h1>
                </Row>
              </Col>
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
      style={{ margin: 0, padding: 0 }}
    >
      {list.map((media) => (
        <Carousel.Item key={media._id}>
          <img className="d-block w-100" src={media.image} alt={media.title} />
          <Carousel.Caption>
            <h3>{media.title}</h3>
            <p>{media.description}</p>
            <a href={media.link} target="_blank" className="btn btn-success">
              Ver más
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
