import React, {lazy, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {getServices} from "../../utils/getServices";
import {getAllContacts} from "../../utils/getContacts";
import ContactButton from "./ContactButton";

const Footer = lazy(() => import("./Footer"));
const UpButton = lazy(() => import("./UpButton"));
const CustomNavbar = lazy(() => import("./CustomNavbar"));

function Layout({ children }) {
    console.log(children)
  const [servicesList, setServiceList] = useState([]);
  const [contactsList, setContactsList] = useState([]);
  useEffect(() => {
    console.log("effect");
    const getData = async () => {
      try {
        const data = await getServices();
        const contacts = await getAllContacts();
        setServiceList(data.services);
        setContactsList(contacts.contacts);
      } catch (error) {
        console.log("error getting info");
      }
    };
    getData();
  }, []);

  return (
    <>
      <CustomNavbar servicesList={servicesList} />
      <Container fluid className="m-0 p-0">
        {children}
      </Container>
      <ContactButton contactsList={contactsList} />
      <UpButton />
      <Footer contactsList={contactsList} servicesList={servicesList} />
    </>
  );
}

export default Layout;
