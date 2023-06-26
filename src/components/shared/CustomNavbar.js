import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar as NavbarBt,
} from "react-bootstrap";
import { MdHome } from "react-icons/md";
import logo from "../../assets/img/Logo_Blanco.png";
import "../../assets/css/components/Navbar.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { getServices } from "../../utils/getServices";
import NotRegisters from "./NotRegisters";

function CustomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

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
        <NavbarBt.Brand href="/home">
          <img src={logo} alt="Logo" width={110} />
        </NavbarBt.Brand>
        <NavbarBt.Toggle
          aria-controls="basic-navbar-nav"
          className="m-2 p-2 "
        />
        <NavbarBt.Collapse
          id="basic-navbar-nav "
          className=" p-0 m-0 "
          style={{ width: "100%" }}
        >
          <Nav className="me-auto justify-content-center">
            <NavLink to="/home" className="nav-link" id="home">
              <MdHome className="me-1" size={25} />
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
              {servicesList.length !== 0 ? (
                <>
                  {servicesList.map((service) => (
                    <>
                      <DropdownItem
                        key={service._id}
                        onClick={() => {
                          navigate(`/service/${service._id}`);
                        }}
                      >
                        {service.title}
                      </DropdownItem>
                    </>
                  ))}
                </>
              ) : (
                <DropdownItem>
                  <NotRegisters icon={false} text={true} />
                </DropdownItem>
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
              <DropdownItem onClick={() => navigate("/contact")}>
                Recursos Humanos
              </DropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarBt.Collapse>
      </Container>
    </NavbarBt>
  );
}

export default CustomNavbar;
