import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { styles } from "./styles";

const products = [
  { name: "Mart", imageSrc: "navigationmart.png" },
  { name: "Beauty", imageSrc: "navigationbeauty.png" },
  { name: "Home & Living", imageSrc: "navigationhome.png" },
  { name: "Produdly Nepali", imageSrc: "navigationnepali.png" },
  { name: "Man`s Fashion", imageSrc: "navigationmenfashion.png" },
  { name: "Audio & Wearable", imageSrc: "navigationaudio.png" },
  {
    name: "Sales Ends in 2 Days",
    imageSrc: "navigationsale.gif",
  },
  { name: "Mobile & Tablets", imageSrc: "navigationmobile.png" },
  { name: "Women`s Fashioin", imageSrc: "navigationwomenfashion.png" },
  { name: "Global Collection", imageSrc: "navigationglobal.png" },
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
    <Box style={styles.mainBox}>
      {products.map((product) => (
        <ProductBox
          key={product.name}
          imageSrc={product.imageSrc}
          product={product.name}
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
  const cardStyle = {
    ...styles.productBoxFunctionCard,
    backgroundColor: isHovered ? "#f0f0f0" : "white",
  };
  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{...cardStyle }}
    >
      <Link
        to="/listproductpage"
        style={{...styles.productBoxLink, color: isHovered ? "red" : "inherit"}}
      >
        <img src={`/navigation/${imageSrc}`} style={styles.productBoxImage} />
        <Typography style={styles.productBoxTypography}>{product}</Typography>
      </Link>
    </Card>
  );
};

export default Navigation;
