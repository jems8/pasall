import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid
      style={{
        display: "flex",
        marginLeft: "17rem",
        width: "80rem",
        marginTop: "2rem",
      }}
    >
      <Box
        style={{
          margin: "2rem",
          width: "4rem",
          alignItem: "center",
          color: isHovered ? "red" : "inherit",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src="martimg.png" alt="Mart" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Mart
        </Typography>
      </Box>

      <Box style={{ margin: "2rem", width: "4rem" ,color: isHovered ? "red" : "inherit",}}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="beautyimg.png" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Beauty
        </Typography>
      </Box>

      <Box style={{ margin: "2rem", width: "4rem" ,color: isHovered ? "red" : "inherit",}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="homeimg.png" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Home & Decor
        </Typography>
      </Box>

      <Box style={{ margin: "2rem", width: "4rem",color: isHovered ? "red" : "inherit", }} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="proudlynepaliimg.png" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Proudly Nepali
        </Typography>
      </Box>

      <Box style={{ margin: "2rem", width: "4rem" ,color: isHovered ? "red" : "inherit",}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="fashionimg.png" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Fashion
        </Typography>
      </Box>

      <Box style={{ margin: "2rem", width: "4rem" ,color: isHovered ? "red" : "inherit",}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="newondarazimg.png" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          New on Daraz
        </Typography>
      </Box>

      <Box style={{ margin: "2rem", width: "4rem",color: isHovered ? "red" : "inherit", }} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="addtocardimg.gif" style={{ height: "6rem" }} />
        <Typography
          style={{ textAlign: "center", marginTop: "1rem", fontSize: "14px" }}
        >
          Add to Card
        </Typography>
      </Box>

      <Box style={{ margin: "2rem", width: "4rem",color: isHovered ? "red" : "inherit", }} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="everydaylowpriceimg.png" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Everyday Low Price
        </Typography>
      </Box>

      <Box style={{ margin: "2rem", width: "4rem" ,color: isHovered ? "red" : "inherit",}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="electronicbazzarimg.png" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Electronic Bazaar
        </Typography>
      </Box>

      <Box style={{ margin: "1rem", width: "4rem" ,color: isHovered ? "red" : "inherit",}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src="globalcollectionimg.png" style={{ height: "6rem" }} />
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Global Collection
        </Typography>
      </Box>
    </Grid>
  );
};

export default Navigation;
