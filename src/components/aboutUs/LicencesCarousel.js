import React from 'react'
import { Carousel } from 'react-bootstrap'
import image from '../../assets/img/licence-test.png'
function LicencesCarousel() {
  return (
    <Carousel slide={false} controls={false}> 
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image}
            alt={"Not Found"}
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
    </Carousel>
  )
}

export default LicencesCarousel