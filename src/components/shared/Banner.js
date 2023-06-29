import React from "react";
import logo from "../../assets/img/Logo_Verde.png";
import bannerDefault from "../../assets/img/banner11.jpg";
import bannerService from "../../assets/img/download.png";
import bannerNews from '../../assets/img/banner2.jpg'
import {Carousel, Col, Container, Row} from "react-bootstrap";
import "../../assets/css/components/Banner.css";

function Banner({ from, title }) {
  let banner;
  switch (from) {
    case "SERVICIOS": {
      banner = bannerService;
      break;
    }
    case "NOTICIAS": {
      banner = bannerNews;
      break;
    }
    default: {
      banner = bannerDefault;
      break;
    }
  }
  return (
    <Carousel
      controls={false}
      indicators={false}
      className="banner"
      style={{ margin: 0, padding: 0, overflow: "hidden"}}
    >
      <Carousel.Item>
        <div className="banner-overlay">
          <img
            className="d-block w-100"
            src={banner ? banner : bannerDefault}
            alt={"Not Found Image"}
          />
        </div>
        <Carousel.Caption
          className="h-100 "
        >
          <Container >
            <Row className="align-items-center">
              <Col
                  lg={6}
                  xs={4}
                  md={4}
                  className="text-start align-items-center titleService"
                  style={{color:'white'}}
              >
                <h3
                    className="p-0 m-0"
                >
                  {title}
                </h3>
              </Col>
              <Col lg={6} xs={6} md={6} >
                <Row >
                  <Col lg={12} xs={12} md={12} className={' justify-content-end d-flex'}>
                    <img src={logo} alt={"Not Found"} width={"100%"}/>
                  </Col>
                  <Col>
                    <h1 className={"text-end p-4"}>
                      {from}
                    </h1>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
