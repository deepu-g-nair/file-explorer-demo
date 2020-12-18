import React from "react";
import Contentfolder from "../images/contentfolder.png";

function Fdrive() {
  return (
    <div className="folder-section-divider">
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>All</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Seminar</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Project</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Codes</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>React</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Vs code</p>
      </div>
    </div>
  );
}

export default Fdrive;
