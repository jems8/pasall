import React from "react";

import { useSelector } from "react-redux";

import Typography  from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"

import  Categories  from "../../component/category/Categories";
import CustomFooter from "../../component/footer/index";
import { styles } from "./style";


const HomePage = () => {  
  const { products } = useSelector((state) => state.products);
  const displayProduct = products.slice(0, 6);


  return (
    <>
    <Categories/>
      <Card
        style={styles.categoryCardStyles}
      >
        <CardContent>
          <Typography
            variant="h4"
            style={styles.cardContainTypography}
          >
            Buy Your Product
          </Typography>
        </CardContent>
        <img
          src="pasall.jpg"
          alt="pasall"
          style={styles.cardContainImage}
        />
      </Card>
      
     <CustomFooter/>
     </>
  );
};

export default HomePage;
