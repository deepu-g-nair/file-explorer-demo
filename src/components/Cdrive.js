import React from "react";
import Contentfolder from "../images/contentfolder.png";
import Emptyfolder from "../images/emptyfolder.png";
import Docicon from "../images/docicon.png";

function Cdrive() {
  return (
    <div className="folder-section-divider">
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>DRIVERS</p>
      </div>
      <div className="infolder">
        <img src={Emptyfolder} alt="" />
        <p style={{ fontSize: 12 }}>Intel</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>LDPlayer</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>MinGW</p>
      </div>
      <div className="infolder">
        <img src={Emptyfolder} alt="" />
        <p style={{ fontSize: 12 }}>PerfLogs</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Program Files</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Program Files (x86)</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Python 27</p>
      </div>
      <div className="infolder">
        <img src={Emptyfolder} alt="" />
        <p style={{ fontSize: 12 }}>src</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Temp</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Users</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Windows</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>xampp</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>XuanZhi</p>
      </div>
      <div className="infolder">
        <img src={Docicon} alt="" />
        <p style={{ fontSize: 12 }}>aow_drv</p>
      </div>
    </div>
  );
}

export default Cdrive;
