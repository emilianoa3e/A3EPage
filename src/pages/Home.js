import React from "react";
import CustomCarousel from "../components/shared/CustomCarousel";
import { useEffect, useState } from "react";
import { getBanners } from "../utils/getBanners";
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
    <CustomCarousel
      msg={"HOME"}
      indicators={true}
      list={filteredMediaList}
      controls={false}
    />
  );
}

export default Home;
