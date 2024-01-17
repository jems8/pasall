import React, { useState } from "react";
import { MenuList } from "../../constants/MenuConstant";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useNavigate } from "react-router-dom";

// const products = {
//   Clothing: ["Makeup Kit", "Skincare Products", "Fragrances"],
//   'Lifestyle': ['Home Fitness Equipment', 'Outdoor Gear', 'Books'],

// }

//   // Lifestyle: ['Home Fitness Equipment', 'Outdoor Gear', 'Books'],
//   // 'Proudly Nepali': ['Handicrafts', 'Local Art', 'Traditional Clothing'],
//   // Fashion: ['Clothing', 'Shoes', 'Accessories'],
//   // 'New on Daraz': ['Latest Gadgets', 'Innovative Products', 'Tech Accessories'],
//   // 'Free Delivery': ['Selected Items with Free Delivery'],
//   // 'Everyday Low Price': ['Budget-Friendly Products', 'Discounted Items'],
//   // 'Electronic Bazaar': ['Mobile Phones', 'Laptops', 'Camera Accessories'],
//   // 'Global Collection': ['International Electronics', 'Fashion Brands', 'Imported Goods'],

export default function CategoryDrawer() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isSubCategoryHovered, setIsSubCategoryHovered] = useState(false);
  const [isProductCardHovered, setIsProductCardHovered] = useState(false);

  const handleCategoryMouseEnter = (category) => {
    setSelectedCategory(category);
    setIsCategoryHovered(true);
  };

  const handleCategoryMouseLeave = () => {
    setSelectedCategory(null);
    setIsCategoryHovered(false);
  };

  const handleSubCategoryHover = (subcategory) => {
    setSelectedSubCategory(subcategory);
    setIsSubCategoryHovered(true);
    setIsProductCardHovered(false);
  };

  const handleSubCategoryMouseLeave = () => {
    setSelectedSubCategory(null);
    setIsSubCategoryHovered(false);
  };

  const handleSubCategoryClick = (subcategory) => {
    navigate(`/ListProductsPage/${subcategory}`);
  };

  const handleProductClick = (product) => {
    navigate(`/ListProductsPage/${product}`);
  };

  return (
    <Grid container spacing={12}>
      <Grid item xs={3}>
        <Card
          style={{
            height: "20rem",
            width: "15rem",
            borderRadius: "1rem",
            marginTop: "1rem",
            paddingBottom: "5rem",
            marginLeft: "25rem",
            cursor: "pointer",
          }}
        >
          <List>
            {MenuList.map((category, index) => (
              <ListItem
                key={index}
                onMouseEnter={() => handleCategoryMouseEnter(category)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background:
                    selectedCategory === category &&
                    (isCategoryHovered ? "#e0e0e0" : "white"),
                }}
                // onMouseLeave={() => handleCategoryMouseLeave()}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",

                    // width: "80%",
                    color: selectedCategory === category ? "red" : "inherit",
                  }}
                >
                  {category.name}
                </Typography>
                {selectedCategory === category && (
                  <ChevronRightIcon
                    style={{
                      fontSize: "20px",
                      color: selectedCategory === category ? "red" : "inherit",
                    }}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
      {!!isCategoryHovered && (
        <Grid
          onMouseLeave={() => {
            handleCategoryMouseLeave();
            handleSubCategoryMouseLeave();
          }}
          item
          xs={9}
          style={{ display: "flex" }}
        >
          {!!selectedCategory && (
            <Card
              style={{
                height: "24rem",
                width: "15rem",
                borderRadius: "1rem",
                marginTop: "1rem",
                paddingBottom: "1rem",
                marginLeft: "10rem",
                cursor: "pointer",
              }}
              // onMouseEnter={handleProductCardHover}
              // onMouseLeave={handleProductCardMouseLeave}
            >
              <List>
                {Object.keys(selectedCategory.subcategories).map(
                  (subcategoryKey, index) => (
                    <ListItem
                      onClick={() => handleSubCategoryClick(subcategoryKey)}
                      key={index}
                      onMouseEnter={() =>
                        handleSubCategoryHover(subcategoryKey)
                      }
                      // onMouseLeave={handleSubCategoryMouseLeave}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        background:
                          selectedSubCategory === subcategoryKey &&
                          (isSubCategoryHovered ? "#e0e0e0" : "white"),
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "12px",
                          width: "100%",
                          color:
                            selectedSubCategory === subcategoryKey
                              ? "red"
                              : "inherit",
                        }}
                      >
                        {subcategoryKey}
                      </Typography>
                      {selectedSubCategory === subcategoryKey && (
                        <ChevronRightIcon
                          style={{
                            fontSize: "20px",
                            color:
                              selectedSubCategory === subcategoryKey
                                ? "red"
                                : "inherit",
                          }}
                        />
                      )}
                    </ListItem>
                  )
                )}
              </List>
            </Card>
          )}
          {!!isSubCategoryHovered && (
            <Card
              // onMouseLeave={handleProductCardMouseLeave}
              style={{
                height: "23rem",
                width: "35rem",
                borderRadius: "1rem",
                marginTop: "1rem",
                padding: "1rem",
                marginLeft: "0rem",
                cursor: "pointer",
                display:'flex',
                flexWrap:'wrap',
                overflow:'auto',
                objectFit:'contain'
              }}
            >
                {selectedCategory.subcategories[selectedSubCategory].map(
                  (product, pIndex) => (
                    <ProductImageCard {...product} key={pIndex} />
                  )
                )}
            </Card>
          )}
        </Grid>
      )}
    </Grid>
  );
}

const ProductImageCard = (props) => {
  const { image, label } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column" ,alignItems: 'center'}}>
      <img src={image} style={{ height: "50px", width: "50px" ,borderRadius: '10rem',padding: '1rem 2rem 1rem 2rem'}} />
      <Typography style={{fontSize: '12px',textAlign: "center",padding: '0rem 1rem 1rem 1rem'}}>{label}</Typography>
    </div>
  );
}
