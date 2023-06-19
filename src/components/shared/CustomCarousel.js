import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getBanners } from '../../utils/getBanners';
import '../../assets/css/components/Carousel.css';

function CustomCarousel() {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBanners();
      setMediaList(data.banners);
    };
    getData();
  }, []);

  if (mediaList.length === 0) {
    return <div></div>;
  }

  const filteredMediaList = mediaList.filter((media) => media.status === true);

  return (
    <Carousel style={{ margin: 0, padding: 0 }}>
      {filteredMediaList.map((media) => (
        <Carousel.Item key={media._id}>
          <img
            className="d-block w-100"
            src={media.image}
            alt={media.title}
            height={'200px'}
          />
          <Carousel.Caption>
            <h3>{media.title}</h3>
            <p>{media.description}</p>
            <a href={media.link} target='_blank' className='btn btn-success'>Ver más</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
