import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="file">
        <p>File</p>
      </div>
      <div className="computer">
        <p>Computer</p>
      </div>
      <div className="view">
        <p>View</p>
      </div>
      <div className="arrow-up">
        <i class="fa fa-angle-up" aria-hidden="true"></i>
      </div>
      <div className="help">
        <i class="fa fa-question-circle" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Header;
