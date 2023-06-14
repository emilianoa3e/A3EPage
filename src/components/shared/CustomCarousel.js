import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { getBanners } from '../../utils/getBanners';
function CustomCarousel() {
  const [mediaList, setMediaList] = useState([
    {
      _id: "",
      title: "",
      description: "",
      image: "",
      link: "",
      status: ""
    },
  ])

  useEffect(() => {
    const getData = async () => {
      const data = await getBanners();
      setMediaList(data.banners)
    };
    getData();
  }, [])

  console.log(mediaList)

  return (

    <Carousel style={{margin:0, padding:0, top:0}}>
      {mediaList.map((media) => (
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
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

  )
}

export default CustomCarousel