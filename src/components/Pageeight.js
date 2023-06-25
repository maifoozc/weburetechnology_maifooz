import React from "react";
import "./Pageeight.css";
import whiteLine from "../assets/whiteLine.png";
import {
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import CopyrightIcon from '@mui/icons-material/Copyright';
function Pageeight() {
  return (
    <div className="pageeight">
      <div style={{ height: "220px" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ padding: "20px", color: "#fff", width: "80%" }}>
          <thead>
            <tr>
              <th>Our Company</th>
              <th>Build Your Team</th>
              <th>Services </th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>About Webure</td>
              <td>How it works</td>
              <td>Seo service</td>
              <td>Blogs</td>
            </tr>
            <tr>
              <td>Pricing </td>
              <td>Why Offshore</td>
              <td>SME Service</td>
              <td>Prodcast</td>
            </tr>
            <tr>
              <td>Referral Program</td>
              <td>Pricing Estimator</td>
              <td>Email Marketing</td>
              <td>Case Studies</td>
            </tr>
            <tr>
              <td>#GiveBackToCommunity </td>
              <td>About Webure</td>
              <td>Frontend Development</td>
              <td>eBooks</td>
            </tr>
            <tr>
              <td>Employee Referral</td>
              <td>Why Offshore</td>
              <td>SME Service</td>
              <td>Prodcast</td>
            </tr>
            <tr>
              <td>Our Culture</td>
              <td>Remote Blogs</td>
              <td>Wordpress Development</td>
              <td>Infographics</td>
            </tr>
            <tr>
              <td>Corporate Social Responsibilty</td>
              <td>Take the Assignment</td>
              <td>Hubspot Development</td>
            </tr>
            <tr>
              <td>Careers</td>
              <td></td>
              <td>Marketo Automaton</td>
            </tr>
            <tr>
              <td>Contact us</td>
              <td></td>
              <td>Salesforce Automaton</td>
            </tr>
            <tr>
              <td>FAQs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={whiteLine} alt="" />
      </div>

      <div
        style={{
          color: "#fff",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2%",
        }}
      >
        <div style={{ display: "flex", alignContent: "center" }}>
          <p style={{ margin: "10px" }}>Sign up for Webure Emails</p>

          <TextField
            size="small"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              color: "#000",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SmartDisplayIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div style={{ display: "flex", alignContent: "center" }}>
          <p style={{ margin: "10px" }}>Choose Region:</p>

          <div
            className="dropdown"
            style={{ backgroundColor: "rgba(26, 31, 57, 1)" }}
          >
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "rgba(26, 31, 57, 1)", width: "100px" }}
            >
              India
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  India
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img src={FacebookIcon} alt="" />
          <IconButton>
            <FacebookIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <YouTubeIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <GoogleIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "#fff" }} />
          </IconButton>
        </div>
      </div>
      <div
        style={{
          color: "rgba(242, 201, 76, 1)",
          textAlign: "end",
          marginRight: "110px",
          fontWeight: "700",
        }}
      >
        <p>+91-0123456789</p>
        <p>sales@webure.in</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={whiteLine} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2%",
        }}
      >
        <Card
          sx={{
            width: "250px",
            color: "#fff",
            backgroundColor: "rgba(26, 31, 57, 1)",
          }}
        >
          <CardContent>
            <p style={{ fontWeight: "700" }}>India</p>
            <p style={{ color: "rgba(242, 201, 76, 1)" }}>Bangalore</p>
            <p>
              #310G, Whitefield Post Office Road, Whiefield, Bangalore,
              Karnataka 560103, India
            </p>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "250px",
            color: "#fff",
            backgroundColor: "rgba(26, 31, 57, 1)",
          }}
        >
          <CardContent>
            <p style={{ fontWeight: "700" }}>Cannada</p>
            <p style={{ color: "rgba(242, 201, 76, 1)" }}>Hamilton</p>
            <p>155-2 King Street West Unit #145 Hamilton, ON L8P 4S0 Canada</p>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "250px",
            color: "#fff",
            backgroundColor: "rgba(26, 31, 57, 1)",
          }}
        >
          <CardContent>
            <p style={{ fontWeight: "700" }}> New York</p>
            <p style={{ color: "rgba(242, 201, 76, 1)" }}>New York City</p>
            <p>
              One World Trade Center, 285 Fulton Street Suite 8500, New York
              City NY 10007, USA
            </p>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "250px",
            color: "#fff",
            backgroundColor: "rgba(26, 31, 57, 1)",
          }}
        >
          <CardContent>
            <p style={{ fontWeight: "700" }}> New Zealand</p>
            <p style={{ color: "rgba(242, 201, 76, 1)" }}>Auckland</p>
            <p>
              Level 26, HSBC Tower, 188 Quay Street, Auckland, AUK 1010 New
              Zealand
            </p>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={whiteLine} alt="" />
      </div>

      <div
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: "1%",
          paddingBottom: "1%",
        }}
      >

        <p>
            <span><CopyrightIcon/></span>
          2021 Webure Technologies. All right reserved.{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "yellow",
            }}
          >
            Privacy Policy
          </span>
          | <span style={{
              textDecoration: "underline",
              textDecorationColor: "yellow",
            }}>ISMS Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Pageeight;
