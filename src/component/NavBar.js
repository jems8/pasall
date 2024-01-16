import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Button, Link } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(5),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: "1%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#f85606" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              src="daraz.png"
              alt="Daraz Logo"
              style={{ marginRight: "10px",width: '120px',height: '48px' }}
            />
          </Typography>
          <Search >
            <StyledInputBase
            style={{backgroundColor:'white',width: '300%',borderRadius: '15px'}}
              placeholder ="Search… in daraz"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper style={{ width: '560%', color: 'black', marginTop: '-1rem' }} >
              <SearchIcon />
            </SearchIconWrapper>
          </Search>

          <Button
            style={{ marginLeft: "50rem", backgroundColor: "#f85606" ,color: 'white'}}
            component={Link}
            href="/LoginForm"
          >
            Login
          </Button>
          <Button
            style={{ marginLeft: "2rem", backgroundColor: "#f85606",color: 'white' }}
            component={Link}
            href="/SignUp"
          >
            SignUp
          </Button>

          <FormControl style={{marginLeft: '2rem'}}>
            <InputLabel id="demo-simple-select-label" style={{color: 'white'}}>EN</InputLabel>
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
    </Box>
  );
}
