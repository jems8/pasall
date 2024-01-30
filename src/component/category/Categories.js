import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import { MenuList } from "../../constants/MenuConstant";
import { styles } from "./styles";

export default function CategoryDrawer() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isSubCategoryHovered, setIsSubCategoryHovered] = useState(false);

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
    <Grid container spacing={2}>
      <Grid item xs={3} position="relative">
        <Card sx={styles.categoryCard}>
          <List>
            {MenuList.map((category, index) => (
              <ListItem
                key={index}
                onMouseEnter={() => handleCategoryMouseEnter(category)}
                style={{
                  ...styles.listItemCategory,
                  background:
                    selectedCategory === category &&
                    (isCategoryHovered ? "#e0e0e0" : "white"),
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    ...styles.typographyCategory,
                    color: selectedCategory === category ? "red" : "inherit",
                  }}
                >
                  {category.name}
                </Typography>
                {selectedCategory === category && (
                  <ChevronRightIcon
                    style={{
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
          container
          sx={{ position: "absolute", zIndex: 1, left: "34rem" }}
        >
          {!!selectedCategory && (
            <Card style={styles.subCategoryCard}>
              <List>
                {Object.keys(selectedCategory.subcategories).map(
                  (subcategoryKey, index) => (
                    <ListItem
                      onClick={() => handleSubCategoryClick(subcategoryKey)}
                      key={index}
                      onMouseEnter={() =>
                        handleSubCategoryHover(subcategoryKey)
                      }
                      style={{
                        ...styles.listItemSubcategory,
                        background:
                          selectedSubCategory === subcategoryKey &&
                          (isSubCategoryHovered ? "#e0e0e0" : "white"),
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          ...styles.typographySubcategory,
                          color:
                            selectedSubCategory === subcategoryKey
                              ? "red"
                              : "inherit",
                        }}
                      >
                        {subcategoryKey}
                      </Typography>
                    </ListItem>
                  )
                )}
              </List>
            </Card>
          )}
          {!!isSubCategoryHovered && (
            <Card style={styles.productsCard}>
              {selectedCategory?.subcategories?.[selectedSubCategory].map(
                (product, pIndex) => (
                  <ProductImageCard
                    {...product}
                    key={pIndex}
                  />
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
  const {
    image,
    label,
  } = props;

  const [isProductHovered,setIsProductHovered] = useState(false);

  const handleProductHover=()=>{
    setIsProductHovered(prev=>!prev)
  }
  
  return (
    <div
      onMouseEnter={handleProductHover}
      onMouseLeave={handleProductHover}
      key={label}
    >
      <img src={image} style={styles.imageControl} />
      <Typography
        style={{
          ...styles.imageTypography,
          color: isProductHovered ? "red" : "inherit",
        }}
      >
        {label}
      </Typography>
    </div>
  );
};
