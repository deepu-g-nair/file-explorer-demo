import React from "react";
import Emptyfolder from "../images/emptyfolder.png";
import Screenshot from "../images/screenshotfolder.png";
import Wallpaper from "../images/wallpaperfolder.png";

function Pictures() {
  return (
    <div className="folder-section-divider">
      <div className="infolder">
        <img src={Emptyfolder} alt="" />
        <p style={{ fontSize: 12 }}>Camera Roll</p>
      </div>
      <div className="infolder">
        <img src={Emptyfolder} alt="" />
        <p style={{ fontSize: 12 }}>Saved Pictures</p>
      </div>
      <div className="infolder">
        <img src={Emptyfolder} alt="" />
        <p style={{ fontSize: 12 }}>Favourites</p>
      </div>
      <div className="infolder">
        <img src={Screenshot} alt="" className="align-icon" />
        <p style={{ fontSize: 12 }}>Screenshots</p>
      </div>
      <div className="infolder">
        <img src={Wallpaper} alt="" className="align-icon" />
        <p style={{ fontSize: 12 }}>Wallpapers</p>
      </div>
    </div>
  );
}

export default Pictures;
