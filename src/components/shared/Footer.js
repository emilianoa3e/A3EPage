import React from "react";
import { MdWhatsapp, MdEmail, MdLocalPhone, MdFacebook } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAllContacts } from "../../utils/getContacts";
import { getServices } from "../../utils/getServices";
import logo from "../../assets/img/Logo_Blanco.png";
import "../../assets/css/components/Footer.css";
import Colors from "../../utils/Colors";
function Footer() {
  const [servicesList, setServiceList] = useState([]);
  const [contactsList, setContactsList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const services = await getServices();
        setServiceList(services.services);
        const contacts = await getAllContacts();
        setContactsList(contacts.contacts);
      } catch (error) {
        console.log("Error getting services-footer");
      }
    };
    getData();
  }, []);
console.log(contactsList)
  return (
    <Container fluid className="footer" style={{ cursor: "default" }}>
      <Row className="p-5">
        <Col>
          <div>
            <strong style={{ cursor: "default" }}>Sobre A3E INGENIEROS</strong>
            <div className="ps-3 mb-5 mt-1">
              <a
                className="btn text-start"
                href="https://a3e-sismedia.mx/"
                target="_blank"
              >
                SISMEDIA-RT
              </a>
              <br />
              <a
                style={{
                  fontStyle: "italic",
                  color: "#EAEBEB",
                  opacity: "50%",
                }}
              >
                MONITOR i3
              </a>
            </div>
            <a target="_blank" href="https://htmlcolorcodes.com/es/">
              AVISO DE PRIVACIDAD
            </a>

            <p className="mt-3">
              A3E Ingenieros Especialistas en Energía Eléctrica S.A. DE C.V
            </p>
            <p>
              Calle Primavera no. 31, 3 de mayo, Emiliano Zapata, Morelos. C.P.
              62760.
            </p>
          </div>
        </Col>

        <Col>
          <div>
            <strong style={{ cursor: "default" }}>SERVICIOS</strong>
            <div className="ps-3 mb-5">
              {/* añadir mapeo de servicios */}
              {!servicesList || servicesList.length !== 0 ? (
                <>
                  {servicesList.map((service, index) => (
                    <div key={index} className="mt-1">
                      <a
                        className="btn text-start"
                        href={`/service/${service._id}`}
                      >
                        {service.title}{" "}
                      </a>
                    </div>
                  ))}
                </>
              ) : (
                <p>No se encontraron registros</p>
              )}
            </div>
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
            <div className="p-2 d-flex mt-5 justify-content-center icons">
              {contactsList.map((contact) => (
                <div key={contact._id}>
                  {contact.type === "whatsapp" ? (
                    <MdWhatsapp size={32} color={Colors.PalleteWhite} />
                  ) : contact.type === "email" ? (
                    <MdEmail size={35} color={Colors.PalleteWhite} />
                  ) : contact.type === "phone" ? (
                    <MdLocalPhone size={35} color={Colors.PalleteWhite} />
                  ) : contact.type === "facebook" ? (
                    <MdFacebook size={35} color={Colors.PalleteWhite} />
                  ) : contact.type === "linkedin" ? (
                    <BsLinkedin size={30} color={Colors.PalleteWhite} />
                  ) : null}
                </div>
              ))}              
            </div>
          </div>
        </Col>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontStyle: "italic",
            bottom: 0,
          }}
        >
          Logramos contigo Sistemas Eléctricos seguros, confiable y eficientes
        </p>
      </Row>
    </Container>
  );
}

export default Footer;
