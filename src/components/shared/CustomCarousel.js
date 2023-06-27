import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../assets/css/components/Carousel.css";
import bannerDefault from "../../assets/img/banner1.jpg";
import logo from "../../assets/img/Logo_Blanco.png";
import sismedia from "../../assets/img/sismedia.png";
import {Col, Container, Image, Row} from "react-bootstrap";
function CustomCarousel({ list, controls, indicators }) {

  //
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
      className="carousel"
    >
      {list.map((media) => (
        <Carousel.Item key={media._id}>
          <img
            className="d-block w-100 "
            src={media.image}
            alt={media.title}
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption className=" h-100 ">
            <Container fluid className=" h-100 align-items-center - d-flex">
              <Row className={'w-75  text-start'} >
                <Col lg={12} md={12} xs={12} className={' m-0 p-0 '} style={{flexWrap: 'wrap', }}>
                  <Image src={sismedia} style={{ WebkitFlexShrink: 0, maxWidth: '100%', height:"auto"}}/>
                </Col>
                <Col className={' m-0 p-0'}>
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
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
