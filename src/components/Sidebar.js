import React, { Component } from "react";
import Onedrive from "./Onedrive";
import Pc from "./Pc";
import Objects from "./Objects";
import Desktop from "./Desktop";
import Documents from "./Documents";
import Downloads from "./Downloads";
import Music from "./Music";
import Pictures from "./Pictures";
import Videos from "./Videos";
import Cdrive from "./Cdrive";
import Fdrive from "./Fdrive";
import Network from "./Network";
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

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: <Pc />,
      value: "thispc",
    };
  }
  onedrive = () => {
    this.setState({
      selected: <Onedrive />,
      value: "onedrive",
    });
  };
  thispc = () => {
    this.setState({
      selected: <Pc />,
      value: "thispc",
    });
  };
  objects = () => {
    this.setState({
      selected: <Objects />,
      value: "3Dobjects",
    });
  };
  desktop = () => {
    this.setState({
      selected: <Desktop />,
      value: "desktop",
    });
  };
  documents = () => {
    this.setState({
      selected: <Documents />,
      value: "documents",
    });
  };
  downloads = () => {
    this.setState({
      selected: <Downloads />,
      value: "downloads",
    });
  };
  music = () => {
    this.setState({
      selected: <Music />,
      value: "music",
    });
  };
  pictures = () => {
    this.setState({
      selected: <Pictures />,
      value: "pictures",
    });
  };
  videos = () => {
    this.setState({
      selected: <Videos />,
      value: "videos",
    });
  };
  cdrive = () => {
    this.setState({
      selected: <Cdrive />,
      value: "cdrive",
    });
  };
  fdrive = () => {
    this.setState({
      selected: <Fdrive />,
      value: "fdrive",
    });
  };
  network = () => {
    this.setState({
      selected: <Network />,
      value: "network",
    });
  };
  render() {
    return (
      <div className="sidebar-menu">
        <div className="sidebar">
          <div
            className="onedrive"
            onClick={this.onedrive}
            style={{
              backgroundColor:
                this.state.value === "onedrive" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={onedrive} alt="" />
            <p className="icon-label">Onedrive</p>
          </div>
          <div
            className="thispc"
            onClick={this.thispc}
            style={{
              backgroundColor:
                this.state.value === "thispc" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={thispc} alt="" />
            <p className="icon-label">This PC</p>
          </div>
          <div
            className="objects-3d"
            onClick={this.objects}
            style={{
              backgroundColor:
                this.state.value === "3Dobjects" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={objects} alt="" />
            <p className="icon-label">3D Objects</p>
          </div>
          <div
            className="desktop"
            onClick={this.desktop}
            style={{
              backgroundColor:
                this.state.value === "desktop" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={desktop} alt="" />
            <p className="icon-label">Desktop</p>
          </div>
          <div
            className="documents"
            onClick={this.documents}
            style={{
              backgroundColor:
                this.state.value === "documents" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={documents} alt="" />
            <p className="icon-label">Documents</p>
          </div>
          <div
            className="downloads"
            onClick={this.downloads}
            style={{
              backgroundColor:
                this.state.value === "downloads" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={downloads} alt="" />
            <p className="icon-label">Downloads</p>
          </div>
          <div
            className="music"
            onClick={this.music}
            style={{
              backgroundColor:
                this.state.value === "music" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={music} alt="" />
            <p className="icon-label">Music</p>
          </div>
          <div
            className="pictures"
            onClick={this.pictures}
            style={{
              backgroundColor:
                this.state.value === "pictures" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={pictures} alt="" />
            <p className="icon-label">Pictures</p>
          </div>
          <div
            className="videos"
            onClick={this.videos}
            style={{
              backgroundColor:
                this.state.value === "videos" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={videos} alt="" />
            <p className="icon-label">Videos</p>
          </div>
          <div
            className="cdrive"
            onClick={this.cdrive}
            style={{
              backgroundColor:
                this.state.value === "cdrive" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={cdrive} alt="" />
            <p className="icon-label">Local Disk (C:)</p>
          </div>
          <div
            className="fdrive"
            onClick={this.fdrive}
            style={{
              backgroundColor:
                this.state.value === "fdrive" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={fdrive} alt="" />
            <p className="icon-label">New Volume (F:)</p>
          </div>
          <div
            className="network"
            onClick={this.network}
            style={{
              backgroundColor:
                this.state.value === "network" ? "rgb(217, 217, 217)" : "",
            }}
          >
            <img src={network} alt="" />
            <p className="icon-label">Network</p>
          </div>
        </div>
        <div className="menu-body">{this.state.selected}</div>
      </div>
    );
  }
}

export default Sidebar;
