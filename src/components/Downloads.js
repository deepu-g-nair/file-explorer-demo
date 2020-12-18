import React from "react";
import Contentfolder from "../images/contentfolder.png";
import Ppt from "../images/powerpointicon.png";

function Downloads() {
  return (
    <div className="folder-section-divider">
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Docs</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Modes</p>
      </div>
      <div className="infolder">
        <img src={Ppt} alt="" />
        <p style={{ fontSize: 12 }}>Powerpoint</p>
      </div>
    </div>
  );
}

export default Downloads;
