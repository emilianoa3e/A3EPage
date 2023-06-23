import React from "react";
import logo from "../../assets/img/Logo_Verde.png";
import bannerDefault from "../../assets/img/banner11.jpg";
import bannerService from "../../assets/img/banner2.jpg";
import bannerContacts from "../../assets/img/banner12.jpg"
import bannerNews from '../../assets/img/banner2.jpg'
import { Row, Col, Carousel } from "react-bootstrap"; 
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
      style={{ margin: 0, padding: 0, overflow: "hidden", maxHeight:'600px' }}
    >
      <Carousel.Item>
        <div className="banner-overlay">
          <img
            className="d-block w-100"
            src={banner ? banner : bannerDefault}
            alt={"Not Found Image"}
            style={{ objectFit: "cover" }}
          />
        </div>
        <Carousel.Caption
          style={{ top: '15%', left: 20 }}
          className="container-fluid  p-3 m-0"
        >
          <Row className="align-items-center">
            <Col
              lg={6}
              xs={4}
              md={4}
              className="text-start align-items-center"
              style={{ display: "flex" }}
            >
              <h3
                style={{ color: "white", fontWeight: "bold" }}
                className="p-0 m-0"
              >
                {title}
              </h3>
            </Col>
            <Col lg={6} xs={6} md={6} className="container-fluid">
              <Row className="justify-content-center">
                <img className="d-block " src={logo} alt={"Not Found"} />
              </Row>
              <Row>
                <h1
                  className={"text-center  pe-4"}
                  style={{
                    color: "transparent",
                    fontWeight: 900,
                    WebkitTextStroke: "3px #00743B",
                  }}
                >
                  {from}
                </h1>
              </Row>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
