import { Button } from "@mui/material";
import React from "react";
import strategylogo from "../assets/strategylogo.png";
import perfectLogo from "../assets/perfectLogo.png";
import innovativeLogo from "../assets/innovativeLogo.png";
import "./Pagefour.css";

function Pagefour() {
  return (
    <div style={{ marginTop: "10%" }}>
      <div style={{ textAlign: "left", marginLeft: "94px" }}>
        <h5 style={{ fontWeight: "700", color: "rgba(255, 93, 34, 1)" }}>
          Why us
        </h5>
        <h3 style={{ fontWeight: "700", fontSize: "46px" }}>
          What makes us
          <br />
          stand out
        </h3>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginTop: "5%" }}>
            <div className="features" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={perfectLogo} alt="" />
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "26px",
                    margin: "10px",
                  }}
                >
                  Perfect strategy
                </p>
              </div>
              <p>
                Based on research and analysis, we plan to <br />
                introduce revolutionary solutions
              </p>
            </div>

            <div className="features" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={innovativeLogo} alt="" />
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "26px",
                    margin: "10px",
                  }}
                >
                  Innovative Ideas
                </p>
              </div>
              <p>
                We build electrified relations between <br />
                products and humans
              </p>
            </div>
            <div className="features" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={innovativeLogo} alt="" />
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "26px",
                    margin: "10px",
                  }}
                >
                  Effective Solutions
                </p>
              </div>
              <p>
                Prefected matched activities follow us to <br />
                achieve goles in short time
              </p>
            </div>
          </div>
          <div>
            <img src={strategylogo} alt="" style={{ height: "598px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagefour;
