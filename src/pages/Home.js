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
  const [bannersList, setBannersList] = useState([]);
  const [clientsList, setClientsList] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const banners = await getBanners();
      const clients = await getAllClients();
      setBannersList(banners.banners);
      setClientsList(clients.clients);
    } catch (error) {
      console.log(error);
      setClientsList(null)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let filteredBannersList;
  try {
    filteredBannersList = bannersList.filter(
      (banner) => banner.status === false
    );
  } catch (error) {
    console.log("Error filtering banners");
  }

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
