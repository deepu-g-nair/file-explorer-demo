import React from "react";
import "../css/addressbar.css";
import thispc from "../images/thispc-icon.png";

function Addressbar() {
  return (
    <div className="address-bar">
      <div className="section-nav">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
        <i class="fa fa-angle-down" aria-hidden="true"></i>
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
      <div className="section-address">
        <div className="sec-left">
          <img src={thispc} alt="" />
          <i class="fa fa-angle-right seperator" aria-hidden="true"></i>
          <p>This PC</p>
        </div>
        <div className="sec-right">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
      <div className="section-search">
        <i class="fa fa-search" aria-hidden="true"></i>
        <p>Search This PC</p>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Addressbar;
