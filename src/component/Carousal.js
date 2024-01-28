import { Slider } from "@mui/base";
import React from "react";

const Carousal = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }

  return (
    <Slider {...settings}>
      <div>
        <img src="hmcaroudal1jpg" />
      </div>
      <div>
        <img src="hmcaroudal1jpg" />
      </div>
      <div>
        <img src="hmcaroudal1jpg" />
      </div>
      <div>
        <img src="hmcaroudal1jpg" />
      </div>
      <div>
        <img src="hmcaroudal1jpg" />
      </div>
      <div>
        <img src="hmcaroudal1jpg" />
      </div>
    </Slider>
  );
};

export default Carousal;
