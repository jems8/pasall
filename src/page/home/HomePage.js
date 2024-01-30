import React from "react";

import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import Categories from "../../component/category/Categories";
import ProductCategories from "../../component/category/ProductCategories";
import Carousel from "../../component/carousal/Carousal";
import { styles } from "./style";

const HomePage = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <Box style={styles.homePageMainBox}>
        <Categories />
        <Box style={styles.carouselBox}>
          <Carousel />
        </Box>
      </Box>
      <ProductCategories />
    </>
  );
};

export default HomePage;
