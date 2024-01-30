import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styles } from "./styles";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const imageArr = [
    "hmcarousal1.jpg",
    "hmcarousal2.jpg",
    "hmcarousal3.jpg",
    "hmcarousal4.jpg",
    "hmcarousal5.jpg",
    "hmcarousal6.jpg",
  ];

  return (
    <Slider
    className="james khanal"
      {...settings}
      style={styles.carouselSlider}
    >
      {imageArr.map((indvImg) => (  
        <img
          src={`/carouselImages/${indvImg}`}
          alt="Image 1"
        />
      ))}
    </Slider>
  );
};

export default Carousel;
