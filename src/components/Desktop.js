import React from "react";
import "../css/desktop.css";
import Contentfolder from "../images/contentfolder.png";
import Pdficon from "../images/pdficon.png";
import Docicon from "../images/docicon.png";

function Desktop() {
  return (
    <div className="folder-section-divider">
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Adobe</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Temp</p>
      </div>
      <div className="infolder">
        <img src={Pdficon} alt="" />
        <p style={{ fontSize: 12 }}>Bill report</p>
      </div>
      <div className="infolder">
        <img src={Pdficon} alt="" />
        <p style={{ fontSize: 12 }}>Syllabus</p>
      </div>
      <div className="infolder">
        <img src={Pdficon} alt="" />
        <p style={{ fontSize: 12 }}>Time table</p>
      </div>
      <div className="infolder">
        <img src={Docicon} alt="" />
        <p style={{ fontSize: 12 }}>log</p>
      </div>
    </div>
  );
}

export default Desktop;
