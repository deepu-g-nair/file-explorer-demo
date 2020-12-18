import React from "react";
import Emptyfolder from "../images/emptyfolder.png";

function Videos() {
  return (
    <div className="folder-section-divider">
      <div className="infolder">
        <img src={Emptyfolder} alt="" />
        <p style={{ fontSize: 12 }}>Captures</p>
      </div>
    </div>
  );
}

export default Videos;
