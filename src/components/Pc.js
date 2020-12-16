import React from "react";
import "../css/pc.css";
import objects from "../images/folder-3dobjects.png";
import desktop from "../images/folder-desktop.png";
import documents from "../images/folder-documents.png";
import downloads from "../images/folder-downloads.png";
import music from "../images/folder-music.png";
import pictures from "../images/folder-pictures.png";
import videos from "../images/folder-videos.png";
import cdrive from "../images/drivers-c.png";
import ddrive from "../images/drivers-d.png";
import fdrive from "../images/drivers-f.png";
import cdrivesize from "../images/cdrive-size.png";
import fdrivesize from "../images/fdrive-size.png";

function Pc() {
  return (
    <div className="pc">
      <div className="section-folders">
        <div className="folders-head">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
          <p>Folders (7)</p>
          <div className="line-folder"></div>
        </div>
        <div className="folders-body">
          <div className="sec">
            <img src={objects} alt="" />
            <p>3D Objects</p>
          </div>
          <div className="sec">
            <img src={desktop} alt="" />
            <p>Desktop</p>
          </div>
          <div className="sec">
            <img src={documents} alt="" />
            <p>Documents</p>
          </div>
          <div className="sec">
            <img src={downloads} alt="" />
            <p>Downloads</p>
          </div>
          <div className="sec"></div>
          <div className="sec">
            <img src={music} alt="" />
            <p>Music</p>
          </div>
          <div className="sec">
            <img src={pictures} alt="" />
            <p>Pictures</p>
          </div>
          <div className="sec">
            <img src={videos} alt="" />
            <p>Videos</p>
          </div>
        </div>
      </div>
      <div className="section-drivers">
        <div className="folders-head">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
          <p>Devices and drives (3)</p>
          <div className="line-drives"></div>
        </div>
        <div className="folders-body">
          <div className="sec">
            <img src={cdrive} alt="" />
            <div className="drive-details">
              <p>Local Disk (C:)</p>
              <img src={cdrivesize} alt="" />
              <p className="grey">78.6 GB free of 174 GB</p>
            </div>
          </div>
          <div className="sec">
            <img src={ddrive} alt="" />
            <p>DVD RW Drive (D:)</p>
          </div>
          <div className="sec">
            <img src={fdrive} alt="" />
            <div className="drive-details">
              <p>New Volume (F:)</p>
              <img src={fdrivesize} alt="" />
              <p className="grey">39.5 GB free of 48.8 GB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pc;
