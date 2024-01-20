import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { stylesF2 } from "./styles";

const Footer2 = () => {
  const paymentOptions =[
    { name: "eSewa", imageSrc: "/esewaimg.png" },
    { name: "Visa", imageSrc: "/visaimg.png" },
    { name: "IME Pay", imageSrc: "/imepayimg.png" },
    { name: "Mastercard", imageSrc: "/mastercardimg.png" },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={3} style={stylesF2.footerGridItem}>
        <Typography variant="h2" style={stylesF2.everyHeadingTypology}>
          Customer Care
        </Typography>

        <Typography style={stylesF2.someTypology}>Help Center</Typography>

        <Typography style={stylesF2.someTypology}>How to Buy</Typography>

        <Typography style={stylesF2.someTypology}>Returns & Refunds</Typography>

        <Typography style={stylesF2.contactUsTypography}>Contact Us</Typography>

        <Typography variant="h2" style={stylesF2.everyHeadingTypology}>
          Earn with Daraz
        </Typography>

        <Typography style={stylesF2.someTypology}>Daraz University</Typography>

        <Typography style={stylesF2.someTypology}>Sell on Daraz</Typography>

        <Typography style={stylesF2.someTypology}>Code of Conduct</Typography>
      </Grid>

      <Grid item xs={3} style={stylesF2.footerGridItem}>
        <Typography variant="h4" style={stylesF2.everyHeadingTypology}>
          Daraz
        </Typography>

        <Typography style={stylesF2.someTypology}>About Daraz</Typography>

        <Typography style={stylesF2.someTypology}>Careers</Typography>

        <Typography style={stylesF2.someTypology}>Daraz Blog</Typography>

        <Typography style={stylesF2.someTypology}>
          Terms & Conditions
        </Typography>

        <Typography style={stylesF2.someTypology}>Privacy Policy</Typography>

        <Typography style={stylesF2.someTypology}>Digital Payments</Typography>

        <Typography style={stylesF2.someTypology}>
          Daraz Customer University
        </Typography>

        <Typography style={stylesF2.someTypology}>
          Daraz Affiliate Program
        </Typography>

        <Typography style={stylesF2.someTypology}>Review & Win</Typography>

        <Typography style={stylesF2.someTypology}>Meet the winners</Typography>

        <Typography style={stylesF2.someTypology}>Realme GT Neo 3</Typography>
      </Grid>

      <Grid item container xs={3}>
        <Grid item xs={12} style={stylesF2.footerGridItem}>
          <Typography variant="h2" style={stylesF2.everyHeadingTypology}>
            Daraz International
          </Typography>

          <Typography style={stylesF2.someTypology}> Pakistan</Typography>

          <Typography style={stylesF2.someTypology}>Bangladesh</Typography>

          <Typography style={stylesF2.someTypology}>Sir Lanka</Typography>

          <Typography style={stylesF2.someTypology}>Myanmar</Typography>

          <Typography style={stylesF2.contactUsTypography}>Nepal</Typography>

          <Typography style={stylesF2.everyHeadingTypology}>
            Payment Method
          </Typography>

          <>
            {paymentOptions.map((option, index) => (
              <img
                key={index}
                src={option.imageSrc}
                alt={option.name}
                style={stylesF2.image}
              />
            ))}
          </>

          <Typography style={stylesF2.verifiedTypography}>
            Verified By
          </Typography>

          <>
            <img src="/pciimg.png" style={stylesF2.pciImgTypography} />
          </>
        </Grid>
      </Grid>

      <Grid item xs={3} style={stylesF2.footerGridItem}>
        <Typography variant="h4" style={stylesF2.everyHeadingTypology}>
          Exclusive Deals and Offers!
        </Typography>

        <Typography style={stylesF2.happyShoppingTypography}>
          <img src="darazicon.png" style={stylesF2.darazImage} />
          Happy Shopping
        </Typography>

        <Typography style={stylesF2.downloadAppTypography}>
          Download App
        </Typography>

        <Typography style={stylesF2.everyHeadingTypology}>Follow Us</Typography>

        <Typography style={stylesF2.iconTypography}>
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
