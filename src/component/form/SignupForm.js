import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Box, Card } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FacebookIcon from "@mui/icons-material/Facebook";
import Checkbox from "@mui/material/Checkbox";

import Footer2 from "../footer/Footer2";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup - Name:", name, "Email:", email, "Password:", password);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // const numbers = Array.from({ length: 32 }, (_, index) => index + 1);

  // const currentYear = new Date().getFullYear();
  // const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  return (
    <>
      <Typography
        variant="h5"
        style={{ marginLeft: "10rem", marginTop: "4rem" }}
      >
        Create Your Daraz account
      </Typography>
      <form onSubmit={handleSubmit}>
        <Card style={{ display: "flex", width: "55rem", marginLeft: "10rem" }}>
          <Box style={{ padding: "1rem" }}>
            <Typography variant="h5" style={{ fontSize: "12px" }}>
              Phone Number
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Please enter your Phone Number"
              name="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%"}}
            />
            <Typography variant="h5" style={{ fontSize: "12px" }}>
              Verification Code from whatsapp
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Verification Code"
              name="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography variant="h5" style={{ fontSize: "12px" }}>
              Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Minimun 6 character with a number and a letter"
              name="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Box style={{ display: "flex", gap: "1rem" }}>
              <Box>
                <Typography style={{ fontSize: "12px" }}>Birthday</Typography>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  style={{ height: "3rem" }}
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="MM/DD/YYYY" />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
              <Box>
                <Typography variant="h5" style={{ fontSize: "12px" }}>
                  Gender
                </Typography>
                <FormControl style={{ width: "6rem", marginTop: "10px" }}>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem>Male</MenuItem>
                    <MenuItem>Female</MenuItem>
                    <MenuItem>Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box style={{ padding: "1rem" }}>
            <Typography variant="h5" style={{ fontSize: "12px" }}>
              Full Name
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter your first and last name"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "25rem" }}
            />
            <Box style={{ display: "flex" }}>
              <Checkbox {...label} defaultChecked />
              <Typography
                variant="h5"
                style={{ fontSize: "12px", marginTop: "12px" }}
              >
                I'd like to receive exclusive offers and promotions via SMS
              </Typography>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#f85606" }}
            >
              Sign Up
            </Button>
            <Typography
              variant="h5"
              style={{ fontSize: "12px", width: "20rem" }}
            >
              By clicking “SIGN UP”, I agree to Daraz's{" "}
              <Link
                to="/termsofuse"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Privacy Policy
              </Link>
            </Typography>
            <Typography
              variant="h5"
              style={{ fontSize: "12px", marginTop: "12px" }}
            >
              Or, sign up with
            </Typography>
            <Box style={{ display: "flex", gap: "1rem" }}>
              <Button
                type="submit"
                required
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                style={{ backgroundColor: "#3b5998" }}
              >
                <FacebookIcon style={{ marginRight: "1rem" }} />
                Facebook
              </Button>
              <Button
                type="submit"
                required
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                style={{ backgroundColor: "#d34836" }}
              >
                Google
              </Button>
            </Box>
          </Box>
        </Card>
      </form>
      <Footer2 />
    </>
  );
};

export default SignupForm;
