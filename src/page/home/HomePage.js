import React from "react";

import { useSelector } from "react-redux";

import Typography  from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"

import  Categories  from "../../component/category/Categories";
import ProductCategories from "../../component/category/ProductCategories";

const HomePage = () => {
  const { products } = useSelector((state) => state.products);
  const displayProduct = products.slice(0, 6);


  return (
    <>
    <Categories/>
    <ProductCategories/>
      <Card
        style={{
          marginTop: "7rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            style={{ fontSize: "10rem", margin: "5rem" }}
          >
            Buy Your Product
          </Typography>
        </CardContent>
        <img
          src="pasall.jpg"
          alt="pasall"
          style={{ maxWidth: "40%", marginLeft: "5px", marginRight: "8rem" }}
        />
      </Card>
    </>
  );
};

export default HomePage;
