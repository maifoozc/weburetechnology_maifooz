import React from "react";
import circle from "../assets/circle.png";
import { Avatar } from "@mui/material";

function Pageseven() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", fontFamily: "Open Sans" }}
    >
      <div style={{ marginLeft: "128px" }}>
        <img src={circle} alt="" />
      </div>
      <div>
        <p style={{ color: "rgba(255, 93, 34, 1)", fontWeight: "700" }}>
          Our Clients
        </p>
        <p style={{ fontWeight: "700", fontSize:'36px'}}> 
          Love form happy clients from
          <br />
          the entire world
        </p>
        <p style={{width:'535px', color:'rgba(130, 130, 130, 1)'}}>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </p>
        <div style={{display:'flex', alignContent:'center'}}>
            <Avatar src='https://mui.com/static/images/avatar/2.jpg' sx={{ width: 78, height: 78 }}/>
            <div style={{marginLeft:'10px'}}>
                <p style={{fontWeight: "700", fontSize:'24px', padding:0}}>Mr. John Doe</p>
                <p>Design Manager</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pageseven;
