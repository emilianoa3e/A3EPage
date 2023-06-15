import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar as NavbarBt
} from "react-bootstrap";
import { MdAssignmentTurnedIn, MdContacts, MdHome, MdLabel, MdPeople } from "react-icons/md";
import logo from "../../assets/img/Logo_Blanco.png";
import "../../assets/css/components/Navbar.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { getServices } from "../../utils/getServices";



function CustomNavbar() {
  const [servicesList, setServiceList] = useState([
    {
      _id: '',
      title: ''
    },
  ])

  useEffect(() => {
    const getData = async () => {
      const data = await getServices();
      setServiceList(data.services)
    }
    getData();
  }, [])

  const navigate = useNavigate();

  return (
    <NavbarBt variant="dark" className="custom-navbar" expand="lg" sticky="top">
      <Container>
        <NavbarBt.Brand href="/" >
          <img src={logo} alt="Logo" width={110} />
        </NavbarBt.Brand>
        <NavbarBt.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBt.Collapse id="basic-navbar-nav " className="justify-content-center">
          <Nav className="me-auto justify-content-center">
            <NavLink to="/" className="nav-link">
              <MdHome className="me-1" size={25} />
              <span className="nav-link-text">Inicio</span>
            </NavLink>
            <NavLink to="/us" className="nav-link">
              <MdPeople className="me-1" size={25} />
              <span className="nav-link-text">Nosotros</span>
            </NavLink>
            <NavDropdown title={<><MdLabel className="me-1" size={25} /> Servicios</>} id="nav-dropdown">
              {/* Mapear */}
              {servicesList.map((service) => (
                  <DropdownItem key={service._id} onClick={()=>{navigate(`/service/${service._id}`);}}>
                      {service.title}
                      
                  </DropdownItem>
              ))}
            </NavDropdown>
            <NavLink to="/news" className="nav-link">
              <MdAssignmentTurnedIn className="me-1" size={25} />
              <span className="nav-link-text">Noticias</span>
            </NavLink>
            <NavLink to="/contacts" className="nav-link">
              <MdContacts className="me-1" size={25} />
              <span className="nav-link-text">Contactanos</span>
            </NavLink>
          </Nav>
        </NavbarBt.Collapse>
      </Container>
    </NavbarBt>
  )
}

export default CustomNavbar