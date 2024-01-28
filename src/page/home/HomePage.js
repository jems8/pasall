import React from "react";

import { useSelector } from "react-redux";

import { Card, CardContent, Typography } from "@mui/material";
import  Categories  from "../../component/category/Categories";
import Carousel from "../../component/Carousal";

const HomePage = () => {
  const { products } = useSelector((state) => state.products);
  const displayProduct = products.slice(0, 6);

  //   const latestProducts = useSelector((state) => state.products.products);
  // console.timeLog("this is the latest ",latestProducts)

  return (
    <>
    <Carousel/>
    <Categories/>
      <card
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
      </card>
      {/* <Card>
        <h2 style={{ marginLeft: "50rem", fontSize: "2rem" }}>
          Latest Products
        </h2>
        <box style={{ display: "flex", flexWrap: "wrap", margin: "2rem" }}>
          {displayProduct.map((indv) => (
            <div
              key={indv.id}
              style={{
                flex: "33.33%",
                boxSizing: "border-box",
                padding: "30px",
              }}
            >
              <img
                src={indv.image}
                alt={indv.title}
                style={{ maxWidth: "50px" }}
              />
              <p>{indv.title}</p>
              <p>{indv.description}</p>
              <p>{indv.category}</p>
              <p>Price: ${indv.price}</p>
            </div>
          ))}
        </box>
      </Card> */}
    </>
  );
};

export default HomePage;
