import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ images }) => {
  console.log(typeof images.length);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const toShow2 = {
    slidesToShow: 2,
  };

  const toShow1 = {
    slidesToShow: 1,
  };

  if (images.length === 0) return <></>;

  if (images.length === 1) {
    return (
      <>
        <Slider {...toShow1}>
          {images.map((image, index) => (
            <div key={index} className="p-4">
              <img
                src={image.image}
                alt={`Slide ${index}`}
                style={{ width: "25%" }}
              />
            </div>
          ))}
        </Slider>
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <Slider {...toShow2}>
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
      </>
    );
  }

  return (
    <>
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
    </>
  );
};

export default SliderComponent;
