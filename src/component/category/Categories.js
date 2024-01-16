import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MenuList } from "../../constants/MenuConstant";

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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isSubCategoryHovered, setIsSubCategoryHovered] = useState(false);

  const handleCategoryMouseEnter = (category) => {
    setSelectedCategory(category);
    setIsCategoryHovered(true);
    setSelectedSubCategory(null);
  };

  const handleCategoryMouseLeave = () => {
    setSelectedCategory(null);
    setIsCategoryHovered(false);
  };

  const handleSubCategoryHover = (subcategory) => {
    console.log("thisisisis",subcategory)
    setSelectedSubCategory(subcategory);
    setIsSubCategoryHovered(true);
  };

  const handleSubCategoryMouseLeave = () => {
    setSelectedSubCategory(null);
    setIsSubCategoryHovered(false);
  };

  const handleItemHover = () => {
    setIsSubCategoryHovered(true);
  };

  console.log("selected categories",selectedCategory?.subcategories,selectedSubCategory)
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card
          style={{
            height: "20rem",
            width: "15rem",
            borderRadius: "1rem",
            marginTop: "1rem",
            paddingBottom: "5rem",
            marginLeft: "20rem",
            cursor: "pointer",
          }}
        >
          <List>
            {MenuList.map((category, index) => (
              <ListItem
                key={index}
                onMouseEnter={() => handleCategoryMouseEnter(category)}
                style={{
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
                    width: "100rem",
                    color: selectedCategory === category ? "red" : "inherit",
                  }}
                >
                  {category.name}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
      <Grid
        onMouseLeave={() => {
          handleCategoryMouseLeave();
          handleSubCategoryMouseLeave();
        }}
        item
        xs={6}
        style={{ display: "flex" }}
      >
        {selectedCategory && isCategoryHovered && (
          <Card
            style={{
              height: "24rem",
              width: "15rem",
              borderRadius: "1rem",
              marginTop: "1rem",
              paddingBottom: "1rem",
              marginLeft: "6rem",
              cursor: 'pointer',
            }}
          >
            <List>  
              {selectedCategory.subcategories.map((item, index) => (
                <ListItem
                  key={index}
                  onMouseEnter={() => handleSubCategoryHover(item)}
                  onMouseLeave={handleSubCategoryMouseLeave}
                  style={{
                    background:
                      selectedSubCategory === item &&
                      (isSubCategoryHovered ? "#e0e0e0" : "white"),
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      width: '100%',
                      color: selectedSubCategory === item ? "red" : "inherit",
                    }}
                  >
                    {typeof item === "object" ? Object.keys(item)[0] : item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Card>
        )}
        {selectedCategory && isCategoryHovered && selectedSubCategory && (
          <Card
            style={{
              height: "24rem",
              width: "30rem",
              borderRadius: "1rem",
              marginTop: "1rem",
              paddingBottom: "1rem",
              marginLeft: "0rem",
              cursor: "pointer"
            }}
          >
            <List>

              {/* {selectedCategory.subcategories
                .filter(
                  (item) =>
                    typeof item === "object" &&
                    Object.keys(item)[0] === selectedSubCategory
                )
                .map((subcategory, index) => (
                  <ListItem key={index}>
                    {subcategory[selectedSubCategory].map((product, pIndex) => (
                      <Typography
                        key={pIndex}
                        variant="body2"
                        sx={{
                          fontSize: "12px",
                          width: "100%",
                          color: selectedCategory === subcategory ? "red" : "inherit",
                        }}
                      >
                        {product}
                      </Typography>
                    ))}
                  </ListItem>
                ))} */}
          
            </List>
          </Card>
        )}
      </Grid>
    </Grid>
  );
}
