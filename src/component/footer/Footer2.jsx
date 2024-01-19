import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { styles } from "./styles";

const Footer2 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} style={{ padding: "5rem" }}>
        <Typography
          variant="h2"
          style={{ fontSize: "18px", marginBottom: "1rem", color: "red" }}
        >
          Customer Care
        </Typography>

        <Typography style={{ fontSize: "14px" }}>Help Center</Typography>

        <Typography style={{ fontSize: "14px" }}>How to Buy</Typography>

        <Typography style={{ fontSize: "14px" }}>Returns & Refunds</Typography>

        <Typography style={{ fontSize: "14px", marginBottom: "1rem" }}>
          Contact Us
        </Typography>

        <Typography
          variant="h2"
          style={{ fontSize: "18px", color: "red", marginBottom: "1rem" }}
        >
          Earn with Daraz
        </Typography>

        <Typography style={{ fontSize: "14px" }}>Daraz University</Typography>

        <Typography style={{ fontSize: "12px" }}>Sell on Daraz</Typography>

        <Typography style={{ fontSize: "12px" }}>Code of Conduct</Typography>
      </Grid>

      <Grid item xs={3} style={{ padding: "5rem" }}>
        <Typography variant="h4" style={{ marginBottom: "1rem", color: "red" }}>
          Daraz
        </Typography>

        <Typography style={{ fontSize: "14px" }}>About Daraz</Typography>

        <Typography style={{ fontSize: "14px" }}>Careers</Typography>

        <Typography style={{ fontSize: "14px" }}>Daraz Blog</Typography>

        <Typography style={{ fontSize: "14px" }}>Terms & Conditions</Typography>

        <Typography style={{ fontSize: "14px" }}>Privacy Policy</Typography>

        <Typography style={{ fontSize: "14px" }}>Digital Payments</Typography>

        <Typography style={{ fontSize: "14px" }}>
          Daraz Customer University
        </Typography>

        <Typography style={{ fontSize: "14px" }}>
          Daraz Affiliate Program
        </Typography>

        <Typography style={{ fontSize: "14px" }}>Review & Win</Typography>

        <Typography style={{ fontSize: "14px" }}>Meet the winners</Typography>

        <Typography style={{ fontSize: "14px" }}>Realme GT Neo 3</Typography>
      </Grid>

      <Grid item container xs={3}>
        <Grid item xs={12} style={{ padding: "5rem" }}>
          <Typography
            variant="h2"
            style={{ fontSize: "18px", marginBottom: "1rem", color: "red" }}
          >
            Daraz International
          </Typography>

          <Typography style={{ fontSize: "14px" }}> Pakistan</Typography>

          <Typography style={{ fontSize: "14px" }}>Bangladesh</Typography>

          <Typography style={{ fontSize: "14px" }}>Sir Lanka</Typography>

          <Typography style={{ fontSize: "14px" }}>Myanmar</Typography>

          <Typography style={{ fontSize: "14px" }}>Nepal</Typography>

          <Typography
            style={{ fontSize: "18px", marginTop: "1rem", color: "red" }}
          >
            Payment Method
          </Typography>

          <Typography style={{ marginTop: "1rem" }}>
            <img src="/esewaimg.png" style={{ height: "20px" ,marginRight: '5px'}} />
            <img src="/visaimg.png" style={{ height: "20px" ,marginRight: '10px'}} />
            <img src="/imepayimg.png" style={{ height: "20px" ,marginRight: '10px'}} />
            <img src="/mastercardimg.png" style={{ height: "20px" }} />
          </Typography>

          <Typography
            style={{ fontSize: "18px", marginTop: "1rem", color: "red" }}
          >
            Verified By
          </Typography>

          <Typography style={{ marginTop: "1rem" }}>
            <img src="/pciimg.png" style={{ height: "40px",width:'100px' ,marginRight: '5px'}} />
          </Typography>

        </Grid>
      </Grid>

      <Grid item xs={3} style={{ padding: "5rem" }}>
        <Typography variant="h4" style={{ marginBottom: "1rem" ,color: 'red'}}>
          Exclusive Deals and Offers!
        </Typography>

        <Typography style={{ color: "red" }}>
        <img src="darazicon.png" style={{height: '30px',marginRight: '20px'}}/>
          Happy Shopping</Typography>

        <Typography style={{ fontSize: "12px", marginBottom: "1rem" ,marginLeft: '50px'}}>
         
          Download App
        </Typography>

        <Typography
          style={{ fontSize: "18px", marginBottom: "20px", color: "red" }}
        >
          Follow Us
        </Typography>

        <Typography style={{ fontSize: "18px", marginBottom: "1rem" }}>
          <InstagramIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer2;
export { Footer2 };
