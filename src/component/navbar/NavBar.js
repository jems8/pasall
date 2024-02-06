import * as React from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Button, Link } from "@mui/material";
import { styles } from "./styles";

const Search = styled("div")(({ theme }) => ({
...styles.search,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(5),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  ...styles.searchIconWrapper,
  padding: theme.spacing(0, 3),
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {

  return (
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolBar}>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              src="daraz.png"
              alt="Daraz Logo"
              style={styles.darazImage}
            />
          </Typography>
          <Search >
            <StyledInputBase
            style={styles.searchInputBased}
              placeholder ="Search… in daraz"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper style={styles.searchIcon} >
              <SearchIcon />
            </SearchIconWrapper>
          </Search>

          <Button
            style={styles.navbarLoginButton}
            component={Link}
            href="/LoginForm"
          >
            Login
          </Button>
          <Button
            style={styles.navbarSignupButton}
            component={Link}
            href="/SignupForm"
          >
            SignUp
          </Button>

          <FormControl >
            <InputLabel id="demo-simple-select-label" style={styles.formControlInput}>EN</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem >English</MenuItem>
              <MenuItem >Nepali</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
  );
}
