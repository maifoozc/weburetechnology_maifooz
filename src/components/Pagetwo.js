import React from "react";
import "./Pagetwo.css";
import digitalanalysis from "../assets/digitalanalysis.png";
import digitalmarketing from "../assets/digitalmarketing.png";
import emailmarketing from "../assets/emailmarketing.png";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
function Pagetwo() {
  return (
    <div className="pagetwo">
      <p
        style={{ fontFamily: "Open Sans", fontWeight: "700", fontSize: "16px" }}
      >
        Here how it works
      </p>
      <h3
        style={{ fontFamily: "Open Sans", fontWeight: "700", fontSize: "36px" }}
      >
        Simple process to start
      </h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card className="pageCards">
          <img src={digitalanalysis} alt="" />
          <CardContent>
            <Typography>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s,
            </Typography>
          </CardContent>
        </Card>
        <Card className="pageCards">
          <img src={digitalmarketing} alt="" />
          <CardContent>
            <Typography>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s,
            </Typography>
          </CardContent>
        </Card>
        <Card className="pageCards">
          <img src={emailmarketing} alt="" />
          <CardContent>
            <Typography>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s,
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Button
        variant="outlined"
        sx={{
            marginTop:'20px',
          borderRadius: "10px",
          color: "#000",
          borderColor: "#000",
          backgroundColor: "rgba(235, 242, 243, 1)",
        }}
      >
        All Features
      </Button>
    </div>
  );
}

export default Pagetwo;
