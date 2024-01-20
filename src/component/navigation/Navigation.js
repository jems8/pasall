import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import  {Link}  from "react-router-dom";

import { style } from "./style";

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
    <Box
      style={style.navigationmainBox}
    >
      <ProductBox
        product="Mart"
        imageSrc="martimg.png"
        isHovered={isProductHovered("Mart")}
        onMouseEnter={() => handleMouseEnter("Mart")}
        onMouseLeave={handleMouseLeave}
      />

      <ProductBox
        product="Beauty"
        imageSrc="beautyimg.png"
        isHovered={isProductHovered("Beauty")}
        onMouseEnter={() => handleMouseEnter("Beauty")}
        onMouseLeave={handleMouseLeave}
      />

      <ProductBox
        product="Home & Decor"
        imageSrc="homeimg.png"
        isHovered={isProductHovered("Home & Decor")}
        onMouseEnter={() => handleMouseEnter("Home & Decor")}
        onMouseLeave={handleMouseLeave}
      />

      <ProductBox
        product="Proudly Nepali"
        imageSrc="proudlynepaliimg.png"
        isHovered={isProductHovered("Proudly Nepali")}
        onMouseEnter={() => handleMouseEnter("Proudly Nepali")}
        onMouseLeave={handleMouseLeave}
      />

      <ProductBox
        product="Fashion"
        imageSrc="fashionimg.png"
        isHovered={isProductHovered("Fashion")}
        onMouseEnter={() => handleMouseEnter("Fashion")}
        onMouseLeave={handleMouseLeave}
      />

      <ProductBox
        product="New on Daraz"
        imageSrc="newondarazimg.png"
        isHovered={isProductHovered("New on Daraz")}
        onMouseEnter={() => handleMouseEnter("New on Daraz")}
        onMouseLeave={handleMouseLeave}
      />

        <ProductBox
          product=" Add to Card"
          imageSrc="addtocardimg.gif"
          isHovered={isProductHovered("Add to Card")}
          onMouseEnter={() => handleMouseEnter("Add to Card")}
          onMouseLeave={handleMouseLeave}
        />

      <ProductBox
        product="Everyday Low Price"
        imageSrc="everydaylowpriceimg.png"
        isHovered={isProductHovered("Everyday Low Price")}
        onMouseEnter={() => handleMouseEnter("Everyday Low Price")}
        onMouseLeave={handleMouseLeave}
      />

      <ProductBox
        product="Electronic Bazaar"
        imageSrc="electronicbazzarimg.png"
        isHovered={isProductHovered("Electronic Bazaar")}
        onMouseEnter={() => handleMouseEnter("Electronic Bazaar")}
        onMouseLeave={handleMouseLeave}
      />

      <ProductBox
        product=" Global Collection"
        imageSrc="globalcollectionimg.png"
        isHovered={isProductHovered("Global Collection")}
        onMouseEnter={() => handleMouseEnter("Global Collection")}
        onMouseLeave={handleMouseLeave}
      />
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
