import { Button, Typography } from "@mui/material";
import Union from "../assets/Union.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import be from "../assets/be.png";
import razorpay from "../assets/razorpay.png";
import slack from "../assets/slack.png";
import marketo from "../assets/marketo.png";
import stripe from "../assets/stripe.png";
import Line from "../assets/Line.png";
import Bannergroup from "../assets/Bannergroup.png";
import "./Pageone.css";
import React from "react";
function Pageone() {
  return (
    <div className="banner">
      <div>
        <Typography
          sx={{
            fontSize: "40px",
            position: "relative",
            top: "54px",
            fontFamily: "Open Sans",
            fontWeight: "700",
          }}
        >
          We ensure and transform
          <br />
          business growing
        </Typography>
        <Typography
          sx={{ fontSize: "14px", position: "relative", top: "73px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
          <br />
          Ipsum has been the industry's standard dummy text
        </Typography>
        <div>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: "rgba(255, 93, 34, 1)",
              color: "#fff",
              borderRadius: "50px",
              position: "relative",
              top: "102.92px",
              right: "10px",
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: "rgba(255, 93, 34, 1)",
              color: "#fff",
              borderRadius: "50px",
              position: "relative",
              top: "102.92px",
            }}
          >
            Learn More
          </Button>
        </div>
        <img
          src={Union}
          alt="cloud"
          style={{ position: "relative", bottom: "105px", right: "390px" }}
        />
        <img
          src={Union}
          alt="cloud"
          style={{
            position: "relative",
            bottom: "110px",
            right: "426px",
            transform: "rotate(-48deg)",
          }}
        />
        <img
          src={Union}
          alt="cloud"
          style={{
            position: "relative",
            left: "500px",
            transform: "rotate(8deg)",
          }}
        />
        <div>
          <img src={Bannergroup} alt="" />
        </div>

        {/* logo */}
<div style={{width:'40%', marginLeft:'420px'}}>
        <div
          className="social-media-logos"
          style={{ position: "relative", bottom: "150px", right: "450px" }}
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="social-media-logo"
            style={{ position: "relative", top: "140px" }}
          />
          <img src={facebook} alt="Facebook" className="social-media-logo" />
          <img
            src={instagram}
            alt="Instagram"
            className="social-media-logo"
            style={{ position: "relative", top: "90px" }}
          />
          <img src={twitter} alt="Twitter" className="social-media-logo" />
        </div>
        <div
          className="social-media-logos"
          style={{ position: "relative", bottom: "275px", left: "450px" }}
        >
          <img
            src={youtube}
            alt="YouTube"
            className="social-media-logo"
            style={{ position: "relative", top: "90px" }}
          />
          <img src={whatsapp} alt="WhatsApp" className="social-media-logo" />
          <img
            src={be}
            alt="BE"
            className="social-media-logo"
            style={{ position: "relative", top: "70px" }}
          />
          <img src={pinterest} alt="Pinterest" className="social-media-logo" />
        </div>
        </div>
        {/* logo ends*/}

        <div>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontSize: "36px",
              fontWeight: "700",
            }}
          >
            Trust by over 20 companies
          </Typography>
        </div>

        <div className="companyLogos">
          <img src={slack} alt="" className="companyLogo" />
          <img src={marketo} alt="" className="companyLogo" />
          <img src={stripe} alt="" className="companyLogo" />
          <img src={razorpay} alt="" className="companyLogo" />
          <img src={slack} alt="" className="companyLogo" />
          <img src={marketo} alt="" className="companyLogo" />
          <img src={stripe} alt="" className="companyLogo" />
          <img src={razorpay} alt="" className="companyLogo" />
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Pageone;
