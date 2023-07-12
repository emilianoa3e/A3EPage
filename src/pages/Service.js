import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../utils/getServices";
import { Container } from "react-bootstrap";
import imagen from "../assets/img/banner1.jpg";
import Banner from "../components/shared/Banner";
import Loader from "../components/shared/Loader";
import Summary from "../components/New-Service/Summary";
import '../assets/css/components/EditorContent.css' 

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
  const [see, setSee] = useState(false);
  const changeState = () => {
    setSee(!see);
  };

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
    <Container className="m-0 p-0 pt-0" fluid>
      <Banner title={service.title} from={"SERVICIOS"} />
      {/* Title */}
      <div className="p-2">
        <h1
          className="text-start ms-4 mt-5"
          style={{ color: "#00743B", fontWeight: "bold" }}
        >
          {service.title}
        </h1>
        <h3 style={{ color: "#00743B"}} className="text-center mt-2 mb-4">{service.subtitle}</h3>
      </div>
      <Summary
        service={true}
        image={imagen}
        see={see}
        changeState={changeState}
        data={service.summary}
      />
      {/* Content */}
      {see && (
        <div
          className="p-3 pe-5 ps-5 mt-5 content"
          dangerouslySetInnerHTML={{ __html: service.content }}
        ></div>
      )}
    </Container>
  );
}

export default Service;
