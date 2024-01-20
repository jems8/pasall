import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { stylesF1 } from "./styles";

const Footer1 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} style={stylesF1.oneGridItem}>
        <Typography
          variant="h2"
          style={stylesF1.headingTypography}
        >
          Experience Hassle-Free Online Shopping in Nepal with Daraz
        </Typography>

        <Typography style={stylesF1.everyTypography}>
          E-commerce has evolved over the past few years and since it’s easier
          and more convenient, it is evident that customers are actually
          switching to the trend of online shopping. Daraz, the Nepali shopping
          store, brings a whole new concept by showcasing a number of famous
          brands under one roof. Not only does it fulfill clothing necessities
          of both men and women but you can also shop for all kinds of
          appliances like air conditioners, heaters, refrigerators, LED TVs and
          a lot more. Simply select your favorite brand like Samsung, Apple, HP,
          Huawei, Dell, Canon, Nikon, etc and get yourself the best electronic
          items.
        </Typography>

        <Typography
          variant="h4"
          style={stylesF1.headingTypography}
        >
          Convenient Online Shopping in Nepal
        </Typography>

        <Typography style={stylesF1.everyTypography}>
          Daraz is the ultimate Nepali eCommerce website that offers a solution
          for all needs of the customers. It has a wide and assorted range of
          products including clothing, electronics, mobile phones, home and
          living, health and beauty and much more.
        </Typography>

        <Typography style={stylesF1.everyTypography}>
          Daraz strives to provide customers the best shopping experience in
          Nepal. The online store is updated daily and new products are added
          every day to cater to all your needs. Visit Daraz.com.np to experience
          shopping in Nepal as never before. Don't forget to Download Daraz App
          and get exclusive discounts.
        </Typography>

        <Typography style={stylesF1.everyTypography}>
          Daraz is a global online marketplace with ecommerce stores in
          Pakistan, Bangladesh, Nepal, Sri Lanka and Myanmar.
        </Typography>

        <Typography style={stylesF1.everyTypography}>
          General Information:
        </Typography>

        <Typography style={stylesF1.someHeadingTypography}>
          Daraz Kaymu Private Limited
        </Typography>

        <Typography style={stylesF1.someHeadingTypography}>
          Kathmandu Metropolitan City, Ward No. 11,Thapathali,Kathmandu, Nepal
        </Typography>

        <Typography style={stylesF1.otherHeadingTypography}>
          VAT No. 602403687
        </Typography>

        <Typography style={stylesF1.everyTypography}>
          Grievance handling Information:
        </Typography>

        <Typography style={stylesF1.someHeadingTypography}>
          Grievance Management
        </Typography>

        <Typography style={stylesF1.otherHeadingTypography}>
          015970597 (please ask to be redirected to our Grievance Management
          team)
        </Typography>

        <Typography
          variant="h4"
          style={stylesF1.headingTypography}
        >
          TRENDING Daraz
        </Typography>

        <Typography style={stylesF1.someHeadingTypography}>Daraz 11.11 Sale ,</Typography>

        <Typography style={stylesF1.someHeadingTypography}>
          Dashain Dhamaka , Mobile Week ,
        </Typography>

        <Typography style={stylesF1.someHeadingTypography}>
          Valentine's Day Sale , Cricket Streaming ,
        </Typography>

        <Typography style={stylesF1.someHeadingTypography}>
          Grocery Shopping in Nepal , Realme GT 2 Pro , Realme GT Neo 3
        </Typography>

        <Typography style={stylesF1.someHeadingTypography}>Realme GT Neo 3</Typography>
      </Grid>

      <Grid item xs={3} style={stylesF1.twoGridItem}>
        <Typography
          variant="h2"
          style={stylesF1.headingTypography}
        >
          Top Categories & Brands
        </Typography>

        <Link to="/new-mobile-phones" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            NEW MOBILE PHONES IN NEPAL
          </Typography>
        </Link>

        <Link to="/mobile-phones" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Samsung Mobile Phones, Xiaomi Mobiles, Nokia Mobiles, Oppo Mobiles,
            Apple iPhones, OnePlus, Sony Mobiles, Huawei Mobiles, Lenovo
            Mobiles, Colors Mobiles, Gionee Mobiles, HTC Mobiles, Umidigi
            Mobiles, Tablets, Samsung Tablet, Mobile Accessories
          </Typography>
        </Link>

        <Link to="/latest-laptops" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            LATEST LAPTOPS
          </Typography>
        </Link>

        <Link to="/types-laptops" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Apple Laptops, Samsung Laptops, Asus Laptops, Acer Laptops, HP
            Laptops, Dell Laptops
          </Typography>
        </Link>

        <Link to="/led-tv" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            LED TVS PRICES
          </Typography>
        </Link>

        <Link to="/types-led-tv" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Samsung LED TVs, Sony LED TVs, Videocon LED TVs
          </Typography>
        </Link>

        <Link to="/summer-appliances" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            SUMMER APPLIANCES
          </Typography>
        </Link>

        <Link to="/types-summer-appliances" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Air Conditioners, Refrigerators & Fridges, Samsung Refrigerators,
            Deep Freezers, Generators & Portable Power, Water Dispensers
          </Typography>
        </Link>

        <Link to="/camera" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            CAMERAS
          </Typography>
        </Link>

        <Link to="/camera-types" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Grievance Management 015970597 (please ask to be redirected to our
            Grievance Management team)
          </Typography>
        </Link>

        <Link to="/trdaing-products" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            TRENDING Daraz
          </Typography>
        </Link>

        <Link to="/trdaing-products-types" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Camera Tripods, Drones, IP & CCTV Cameras
          </Typography>
        </Link>

        <Link to="/latest-gadgets" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            LATEST GADGETS
          </Typography>
        </Link>

        <Link to="/types-latest-gadgets" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Earphones & Headsets, Power Banks, Smart Watches, Portable Speakers,
            VR Headsets, PS4 Pro - PS4 Slim, Dell XPS 15, HP Envy 13, HP Spectre
            x360, Samsung A51, Galaxy Tab A7, Galaxy Tab S7, Samsung A72,
            Samsung M51, Apple iPhone 11, iPhone 13, Apple Watch, Realme GT Neo
            2, Huawei Watch GT 2 Pro, Honor Band 6, Huawei Band 6, Samsung M52,
            Samsung A52s, Poco F3 GT 5G, iPhone 13 Pro, iPhone 13 Mini, Narzo
            50i, Narzo 50A, iPhone 13 Pro Max, OnePlus Nord N10, OnePlus 9 Pro,
            OnePlus Nord CE 5G, OnePlus 8T, Redmi Note 11, Samsung M33, Samsung
            A23, Samsung A73, Samsung A33, Samsung A53, Xiaomi Pad 5, NIU,
            iPhone 14, iPhone 14 Pro, iPhone 14 Plus, iPhone 14 Pro Max
          </Typography>
        </Link>
      </Grid>

      <Grid item xs={3} style={stylesF1.twoGridItem}>
        <Link to="/computer components" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            COMPUTER COMPONENTS
          </Typography>
        </Link>

        <Link to="/types-computer components" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Ram, Motherboards, Processors, Desktop Casings, CPU Cooling Fans,
            Gaming Graphic Cards
          </Typography>
        </Link>

        <Link to="/womens-fashion" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            WOMEN'S FASHION
          </Typography>
        </Link>

        <Link to="/types-women-fashion" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Clothes, Ladies Watches, Jewelry, Sarees, Ladies Kurti Designs,
            Women Undergarments, Shirts for Ladies & Girls, T-shirts for Ladies
            & Girls
          </Typography>
        </Link>

        <Link to="/mens-fashion" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            MEN'S FASHION
          </Typography>
        </Link>

        <Link to="/types-mens-fashion" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Men's jeans, Bags for Men, Men's Shoes, Men's T-Shirts, Men's
            Watches
          </Typography>
        </Link>

        <Link to="/grocery-store" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            ONLINE GROCERY STORE
          </Typography>
        </Link>

        <Link to="/item-grocery-store" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Rice, Chocolates, Tea, Coffee
          </Typography>
        </Link>

        <Link to="/book-store" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            ONLINE BOOKSTORE
          </Typography>
        </Link>

        <Link to="/items-books-store" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Stationary Store, Religious Items
          </Typography>
        </Link>

        <Link to="/automotive-store" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            ONLINE AUTOMOTIVE STORE
          </Typography>
        </Link>

        <Link to="/items-automotive-store" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Motorcycles - Bikes, Helmets
          </Typography>
        </Link>

        <Link to="/leading-store" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            LEADING ONLINE STORES
          </Typography>
        </Link>

        <Link to="/types-leading-store" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Goldstar Shoes, Dell, Samsung, Canon, Oppo, Sony, Nokia, Apple
          </Typography>
        </Link>

        <Link to="/trending-products" style={stylesF1.link}>
          <Typography variant="h4" style={stylesF1.someHeadingTypography}>
            TRENDING PRODUCTS
          </Typography>
        </Link>

        <Link to="/items-tranding-products" style={stylesF1.link}>
          <Typography style={stylesF1.everyTypography}>
            Vivo Y20, Oppo A12, Samsung Galaxy M31, iPhone 12, Redmi 9A, Poco
            F3, Samsung M12, Oppo F19 Pro, Samsung A32, Infinix Hot 10, Samsung
            A12, OnePlus Nord 2, Samsung M62, Samsung M32, TVS Ntorq, Poco X3
            Pro, Poco C3, Acer Nitro 5, Samsung F22, MI 11 Lite, Gold, Macbook
            Air, iPad Pro, Lenovo Legion 5, Acer Aspire 5, Ideapad 3, HP
            Pavilion 15, Khukri Rum, Micromax In Note 1, Realme 9i, Realme 9
            Pro+, Gas Geyser, Black Horse, Cactus Toy, Antigen Testkit, PS5,
            Electric Scooter, Z Flip 3, Tab S6, Tab A8, Stealth 13
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer1;
export { Footer1 };
