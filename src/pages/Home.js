import React, {useEffect, useState} from "react";
import CustomCarousel from "../components/shared/CustomCarousel";
import {getBanners} from "../utils/getBanners";
import {getAllClients} from "../utils/getClients";

import InfoResume from "../components/home/InfoResume";
import Clients from "../components/home/Clients";
import AreasApplication from "../components/home/AreasApplication";
import Loader from "../components/shared/Loader";

function Home() {
  console.log('homw')
  const [isLoading, setIsLoading] = useState(false);
  const [bannersList, setBannersList] = useState([]);
  const [clientsList, setClientsList] = useState([]);



  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const banners = await getBanners();
        const clients = await getAllClients();
        setBannersList(banners.banners);
        setClientsList(clients.clients);
      } catch (error) {
        console.log(error);
        setBannersList(null);
        setClientsList(null);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    document.title = "A3E Inicio";
  }, []);

  let filteredBannersList = null;
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
