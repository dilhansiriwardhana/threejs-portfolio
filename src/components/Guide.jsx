import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PanToolIcon from "@mui/icons-material/PanTool";

const Guide = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-blue-500">
      <p>
        Use left <ArrowBackIcon /> and right <ArrowForwardIcon /> arrow keys to
        navigate the island
      </p>
      <p>
        {" "}
        Drag <PanToolIcon /> with your mouse to change the view
      </p>
    </div>
  );
};

export default Guide;
