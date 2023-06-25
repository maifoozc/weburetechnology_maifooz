import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";

function Counter() {
  const [loop, setLoop] = useState(true);

  const handleEnd = () => {
    setLoop(false);
    setTimeout(() => setLoop(true), 1000); // Restart the loop after 1 second
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "89.63px",
      }}
    >
      <Card className="counterCards">
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "93.06px", fontWeight: "700" }}>
            <CountUp start={0} end={6} duration={3} redraw={true} onEnd={handleEnd} />
          </Typography>
          <Typography>Years in Field</Typography>
        </CardContent>
      </Card>
      <Card className="counterCards">
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "93.06px", fontWeight: "700" }}>
            <CountUp start={0} end={10} duration={3} redraw={true} onEnd={handleEnd} />+
          </Typography>
          <Typography>Experts</Typography>
        </CardContent>
      </Card>
      <Card className="counterCards">
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "93.06px", fontWeight: "700" }}>
            <CountUp start={0} end={50} duration={3} redraw={true} onEnd={handleEnd} />+
          </Typography>
          <Typography>Projects</Typography>{" "}
        </CardContent>
      </Card>
      <Card sx={{ width: "268px", height: "268px" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "93.06px", fontWeight: "700" }}>
            <CountUp start={0} end={20} duration={3} redraw={true} onEnd={handleEnd} />+
          </Typography>
          <Typography>Agency Partners</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Counter;
