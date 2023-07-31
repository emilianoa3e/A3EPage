import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar as NavbarBt,
  NavDropdown,
} from "react-bootstrap";
import { MdHome } from "react-icons/md";
import logo from "../../assets/img/logos/Logo_Blanco.png";
import "../../assets/css/components/Navbar.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { getServices } from "../../utils/getServices";
import {  showTimerAlert } from "../../plugins/alert";

function CustomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [servicesList, setServiceList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getServices();
        setServiceList(data.services);
      } catch (error) {
        console.log("error getting services");
      }
    };
    getData();
  }, []);

  const pathParts = location.pathname.split("/");
  const rutaExtraida = pathParts[1];

  const isActive = (id) => {
    return id === rutaExtraida;
  };

  return (
    <NavbarBt
      className="custom-navbar p-0"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container className="m-0 p-0 " fluid>
        <NavbarBt.Brand href="/home" className="ps-4">
          <img src={logo} alt="Logo" width={110} />
        </NavbarBt.Brand>
        <NavbarBt.Toggle
          aria-controls="basic-navbar-nav"
          className="m-2 p-2 "
        />
        <NavbarBt.Collapse id="basic-navbar-nav " className=" p-0 m-0 ">
          <Nav className="me-auto justify-content-center">
            <NavLink to="/home" className="nav-link" id="home">
              <MdHome className="me-1" size={22} />
              <span className="nav-link-text">INICIO</span>
            </NavLink>
            <NavLink to="/about" className="nav-link" id="about">
              <span className="nav-link-text">NOSOTROS</span>
            </NavLink>
            <NavDropdown
              title="SERVICIOS"
              id="service"
              className={`${isActive("service") ? "active" : ""}`}
            >
              {!servicesList || servicesList.length !== 0 ? (
                <>
                  {servicesList.map((service) => (
                    <DropdownItem
                      key={service._id}
                      onClick={() => {
                        navigate(`/service/${service._id}`);
                      }}
                    >
                      {service.title}
                    </DropdownItem>
                  ))}
                </>
              ) : (
                <DropdownItem>No se encontraron registros</DropdownItem>
              )}
            </NavDropdown>
            <NavLink to="/news" className="nav-link" id="news">
              <span className="nav-link-text">NOTICIAS</span>
            </NavLink>
            <NavDropdown
              title={"CONTACTO"}
              id="contact"
              className={`${isActive("contact") ? "active" : ""}`}
            >
              <DropdownItem onClick={() => navigate("/contact/sale")}>
                Ventas
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/contact/recruitment")}>
                Recursos Humanos
              </DropdownItem>
            </NavDropdown>
            <NavDropdown
              title={"INNOVACIÓN"}
              id="innovacion"
              className={`${isActive("innovacion") ? "active" : ""}`}
            >
              <DropdownItem
                onClick={() => window.open("https://a3e-sismedia.mx/", "_blank")}
              >
                SISMEDIA-RT
              </DropdownItem>
              <DropdownItem
                onClick={() =>
                  showTimerAlert(
                    "¡Proximamente!",
                    "Monitor i3 es una tecnología de innovación para monitoreo de medidores SISMEDIA-RT ❤️",
                    null, 5000, true
                  )
                }
                style={{fontStyle:'italic', color:'gray'}}
              >
                Monitor i3
              </DropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarBt.Collapse>
      </Container>
    </NavbarBt>
  );
}

export default CustomNavbar;
