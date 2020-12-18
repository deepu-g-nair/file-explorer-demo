import React from "react";
import Record from "../images/recordicon.png";

function Music() {
  return (
    <div className="folder-section-divider">
      <div className="infolder">
        <img src={Record} alt="" />
        <p style={{ fontSize: 12 }}>Recording 1</p>
      </div>
      <div className="infolder">
        <img src={Record} alt="" />
        <p style={{ fontSize: 12 }}>Recording 2</p>
      </div>
      <div className="infolder">
        <img src={Record} alt="" />
        <p style={{ fontSize: 12 }}>Recording 3</p>
      </div>
    </div>
  );
}

export default Music;
