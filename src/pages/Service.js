import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../utils/getServices";
import { Container, Image } from "react-bootstrap";
import "../assets/css/pages/Service.css";
import Banner from "../components/shared/Banner";
import Loader from "../components/shared/Loader";
import imagen from "../assets/img/banner1.jpg";
import { MdArrowCircleDown } from "react-icons/md";

function Service() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [service, setService] = useState({
    _id: "",
    title: "",
    subtitle: "",
    summary: "",
    content: "",
  });

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getService(id);
      setService(data.service);
      setIsLoading(false);
    };
    getData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {service && (
        <Container className="m-0 pt-0 p-0 service" fluid>
          <Banner title={service.title} from={"SERVICIOS"} />
          {/* Title */}
          <div className="p-2 title">
            <h1
              className="text-start ms-4 mt-5"
              style={{ color: "#00743B", fontWeight: "bold" }}
            >
              {service.title}
            </h1>
            <h3 className="text-center mt-2 mb-4">{service.subtitle}</h3>
          </div>
          {/* resume */}
          <div className="button d-flex justify-content-center ">
            <a
              href="https://www.google.com"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
              className="mt-2 pe-2"
            >
              Ver <strong className="pe-2">PDF</strong>
              <MdArrowCircleDown style={{ fontSize: "35px" }} />
            </a>
          </div>
          <div className="img-resume">
            <Image
              src={imagen}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <div className="text-resume">
              <p>{service.summary}</p>
            </div>
          </div>
          {/* Service Content */}
          <div
            className="p-3 mt-5 service-content"
            dangerouslySetInnerHTML={{ __html: service.content }}
          ></div>
        </Container>
      )}
    </>
  );
}

export default Service;
