import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Card } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

import Footer2 from "../../component/footer/Footer2";
import { stylesLI } from "./styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login - Email:", email, "Password:", password);
    e.target.reset();
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Typography variant="h5" style={stylesLI.headingTypography}>
        Welcome to Daraz! Please Login
      </Typography>

      <form onSubmit={handleSubmit} style={stylesLI.loginForm}>
        <Card style={stylesLI.loginCard}>
          <Box>
            <Typography variant="h5" style={stylesLI.emailTypography}>
              Phone Number or Email
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Please enter your Phone Number or Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={stylesLI.emailTextField}
            />
            <Typography variant="h5" style={stylesLI.passwordTypography}>
              Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Please enter your Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box>
            <Button
              type="submit"
              required
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              style={stylesLI.loginButton}
            >
              Log In
            </Button>
            <Typography variant="h5" style={stylesLI.loginWithTypograpgy}>
              Or,login with
            </Typography>
            <Button
              type="submit"
              required
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              style={stylesLI.facebookButton}
            >
              <FacebookIcon style={stylesLI.facebookIcon} />
              Facebook
            </Button>
            <Button
              type="submit"
              required
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              style={stylesLI.googleButton}
            >
              Google
            </Button>
          </Box>
        </Card>
      </form>

      <Footer2 />
    </>
  );
};

export default LoginForm;
