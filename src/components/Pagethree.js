import React from "react";
import "./Pagethree.css";
import Walkingman from "../assets/Walkingman.png";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function Pagethree() {
  return (
    <div className="pagethree">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, textAlign: "left", marginLeft: "94px" }}>
          <h5 style={{ fontWeight: "700", color: "rgba(255, 93, 34, 1)" }}>
            Web Solutions
          </h5>
          <h3 style={{ fontWeight: "700", fontSize: "46px" }}>
            Strategics experiences
            <br /> ad visual appeal
          </h3>
          <p style={{ width: "535px" }}>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
          <Button
            sx={{ color: "rgba(255, 93, 34, 1)", textTransform: "none" }}
            endIcon={<ArrowRightAltIcon sx={{ color: "#000" }} />}
          >
            Read more
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <img src={Walkingman} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Pagethree;
