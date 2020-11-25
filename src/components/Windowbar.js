import React from "react";
import pclogo from "../images/logo.png";
import "../css/windowbar.css";

function Windowbar() {
  return (
    <div>
      <div className="window-bar">
        <img src={pclogo} alt="pclogo" className="pclogo" />
        <p>This PC</p>
        <div className="control">
          <div className="minimize">
            <i className="fa fa-window-minimize" aria-hidden="true"></i>
          </div>
          <div className="restore">
            <i className="fa fa-window-restore" aria-hidden="true"></i>
          </div>
          <div className="close">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Windowbar;
