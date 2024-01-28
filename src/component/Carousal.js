import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="hmcarousal1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="hmcarousal2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="hmcarousal3.jpg" alt="Image 3" />
      </div>
      <div>
        <img src="hmcarousal4.jpg" alt="Image 3" />
      </div>
      <div>
        <img src="hmcarousal4.jpg" alt="Image 3" />
      </div>
      <div>
        <img src="hmcarousal6.jpg" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default Carousel;