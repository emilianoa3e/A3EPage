import React from "react";
import bannerDefault from "../../assets/img/NOSOTROS.jpg";
import bannerService from "../../assets/img/SERVICIOS.jpg";
import bannerNews from '../../assets/img/NOTICIAS.jpg'
import bannerContactVentas from '../../assets/img/CONTACTO_Ventas.jpg'
import bannerContactReclut from '../../assets/img/CONTACTO_Reclutamiento.jpg'
import bannerUs from "../../assets/img/NOSOTROS.jpg";
import {Carousel} from "react-bootstrap";
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
    case "VENTAS": {
      banner = bannerContactVentas;
      break;
    }
    case "RECLUTAMIENTO": {
      banner = bannerContactReclut;
      break;
    }
    case "NOSOTROS": {
      banner = bannerUs;
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
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
