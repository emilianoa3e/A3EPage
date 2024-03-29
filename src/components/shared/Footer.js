import React from "react";
import {MdEmail, MdFacebook, MdLocalPhone, MdWhatsapp} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import {Col, Container, Row} from "react-bootstrap";
import logo from "../../assets/img/logos/Logo_Blanco.png";
import "../../assets/css/components/Footer.css";
import Colors from "../../utils/Colors";
import {showTimerAlert} from "../../plugins/alert";

function Footer({contactsList, servicesList}) {

  const filteredContactsList =
    contactsList && contactsList.length > 0
      ? contactsList.filter((contact) => contact.destiny === "general")
      : [];

  let whatsapp = "https://wa.me/5217770000000";
  let phone = "tel:5217770000000";
  let email = "mailto:ventas@a3e.com.mx";
  let facebook;
  let linkedin;

  filteredContactsList.forEach((element) => {
    if (element.type === "whatsapp") {
      const cleanContact = element.contact.trim();
      whatsapp = `https://wa.me/${cleanContact}`;
    }
    if (element.type === "phone") {
      const cleanContact = element.contact.trim();
      phone = `tel:${cleanContact}`;
    }
    if (element.type === "facebook") {
      const cleanContact = element.contact.trim();
      facebook = `https://www.facebook.com/${cleanContact}`;
    }

    if (element.type === "email") {
      const cleanContact = element.contact.trim();
      email = `mailto:${cleanContact}`;
    }

    if (element.type === "linkedin") {
      const cleanContact = element.contact.trim();
      linkedin = `https://www.linkedin.com/in/${cleanContact}`;
    }
  });

  const openAlert = () => {
    showTimerAlert(
      "¡Proximamente!",
      "Monitor i3 es una tecnología de innovación para monitoreo de medidores SISMEDIA-RT ❤️",
      null,
      5000,
      true
    );
  };

  return (
    <Container fluid className="footer">
      <Row className="p-2 pt-5 pb-5">
        <Col>
          <div>
            <strong style={{ cursor: "default" }}>Sobre A3E INGENIEROS</strong>
            <div className="ps-2 mb-5 mt-1">
              <a
                className="btn text-start p-0"
                href="https://a3e-sismedia.mx/"
                target="_blank"
              >
                SISMEDIA-RT
              </a>
              <br />
              <a
                onClick={openAlert}
                className="btn text-start p-0"
                style={{
                  fontStyle: "italic",
                  color: "#EAEBEB",
                  opacity: "50%",
                }}
              >
                MONITOR i3
              </a>
            </div>
            <a
              target="_blank"
              href="https://res.cloudinary.com/a3e-media/image/upload/v1691689222/pdfs/proteccion_datos_ygxo2n.pdf"
              className="btn p-0"
            >
              Proteccion de Datos
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
            <div className="ps-2 mb-5">
              {/* añadir mapeo de servicios */}
              {!servicesList || servicesList.length !== 0 ? (
                <>
                  {servicesList.map((service, index) => (
                    <div key={index} className="mt-1">
                      <a
                        className="btn text-start p-0"
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
          <div>
            <strong>CONTACTO</strong>
            <br />
            <a
              href={"/contact/recruitment"}
              target="_blank"
              className="btn"
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
            <div className="d-flex mt-5 justify-content-center mt-1">
              <img src={logo} height={150} loading="lazy"/>
            </div>
            {/* icons */}
            <div className="p-2 d-flex mt-5 justify-content-center icons">
              {filteredContactsList.map((contact) => (
                <div key={contact._id}>
                  {contact.type === "whatsapp" ? (
                    <a target="_blank" href={whatsapp}>
                      <MdWhatsapp size={32} color={Colors.PalleteWhite} />
                    </a>
                  ) : contact.type === "email" ? (
                    <a target="_blank" href={email}>
                      <MdEmail size={35} color={Colors.PalleteWhite} />
                    </a>
                  ) : contact.type === "phone" ? (
                    <a target="_blank" href={phone}>
                      <MdLocalPhone size={35} color={Colors.PalleteWhite} />
                    </a>
                  ) : contact.type === "facebook" ? (
                    <a
                      target="_blank"
                      href={`https://www.facebook.com/${contact.contact}`}
                    >
                      <MdFacebook size={35} color={Colors.PalleteWhite} />
                    </a>
                  ) : contact.type === "linkedin" ? (
                    <a
                      target="_blank"
                      href={`https://www.linkedin.com/${contact.contact}`}
                    >
                      <BsLinkedin size={30} color={Colors.PalleteWhite} />
                    </a>
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
