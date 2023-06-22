import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../utils/getServices";
import { Container } from "react-bootstrap";
import "../assets/css/pages/Service.css";
import CustomCarousel from "../components/shared/CustomCarousel";

function Service() {
  const { id } = useParams();
  const [service, setService] = useState([
    {
      _id:'',
      title:'',
      content:''
    }
  ]);

  useEffect(() => {
    const getData = async () => {
      const data = await getService(id);
      setService(data.service);
    };
    getData();
  }, [id]);

  console.log(service);

  return (
    <>
      {service && (
        <Container className="m-0 pt-0 p-0 " fluid>
          <CustomCarousel
            list={false}
            indicators={false}
            msg={service.title}
            msgLost={false}
            fluid
            className="m-o p-0"
          />
          <div className="p-2">
            <h1
              className="text-start"
              style={{ color: "#00743B", fontWeight: "bold" }}
            >
              {service.title}
            </h1>
            <h3 className="text-center">Aquí va a ir un subtitulo</h3>
          </div>
          <div
            className="p-3 service-content"
            dangerouslySetInnerHTML={{ __html: service.content }}
          ></div>
        </Container>
      )}
    </>
  );
}

export default Service;
