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
        >
          {!!selectedCategory && (
            <Card
              style={styles.subCategoryCard}
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
                      {selectedSubCategory === subcategoryKey && (
                        <ChevronRightIcon
                          style={{
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
              style={styles.productsCard}
            >
              {selectedCategory?.subcategories?.[selectedSubCategory].map(
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
    <div>
      <img
        src={image}
        style={styles.imageControl}
      />
      <Typography
        style={styles.imageTypography}
      >
        {label}
      </Typography>
    </div>
  );
};
