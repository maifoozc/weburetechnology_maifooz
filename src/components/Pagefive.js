import React from "react";
import marketingCase from "../assets/marketingCase.png";
import contentCase from "../assets/contentCase.png";
import growthCase from "../assets/growthCase.png";

function Pagefive() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Open Sans",
        marginTop:'10%'
      }}
    >
      <p style={{color:'rgba(255, 93, 34, 1)', fontWeight:'700'}}>Our Works</p>
      <h3 style={{ fontWeight:'700'}}>Our Case Studies</h3>

      <div style={{display:'flex', justifyContent:'center'}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin:'20px'
          }}
        >
          <img src={marketingCase} alt="" style={{backgroundColor:'rgba(170, 221, 255, 1)', height:'339px'}}/>
          <p style={{ fontWeight: "700", fontSize: "26px" }}>Email Marketing</p>
          <p
            style={{
              fontWeight: "700",
              fontSize: "18px",
              color: "rgba(79, 79, 79, 1)",
            }}
          >
            Fashion, Product
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin:'20px'
          }}
        >
          <img src={contentCase} alt="" style={{backgroundColor:'rgba(255, 186, 210, 1)', height:'339px'}}/>
          <p style={{ fontWeight: "700", fontSize: "26px" }}>Content marketing</p>
          <p
            style={{
              fontWeight: "700",
              fontSize: "18px",
              color: "rgba(79, 79, 79, 1)",
            }}
          >
            Fashion, Product
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin:'20px'
          }}
        >
          <img src={growthCase} alt="" style={{backgroundColor:'rgba(224, 255, 156, 1)', height:'339px'}}/>
          <p style={{ fontWeight: "700", fontSize: "26px" }}>Growth Marketing</p>
          <p
            style={{
              fontWeight: "700",
              fontSize: "18px",
              color: "rgba(79, 79, 79, 1)",
            }}
          >
            Fashion, Product
          </p>
        </div>


      </div>
    </div>
  );
}

export default Pagefive;
