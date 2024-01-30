import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import { productCategories } from "./styles";

const products = [
  { name: "Health Accessories", imageSrc: "healthaccoriesimg.png" },
  { name: "Nail Polish Remover", imageSrc: "nailpolishremoverimg.jpg" },
  { name: "Bomber Jackets", imageSrc: "bomberjacketimg.jpg" },
  { name: "Sneakers", imageSrc: "sneakersimg.jpg" },
  { name: "Wireless Earbuds", imageSrc: "wirelessearpordsimg.jpg" },
  { name: "Face Masks", imageSrc: "facemasksimg.jpg" },
  {
    name: "Graters, Peelers & Slicers",
    imageSrc: "graterspeelersslicersimg.jpg",
  },
  { name: "Herbs & Splices", imageSrc: "herbsspicesimg.jpg" },
  { name: "Cups, Mugs & Saucers", imageSrc: "cupsmugssaucersimg.jpg" },
  { name: "Bath Mats", imageSrc: "bathmatsimg.jpg" },
  { name: "Note Books & Pads", imageSrc: "notebookspadsimg.jpg" },
  { name: "Bath Towels", imageSrc: "bathtowelsimg.jpg" },
  { name: "Humidifiers", imageSrc: "humidifiersimg.jpg" },
  { name: "Washer & Dryer Parts", imageSrc: "washer&dryerpartsimg.jpg" },
  { name: "Self Help", imageSrc: "selfhelpimg.jpg" },
  { name: "Smartwatches", imageSrc: "smartwatchesimg.jpg" },
];

const ProductCategories = () => {
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
    <Grid container spacing={0} style={productCategories.gridContainer}>
      <Grid item xs={12}>
        <Typography style={productCategories.gridItemTypology}>
          Category
        </Typography>
      </Grid>

      <Box style={productCategories.gridContainerBox1}>
        {products.slice(0, 8).map((product) => (
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

      <Box style={productCategories.gridContainerBox2}>
        {products.slice(8).map((product) => (
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
    </Grid>
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
    ...productCategories.productBoxCard,
    backgroundColor: isHovered ? "#f0f0f0" : "white",
  };
  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={cardStyle}
    >
      <Link
        to="/listproductpage"
        style={{...productCategories.productBoxLink, color: isHovered ? "red" : "inherit"}}
      >
        <img src={imageSrc} style={productCategories.productBoxImage} />
        <Typography style={productCategories.productBoxTypology}>
          {product}
        </Typography>
      </Link>
    </Card>
  );
};
export default ProductCategories;
