import React from "react";
import "./Header.css";
import logo from "../assets/Logo WO Branding-02 1.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          style={{ width: "95.872px", height: "92.448px" }}
        />
        <Typography sx={{ fontSize: "27.392px" }}>Webure</Typography>
      </div>
      <Typography sx={{ fontSize: "21.14px", fontFamily: "Open Sans" }}>
        Home
      </Typography>
      <Typography sx={{ fontSize: "21.14px", fontFamily: "Open Sans" }}>
        About Us
      </Typography>
      <Typography sx={{ fontSize: "21.14px", fontFamily: "Open Sans" }}>
        Services
      </Typography>
      <Typography sx={{ fontSize: "21.14px", fontFamily: "Open Sans" }}>
        Career
      </Typography>
      <Typography sx={{ fontSize: "21.14px", fontFamily: "Open Sans" }}>
        Clientele
      </Typography>
  
      <Button
        variant="contain"
        sx={{ backgroundColor: "#FF5D22", borderRadius: "50px" ,color:'#fff' ,textTransform:"none"}}
        endIcon={<ArrowRightAltIcon />}
      >
        Contact Us
      </Button>
    </div>
  );
}

export default Header;
