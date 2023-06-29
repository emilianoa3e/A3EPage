import React from "react";
import CustomCarousel from "../components/shared/CustomCarousel";
import { useEffect, useState } from "react";
import { getBanners } from "../utils/getBanners";
import InfoResume from "../components/home/InfoResume";
import Clients from "../components/clients/Clients";
import AreasApplication from "../components/home/AreasApplication";

function Home() {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBanners();
      setMediaList(data.banners);
    };
    getData();
  }, []);
  const filteredMediaList = mediaList.filter((media) => media.status === true);

  return (
    <>
      <CustomCarousel
        msg={"HOME"}
        indicators={true}
        list={filteredMediaList}
        controls={false}
      />
      <InfoResume />
      <AreasApplication />
      <Clients />
    </>
  );
}

export default Home;
