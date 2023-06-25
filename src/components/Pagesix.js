import React from "react";
import priceBackground from "../assets/priceBackground.png";
function Pagesix() {
  return (
    <div
      style={{
        fontFamily: "Open Sans",
        textAlign: "center",
        marginTop: "10%",
        paddingBottom: "40%",
        backgroundImage: `url(${priceBackground})`,
      }}
    >
      <p style={{ color: "rgba(255, 93, 34, 1)", fontWeight: "700" }}>
        Price Plan
      </p>
      <h3 style={{ fontWeight: "700",  }}>Our Pricing Plan</h3>

    </div>
  );
}

export default Pagesix;
