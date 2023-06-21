import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../utils/getServices";
import { Container } from "react-bootstrap";
import "../assets/css/pages/Service.css";
function Service() {
  const { id } = useParams();
  const [service, setService] = useState({
    _id: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getService(id);
      setService(data.service.content);
    };
    getData();
  }, [id]);

  return (
    <>
      {service && (
        <Container
          dangerouslySetInnerHTML={{ __html: service }}
          className="mt-1 p-5 cont"
          fluid
        ></Container>
      )}
    </>
  );
}

export default Service;
