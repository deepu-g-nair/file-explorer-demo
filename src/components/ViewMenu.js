import React from "react";
import "../css/viewmenu.css";
import navigationpane from "../images/navigationpane.png";
import previewpane from "../images/Previewpane.png";
import detailspane from "../images/Detailspane.png";
import sortby from "../images/sortby.png";
import groupby from "../images/groupby.png";
import addcolumns from "../images/addcolumn.png";
import sizeall from "../images/sizeall.png";
import hideitems from "../images/hideitems.png";
import options from "../images/options.png";

function ViewMenu() {
  return (
    <div className="view-menu">
      <div className="menu-grid">
        <div className="menu-panes">
          <div className="grid-body">
            <div className="pane-nav">
              <img src={navigationpane} alt="" />
              <p>
                Navigation <br /> pane
              </p>
            </div>
            <div className="pane-row">
              <div className="pane-preview">
                <img src={previewpane} alt="" />
                <p>Preview pane</p>
              </div>
              <div className="pane-details">
                <img src={detailspane} alt="" />
                <p>Details pane</p>
              </div>
            </div>
          </div>
          <div className="grid-caption">
            <p style={{ textAlign: "center", marginTop: "16px" }}>Panes</p>
          </div>
        </div>
        <div className="menu-view">
          <div className="grid-body">
            <div className="view-sort">
              <img src={sortby} alt="" />
              <p>
                Sort <br />
                by
              </p>
            </div>
            <div className="view-row">
              <div className="view-group">
                <img src={groupby} alt="" />
                <p>Group by</p>
              </div>
              <div className="view-column">
                <img src={addcolumns} alt="" />
                <p>Add columns</p>
              </div>
              <div className="view-size">
                <img src={sizeall} alt="" />
                <p>Size all coulmns to fit</p>
              </div>
            </div>
          </div>
          <div className="grid-caption">
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Current view
            </p>
          </div>
        </div>
        <div className="menu-show">
          <div className="grid-body">
            <div className="show-row">
              <div className="show-item">
                <input type="checkbox" />
                <p>Item check boxes</p>
              </div>
              <div className="show-file">
                <input type="checkbox" />
                <p>File name extensions</p>
              </div>
              <div className="show-hidden">
                <input type="checkbox" />
                <p>Hidden items</p>
              </div>
            </div>
            <div className="show-hide">
              <img src={hideitems} alt="" />
              <p className="unselect">
                Hide selected <br /> items
              </p>
            </div>
          </div>
          <div className="grid-caption">
            <p style={{ textAlign: "center", marginTop: "5px" }}>Show/hide</p>
          </div>
        </div>
        <div className="menu-options">
          <img src={options} alt="" />
          <p>
            Options <br />
            <i class="fa fa-sort-desc" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewMenu;
