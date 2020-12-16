import React from "react";
import Pc from "./Pc";
import "../css/sidebar.css";
import onedrive from "../images/onedrive-icon.png";
import thispc from "../images/thispc-icon.png";
import objects from "../images/3dobjects-icon.png";
import desktop from "../images/desktop-icon.png";
import documents from "../images/documents-icon.png";
import downloads from "../images/downloads-icon.png";
import music from "../images/music-icon.png";
import pictures from "../images/pictures-icon.png";
import videos from "../images/videos-icon.png";
import cdrive from "../images/cdrive-icon.png";
import fdrive from "../images/fdrive-icon.png";
import network from "../images/network-icon.png";

function Sidebar() {
  return (
    <div className="sidebar-menu">
      <div className="sidebar">
        <div className="onedrive">
          <img src={onedrive} alt="" />
          <p className="icon-label">Onedrive</p>
        </div>
        <div className="thispc">
          <img src={thispc} alt="" />
          <p className="icon-label">This PC</p>
        </div>
        <div className="objects-3d">
          <img src={objects} alt="" />
          <p className="icon-label">3D Objects</p>
        </div>
        <div className="desktop">
          <img src={desktop} alt="" />
          <p className="icon-label">Desktop</p>
        </div>
        <div className="documents">
          <img src={documents} alt="" />
          <p className="icon-label">Documents</p>
        </div>
        <div className="downloads">
          <img src={downloads} alt="" />
          <p className="icon-label">Downloads</p>
        </div>
        <div className="music">
          <img src={music} alt="" />
          <p className="icon-label">Music</p>
        </div>
        <div className="pictures">
          <img src={pictures} alt="" />
          <p className="icon-label">Pictures</p>
        </div>
        <div className="videos">
          <img src={videos} alt="" />
          <p className="icon-label">Videos</p>
        </div>
        <div className="cdrive">
          <img src={cdrive} alt="" />
          <p className="icon-label">Local Disk (C:)</p>
        </div>
        <div className="fdrive">
          <img src={fdrive} alt="" />
          <p className="icon-label">New Volume (F:)</p>
        </div>
        <div className="network">
          <img src={network} alt="" />
          <p className="icon-label">Network</p>
        </div>
      </div>
      <div className="menu-body">
        <Pc />
      </div>
    </div>
  );
}

export default Sidebar;
