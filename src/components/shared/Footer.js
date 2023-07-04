import React from "react";
import { MdWhatsapp } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getServices } from "../../utils/getServices";
import logo from "../../assets/img/Logo_Blanco.png";
function Footer() {
  const [servicesList, setServiceList] = useState([
    {
      _id: "",
      title: "",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const data = await getServices();
      setServiceList(data.services);
    };
    getData();
  }, []);
  return (
    <Container
      fluid
      className="m-0 p-0 "
      style={{ height: "100%", backgroundColor: "#00743B", color: "#F2F4F4" }}
    >
      <Row className="p-5">
        <Col>
          <div style={{}}>
            <strong>Sobre A3E INGENIEROS</strong>
            <div className="ps-3 mb-5 mt-1">
              <a>SISMEDIA-RT</a>
              <br />
              <a>MONITOR i3</a>
            </div>
            <a>AVISO DE PRIVACIDAD</a>
            <p>A3E Ingenieros Especialistas en Energía Eléctrica S.A. DE C.V</p>
            <p>
              Calle Primavera no. 31, 3 de mayo, Emiliano Zapata, Morelos. C.P.
              62760.
            </p>
          </div>
        </Col>

        <Col>
          <div style={{}}>
            <strong>SERVICIOS</strong>
            <div className="ps-3 mb-5">
              {/* añadir mapeo de servicios */}

              {servicesList.map((service, index) => (
                <div key={index} className="mt-1">
                  <a>{service.title} </a>
                </div>
              ))}
            </div>
            <p style={{textAlign:'center', fontWeight:'bold', fontStyle:'italic'}}>
              Logramos contigo Sistemas Eléctricos seguros, confiable y
              eficientes
            </p>
          </div>
        </Col>

        <Col>
          <div style={{}}>
            <strong>CONTACTO</strong>
            <br />
            <a
              href={"/contact/recruitment"}
              target="_blank"
              className="carousel-btn btn"
              style={{
                backgroundColor: "white",
                color: "#00743B",
                padding: "0.8% 4% 0.8% 4%",
                borderRadius: "0px 20px 20px 20px",
                fontWeight: "bold",
              }}
            >
              Trabaja con nosotros
            </a>
            {/* logo */}
            <div className="d-flex justify-content-center mt-1">
              <img src={logo} height={100} />
            </div>
            {/* icons */}
            <div className="p-2 d-flex mt-5 justify-content-center">
              <MdWhatsapp
                className="p-1 me-3"
                style={{
                  backgroundColor: "white",
                  color: "#00743b",
                  borderRadius: "50%",
                  fontSize: "35px",
                }}
              />
              <MdWhatsapp
                className="p-1 me-3"
                style={{
                  backgroundColor: "white",
                  color: "#00743b",
                  borderRadius: "50%",
                  fontSize: "35px",
                }}
              />
              <MdWhatsapp
                className="p-1 "
                style={{
                  backgroundColor: "white",
                  color: "#00743b",
                  borderRadius: "50%",
                  fontSize: "35px",
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
