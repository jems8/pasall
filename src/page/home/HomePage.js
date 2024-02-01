import React from "react";

import Box from "@mui/material/Box";

import Categories from "../../component/category/Categories";

import ProductCategories from "../../component/category/ProductCategories";
import Carousel from "../../component/carousal/Carousal";
import { styles } from "./styles";
import Footer1 from "../../component/footer/Footer1";
import Footer2 from "../../component/footer/Footer2";
// import Navigation from "../../component/navigation/Navigation";

const HomePage = () => {
  return (
    <>
    {/* <Navigation/> */}
      <Box style={styles.homePageMainBox}>
        <Categories />
        <Box style={styles.carouselBox}>
          <Carousel />
        </Box>
      </Box>
      <ProductCategories />
      <Footer2 />
      <Footer1 />
    </>
  );
};

export default HomePage;
