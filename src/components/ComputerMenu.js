import React from "react";
import "../css/computermenu.css";
import properties from "../images/properties.png";
import open from "../images/open.png";
import rename from "../images/rename.png";
import accessmedia from "../images/accessmedia.png";
import mapnetworkdrive from "../images/mapnetworkdrive.png";
import networklocation from "../images/networklocation.png";
import settings from "../images/settings.png";
import uninstall from "../images/uninstall.png";
import systemproperties from "../images/systemproperties.png";
import manage from "../images/manage.png";

function ComputerMenu() {
  return (
    <div className="computer-menu">
      <div className="menu">
        <div className="sub-menu">
          <div className="menu-body">
            <div className="loc-properties">
              <img src={properties} alt="" />
              <p>Properties</p>
            </div>
            <div className="loc-open">
              <img src={open} alt="" />
              <p className="unselect">Open</p>
            </div>
            <div className="loc-rename">
              <img src={rename} alt="" />
              <p className="unselect">Rename</p>
            </div>
          </div>
          <div className="menu-caption">
            <p style={{ marginTop: "27px" }}>Location</p>
          </div>
        </div>

        <div className="sub-menu">
          <div className="menu-body">
            <div className="net-media">
              <img src={accessmedia} alt="" />
              <p>Access media</p>
            </div>
            <div className="net-drive">
              <img src={mapnetworkdrive} alt="" />
              <p>Map Network Drive</p>
            </div>
            <div className="net-location">
              <img src={networklocation} alt="" />
              <p>Add a network location</p>
            </div>
          </div>
          <div className="menu-caption">
            <p>Network</p>
          </div>
        </div>
        <div className="sub-menu">
          <div className="menu-body" style={{ paddingTop: "8px" }}>
            <div className="sys-settings">
              <img src={settings} alt="" />
              <p>Open Settings</p>
            </div>
            <div className="system-row-menu">
              <div className="row-menu-1">
                <img src={uninstall} alt="" />
                <p>Uninstall or change a program</p>
              </div>
              <div className="row-menu-2">
                <img src={systemproperties} alt="" />
                <p>System properties</p>
              </div>
              <div className="row-menu-3">
                <img src={manage} alt="" />
                <p>Manage</p>
              </div>
            </div>
          </div>
          <div className="menu-caption">
            <p style={{ marginTop: "19px" }}>System</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ComputerMenu;
