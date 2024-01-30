import React, { useState } from "react";
import  {Link}  from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { style } from "./styles";

const products = [
    { name: "Mart", imageSrc: "martimg.png" },
    { name: "Beauty", imageSrc: "beautyimg.png" },
    { name: "Home & Decor", imageSrc: "homeimg.png" },
    { name: "Proudly Nepali", imageSrc: "proudlynepaliimg.png" },
    { name: "Fashion", imageSrc: "fashionimg.png" },
    { name: "New on Daraz", imageSrc: "newondarazimg.png" },
    { name: "Add to Card", imageSrc: "addtocardimg.gif" },
    { name: "Everyday Low Price", imageSrc: "everydaylowpriceimg.png" },
    { name: "Electronic Bazaar", imageSrc: "electronicbazzarimg.png" },
    { name: "Global Collection", imageSrc: "globalcollectionimg.png" },
  ];

const Navigation = () => {

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const isProductHovered = (product) => {
    return hoveredProduct === product;
  };

  return (
    <Box style={style.navigationMainBox}>
      {products.map((product) => (
        <ProductBox
          key={product.name}
          product={product.name}
          imageSrc={product.imageSrc}
          isHovered={isProductHovered(product.name)}
          onMouseEnter={() => handleMouseEnter(product.name)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </Box>
  );
};

const ProductBox = ({
  product,
  imageSrc,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Box
      style={style.navigationProductBox}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
       <Link to="/listproductpage" style={{...style.navigationLink, color: isHovered ? "red" : "inherit",}}>
        <img src={imageSrc} alt={product} style={style.navigationImage} />
        <Typography style={style.navigationTypography}>
          {product}
        </Typography>
      </Link>
    </Box>
  );
};
export default Navigation;
