import React, {lazy} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const NotReGisters = lazy(()=> import('../shared/NotRegisters'));


const SliderComponent = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  if (images.length === 0) return <NotReGisters icon={true} text={true}/>;

  if (images.length === 1) {
    return (
      <>
        {images.map((image, index) => (
          <div
            key={index}
            className="p-4 pt-0 col d-flex justify-content-center align-items-center"
          >
            <img
              src={image.image}
              alt={`Slide ${index}`}
              style={{ width: "20%" }}
            />
          </div>
        ))}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        {images.map((image, index) => (
          <div
            key={index}
            className="p-4 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
          >
            <img
              src={image.image}
              alt={`Slide ${index}`}
              style={{ width: "40%" }}
            />
          </div>
        ))}
      </>
    );
  }

  if (images.length === 3) {
    return (
      <>
        {images.map((image, index) => (
          <div
            key={index}
            className="p-4 col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center align-items-center"
          >
            <img
              src={image.image}
              alt={`Slide ${index}`}
              style={{ width: "60%" }}
            />
          </div>
        ))}
      </>
    );
  }

  if (images.length === 4) {
    return (
      <>
        {images.map((image, index) => (
          <div
            key={index}
            className="p-4 col-lg-3 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center"
          >
            <img
              src={image.image}
              alt={`Slide ${index}`}
              style={{ width: "80%" }}
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="p-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img
              src={image.image}
              alt={`Slide ${index}`}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
