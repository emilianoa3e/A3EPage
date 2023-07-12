import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../utils/getServices";
import { Container} from "react-bootstrap";
import Banner from "../components/shared/Banner";
import Loader from "../components/shared/Loader";
import imagen from "../assets/img/banner1.jpg";
import SummaryButton from "../components/New-Service/SummaryButton";
import Summary from "../components/New-Service/Summary";
import Title from "../components/New-Service/Title";
import Content from "../components/New-Service/Content";

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
    <>
      {service && (
        <Container className="m-0 pt-0 p-0 service" fluid>
          <Banner title={service.title} from={"SERVICIOS"} />
          {/* Title */}
          <Title title={service.title} subtitle={service.subtitle}/>
          {/* resume */}
          <SummaryButton service={true} />
          <Summary
            image={imagen}
            see={see}
            changeState={changeState}
            data={service.summary}
          />
          {/* Service Content */}
          {see && (
            <Content content={service.content}/>
          )}
        </Container>
      )}
    </>
  );
}

export default Service;
