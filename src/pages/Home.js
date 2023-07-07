import React from "react";
import CustomCarousel from "../components/shared/CustomCarousel";
import { useEffect, useState } from "react";
import { getBanners } from "../utils/getBanners";
import { getAllClients } from "../utils/getClients";
import Loader from "../components/shared/Loader";
import InfoResume from "../components/home/InfoResume";
import Clients from "../components/home/Clients";
import AreasApplication from "../components/home/AreasApplication";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [bannersList, setBannersList] = useState([
    {
      _id: "",
      title: "",
      description: "",
      image: "",
      link: "",
      status: false,
    },
  ]);
  const [clientsList, setClientsList] = useState([
    {
      _id: "",
      name: "",
      image: "",
    },
  ]);

  const getData = async () => {
    setIsLoading(true);
    const banners = await getBanners();
    const clients = await getAllClients();
    setBannersList(banners.banners);
    setClientsList(clients.clients);
    setIsLoading(false);
  };

  // const getData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const bannersPromise = getBanners();
  //     const clientsPromise = getAllClients();

  //     const [bannersResponse, clientsResponse] = await Promise.all([
  //       bannersPromise,
  //       clientsPromise,
  //     ]);

  //     if (bannersResponse.success) {
  //       setBannersList(bannersResponse.banners);
  //     }

  //     if (clientsResponse.success) {
  //       setClientsList(clientsResponse.clients);
  //     }
  //   } catch (error) {
  //     console.error("Error en alguna de las peticiones:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    getData();
  }, []);

  const filteredBannersList = bannersList.filter(
    (banner) => banner.status === false
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <CustomCarousel
        msg={"HOME"}
        indicators={true}
        list={filteredBannersList}
        controls={false}
      />
      <InfoResume />
      <AreasApplication />
      <Clients clientsList={clientsList} />
    </>
  );
}

export default Home;
