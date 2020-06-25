import React from "react";

import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../assets/pictures/FSad1.jpg";
import pic2 from "../../assets/pictures/JG21ad1.jpg";
import pic3 from "../../assets/pictures/Pixel8ad32.jpg";
import pic4 from "../../assets/pictures/PPad1.jpg";

const carousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={pic1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic2} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic3} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic4} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;
